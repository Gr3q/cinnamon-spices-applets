declare namespace imports.gi.CinnamonDesktop {

interface BG extends GObject.Object {
	changes_with_time () : boolean;
	create_and_set_gtk_image (image: Gtk.Image, width: number, height: number) : void;
	create_and_set_surface_as_root (root_window: Gdk.Window, screen: Gdk.Screen) : void;
	create_frame_thumbnail (factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number, frame_num: number) : GdkPixbuf.Pixbuf;
	create_surface (window: Gdk.Window, width: number, height: number, root: boolean) : cairo.Surface;
	create_thumbnail (factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number) : GdkPixbuf.Pixbuf;
	draw (dest: GdkPixbuf.Pixbuf, screen: Gdk.Screen, is_root: boolean) : void;
	get_color (_type: CDesktopEnums.BackgroundShading, primary: Gdk.Color, secondary: Gdk.Color) : void;
	get_filename () : string;
	get_image_size (factory: DesktopThumbnailFactory, best_width: number, best_height: number, width: number, height: number) : boolean;
	get_placement () : CDesktopEnums.BackgroundStyle;
	has_multiple_sizes () : boolean;
	is_dark (dest_width: number, dest_height: number) : boolean;
	load_from_preferences (settings: Gio.Settings) : void;
	save_to_preferences (settings: Gio.Settings) : void;
	set_color (_type: CDesktopEnums.BackgroundShading, primary: Gdk.Color, secondary: Gdk.Color) : void;
	set_filename (filename: string) : void;
	set_placement (placement: CDesktopEnums.BackgroundStyle) : void;
}

var BG: {
	new () : BG;
	get_surface_from_root (screen: Gdk.Screen) : cairo.Surface;
	set_accountsservice_background (background: string) : void;
	set_surface_as_root (screen: Gdk.Screen, surface: cairo.Surface) : void;
	set_surface_as_root_with_crossfade (screen: Gdk.Screen, surface: cairo.Surface) : BGCrossfade;
}




interface BGCrossfade extends GObject.Object {
	is_started () : boolean;
	set_end_surface (surface: cairo.Surface) : boolean;
	set_start_surface (surface: cairo.Surface) : boolean;
	start (window: Gdk.Window) : void;
	stop () : void;
}

var BGCrossfade: {
	new (width: number, height: number) : BGCrossfade;
	
}




interface DesktopThumbnailFactory extends GObject.Object {
	can_thumbnail (uri: string, mime_type: string, mtime: number) : boolean;
	create_failed_thumbnail (uri: string, mtime: number) : void;
	generate_thumbnail (uri: string, mime_type: string) : GdkPixbuf.Pixbuf;
	has_valid_failed_thumbnail (uri: string, mtime: number) : boolean;
	lookup (uri: string, mtime: number) : string;
	save_thumbnail (thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number) : void;
}

var DesktopThumbnailFactory: {
	new (size: DesktopThumbnailSize) : DesktopThumbnailFactory;
	
}




interface PnpIds extends GObject.Object {
	get_pnp_id (pnp_id: string) : string;
}

var PnpIds: {
	new () : PnpIds;
	
}




interface RRConfig extends GObject.Object {
	applicable (screen: RRScreen) : boolean;
	apply_with_time (screen: RRScreen, timestamp: number) : boolean;
	ensure_primary () : boolean;
	equal (config2: RRConfig) : boolean;
	get_clone () : boolean;
	get_outputs () : RROutputInfo[];
	load_current () : boolean;
	load_filename (filename: string) : boolean;
	match (config2: RRConfig) : boolean;
	sanitize () : void;
	save () : boolean;
	set_clone (clone: boolean) : void;
}

var RRConfig: {
	new_current (screen: RRScreen) : RRConfig;
	new_stored (screen: RRScreen) : RRConfig;
	apply_from_filename_with_time (screen: RRScreen, filename: string, timestamp: number) : boolean;
	get_backup_filename () : string;
	get_intended_filename () : string;
}




interface RRLabeler extends GObject.Object {
	get_rgba_for_output (output: RROutputInfo, rgba_out: Gdk.RGBA) : void;
	hide () : void;
	show () : void;
}

var RRLabeler: {
	new (config: RRConfig) : RRLabeler;
	
}




interface RROutputInfo extends GObject.Object {
	get_aspect_ratio () : number;
	get_display_name () : string;
	get_geometry (_x: number, _y: number, width: number, height: number) : void;
	get_name () : string;
	get_preferred_height () : number;
	get_preferred_width () : number;
	get_primary () : boolean;
	get_product () : number;
	get_refresh_rate () : number;
	get_rotation () : RRRotation;
	get_serial () : number;
	get_vendor (vendor: string[]) : void;
	is_active () : boolean;
	is_connected () : boolean;
	set_active (active: boolean) : void;
	set_geometry (_x: number, _y: number, width: number, height: number) : void;
	set_primary (primary: boolean) : void;
	set_refresh_rate (rate: number) : void;
	set_rotation (rotation: RRRotation) : void;
}

var RROutputInfo: {
	
	
}




interface RRScreen extends GObject.Object, Gio.Initable {
	create_clone_modes () : RRMode;
	get_crtc_by_id (_id: number) : RRCrtc;
	get_dpms_mode (mode: RRDpmsMode) : boolean;
	get_output_by_id (_id: number) : RROutput;
	get_output_by_name (name: string) : RROutput;
	get_ranges (min_width: number, max_width: number, min_height: number, max_height: number) : void;
	get_timestamps (change_timestamp_ret: number, config_timestamp_ret: number) : void;
	list_clone_modes () : RRMode[];
	list_crtcs () : RRCrtc[];
	list_modes () : RRMode[];
	list_outputs () : RROutput[];
	refresh () : boolean;
	set_dpms_mode (mode: RRDpmsMode) : boolean;
	set_primary_output (output: RROutput) : void;
	set_size (width: number, height: number, mm_width: number, mm_height: number) : void;
}

var RRScreen: {
	new (screen: Gdk.Screen) : RRScreen;
	
}




interface WallClock extends GObject.Object {
	get_clock () : string;
	get_clock_for_format (format_string: string) : string;
	get_default_date_format () : string;
	get_default_time_format () : string;
	set_format_string (format_string: string) : boolean;
}

var WallClock: {
	new () : WallClock;
	
}




interface XkbInfo extends GObject.Object {
	description_for_option (group_id: string, _id: string) : string;
	get_all_layouts () : GLib.List;
	get_all_option_groups () : GLib.List;
	get_layout_info (_id: string, display_name: string, short_name: string, xkb_layout: string, xkb_variant: string) : boolean;
	get_layout_info_for_language (language: string, _id: string, display_name: string, short_name: string, xkb_layout: string, xkb_variant: string) : boolean;
	get_options_for_group (group_id: string) : GLib.List;
}

var XkbInfo: {
	new () : XkbInfo;
	free_var_defs (var_defs: undefined) : void;
	get_var_defs (rules: string, var_defs: undefined) : void;
}




class BGClass {


}



class BGCrossfadeClass {
	public parent_class: GObject.ObjectClass;

	finished : {(fade: BGCrossfade, window: Gdk.Window) : void;};

}



class BGCrossfadePrivate {


}



class DesktopThumbnailFactoryClass {
	public parent: GObject.ObjectClass;


}



class DesktopThumbnailFactoryPrivate {


}



class PnpIdsClass {
	public parent_class: GObject.ObjectClass;


}



class PnpIdsPrivate {


}



class RRConfigClass {
	public parent_class: GObject.ObjectClass;


}



class RRConfigPrivate {


}



class RRCrtc {


	public can_drive_output (output: RROutput) : boolean;
	public get_current_mode () : RRMode;
	public get_current_rotation () : RRRotation;
	public get_gamma (size: number, red: number, green: number, blue: number) : boolean;
	public get_id () : number;
	public get_position (_x: number, _y: number) : void;
	public get_rotations () : RRRotation;
	public set_config_with_time (timestamp: number, _x: number, _y: number, mode: RRMode, rotation: RRRotation, outputs: RROutput, n_outputs: number) : boolean;
	public set_gamma (size: number, red: number, green: number, blue: number) : void;
	public supports_rotation (rotation: RRRotation) : boolean;
}



class RRLabelerClass {
	public parent_class: GObject.ObjectClass;


}



class RRLabelerPrivate {


}



class RRMode {


	public get_freq () : number;
	public get_height () : number;
	public get_id () : number;
	public get_width () : number;
}



class RROutput {


	public can_clone (clone: RROutput) : boolean;
	public get_backlight () : number;
	public get_backlight_max () : number;
	public get_backlight_min () : number;
	public get_connector_type () : string;
	public get_crtc () : RRCrtc;
	public get_current_mode () : RRMode;
	public get_edid_data (size: number) : number;
	public get_height_mm () : number;
	public get_id () : number;
	public get_ids_from_edid (vendor: string, product: number, serial: number) : boolean;
	public get_is_primary () : boolean;
	public get_name () : string;
	public get_position (_x: number, _y: number) : void;
	public get_possible_crtcs () : RRCrtc;
	public get_preferred_mode () : RRMode;
	public get_size_inches () : number;
	public get_width_mm () : number;
	public is_connected () : boolean;
	public is_laptop () : boolean;
	public list_modes () : RRMode;
	public set_backlight (value: number) : boolean;
	public supports_mode (mode: RRMode) : boolean;
}



class RROutputInfoClass {
	public parent_class: GObject.ObjectClass;


}



class RROutputInfoPrivate {


}



class RRScreenClass {
	public parent_class: GObject.ObjectClass;

	changed : {() : void;};
	output_connected : {(output: RROutput) : void;};
	output_disconnected : {(output: RROutput) : void;};

}



class RRScreenPrivate {


}



class WallClockClass {
	public parent_class: GObject.ObjectClass;


}



class WallClockPrivate {


}



class XkbInfoClass {
	public parent_class: GObject.ObjectClass;


}



class XkbInfoPrivate {


}



enum DesktopThumbnailSize {
	normal = 0,
	large = 1
}



enum RRDpmsMode {
	on = 0,
	standby = 1,
	suspend = 2,
	off = 3,
	disabled = 4,
	unknown = 5
}



enum RRError {
	unknown = 0,
	no_randr_extension = 1,
	randr_error = 2,
	bounds_error = 3,
	crtc_assignment = 4,
	no_matching_config = 5,
	no_dpms_extension = 6
}



enum RRRotation {
	rotation_next = 0,
	rotation_0 = 1,
	rotation_90 = 2,
	rotation_180 = 4,
	rotation_270 = 8,
	reflect_x = 16,
	reflect_y = 32
}



interface InstallerClientCallback {
	(success: boolean, user_data: any) : void;
}



function desktop_get_media_key_string (_type: number): string;



function desktop_get_session_user_pwent (): any;



function desktop_prepend_terminal_to_vector (argc: number, argv: string): void;



function desktop_thumbnail_cache_check_permissions (factory: DesktopThumbnailFactory, quick: boolean): boolean;



function desktop_thumbnail_cache_fix_permissions (): void;



function desktop_thumbnail_has_uri (pixbuf: GdkPixbuf.Pixbuf, uri: string): boolean;



function desktop_thumbnail_is_valid (pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean;



function desktop_thumbnail_md5 (uri: string): string;



function desktop_thumbnail_path_for_uri (uri: string, size: DesktopThumbnailSize): string;



function desktop_thumbnail_scale_down_pixbuf (pixbuf: GdkPixbuf.Pixbuf, dest_width: number, dest_height: number): GdkPixbuf.Pixbuf;



function installer_check_for_packages (packages: string[], callback: InstallerClientCallback, user_data: any): void;



function installer_install_packages (packages: string[], callback: InstallerClientCallback, user_data: any): void;



function rr_error_quark (): GLib.Quark;

}