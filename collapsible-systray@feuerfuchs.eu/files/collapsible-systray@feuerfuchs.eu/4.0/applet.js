"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleSystrayApplet = void 0;
const CinnamonSystray_1 = require("./CinnamonSystray");
const CSCollapseBtn_1 = require("./CSCollapseBtn");
const CSRemovableSwitchMenuItem_1 = require("./CSRemovableSwitchMenuItem");
const Util_1 = require("./Util");
const uuid = "collapsible-systray@feuerfuchs.eu";
const { BoxLayout, Side, Adjustment, IconType, Bin } = imports.gi.St;
const { statusIconDispatcher } = imports.ui.main;
const { SignalManager } = imports.misc.signalManager;
const { AppletSettings, BindingDirection } = imports.ui.settings;
const { removeTweens, addTween } = imports.ui.tweener;
const { PopupSubMenuMenuItem, PopupSeparatorMenuItem, PopupSwitchMenuItem } = imports.ui.popupMenu;
var Direction;
(function (Direction) {
    Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
    Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
})(Direction || (Direction = {}));
var Menu;
(function (Menu) {
    Menu[Menu["ACTIVE_APPLICATIONS"] = 0] = "ACTIVE_APPLICATIONS";
    Menu[Menu["INACTIVE_APPLICATIONS"] = 1] = "INACTIVE_APPLICATIONS";
})(Menu || (Menu = {}));
class CollapsibleSystrayApplet extends CinnamonSystray_1.CinnamonSystrayApplet {
    constructor(orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);
        this.collapseBtn = new CSCollapseBtn_1.CSCollapseBtn(this);
        this._signalManager = new SignalManager(null);
        this._hovering = false;
        this._hoverTimerID = null;
        this._registeredAppIcons = {};
        this._activeMenuItems = {};
        this._inactiveMenuItems = {};
        this.iconVisibilityList = {};
        this._animating = false;
        this._iconsAreHidden = false;
        this.cmitemActiveItems = new PopupSubMenuMenuItem(Util_1._("Active applications"));
        this.cmitemInactiveItems = new PopupSubMenuMenuItem(Util_1._("Inactive applications"));
        this._onEnter = () => {
            this._hovering = true;
            if (this._hoverTimerID) {
                clearTimeout(this._hoverTimerID);
                this._hoverTimerID = null;
            }
            if (!this.expandOnHover)
                return;
            if (!this._draggable.inhibit)
                return;
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
        };
        this._onLeave = () => {
            this._hovering = false;
            if (this._hoverTimerID) {
                clearTimeout(this._hoverTimerID);
                this._hoverTimerID = null;
            }
            if (!this.collapseOnLeave)
                return;
            if (!this._draggable.inhibit)
                return;
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
        };
        this.actor.add_style_class_name("ff-collapsible-systray");
        this.actor.remove_actor(this.manager_container);
        this.icon_size = this.getPanelIconSize(IconType.FULLCOLOR);
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
                case CSCollapseBtn_1.State.EXPANDED:
                    this._hideAppIcons(true);
                    break;
                case CSCollapseBtn_1.State.COLLAPSED:
                    this._showAppIcons(true);
                    break;
                case CSCollapseBtn_1.State.UNAVAILABLE:
                    this._applet_context_menu.toggle();
                    break;
            }
        });
        this._direction = (orientation == Side.TOP || orientation == Side.BOTTOM) ? Direction.HORIZONTAL : Direction.VERTICAL;
        this.mainLayout = new BoxLayout({ vertical: this._direction == Direction.VERTICAL });
        this.hiddenIconsContainer = new IconContainer(this._direction);
        this.shownIconsContainer = new IconContainer(this._direction);
        this.mainLayout.add_actor(this.collapseBtn.actor);
        this.mainLayout.add_actor(this.shownIconsContainer.actor);
        this.actor.add_actor(this.mainLayout);
        this._populateMenus();
        this._settings = new AppletSettings(this, uuid, instance_id);
        this._settings.bindProperty(BindingDirection.BIDIRECTIONAL, "icon-visibility-list", "savedIconVisibilityList", this._loadAppIconVisibilityList);
        this._settings.bindProperty(BindingDirection.IN, "init-delay", "initDelay");
        this._settings.bindProperty(BindingDirection.IN, "animation-support", "animationSupport", this._onAnimationSupportUpdated);
        this._settings.bindProperty(BindingDirection.IN, "animation-duration", "animationDuration");
        this._settings.bindProperty(BindingDirection.IN, "horizontal-expand-icon-name", "horizontalExpandIconName", this._onExpandCollapseIconNameUpdated);
        this._settings.bindProperty(BindingDirection.IN, "horizontal-collapse-icon-name", "horizontalCollapseIconName", this._onExpandCollapseIconNameUpdated);
        this._settings.bindProperty(BindingDirection.IN, "vertical-expand-icon-name", "verticalExpandIconName", this._onExpandCollapseIconNameUpdated);
        this._settings.bindProperty(BindingDirection.IN, "vertical-collapse-icon-name", "verticalCollapseIconName", this._onExpandCollapseIconNameUpdated);
        this._settings.bindProperty(BindingDirection.IN, "tray-icon-padding", "trayIconPadding", this._onTrayIconPaddingUpdated);
        this._settings.bindProperty(BindingDirection.IN, "expand-on-hover", "expandOnHover");
        this._settings.bindProperty(BindingDirection.IN, "expand-on-hover-delay", "expandOnHoverDelay");
        this._settings.bindProperty(BindingDirection.IN, "collapse-on-leave", "collapseOnLeave");
        this._settings.bindProperty(BindingDirection.IN, "collapse-on-leave-delay", "collapseOnLeaveDelay");
        this._settings.bindProperty(BindingDirection.IN, "no-hover-for-tray-icons", "noHoverForTrayIcons");
        this._settings.bindProperty(BindingDirection.IN, "sort-icons", "sortIcons");
        this._refreshHiddenIconsContainerState();
        this._loadAppIconVisibilityList();
        this.collapseBtn.setVertical(this._direction == Direction.VERTICAL);
        this.collapseBtn.refreshReactive();
        global.log("[" + uuid + "] Initialized");
    }
    get collapseIcon() {
        if (this._direction == Direction.HORIZONTAL) {
            return this.horizontalCollapseIconName;
        }
        else {
            return this.verticalCollapseIconName;
        }
    }
    get expandIcon() {
        if (this._direction == Direction.HORIZONTAL) {
            return this.horizontalExpandIconName;
        }
        else {
            return this.verticalExpandIconName;
        }
    }
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
            this.collapseBtn.setState(this._iconsAreHidden ? CSCollapseBtn_1.State.COLLAPSED : CSCollapseBtn_1.State.EXPANDED);
        }
        else {
            this.collapseBtn.setState(CSCollapseBtn_1.State.UNAVAILABLE);
        }
    }
    _refreshHiddenIconsContainerState() {
        this.mainLayout.remove_actor(this.hiddenIconsContainer.actor);
        if (this.animationSupport || !this._iconsAreHidden) {
            this.mainLayout.add_actor(this.hiddenIconsContainer.actor);
            this.mainLayout.set_child_above_sibling(this.shownIconsContainer.actor, this.hiddenIconsContainer.actor);
        }
    }
    _populateMenus() {
        let i = -1;
        this._applet_context_menu.addMenuItem(this.cmitemActiveItems, ++i);
        this._applet_context_menu.addMenuItem(this.cmitemInactiveItems, ++i);
        this._applet_context_menu.addMenuItem(new PopupSeparatorMenuItem(), ++i);
    }
    _registerAppIcon(id, actor) {
        if (!this._registeredAppIcons.hasOwnProperty(id)) {
            this._registeredAppIcons[id] = [];
        }
        const instanceArray = this._registeredAppIcons[id];
        if (instanceArray.indexOf(actor) != -1)
            return;
        global.log("[" + uuid + "] Register instance of " + id);
        instanceArray.push(actor);
        if (!this.iconVisibilityList.hasOwnProperty(id)) {
            this.iconVisibilityList[id] = true;
            this._saveAppIconVisibilityList();
        }
        const container = this.iconVisibilityList[id] ? this.shownIconsContainer : this.hiddenIconsContainer;
        let index = 0;
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
    _unregisterAppIcon(id, actor) {
        global.log("[" + uuid + "] Unregister instance of " + id);
        const instanceArray = this._registeredAppIcons[id];
        const iconIndex = instanceArray.indexOf(actor);
        if (iconIndex != -1) {
            instanceArray.splice(iconIndex, 1);
        }
        actor.get_parent().remove_actor(actor);
        if (instanceArray.length == 0) {
            global.log("[" + uuid + "] No more instances left");
            delete this._registeredAppIcons[id];
            this._addApplicationMenuItem(id, Menu.INACTIVE_APPLICATIONS);
            this._refreshCollapseBtnState();
        }
    }
    _addApplicationMenuItem(id, menu) {
        const curMenuItems = menu == Menu.ACTIVE_APPLICATIONS ? this._activeMenuItems : this._inactiveMenuItems;
        const curMenu = menu == Menu.ACTIVE_APPLICATIONS ? this.cmitemActiveItems.menu : this.cmitemInactiveItems.menu;
        const otherMenuItems = menu == Menu.ACTIVE_APPLICATIONS ? this._inactiveMenuItems : this._activeMenuItems;
        let menuItem = null;
        if (otherMenuItems.hasOwnProperty(id)) {
            otherMenuItems[id].actor.destroy();
            delete otherMenuItems[id];
        }
        if (curMenuItems.hasOwnProperty(id)) {
            return;
        }
        global.log("[" + uuid + "] Insert menu item for " + id + " in " + (menu == Menu.ACTIVE_APPLICATIONS ? "active" : "inactive") + " applications");
        switch (menu) {
            case Menu.ACTIVE_APPLICATIONS:
                menuItem = new PopupExtendedSwitchMenuItem(id, this.iconVisibilityList[id]);
                menuItem.appID = id;
                menuItem.connect('toggled', (o, state) => {
                    this._updateAppIconVisibility(id, state);
                });
                break;
            default:
            case Menu.INACTIVE_APPLICATIONS:
                menuItem = new CSRemovableSwitchMenuItem_1.CSRemovableSwitchMenuItem(id, this.iconVisibilityList[id]);
                menuItem.appID = id;
                menuItem.connect('toggled', (o, state) => {
                    this._updateAppIconVisibility(id, state);
                });
                menuItem.connect('remove', (o, state) => {
                    delete this.iconVisibilityList[id];
                    this._saveAppIconVisibilityList();
                    delete this._inactiveMenuItems[id];
                });
                break;
        }
        let index = 0;
        const items = curMenu["_getMenuItems"]();
        for (let len = items.length; index < len; ++index) {
            if (items[index].appID.localeCompare(id) >= 1) {
                break;
            }
        }
        curMenu.addMenuItem(menuItem, index);
        curMenuItems[id] = menuItem;
    }
    _hideAppIcons(animate) {
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
                let icons = this.hiddenIconsContainer.actor.get_children();
                for (let i = icons.length - 1; i >= 0; --i) {
                    icons[i].csDisable();
                }
                this._animating = false;
                this._refreshCollapseBtnState();
            };
            if (animate) {
                this._animating = true;
                this.hiddenIconsContainer.tweenParams = {
                    time: this.animationDuration / 1000,
                    transition: 'easeInOutQuart',
                    rounded: true,
                    onComplete: onFinished
                };
                if (this._direction == Direction.HORIZONTAL) {
                    this.hiddenIconsContainer.tweenParams.width = 0;
                }
                else {
                    this.hiddenIconsContainer.tweenParams.height = 0;
                }
                addTween(this.hiddenIconsContainer.actor, this.hiddenIconsContainer.tweenParams);
            }
            else {
                if (this._direction == Direction.HORIZONTAL) {
                    this.hiddenIconsContainer.actor.set_width(0);
                }
                else {
                    this.hiddenIconsContainer.actor.set_height(0);
                }
                onFinished();
            }
        }
        else {
            if (this._direction == Direction.HORIZONTAL) {
                this.hiddenIconsContainer.actor.set_width(0);
            }
            else {
                this.hiddenIconsContainer.actor.set_height(0);
            }
            this._refreshHiddenIconsContainerState();
            this._refreshCollapseBtnState();
        }
    }
    _showAppIcons(animate) {
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
                this.hiddenIconsContainer.actor.get_children().forEach(function (icon, index) {
                    icon.csEnableAfter();
                });
                if (this._direction == Direction.HORIZONTAL) {
                    this.hiddenIconsContainer.actor.set_width(-1);
                }
                else {
                    this.hiddenIconsContainer.actor.set_height(-1);
                }
                this._animating = false;
                this._refreshCollapseBtnState();
            };
            this.hiddenIconsContainer.actor.get_children().forEach(function (icon, index) {
                icon.csEnable();
            });
            if (animate) {
                this._animating = true;
                this.hiddenIconsContainer.tweenParams = {
                    time: this.animationDuration / 1000,
                    transition: 'easeInOutQuart',
                    rounded: true,
                    onComplete: onFinished
                };
                if (this._direction == Direction.HORIZONTAL) {
                    let [minWidth, natWidth] = this.hiddenIconsContainer.actor.get_preferred_width(-1);
                    let prevWidth = natWidth;
                    this.hiddenIconsContainer.actor.set_width(-1);
                    [minWidth, natWidth] = this.hiddenIconsContainer.actor.get_preferred_width(-1);
                    this.hiddenIconsContainer.tweenParams.width = natWidth;
                    this.hiddenIconsContainer.actor.set_width(prevWidth);
                }
                else {
                    let [minHeight, natHeight] = this.hiddenIconsContainer.actor.get_preferred_height(-1);
                    let prevHeight = natHeight;
                    this.hiddenIconsContainer.actor.set_height(-1);
                    [minHeight, natHeight] = this.hiddenIconsContainer.actor.get_preferred_height(-1);
                    this.hiddenIconsContainer.tweenParams.height = natHeight;
                    this.hiddenIconsContainer.actor.set_height(prevHeight);
                }
                addTween(this.hiddenIconsContainer.actor, this.hiddenIconsContainer.tweenParams);
            }
            else {
                onFinished();
            }
        }
        else {
            if (this._direction == Direction.HORIZONTAL) {
                this.hiddenIconsContainer.actor.set_width(-1);
            }
            else {
                this.hiddenIconsContainer.actor.set_height(-1);
            }
            this._refreshHiddenIconsContainerState();
            this._refreshCollapseBtnState();
            if (animate) {
                statusIconDispatcher.redisplay();
            }
        }
    }
    _updateAppIconVisibility(id, state) {
        global.log("[" + uuid + "] State of " + id + " was set to " + (state ? "shown" : "hidden"));
        this.iconVisibilityList[id] = state;
        if (this._registeredAppIcons.hasOwnProperty(id)) {
            const instances = this._registeredAppIcons[id];
            const container = state ? this.shownIconsContainer : this.hiddenIconsContainer;
            let index = 0;
            if (this.sortIcons) {
                const icons = container.actor.get_children();
                for (let len = icons.length; index < len; ++index) {
                    if (icons[index].appID.localeCompare(id) >= 1) {
                        break;
                    }
                }
            }
            instances.forEach((actor, index) => {
                actor.get_parent().remove_child(actor);
                container.actor.add_child(actor);
                container.actor.set_child_at_index(actor, index);
                if (this._iconsAreHidden) {
                    if (state) {
                        actor.csEnable();
                        actor.csEnableAfter();
                    }
                    else {
                        actor.csDisable();
                    }
                }
            });
        }
        this._saveAppIconVisibilityList();
        this._refreshCollapseBtnState();
    }
    _updateTrayIconPadding() {
        this.shownIconsContainer.actor.get_children()
            .concat(this.hiddenIconsContainer.actor.get_children())
            .filter(function (iconWrapper) { return iconWrapper.isIndicator != true; })
            .forEach((iconWrapper, index) => {
            if (this._direction == Direction.HORIZONTAL) {
                iconWrapper.set_style('padding-left: ' + this.trayIconPadding + 'px; padding-right: ' + this.trayIconPadding + 'px;');
            }
            else {
                iconWrapper.set_style('padding-top: ' + this.trayIconPadding + 'px; padding-bottom: ' + this.trayIconPadding + 'px;');
            }
        });
    }
    _loadAppIconVisibilityList() {
        try {
            this.iconVisibilityList = JSON.parse(this.savedIconVisibilityList);
            this._refreshCollapseBtnState();
            for (let id in this.iconVisibilityList) {
                if (this.iconVisibilityList.hasOwnProperty(id) && !this._registeredAppIcons.hasOwnProperty(id)) {
                    this._addApplicationMenuItem(id, Menu.INACTIVE_APPLICATIONS);
                }
            }
        }
        catch (e) {
            this.iconVisibilityList = {};
            global.log("[" + uuid + "] Chouldn't load icon visibility list: " + e);
        }
    }
    _saveAppIconVisibilityList() {
        this.savedIconVisibilityList = JSON.stringify(this.iconVisibilityList);
    }
    _onExpandCollapseIconNameUpdated(value) {
        this._refreshCollapseBtnState();
    }
    _onTrayIconPaddingUpdated(value) {
        this._updateTrayIconPadding();
    }
    _onAnimationSupportUpdated(value) {
        this._refreshHiddenIconsContainerState();
        if (value) {
            statusIconDispatcher.redisplay();
        }
    }
    _setAppletReactivity() {
        global.log("[" + uuid + "] Event: _setAppletReactivity");
        super._setAppletReactivity();
        if (this.collapseBtn)
            this.collapseBtn.refreshReactive();
        if (this._hoverTimerID) {
            clearTimeout(this._hoverTimerID);
            this._hoverTimerID = null;
        }
    }
    _onBeforeRedisplay() {
        global.log("[" + uuid + "] Event: _onBeforeRedisplay");
        super._onBeforeRedisplay();
        this.shownIconsContainer.actor.get_children()
            .concat(this.hiddenIconsContainer.actor.get_children())
            .filter(function (iconWrapper) { return iconWrapper.isIndicator != true; })
            .forEach((iconWrapper, index) => {
            iconWrapper.icon.destroy();
        });
    }
    _insertStatusItem(role, icon) {
        global.log(icon);
        if (icon.obsolete == true) {
            return;
        }
        if (role.trim() == "") {
            role = "[empty name]";
        }
        global.log("[" + uuid + "] Event: _insertStatusItem - " + role);
        super._insertStatusItem(role, icon);
        this.manager_container.remove_child(icon);
        const iconWrap = new BoxLayout({ style_class: 'applet-box', reactive: true, track_hover: !this.noHoverForTrayIcons });
        const iconWrapContent = new Bin({ child: icon });
        iconWrap.add_style_class_name('ff-collapsible-systray__status-icon');
        iconWrap.add_actor(iconWrapContent);
        if (this._direction == Direction.HORIZONTAL) {
            iconWrap.set_style('padding-left: ' + this.trayIconPadding + 'px; padding-right: ' + this.trayIconPadding + 'px;');
        }
        else {
            iconWrap.set_style('padding-top: ' + this.trayIconPadding + 'px; padding-bottom: ' + this.trayIconPadding + 'px;');
        }
        iconWrap.isIndicator = false;
        iconWrap.icon = icon;
        iconWrap.setVertical = function (vertical) {
            iconWrap.set_vertical(vertical);
            if (vertical) {
                iconWrap.add_style_class_name('vertical');
            }
            else {
                iconWrap.remove_style_class_name('vertical');
            }
        };
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
            iconWrap.csEnableAfter = () => { };
        }
        else if (["pidgin"].indexOf(role) != -1) {
            iconWrap.csDisable = () => {
                if (this.animationSupport) {
                    icon.window.hide();
                }
            };
            iconWrap.csEnable = function () { };
            iconWrap.csEnableAfter = () => {
                if (this.animationSupport) {
                    icon.window.show();
                }
            };
        }
        else {
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
            iconWrap.csEnableAfter = () => { };
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
    on_panel_icon_size_changed(size) {
        global.log("[" + uuid + "] Event: on_panel_icon_size_changed");
        this.icon_size = size;
        statusIconDispatcher.redisplay();
    }
    on_orientation_changed(orientation) {
        global.log("[" + uuid + "] Event: on_orientation_changed");
        super.on_orientation_changed(orientation);
        this._direction = (orientation == Side.TOP || orientation == Side.BOTTOM) ? Direction.HORIZONTAL : Direction.VERTICAL;
        if (this._direction == Direction.VERTICAL) {
            this.mainLayout.set_vertical(true);
            this.hiddenIconsContainer.actor.set_vertical(true);
            this.shownIconsContainer.actor.set_vertical(true);
            this.collapseBtn.setVertical(true);
            this.hiddenIconsContainer.actor.get_children().forEach(function (icon, index) {
                icon.setVertical(true);
            });
        }
        else {
            this.mainLayout.set_vertical(false);
            this.hiddenIconsContainer.actor.set_vertical(false);
            this.shownIconsContainer.actor.set_vertical(false);
            this.collapseBtn.setVertical(false);
            this.hiddenIconsContainer.actor.get_children().forEach(function (icon, index) {
                icon.setVertical(false);
            });
        }
        this.hiddenIconsContainer.actor.hadjustment.set_value(0);
        this.hiddenIconsContainer.actor.vadjustment.set_value(0);
    }
    on_applet_added_to_panel() {
        global.log("[" + uuid + "] Event: on_applet_added_to_panel");
        super.on_applet_added_to_panel();
        this._showAppIcons(false);
        this._initialCollapseTimerID = setTimeout(() => {
            this._initialCollapseTimerID = null;
            if (this._draggable.inhibit) {
                this._hideAppIcons(true);
            }
        }, this.initDelay * 1000);
        this._signalManager.connect(this.actor, 'enter-event', this._onEnter);
        this._signalManager.connect(this.actor, 'leave-event', this._onLeave);
    }
    on_applet_removed_from_panel() {
        global.log("[" + uuid + "] Event: on_applet_removed_from_panel");
        super.on_applet_removed_from_panel();
        this._settings.finalize();
    }
    _resizeStatusItem(role, icon) {
        if (CinnamonSystray_1.NO_RESIZE_ROLES.indexOf(role) > -1) {
            global.log("[" + uuid + "] Not resizing " + role + " as it's known to be buggy (" + icon.get_width() + "x" + icon.get_height() + "px)");
        }
        else {
            icon.set_size(this.icon_size * global.ui_scale, this.icon_size * global.ui_scale);
            global.log("[" + uuid + "] Resized " + role + " with normalized size (" + icon.get_width() + "x" + icon.get_height() + "px)");
        }
    }
}
exports.CollapsibleSystrayApplet = CollapsibleSystrayApplet;
class PopupExtendedSwitchMenuItem extends PopupSwitchMenuItem {
}
class IconContainer {
    constructor(direction) {
        this.actor = new BoxLayout({ vertical: direction == Direction.VERTICAL });
        this.actor.hadjustment = new Adjustment();
        this.actor.vadjustment = new Adjustment();
        this.actor.connect('queue-redraw', () => {
            if (direction == Direction.HORIZONTAL) {
                this.actor.hadjustment.set_value(this.actor.hadjustment.upper);
            }
            else {
                this.actor.vadjustment.set_value(this.actor.vadjustment.upper);
            }
        });
    }
}
function main(metadata, orientation, panel_height, instance_id) {
    return new CollapsibleSystrayApplet(orientation, panel_height, instance_id);
}
