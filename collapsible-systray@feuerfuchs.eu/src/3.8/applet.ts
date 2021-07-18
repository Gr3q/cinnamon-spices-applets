import { CinnamonSystrayApplet, NO_RESIZE_ROLES } from "./CinnamonSystray";
import { CSCollapseBtn, State } from "./CSCollapseBtn";
import { CSRemovableSwitchMenuItem } from "./CSRemovableSwitchMenuItem";
import { _ }  from "./Util";

const uuid = "collapsible-systray@feuerfuchs.eu";

const { 
	BoxLayout,
	Side,
	Adjustment,
	IconType,
	Bin
} = imports.gi.St;

const { 
	statusIconDispatcher
} = imports.ui.main;

const { 
	SignalManager 
} = imports.misc.signalManager;

const {
	AppletSettings,
	BindingDirection
} = imports.ui.settings;
const {
	removeTweens,
	addTween } = imports.ui.tweener;

const {
	PopupSubMenuMenuItem,
	PopupSeparatorMenuItem,
	PopupSwitchMenuItem
} = imports.ui.popupMenu;

// ------------------------------------------------------------------------------------------------------

enum Direction {
	HORIZONTAL = 0,
	VERTICAL =   1
}

enum Menu {
	ACTIVE_APPLICATIONS = 0,
	INACTIVE_APPLICATIONS = 1
}

export class CollapsibleSystrayApplet extends CinnamonSystrayApplet {

	collapseBtn = new CSCollapseBtn(this);
	_initialCollapseTimerID: number;

	private _direction: Direction;
	protected override _signalManager      = new SignalManager(null);
	private _hovering           = false;
	private _hoverTimerID?: number       = null;
	private _registeredAppIcons: RegisteredAppIcons = {};
	private _activeMenuItems: ActiveMenuItems  = {};
	private _inactiveMenuItems: InactiveMenuItems = {};
	iconVisibilityList: IconVisibility = {};
	private _animating          = false;
	private _iconsAreHidden     = false;

	/** Root Container */
	private mainLayout: imports.gi.St.BoxLayout;
	/** Container for hidden icons */
	private hiddenIconsContainer: IconContainer;
	/** Container for shown icons */
	private shownIconsContainer: IconContainer;

	cmitemActiveItems   = new PopupSubMenuMenuItem(_("Active applications"));
    cmitemInactiveItems = new PopupSubMenuMenuItem(_("Inactive applications"));

	private _settings: imports.ui.settings.AppletSettings;


	savedIconVisibilityList: string;
	readonly initDelay: number;
	readonly animationSupport: boolean;
	readonly animationDuration: number;
	readonly horizontalExpandIconName: string;
	readonly horizontalCollapseIconName: string;
	readonly verticalCollapseIconName: string;
	readonly verticalExpandIconName: string;
	readonly trayIconPadding: number;
	readonly expandOnHover: boolean;
	readonly expandOnHoverDelay: number;
	readonly collapseOnLeave: boolean;
	readonly collapseOnLeaveDelay: number;
	readonly noHoverForTrayIcons: boolean;
	readonly sortIcons: boolean;

