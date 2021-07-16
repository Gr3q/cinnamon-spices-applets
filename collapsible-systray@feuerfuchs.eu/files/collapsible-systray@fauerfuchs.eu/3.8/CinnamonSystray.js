"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.CinnamonSystrayApplet = exports.NO_RESIZE_ROLES = void 0;
const Lang = imports.lang;
const { Side, IconType } = imports.gi.St;
const { BoxLayout, Orientation, Actor } = imports.gi.Clutter;
const { Applet, AllowedLayout, AppletPopupMenu } = imports.ui.applet;
const { PopupMenuFactory, FactoryClassTypes, PopupMenuAbstractItem, PopupMenuManager, PopupIndicatorMenuItem, PopupSeparatorMenuItem, PopupMenuSection, PopupSubMenuMenuItem } = imports.ui.popupMenu;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const { SignalManager } = imports.misc.signalManager;
const { findIndex } = imports.misc.util;
exports.NO_RESIZE_ROLES = ['shutter', 'filezilla'];
class IndicatorMenuFactory extends PopupMenuFactory {
    constructor() {
        super();
    }
    _createShellItem(factoryItem, launcher, orientation) {
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
class CinnamonSystrayApplet extends Applet {
    constructor(orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);
        this.menuFactory = new IndicatorMenuFactory();
        this.menuManager = new PopupMenuManager(this);
        this._signalAdded = 0;
        this._signalRemoved = 0;
        this.setAllowedLayout(AllowedLayout.BOTH);
        this.actor.remove_style_class_name('applet-box');
        this.actor.set_style_class_name('systray');
        this._signalManager = new SignalManager(null);
        let manager;
        this.orientation = orientation;
        this.icon_size = this.getPanelIconSize(IconType.FULLCOLOR) * global.ui_scale;
        if (this.orientation == Side.TOP || this.orientation == Side.BOTTOM) {
            manager = new BoxLayout({ spacing: 2,
                orientation: Orientation.HORIZONTAL });
        }
        else {
            manager = new BoxLayout({ spacing: 2,
                orientation: Orientation.VERTICAL });
        }
        this.manager = manager;
        this.manager_container = new Actor({ layout_manager: manager });
        this.actor.add_actor(this.manager_container);
        this.manager_container.show();
    }
    _addIndicatorSupport() {
    }
    on_applet_clicked(event) {
    }
    on_orientation_changed(neworientation) {
        if (neworientation == Side.TOP || neworientation == Side.BOTTOM) {
            this.manager.set_orientation(Orientation.HORIZONTAL);
        }
        else {
            this.manager.set_orientation(Orientation.HORIZONTAL);
        }
    }
    on_applet_reloaded() {
        global.trayReloading = true;
    }
    on_applet_removed_from_panel() {
        this._signalManager.disconnectAllSignals();
    }
    on_applet_added_to_panel() {
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
    on_panel_icon_size_changed(size) {
        this.icon_size = size * global.ui_scale;
        Main.statusIconDispatcher.redisplay();
    }
    _onBeforeRedisplay() {
        let children = this.manager_container.get_children().filter(function (child) {
            return (child.toString().indexOf("CinnamonTrayIcon") != -1);
        });
        for (let i = 0; i < children.length; i++) {
            children[i].destroy();
        }
    }
    _onTrayIconAdded(o, icon, role) {
        try {
            let hiddenIcons = Main.systrayManager.getRoles();
            if (hiddenIcons.indexOf(role) != -1) {
                global.log("Hiding systray: " + role);
                return;
            }
            global.log("Adding systray: " + role + " (" + icon.get_width() + "x" + icon.get_height() + "px)");
            let parent = icon.get_parent();
            if (parent)
                parent.remove_child(icon);
            this._insertStatusItem(role, icon);
        }
        catch (e) {
            global.logError(e);
        }
    }
    _onTrayIconRemoved(o, icon) {
        if (icon.get_parent() === this.manager_container) {
            this.manager_container.remove_child(icon);
        }
        icon.destroy();
    }
    _insertStatusItem(role, icon) {
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
    _resizeStatusItem(role, icon) {
        if (exports.NO_RESIZE_ROLES.indexOf(role) > -1) {
            global.log("Not resizing " + role + " as it's known to be buggy (" + icon.get_width() + "x" + icon.get_height() + "px)");
        }
        else {
            icon.set_size(this.icon_size, this.icon_size);
            global.log("Resized " + role + " with normalized size (" + icon.get_width() + "x" + icon.get_height() + "px)");
        }
    }
}
exports.CinnamonSystrayApplet = CinnamonSystrayApplet;
function main(metadata, orientation, panel_height, instance_id) {
    return new CinnamonSystrayApplet(orientation, panel_height, instance_id);
}
exports.main = main;
//# sourceMappingURL=CinnamonSystray.js.map