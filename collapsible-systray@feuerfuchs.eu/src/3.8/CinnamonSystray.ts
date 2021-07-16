const Lang = imports.lang;
const { Side, IconType } = imports.gi.St;
const { BoxLayout, Orientation, Actor } = imports.gi.Clutter;

const { Applet, AllowedLayout, AppletPopupMenu } = imports.ui.applet;
const { PopupMenuFactory, FactoryClassTypes, PopupMenuAbstractItem, PopupMenuManager, PopupIndicatorMenuItem, PopupSeparatorMenuItem, PopupMenuSection, PopupSubMenuMenuItem } = imports.ui.popupMenu;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const { SignalManager } = imports.misc.signalManager;
const { findIndex } = imports.misc.util;

export const NO_RESIZE_ROLES = ['shutter', 'filezilla'];

interface ShellIndicator {
	id: number;
	instance: any;
}

// Override the factory and create an AppletPopupMenu instead of a PopupMenu
class IndicatorMenuFactory extends PopupMenuFactory {
    constructor() {
        super();
    }

    override _createShellItem(factoryItem: imports.ui.popupMenu.PopupMenuAbstractItem, launcher: any, orientation: imports.gi.St.Side) {
        // Decide whether it's a submenu or not
        let shellItem = null;
        let item_type = factoryItem.getFactoryType();
        if (item_type == FactoryClassTypes.RootMenuClass)
            shellItem = new AppletPopupMenu(launcher, orientation);
        if (item_type == FactoryClassTypes.SubMenuMenuItemClass)
            shellItem = new PopupSubMenuMenuItem("FIXME");
        else if (item_type == FactoryClassTypes.MenuSectionMenuItemClass)
            shellItem = new PopupMenuSection();
        else if (item_type == FactoryClassTypes.SeparatorMenuItemClass)
            shellItem = new PopupSeparatorMenuItem();
        else if (item_type == FactoryClassTypes.MenuItemClass)
            shellItem = new PopupIndicatorMenuItem("FIXME");
        return shellItem;
    }
}

export class CinnamonSystrayApplet extends Applet {
	protected _signalManager: imports.misc.signalManager.SignalManager;
	orientation: imports.gi.St.Side;
	icon_size: number;
	manager: imports.gi.Clutter.BoxLayout;
	manager_container: imports.gi.Clutter.Actor;
	//private _shellIndicators: any[] = [];
	menuFactory = new IndicatorMenuFactory();
	menuManager = new PopupMenuManager(this);
	private _signalAdded = 0;
	private _signalRemoved = 0;

	signalAdded: number;
	signalRemoved: number;


    constructor(orientation: imports.gi.St.Side, panel_height: number, instance_id: number) {
        super(orientation, panel_height, instance_id);

        this.setAllowedLayout(AllowedLayout.BOTH);

        this.actor.remove_style_class_name('applet-box');
        this.actor.set_style_class_name('systray');
        //this.actor.set_important(true);  // ensure we get class details from the default theme if not present

        this._signalManager = new SignalManager(null);
        let manager;

        this.orientation = orientation;
        this.icon_size = this.getPanelIconSize(IconType.FULLCOLOR) * global.ui_scale;

        if (this.orientation == Side.TOP || this.orientation == Side.BOTTOM) {
            manager = new BoxLayout( { spacing: 2,
                                               orientation: Orientation.HORIZONTAL });
        } else {
            manager = new BoxLayout( { spacing: 2,
                                               orientation: Orientation.VERTICAL });
        }
        this.manager = manager;
        this.manager_container = new Actor( { layout_manager: manager } );
        this.actor.add_actor (this.manager_container);
        this.manager_container.show();
    }