    constructor(orientation: imports.gi.St.Side, panel_height: number, instance_id: number) {
        super(orientation, panel_height, instance_id);

        this.actor.add_style_class_name("ff-collapsible-systray");
        this.actor.remove_actor(this.manager_container);

        this.icon_size = this.getPanelIconSize(IconType.FULLCOLOR);

        //
        // Expand/collapse button

        this.collapseBtn.actor.connect('clicked', (o, event) => {
            if (this._hoverTimerID) {
                clearTimeout(this._hoverTimerID);
                this._hoverTimerID = null;
            }
            if (this._initialCollapseTimerID) {
                clearTimeout(this._initialCollapseTimerID);
                this._initialCollapseTimerID = null;
            }

            switch (this.collapseBtn.state) {
                case State.EXPANDED:
                    this._hideAppIcons(true);
                    break;

                case State.COLLAPSED:
                    this._showAppIcons(true);
                    break;

                case State.UNAVAILABLE:
                    this._applet_context_menu.toggle();
                    break;
            }
        });

        //
        // Variables

		this._direction = (orientation == Side.TOP || orientation == Side.BOTTOM) ? Direction.HORIZONTAL : Direction.VERTICAL;


        this.mainLayout = new BoxLayout({ vertical: this._direction == Direction.VERTICAL });
        this.hiddenIconsContainer = new IconContainer(this._direction);
        this.shownIconsContainer = new IconContainer(this._direction);

        //
        // Assemble layout
        this.mainLayout.add_actor(this.collapseBtn.actor);
        this.mainLayout.add_actor(this.shownIconsContainer.actor);
        this.actor.add_actor(this.mainLayout);

        this._populateMenus();

        //
        // Settings

        this._settings = new AppletSettings(this, uuid, instance_id);
        this._settings.bindProperty(BindingDirection.BIDIRECTIONAL, "icon-visibility-list",          "savedIconVisibilityList",    this._loadAppIconVisibilityList);
        this._settings.bindProperty(BindingDirection.IN,            "init-delay",                    "initDelay");
        this._settings.bindProperty(BindingDirection.IN,            "animation-support",             "animationSupport",           this._onAnimationSupportUpdated);
        this._settings.bindProperty(BindingDirection.IN,            "animation-duration",            "animationDuration");
        this._settings.bindProperty(BindingDirection.IN,            "horizontal-expand-icon-name",   "horizontalExpandIconName",   this._onExpandCollapseIconNameUpdated);
        this._settings.bindProperty(BindingDirection.IN,            "horizontal-collapse-icon-name", "horizontalCollapseIconName", this._onExpandCollapseIconNameUpdated);
        this._settings.bindProperty(BindingDirection.IN,            "vertical-expand-icon-name",     "verticalExpandIconName",     this._onExpandCollapseIconNameUpdated);
        this._settings.bindProperty(BindingDirection.IN,            "vertical-collapse-icon-name",   "verticalCollapseIconName",   this._onExpandCollapseIconNameUpdated);
        this._settings.bindProperty(BindingDirection.IN,            "tray-icon-padding",             "trayIconPadding",            this._onTrayIconPaddingUpdated);
        this._settings.bindProperty(BindingDirection.IN,            "expand-on-hover",               "expandOnHover");
        this._settings.bindProperty(BindingDirection.IN,            "expand-on-hover-delay",         "expandOnHoverDelay");
        this._settings.bindProperty(BindingDirection.IN,            "collapse-on-leave",             "collapseOnLeave");
        this._settings.bindProperty(BindingDirection.IN,            "collapse-on-leave-delay",       "collapseOnLeaveDelay");
        this._settings.bindProperty(BindingDirection.IN,            "no-hover-for-tray-icons",       "noHoverForTrayIcons");
        this._settings.bindProperty(BindingDirection.IN,            "sort-icons",                    "sortIcons");
        

        this._refreshHiddenIconsContainerState();
        this._loadAppIconVisibilityList();
        this.collapseBtn.setVertical(this._direction == Direction.VERTICAL);
        this.collapseBtn.refreshReactive();

        
        global.log("[" + uuid + "] Initialized");
    }

    /*
     * Get the correct collapse icon according to the user settings and the applet orientation
     */
    get collapseIcon(): string {
        if (this._direction == Direction.HORIZONTAL) {
            return this.horizontalCollapseIconName;
        } else {
            return this.verticalCollapseIconName;
        }
    }

    /*
     * Get the correct expand icon according to the user settings and the applet orientation
     */
    get expandIcon(): string {
        if (this._direction == Direction.HORIZONTAL) {
            return this.horizontalExpandIconName;
        } else {
            return this.verticalExpandIconName;
        }
    }

    /*
     * Set the collapse button's state
     */
    _refreshCollapseBtnState() {
        let collapsible = false;
        for (let id in this.iconVisibilityList) {
            if (this.iconVisibilityList.hasOwnProperty(id) && this._registeredAppIcons.hasOwnProperty(id)) {
                if (!this.iconVisibilityList[id]) {
                    collapsible = true;
                    break;
                }
            }
        }

        if (collapsible) {
            this.collapseBtn.setState(this._iconsAreHidden ? State.COLLAPSED : State.EXPANDED);
        } else {
            this.collapseBtn.setState(State.UNAVAILABLE);
        }
    }

