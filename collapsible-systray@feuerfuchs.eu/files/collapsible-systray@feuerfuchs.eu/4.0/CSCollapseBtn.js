"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSCollapseBtn = exports.State = void 0;
const Util_1 = require("./Util");
const { FileIcon, File } = imports.gi.Gio;
const { Button, Icon, IconType } = imports.gi.St;
const { PanelItemTooltip } = imports.ui.tooltips;
var State;
(function (State) {
    State[State["EXPANDED"] = 0] = "EXPANDED";
    State[State["COLLAPSED"] = 1] = "COLLAPSED";
    State[State["UNAVAILABLE"] = 2] = "UNAVAILABLE";
})(State = exports.State || (exports.State = {}));
class CSCollapseBtn {
    constructor(applet) {
        this.actor = new Button({ reactive: true, track_hover: true, style_class: 'applet-box' });
        this.icon = new Icon({ reactive: true, track_hover: true, style_class: 'applet-icon' });
        this._applet = applet;
        this.tooltip = new PanelItemTooltip(this, "", applet.orientation);
        this.actor.set_child(this.icon);
    }
    setVertical(vertical) {
        if (vertical) {
            this.actor.add_style_class_name('vertical');
        }
        else {
            this.actor.remove_style_class_name('vertical');
        }
    }
    setIcon(name) {
        this.icon.set_icon_name(name);
        this.icon.set_icon_type(IconType.SYMBOLIC);
        this._setStyle();
    }
    setIconFile(iconFile) {
        try {
            this.icon.set_gicon(new FileIcon({ file: iconFile }));
            this.icon.set_icon_type(IconType.SYMBOLIC);
            this._setStyle();
        }
        catch (e) {
            global.log(e);
        }
    }
    _setStyle() {
        this.icon.set_icon_size(this._applet.icon_size);
        this.icon.set_style_class_name('system-status-icon');
    }
    refreshReactive() {
        this.actor.set_reactive(this._applet["_draggable"].inhibit);
    }
    setState(state) {
        this.state = state;
        this.refreshReactive();
        let iconName;
        switch (state) {
            case State.EXPANDED:
                iconName = this._applet.collapseIcon;
                this.icon.set_opacity(255);
                this.tooltip.set_text(Util_1._("Collapse"));
                break;
            case State.COLLAPSED:
                iconName = this._applet.expandIcon;
                this.icon.set_opacity(255);
                this.tooltip.set_text(Util_1._("Expand"));
                break;
            case State.UNAVAILABLE:
                iconName = "edit";
                this.icon.set_opacity(96);
                this.tooltip.set_text(Util_1._("No icons to hide/reveal"));
                break;
        }
        if (!iconName) {
            return;
        }
        let iconFile = File.new_for_path(iconName);
        if (iconFile.query_exists(null)) {
            this.setIconFile(iconFile);
        }
        else {
            this.setIcon(iconName);
        }
    }
}
exports.CSCollapseBtn = CSCollapseBtn;