    _addIndicatorSupport() {
        /*let manager = Main.indicatorManager;
		if (!manager) return;

        // Blacklist some of the icons
        // quassel: The proper icon in Quassel is "QuasselIRC",
        // this is a fallback icon which Quassel launches when it fails to detect
        // our indicator support (i.e. when Cinnamon is restarted for instance)
        // The problem is.. Quassel doesn't kill that icon when it creates QuasselIRC again..
        manager.insertInBlackList("quassel");

        let currentIndicators = manager.getIndicatorIds();
        for (let pos in currentIndicators) {
            if (!manager.isInBlackList(currentIndicators[pos])) {
                let appIndicator = manager.getIndicatorById(currentIndicators[pos]);
                this._onIndicatorAdded(manager, appIndicator);
            }
        }
        if (this._signalAdded == 0)
            this._signalAdded = manager.connect('indicator-added', Lang.bind(this, this._onIndicatorAdded));
        if (this._signalRemoved == 0)
            this._signalRemoved = manager.connect('indicator-removed', Lang.bind(this, this._onIndicatorRemoved));*/
    }

    /*_removeIndicatorSupport() {
        if (this.signalAdded) {
            Main.indicatorManager.disconnect(this.signalAdded);
            this.signalAdded = 0;
        }
        if (this.signalRemoved) {
            Main.indicatorManager.disconnect(this.signalRemoved);
            this.signalRemoved = 0;
        }

        for (let i = 0; i < this._shellIndicators.length; i++) {
            this._shellIndicators[i].instance.destroy();
        }

        this._shellIndicators = [];

    }*/

    /*_onIndicatorAdded(manager: any, appIndicator: any) {
        let inList = false;

        for (let i = 0; i < this._shellIndicators.length; i++) {
            if (this._shellIndicators[i].id == appIndicator.id) {
                inList = true;
                break;
            }
        }

        if (!inList) {
            let indicatorActor = appIndicator.getActor(this.icon_size);

            this._shellIndicators.push({
                id: appIndicator.id,
                instance: indicatorActor
            });
            this._signalManager.connect(indicatorActor.actor, 'destroy', this._onIndicatorIconDestroy, this);
            this._signalManager.connect(indicatorActor.actor, 'enter-event', this._onEnterEvent, this);
            this._signalManager.connect(indicatorActor.actor, 'leave-event', this._onLeaveEvent, this);

            this.manager_container.add_actor(indicatorActor.actor);

            appIndicator.createMenuClientAsync((client: imports.ui.popupMenu.PopupMenuFactory) => {
                if (client != null) {
                    let newMenu = client.getShellMenu(null);
                    if (!newMenu) {
                        newMenu = this.menuFactory.buildShellMenu(client, indicatorActor, this.orientation);
                        this.menuManager.addMenu(newMenu);
                    }
                    indicatorActor.setMenu(newMenu);
                }
            });
        }
    }*/

    /*_onEnterEvent(actor: imports.gi.Clutter.Actor, event: imports.gi.Clutter.Event) {
        
		this.set_applet_tooltip(actor._delegate.getToolTip());
    }

    _onLeaveEvent(actor: imports.gi.Clutter.Actor, event: imports.gi.Clutter.Event) {
        this.set_applet_tooltip("");
    }

    _onIndicatorIconDestroy(actor: imports.gi.Clutter.Actor) {
        for (let i = 0; i < this._shellIndicators.length; i++) {
            if (this._shellIndicators[i].instance.actor == actor) {
                this._shellIndicators.splice(this._shellIndicators.indexOf(this._shellIndicators[i]), 1);
                break;
            }
        }
    }*/

    /*_onIndicatorRemoved(manager: any, appIndicator: any) {
        for (let i = 0; i < this._shellIndicators.length; i++) {
            if (this._shellIndicators[i].id === appIndicator.id) {
                this._shellIndicators[i].instance.destroy();
                this._shellIndicators.splice(this._shellIndicators.indexOf(this._shellIndicators[i]), 1);
                break;
            }
        }
    }*/

    override on_applet_clicked(event: imports.gi.Clutter.Event) {
    }

    override on_orientation_changed(neworientation: imports.gi.St.Side) {
        if (neworientation == Side.TOP || neworientation == Side.BOTTOM) {
            this.manager.set_orientation(Orientation.HORIZONTAL);
        } else {
            this.manager.set_orientation(Orientation.HORIZONTAL);
        }
    }

    override on_applet_reloaded() {
        global.trayReloading = true;
    }