    /*
     * Change applet state to accommodate the current animation support state.
     */
    _refreshHiddenIconsContainerState() {
        this.mainLayout.remove_actor(this.hiddenIconsContainer.actor);

        if (this.animationSupport || !this._iconsAreHidden) {
            this.mainLayout.add_actor(this.hiddenIconsContainer.actor);
            this.mainLayout.set_child_above_sibling(this.shownIconsContainer.actor, this.hiddenIconsContainer.actor);
        }
    }

    /*
     * Add all necessary menu items to the context menu
     */
    _populateMenus() {
        let i = -1;
        this._applet_context_menu.addMenuItem(this.cmitemActiveItems, ++i);
        this._applet_context_menu.addMenuItem(this.cmitemInactiveItems, ++i);
        this._applet_context_menu.addMenuItem(new PopupSeparatorMenuItem(), ++i);
    }

    /*
     * Add the specified icon to the item list and create a menu entry
     */
    _registerAppIcon(id: string, actor: IconBox) {
        if (!this._registeredAppIcons.hasOwnProperty(id)) {
            this._registeredAppIcons[id] = [];
        }

        const instanceArray = this._registeredAppIcons[id];

        if (instanceArray.indexOf(actor) != -1) return;

        global.log("[" + uuid + "] Register instance of " + id);

        instanceArray.push(actor);

        if (!this.iconVisibilityList.hasOwnProperty(id)) {
            this.iconVisibilityList[id] = true;
            this._saveAppIconVisibilityList();
        }

        const container = this.iconVisibilityList[id] ? this.shownIconsContainer : this.hiddenIconsContainer;
        let   index     = 0;
        if (this.sortIcons) {
            const icons = container.actor.get_children();
            for (let len = icons.length; index < len; ++index) {
                if (icons[index].appID.localeCompare(id) >= 1) {
                    break;
                }
            }
        }
        container.actor.insert_child_at_index(actor, index);

        actor.appID = id;

        if (this._iconsAreHidden && !this.iconVisibilityList[id]) {
            actor.csDisable();
        }

        this._addApplicationMenuItem(id, Menu.ACTIVE_APPLICATIONS);
        this._refreshCollapseBtnState();
    }

    /*
     * Remove the icon from the list and move the menu entry to the list of inactive applications
     */
    _unregisterAppIcon(id: string, actor: IconBox) {
        global.log("[" + uuid + "] Unregister instance of " + id);

        const instanceArray = this._registeredAppIcons[id];
        const iconIndex     = instanceArray.indexOf(actor);
        if (iconIndex != -1) {
            instanceArray.splice(iconIndex, 1);
        }

        //actor.destroy();
        actor.get_parent().remove_actor(actor);

        if (instanceArray.length == 0) {
            global.log("[" + uuid + "] No more instances left");

            delete this._registeredAppIcons[id];
            this._addApplicationMenuItem(id, Menu.INACTIVE_APPLICATIONS);
            this._refreshCollapseBtnState();
        }
    }

