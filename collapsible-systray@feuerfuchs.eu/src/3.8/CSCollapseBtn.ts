import { _ } from "./Util";
import { CollapsibleSystrayApplet } from "./applet";

const { FileIcon, File }                                = imports.gi.Gio;
const { Button, Icon, IconType }                                 = imports.gi.St;
const { PanelItemTooltip }                           = imports.ui.tooltips;
const Applet                             = imports.ui.applet;

// ------------------------------------------------------------------------------------------------------

export enum State {
	EXPANDED =    0,
	COLLAPSED =   1,
	UNAVAILABLE = 2
}

export class CSCollapseBtn {
	state: State;
	private _applet: CollapsibleSystrayApplet;
	actor   = new Button({ reactive: true, track_hover: true, style_class: 'applet-box' });
	icon    = new Icon({ reactive: true, track_hover: true, style_class: 'applet-icon' });
	tooltip: imports.ui.tooltips.PanelItemTooltip;

    constructor(applet: CollapsibleSystrayApplet) {
        this._applet = applet;
		// TODO: Fix
		this.tooltip = new PanelItemTooltip(this as any as imports.ui.applet.Applet, "", applet.orientation);
        this.actor.set_child(this.icon);
    }

    /*
     * Set the display mode to vertical
     */
    setVertical(vertical: boolean) {
        if (vertical) {
            this.actor.add_style_class_name('vertical');
        } else {
            this.actor.remove_style_class_name('vertical');
        }
    }

    /*
     * Set the icon using it's qualified name
     */
    setIcon(name: string) {
        this.icon.set_icon_name(name);
        this.icon.set_icon_type(IconType.SYMBOLIC);
        this._setStyle();
    }

    /*
     * Set the icon using a file path
     */
    setIconFile(iconFile: imports.gi.Gio.File) {
        try {
            this.icon.set_gicon(new FileIcon({ file: iconFile }));
            this.icon.set_icon_type(IconType.SYMBOLIC);
            this._setStyle();
        } catch (e) {
            global.log(e);
        }
    }

    /*
     *
     */
    _setStyle() {
        this.icon.set_icon_size(this._applet.icon_size);
        this.icon.set_style_class_name('system-status-icon');
    }

    /*
     *
     */
    refreshReactive() {
        //this.actor.set_reactive(this.state !== this.State.UNAVAILABLE && this._applet._draggable.inhibit);
        this.actor.set_reactive(this._applet["_draggable"].inhibit);
    }

    /*
     * Set expanded state and refresh the icon
     */
    setState(state: State) {
        this.state = state;

        this.refreshReactive();

        let iconName;
        switch (state) {
            case State.EXPANDED:
                iconName = this._applet.collapseIcon;
                this.icon.set_opacity(255);
                this.tooltip.set_text(_("Collapse"));
                break;

            case State.COLLAPSED:
                iconName = this._applet.expandIcon;
                this.icon.set_opacity(255);
                this.tooltip.set_text(_("Expand"));
                break;

            case State.UNAVAILABLE:
                iconName = "edit";
                this.icon.set_opacity(96);
                this.tooltip.set_text(_("No icons to hide/reveal"));
                break;
        }
        if (!iconName) {
            return;
        }

        let iconFile = File.new_for_path(iconName);
        if (iconFile.query_exists(null)) {
            this.setIconFile(iconFile);
        } else {
            this.setIcon(iconName);
        }
    }
}