    override on_applet_removed_from_panel() {
        this._signalManager.disconnectAllSignals();
        //this._removeIndicatorSupport();
    }

    override on_applet_added_to_panel() {
        if (!global.trayReloading) {
            Main.statusIconDispatcher.start(this.actor.get_parent().get_parent());
        }

        this._signalManager.connect(Main.statusIconDispatcher, 'status-icon-added', this._onTrayIconAdded, this);
        this._signalManager.connect(Main.statusIconDispatcher, 'status-icon-removed', this._onTrayIconRemoved, this);
        this._signalManager.connect(Main.statusIconDispatcher, 'before-redisplay', this._onBeforeRedisplay, this);
        this._signalManager.connect(Main.systrayManager, "changed", Main.statusIconDispatcher.redisplay, Main.statusIconDispatcher);
        this._addIndicatorSupport();

        if (global.trayReloading) {
            global.trayReloading = false;
            Main.statusIconDispatcher.redisplay();
        }
    }

    override on_panel_icon_size_changed(size: number) {
        this.icon_size = size * global.ui_scale;
        Main.statusIconDispatcher.redisplay();

        /*for (let i = 0; i < this._shellIndicators.length; i++) {
            let indicator = Main.indicatorManager.getIndicatorById(this._shellIndicators[i].id);
            if (indicator) {
                this._shellIndicators[i].instance.setSize(this.icon_size);
            }
        }*/
    }

    _onBeforeRedisplay() {
        // Mark all icons as obsolete
        // There might still be pending delayed operations to insert/resize of them
        // And that would crash Cinnamon

        let children = this.manager_container.get_children().filter(function(child) {
            // We are only interested in the status icons and apparently we can not ask for
            // child instanceof CinnamonTrayIcon.
            return (child.toString().indexOf("CinnamonTrayIcon") != -1);
        });
        for (let i = 0; i < children.length; i++) {
            children[i].destroy();
        }
    }

    _onTrayIconAdded(o: any, icon: imports.gi.St.Icon, role: string) {
        try {
            let hiddenIcons = Main.systrayManager.getRoles();

            if (hiddenIcons.indexOf(role) != -1 ) {
                // We've got an applet for that
                global.log("Hiding systray: " + role);
                return;
            }

            global.log("Adding systray: " + role + " (" + icon.get_width() + "x" + icon.get_height() + "px)");

            let parent = icon.get_parent();
            if (parent) parent.remove_child(icon);

            this._insertStatusItem(role, icon);

        } catch (e) {
            global.logError(e);
        }
    }

    _onTrayIconRemoved(o: any, icon: imports.gi.St.Icon) {
        if (icon.get_parent() === this.manager_container) {
            this.manager_container.remove_child(icon);
        }

        icon.destroy();
    }

    _insertStatusItem(role: string, icon: imports.gi.St.Icon) {
        if (icon.is_finalized()) {
            return;
        }
        this.manager_container.insert_child_at_index(icon, 0);

        if (["skypeforlinux"].indexOf(role) != -1) {
            let size = 16 * global.ui_scale;
            icon.set_size(size, size);
            global.log("Resize " + role + " with hardcoded size (" + icon.get_width() + "x" + icon.get_height() + "px)");
        }
        else {
            this._resizeStatusItem(role, icon);
        }
    }

    _resizeStatusItem(role: string, icon: imports.gi.St.Icon) {
        if (NO_RESIZE_ROLES.indexOf(role) > -1) {
            global.log("Not resizing " + role + " as it's known to be buggy (" + icon.get_width() + "x" + icon.get_height() + "px)");
        } else {
            icon.set_size(this.icon_size, this.icon_size);
            global.log("Resized " + role + " with normalized size (" + icon.get_width() + "x" + icon.get_height() + "px)");
            //Note: dropbox doesn't scale, even though we resize it...
        }
    }
}

export function main(metadata: any, orientation: imports.gi.St.Side, panel_height: number, instance_id: number) {
    return new CinnamonSystrayApplet(orientation, panel_height, instance_id);
}