    /*
     * Create a menu entry for the specified icon in the "active applications" section
     */
    _addApplicationMenuItem(id: string, menu: Menu) {
        const curMenuItems   = menu == Menu.ACTIVE_APPLICATIONS ? this._activeMenuItems       : this._inactiveMenuItems;
        const curMenu        = menu == Menu.ACTIVE_APPLICATIONS ? this.cmitemActiveItems.menu : this.cmitemInactiveItems.menu;
        const otherMenuItems = menu == Menu.ACTIVE_APPLICATIONS ? this._inactiveMenuItems     : this._activeMenuItems;
        let   menuItem       = null;

        // If there's a menu item in the other menu, delete it
        if (otherMenuItems.hasOwnProperty(id)) {
            otherMenuItems[id].actor.destroy();
            delete otherMenuItems[id];
        }

        // If there's already a menu item in the current menu, do nothing
        if (curMenuItems.hasOwnProperty(id)) {
            return;
        }

        global.log("[" + uuid + "] Insert menu item for " + id + " in " + (menu == Menu.ACTIVE_APPLICATIONS ? "active" : "inactive") + " applications");

        switch (menu) {
            case Menu.ACTIVE_APPLICATIONS:
                menuItem = new PopupExtendedSwitchMenuItem(id, this.iconVisibilityList[id]);
                menuItem.appID = id;
                menuItem.connect('toggled', (o: any, state: boolean) => {
                    this._updateAppIconVisibility(id, state);
                });
                break;

            default:
            case Menu.INACTIVE_APPLICATIONS:
                menuItem = new CSRemovableSwitchMenuItem(id, this.iconVisibilityList[id]);
                menuItem.appID = id;
                menuItem.connect('toggled', (o: any, state: boolean) => {
                    this._updateAppIconVisibility(id, state);
                });
                menuItem.connect('remove', (o: any, state: boolean) => {
                    delete this.iconVisibilityList[id];
                    this._saveAppIconVisibilityList();

                    delete this._inactiveMenuItems[id];
                });
                break;
        }

        // Find insertion index so all menu items are alphabetically sorted
        let   index = 0;
        const items = curMenu["_getMenuItems"]() as (CSRemovableSwitchMenuItem | PopupExtendedSwitchMenuItem)[];
        for (let len = items.length; index < len; ++index) {
            if (items[index].appID.localeCompare(id) >= 1) {
                break;
            }
        }

        curMenu.addMenuItem(menuItem, index);
        curMenuItems[id] = menuItem;
    }

    /*
     * Hide all icons that are marked as hidden
     */
    _hideAppIcons(animate: boolean) {
        if (animate && this._animating) {
            return;
        }

        global.log("[" + uuid + "] _hideAppIcons");

        if (this.hiddenIconsContainer.hasOwnProperty('tweenParams')) {
            removeTweens(this.hiddenIconsContainer);
            this.hiddenIconsContainer.tweenParams.onComplete();
        }

        this._iconsAreHidden = true;

        if (this.animationSupport) {
            const onFinished = () => {
                delete this.hiddenIconsContainer.tweenParams;

                let icons  = this.hiddenIconsContainer.actor.get_children();
                for (let i = icons.length - 1; i >= 0; --i) {
                    icons[i].csDisable();
                }

                this._animating = false;
                this._refreshCollapseBtnState();
            };

            if (animate) {
                this._animating = true;
                this.hiddenIconsContainer.tweenParams = {
                    time:       this.animationDuration / 1000,
                    transition: 'easeInOutQuart',
                    rounded:    true,
                    onComplete: onFinished
                }

                if (this._direction == Direction.HORIZONTAL) {
                    this.hiddenIconsContainer.tweenParams.width = 0;
                } else {
                    this.hiddenIconsContainer.tweenParams.height = 0;
                }

                addTween(this.hiddenIconsContainer.actor, this.hiddenIconsContainer.tweenParams);
            } else {
                if (this._direction == Direction.HORIZONTAL) {
                    this.hiddenIconsContainer.actor.set_width(0);
                } else {
                    this.hiddenIconsContainer.actor.set_height(0);
                }
                onFinished();
            }
        } else {
            if (this._direction == Direction.HORIZONTAL) {
                this.hiddenIconsContainer.actor.set_width(0);
            } else {
                this.hiddenIconsContainer.actor.set_height(0);
            }

            this._refreshHiddenIconsContainerState();
            this._refreshCollapseBtnState();
        }
    }

