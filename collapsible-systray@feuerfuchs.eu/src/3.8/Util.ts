const uuid = "collapsible-systray@feuerfuchs.eu";

const GLib    = imports.gi.GLib;
const Gettext = imports.gettext;

Gettext.bindtextdomain(uuid, GLib.get_home_dir() + "/.local/share/locale");

export function _(str: string): string {
    return Gettext.dgettext(uuid, str);
}