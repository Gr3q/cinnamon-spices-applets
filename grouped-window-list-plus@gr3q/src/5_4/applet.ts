import { UUID } from "./constants";
const { Applet } = imports.ui.applet;


class GroupedWindowListApplet extends Applet {
    constructor(metadata: any, orientation: imports.gi.St.Side, panel_height: number, instance_id: number) {
        super(orientation, panel_height, instance_id)
    }
}

export function main(metadata: any, orientation: imports.gi.St.Side, panel_height: number, instance_id: number) {
	// importing custom translations
	imports.gettext.bindtextdomain(UUID, imports.gi.GLib.get_home_dir() + "/.local/share/locale");
	imports.gi.Gtk.IconTheme.get_default().append_search_path(metadata.path + "/../icons");

	return new GroupedWindowListApplet(metadata, orientation, panel_height, instance_id);
}