    /*
     * Unhide all icons that are marked as hidden
     */
    _showAppIcons(animate: boolean) {
        if (animate && this._animating) {
            return;
        }

        global.log("[" + uuid + "] _showAppIcons");

        if (this.hiddenIconsContainer.hasOwnProperty('tweenParams')) {
            removeTweens(this.hiddenIconsContainer);
            this.hiddenIconsContainer.tweenParams.onComplete();
        }

        this._iconsAreHidden = false;

        if (this.animationSupport) {
            const onFinished = () => {
                delete this.hiddenIconsContainer.tweenParams;

                this.hiddenIconsContainer.actor.get_children().forEach(function(icon, index) {
                    icon.csEnableAfter();
                });

                if (this._direction == Direction.HORIZONTAL) {
                    this.hiddenIconsContainer.actor.set_width(-1);
                } else {
                    this.hiddenIconsContainer.actor.set_height(-1);
                }

                this._animating = false;
                this._refreshCollapseBtnState();
            };

            this.hiddenIconsContainer.actor.get_children().forEach(function(icon, index) {
                icon.csEnable();
            });

            if (animate) {
                this._animating = true;

                this.hiddenIconsContainer.tweenParams = {
                    time:       this.animationDuration / 1000,
                    transition: 'easeInOutQuart',
                    rounded:    true,
                    onComplete: onFinished
                };

                if (this._direction == Direction.HORIZONTAL) {
                    let [minWidth, natWidth] = this.hiddenIconsContainer.actor.get_preferred_width(-1);
                    let prevWidth = natWidth;

                    this.hiddenIconsContainer.actor.set_width(-1);
                    [minWidth, natWidth] = this.hiddenIconsContainer.actor.get_preferred_width(-1);
                    this.hiddenIconsContainer.tweenParams.width = natWidth;

                    this.hiddenIconsContainer.actor.set_width(prevWidth);
                } else {
                    let [minHeight, natHeight] = this.hiddenIconsContainer.actor.get_preferred_height(-1);
                    let prevHeight = natHeight;

                    this.hiddenIconsContainer.actor.set_height(-1);
                    [minHeight, natHeight] = this.hiddenIconsContainer.actor.get_preferred_height(-1);
                    this.hiddenIconsContainer.tweenParams.height = natHeight;

                    this.hiddenIconsContainer.actor.set_height(prevHeight);
                }

                addTween(this.hiddenIconsContainer.actor, this.hiddenIconsContainer.tweenParams);
            } else {
                onFinished();
            }
        } else {
            if (this._direction == Direction.HORIZONTAL) {
                this.hiddenIconsContainer.actor.set_width(-1);
            } else {
                this.hiddenIconsContainer.actor.set_height(-1);
            }

            this._refreshHiddenIconsContainerState();
            this._refreshCollapseBtnState();

            if (animate) {
                statusIconDispatcher.redisplay();
            }
        }
    }

    /*
     * Update the specified icon's visibility state and (un)hide it if necessary
     */
    _updateAppIconVisibility(id: string, state: boolean) {
        global.log("[" + uuid + "] State of " + id + " was set to " + (state ? "shown" : "hidden"));

        this.iconVisibilityList[id] = state;

        // Application is active, show/hide the icon if necessary
        if (this._registeredAppIcons.hasOwnProperty(id)) {
            const instances = this._registeredAppIcons[id];

            const container = state ? this.shownIconsContainer : this.hiddenIconsContainer;
            let   index     = 0;

            if (this.sortIcons) {
                const icons = container.actor.get_children();
                for (let len = icons.length; index < len; ++index) {
                    if (icons[index].appID.localeCompare(id) >= 1) {
                        break;
                    }
                }
            }

            instances.forEach((actor, index: number) => {
                actor.get_parent().remove_child(actor);
                container.actor.add_child(actor);
                container.actor.set_child_at_index(actor, index);

                if (this._iconsAreHidden) {
                    if (state) {
                        actor.csEnable();
                        actor.csEnableAfter();
                    } else {
                        actor.csDisable();
                    }
                }
            });
        }

        this._saveAppIconVisibilityList();
        this._refreshCollapseBtnState();
    }

    /*
     * Update the tray icons' padding
     */
    _updateTrayIconPadding() {
        this.shownIconsContainer.actor.get_children()
            .concat(this.hiddenIconsContainer.actor.get_children())
            .filter(function(iconWrapper) { return iconWrapper.isIndicator != true; })
            .forEach((iconWrapper, index) => {
                if (this._direction == Direction.HORIZONTAL) {
                    iconWrapper.set_style('padding-left: ' + this.trayIconPadding + 'px; padding-right: ' + this.trayIconPadding + 'px;');
                } else {
                    iconWrapper.set_style('padding-top: ' + this.trayIconPadding + 'px; padding-bottom: ' + this.trayIconPadding + 'px;');
                }
            });
    }

    /*
     * Load the list of hidden icons from the settings
     */
    _loadAppIconVisibilityList() {
        try {
            this.iconVisibilityList = JSON.parse(this.savedIconVisibilityList);

            this._refreshCollapseBtnState();

            for (let id in this.iconVisibilityList) {
                if (this.iconVisibilityList.hasOwnProperty(id) && !this._registeredAppIcons.hasOwnProperty(id)) {
                    this._addApplicationMenuItem(id, Menu.INACTIVE_APPLICATIONS);
                }
            }
        } catch(e) {
            this.iconVisibilityList = {};
            global.log("[" + uuid + "] Chouldn't load icon visibility list: " + e);
        }
    }

    /*
     * Save the list of hidden icons
     */
    _saveAppIconVisibilityList() {
        this.savedIconVisibilityList = JSON.stringify(this.iconVisibilityList);
    }

    /*
     * An applet setting with visual impact has been changed
     */
    _onExpandCollapseIconNameUpdated(value: number) {
        this._refreshCollapseBtnState();
    }

    /*
     * An applet setting with visual impact has been changed
     */
    _onTrayIconPaddingUpdated(value: number) {
        this._updateTrayIconPadding();
    }

    /*
     * An applet setting with visual impact has been changed
     */
    _onAnimationSupportUpdated(value: number) {
        this._refreshHiddenIconsContainerState();

        if (value) {
            statusIconDispatcher.redisplay();
        }
    }

    //
    // Events
    // ---------------------------------------------------------------------------------

    _onEnter = () => {
        this._hovering = true;

        if (this._hoverTimerID) {
            clearTimeout(this._hoverTimerID);
            this._hoverTimerID = null;
        }

        if (!this.expandOnHover)      return;
        if (!this._draggable.inhibit) return;

        if (this._initialCollapseTimerID) {
            clearTimeout(this._initialCollapseTimerID);
            this._initialCollapseTimerID = null;
        }

        this._hoverTimerID = setTimeout(() => {
            this._hoverTimerID = null;

            if (this._iconsAreHidden) {
                this._showAppIcons(true);
            }
        }, this.expandOnHoverDelay);
    }

    _onLeave = () => {
        this._hovering = false;

        if (this._hoverTimerID) {
            clearTimeout(this._hoverTimerID);
            this._hoverTimerID = null;
        }

        if (!this.collapseOnLeave)    return;
        if (!this._draggable.inhibit) return;

        if (this._initialCollapseTimerID) {
            clearTimeout(this._initialCollapseTimerID);
            this._initialCollapseTimerID = null;
        }

        this._hoverTimerID = setTimeout(() => {
            this._hoverTimerID = null;

            if (!this._iconsAreHidden) {
                this._hideAppIcons(true);
            }
        }, this.collapseOnLeaveDelay);
    }

    //
    // Overrides
    // ---------------------------------------------------------------------------------

    /*
     * Disable the collapse/expand button if the panel is in edit mode so the user can
     * perform drag and drop on that button
     */
    override _setAppletReactivity() {
        global.log("[" + uuid + "] Event: _setAppletReactivity");

        super._setAppletReactivity();

        if (this.collapseBtn)
            this.collapseBtn.refreshReactive();

        if (this._hoverTimerID) {
            clearTimeout(this._hoverTimerID);
            this._hoverTimerID = null;
        }
    }

    /*
     * The Cinnamon applet invalidates all tray icons if this event occurs, so I have to
     * unregister all tray icons when this happens
     */
    override _onBeforeRedisplay() {
        global.log("[" + uuid + "] Event: _onBeforeRedisplay");

        super._onBeforeRedisplay();

        this.shownIconsContainer.actor.get_children()
            .concat(this.hiddenIconsContainer.actor.get_children())
            .filter(function(iconWrapper) { return iconWrapper.isIndicator != true; })
            .forEach((iconWrapper, index) => {
                iconWrapper.icon.destroy();
            });
    }

    /*
     * Remove icon from tray, wrap it in an applet-box and re-add it. This way,
     * tray icons are displayed like applets and thus integrate nicely in the panel.
     */
    override _insertStatusItem(role: string, icon: imports.gi.Cinnamon.CinnamonTrayIcon) {
        if (icon.obsolete == true) {
            return;
        }
        if (role.trim() == "") {
            role = "[empty name]";
        }

        global.log("[" + uuid + "] Event: _insertStatusItem - " + role);

        super._insertStatusItem(role, icon);

        this.manager_container.remove_child(icon);

		// Cast to IconBox so we can safely extend BoxLayout
        const iconWrap        = <IconBox>new BoxLayout({ style_class: 'applet-box', reactive: true, track_hover: !this.noHoverForTrayIcons });
        const iconWrapContent = new Bin({ child: icon });

        iconWrap.add_style_class_name('ff-collapsible-systray__status-icon');
        iconWrap.add_actor(iconWrapContent);
        if (this._direction == Direction.HORIZONTAL) {
            iconWrap.set_style('padding-left: ' + this.trayIconPadding + 'px; padding-right: ' + this.trayIconPadding + 'px;');
        } else {
            iconWrap.set_style('padding-top: ' + this.trayIconPadding + 'px; padding-bottom: ' + this.trayIconPadding + 'px;');
        }
        iconWrap.isIndicator = false;
        iconWrap.icon        = icon;
        iconWrap.setVertical = function(vertical: boolean) {
            iconWrap.set_vertical(vertical);
            if (vertical) {
                iconWrap.add_style_class_name('vertical');
            } else {
                iconWrap.remove_style_class_name('vertical');
            }
        }
        iconWrap.setVertical(this._direction == Direction.VERTICAL);

        if (["livestreamer-twitch-gui", "chromium", "swt", "skypeforlinux"].indexOf(role) != -1) {
            iconWrap.csDisable = () => {
                if (this.animationSupport) {
                    iconWrapContent.set_child(null);
                }
            };
            iconWrap.csEnable = () => {
                if (this.animationSupport) {
                    iconWrapContent.set_child(icon);
                }
            };
            iconWrap.csEnableAfter = () => { }
        } else if (["pidgin"].indexOf(role) != -1) {
            iconWrap.csDisable = () => {
                if (this.animationSupport) {
                    icon.window.hide();
                }
            };
            iconWrap.csEnable = function() { }
            iconWrap.csEnableAfter = () => {
                if (this.animationSupport) {
                    icon.window.show();
                }
            };
        } else {
            iconWrap.csDisable = () => {
                if (this.animationSupport) {
                    icon.window.hide();
                }
            };
            iconWrap.csEnable = () => {
                if (this.animationSupport) {
                    icon.window.show();
                }
            };
            iconWrap.csEnableAfter = () => { }
        }

        iconWrap.connect('button-press-event', (actor, e) => { return true; });
        iconWrap.connect('button-release-event', (actor, e) => {
            icon.click(e);
        });

        icon.connect('destroy', () => {
            this._unregisterAppIcon(role, iconWrap);
        });

        this._registerAppIcon(role, iconWrap);
    }

    /*
     * Patching icon resizing
     */
    override on_panel_icon_size_changed(size: number) {
        global.log("[" + uuid + "] Event: on_panel_icon_size_changed");

        this.icon_size = size;
        statusIconDispatcher.redisplay();
    }

    /*
     * The applet's orientation changed; adapt accordingly
     */
    override on_orientation_changed(orientation: imports.gi.St.Side) {
        global.log("[" + uuid + "] Event: on_orientation_changed");

        super.on_orientation_changed(orientation);

        this._direction  = (orientation == Side.TOP || orientation == Side.BOTTOM) ? Direction.HORIZONTAL : Direction.VERTICAL;

        if (this._direction == Direction.VERTICAL) {
            this.mainLayout.set_vertical(true);
            this.hiddenIconsContainer.actor.set_vertical(true);
            this.shownIconsContainer.actor.set_vertical(true);
            this.collapseBtn.setVertical(true);

            this.hiddenIconsContainer.actor.get_children().forEach(function(icon, index) {
                icon.setVertical(true);
            });
        } else {
            this.mainLayout.set_vertical(false);
            this.hiddenIconsContainer.actor.set_vertical(false);
            this.shownIconsContainer.actor.set_vertical(false);
            this.collapseBtn.setVertical(false);

            this.hiddenIconsContainer.actor.get_children().forEach(function(icon, index) {
                icon.setVertical(false);
            });
        }

        this.hiddenIconsContainer.actor.hadjustment.set_value(0);
        this.hiddenIconsContainer.actor.vadjustment.set_value(0);
    }

    /*
     * The applet has been added to the panel
     */
    override on_applet_added_to_panel() {
        global.log("[" + uuid + "] Event: on_applet_added_to_panel");

        super.on_applet_added_to_panel();

        this._showAppIcons(false);

        //
        // Automatically collapse after X seconds

        this._initialCollapseTimerID = setTimeout(() => {
            this._initialCollapseTimerID = null;

            if (this._draggable.inhibit) {
                this._hideAppIcons(true);
            }
        }, this.initDelay * 1000);

        //
        // Hover events

        this._signalManager.connect(this.actor, 'enter-event', this._onEnter);
        this._signalManager.connect(this.actor, 'leave-event', this._onLeave);
    }

    /*
     * The applet has been removed from the panel; save settings
     */
    override on_applet_removed_from_panel() {
        global.log("[" + uuid + "] Event: on_applet_removed_from_panel");

        super.on_applet_removed_from_panel();

        this._settings.finalize();
    }

    /*
     * Patching icon resizing
     */
    override _resizeStatusItem(role: string, icon: any) {
        if (NO_RESIZE_ROLES.indexOf(role) > -1) {
            global.log("[" + uuid + "] Not resizing " + role + " as it's known to be buggy (" + icon.get_width() + "x" + icon.get_height() + "px)");
        } else {
            icon.set_size(this.icon_size * global.ui_scale, this.icon_size * global.ui_scale);
            global.log("[" + uuid + "] Resized " + role + " with normalized size (" + icon.get_width() + "x" + icon.get_height() + "px)");
            //Note: dropbox doesn't scale, even though we resize it...
        }
    }
}

//
// Mapped Types

type IconVisibility = {
	[key: string]: boolean;
}

type RegisteredAppIcons = {
	[key: string]: IconBox[];
}

type ActiveMenuItems = {
	[key: string]: PopupExtendedSwitchMenuItem;
}

type InactiveMenuItems = {
	[key: string]: CSRemovableSwitchMenuItem;
}

//
// Artificial extension of BoxLayouts
interface IconBox extends imports.gi.St.BoxLayout { 
	isIndicator?: boolean;
	csDisable?: () => void;
	csEnableAfter?: () => void;
	csEnable?: () => void;
	appID?: string;
	icon?: imports.gi.Cinnamon.CinnamonTrayIcon;
	setVertical?: (vertical: boolean) => void;
}

interface RestrictedBoxLayout extends imports.gi.St.BoxLayout {
	get_children(): IconBox[];
}

//
// Extended Classes
class PopupExtendedSwitchMenuItem extends PopupSwitchMenuItem {
	appID?: string;
}

class IconContainer {
	actor: RestrictedBoxLayout;
	direction: Direction
	tweenParams: TweenParams;

	constructor(direction: Direction) {
		this.actor = new BoxLayout({ vertical: direction == Direction.VERTICAL }) as RestrictedBoxLayout;

		// Add horizontal scrolling and scroll to the end on each redraw so that it looks like the
        // collapse button "eats" the icons on collapse
        this.actor.hadjustment = new Adjustment();
        this.actor.vadjustment = new Adjustment();
        this.actor.connect('queue-redraw', () => {
            if (direction == Direction.HORIZONTAL) {
                this.actor.hadjustment.set_value(this.actor.hadjustment.upper);
            } else {
                this.actor.vadjustment.set_value(this.actor.vadjustment.upper);
            }
        });
	}
}

interface TweenParams {
	time:       number,
	transition: string,
	rounded:    boolean,
	onComplete: () => void,
	height?: number;
	width?: number;
}

function main(metadata: any, orientation: imports.gi.St.Side, panel_height: number, instance_id: number) {
    return new CollapsibleSystrayApplet(orientation, panel_height, instance_id);
}
