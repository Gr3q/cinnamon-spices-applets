/**
 * CinnamonDesktop 3.0
 *
 * Generated from 3.0
 */

import * as Gio from "gio";
import * as GObject from "gobject";
import * as GdkPixbuf from "gdkpixbuf";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Gdk from "gdk";
import * as cairo from "cairo";
import * as CDesktopEnums from "cdesktopenums";

export const RR_CONNECTOR_TYPE_PANEL: string;
export function desktop_get_media_key_string(type: number): string;
export function desktop_prepend_terminal_to_vector(argc: number, argv: string): void;
export function desktop_thumbnail_cache_check_permissions(factory: DesktopThumbnailFactory, quick: boolean): boolean;
export function desktop_thumbnail_cache_fix_permissions(): void;
export function desktop_thumbnail_has_uri(pixbuf: GdkPixbuf.Pixbuf, uri: string): boolean;
export function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean;
export function desktop_thumbnail_md5(uri: string): string;
export function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize): string;
export function desktop_thumbnail_scale_down_pixbuf(
    pixbuf: GdkPixbuf.Pixbuf,
    dest_width: number,
    dest_height: number
): GdkPixbuf.Pixbuf;
export function installer_check_for_packages(packages: string[], callback: InstallerClientCallback): void;
export function installer_install_packages(packages: string[], callback: InstallerClientCallback): void;
export function rr_error_quark(): GLib.Quark;
export type InstallerClientCallback = (success: boolean) => void;

export namespace DesktopThumbnailSize {
    export const $gtype: GObject.GType<DesktopThumbnailSize>;
}

export enum DesktopThumbnailSize {
    NORMAL = 0,
    LARGE = 1,
}

export namespace RRDpmsMode {
    export const $gtype: GObject.GType<RRDpmsMode>;
}

export enum RRDpmsMode {
    ON = 0,
    STANDBY = 1,
    SUSPEND = 2,
    OFF = 3,
    DISABLED = 4,
    UNKNOWN = 5,
}

export class RRError extends GLib.Error {
    static $gtype: GObject.GType<RRError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RRError);

    // Fields
    static UNKNOWN: number;
    static NO_RANDR_EXTENSION: number;
    static RANDR_ERROR: number;
    static BOUNDS_ERROR: number;
    static CRTC_ASSIGNMENT: number;
    static NO_MATCHING_CONFIG: number;
    static NO_DPMS_EXTENSION: number;
}

export namespace RRRotation {
    export const $gtype: GObject.GType<RRRotation>;
}

export enum RRRotation {
    ROTATION_NEXT = 0,
    ROTATION_0 = 1,
    ROTATION_90 = 2,
    ROTATION_180 = 4,
    ROTATION_270 = 8,
    REFLECT_X = 16,
    REFLECT_Y = 32,
}
export module BG {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BG extends GObject.Object {
    static $gtype: GObject.GType<BG>;

    constructor(properties?: Partial<BG.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BG.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "transitioned", callback: (_source: this) => void): number;
    connect_after(signal: "transitioned", callback: (_source: this) => void): number;
    emit(signal: "transitioned"): void;

    // Constructors

    static ["new"](): BG;

    // Members

    changes_with_time(): boolean;
    create_and_set_gtk_image(image: Gtk.Image, width: number, height: number): void;
    create_and_set_surface_as_root(root_window: Gdk.Window, screen: Gdk.Screen): void;
    create_frame_thumbnail(
        factory: DesktopThumbnailFactory,
        screen: Gdk.Screen,
        dest_width: number,
        dest_height: number,
        frame_num: number
    ): GdkPixbuf.Pixbuf;
    create_surface(window: Gdk.Window, width: number, height: number, root: boolean): cairo.Surface;
    create_thumbnail(
        factory: DesktopThumbnailFactory,
        screen: Gdk.Screen,
        dest_width: number,
        dest_height: number
    ): GdkPixbuf.Pixbuf;
    draw(dest: GdkPixbuf.Pixbuf, screen: Gdk.Screen, is_root: boolean): void;
    get_color(type: CDesktopEnums.BackgroundShading, primary: Gdk.Color, secondary: Gdk.Color): void;
    get_filename(): string;
    get_image_size(
        factory: DesktopThumbnailFactory,
        best_width: number,
        best_height: number,
        width: number,
        height: number
    ): boolean;
    get_placement(): CDesktopEnums.BackgroundStyle;
    has_multiple_sizes(): boolean;
    is_dark(dest_width: number, dest_height: number): boolean;
    load_from_preferences(settings: Gio.Settings): void;
    save_to_preferences(settings: Gio.Settings): void;
    set_color(type: CDesktopEnums.BackgroundShading, primary: Gdk.Color, secondary: Gdk.Color): void;
    set_filename(filename: string): void;
    set_placement(placement: CDesktopEnums.BackgroundStyle): void;
    static get_surface_from_root(screen: Gdk.Screen): cairo.Surface;
    static set_accountsservice_background(background: string): void;
    static set_surface_as_root(screen: Gdk.Screen, surface: cairo.Surface): void;
    static set_surface_as_root_with_crossfade(screen: Gdk.Screen, surface: cairo.Surface): BGCrossfade;
}
export module BGCrossfade {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        height: number;
        width: number;
    }
}
export class BGCrossfade extends GObject.Object {
    static $gtype: GObject.GType<BGCrossfade>;

    constructor(properties?: Partial<BGCrossfade.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BGCrossfade.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get height(): number;
    get width(): number;

    // Fields
    parent_object: GObject.Object;
    priv: BGCrossfadePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "finished", callback: (_source: this, window: GObject.Object) => void): number;
    connect_after(signal: "finished", callback: (_source: this, window: GObject.Object) => void): number;
    emit(signal: "finished", window: GObject.Object): void;

    // Constructors

    static ["new"](width: number, height: number): BGCrossfade;

    // Members

    is_started(): boolean;
    set_end_surface(surface: cairo.Surface): boolean;
    set_start_surface(surface: cairo.Surface): boolean;
    start(window: Gdk.Window): void;
    stop(): void;
    vfunc_finished(window: Gdk.Window): void;
}
export module DesktopThumbnailFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DesktopThumbnailFactory extends GObject.Object {
    static $gtype: GObject.GType<DesktopThumbnailFactory>;

    constructor(properties?: Partial<DesktopThumbnailFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DesktopThumbnailFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DesktopThumbnailFactoryPrivate;

    // Constructors

    static ["new"](size: DesktopThumbnailSize): DesktopThumbnailFactory;

    // Members

    can_thumbnail(uri: string, mime_type: string, mtime: number): boolean;
    create_failed_thumbnail(uri: string, mtime: number): void;
    generate_thumbnail(uri: string, mime_type: string): GdkPixbuf.Pixbuf;
    has_valid_failed_thumbnail(uri: string, mtime: number): boolean;
    lookup(uri: string, mtime: number): string;
    save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number): void;
}
export module PnpIds {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PnpIds extends GObject.Object {
    static $gtype: GObject.GType<PnpIds>;

    constructor(properties?: Partial<PnpIds.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PnpIds.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PnpIdsPrivate;

    // Constructors

    static ["new"](): PnpIds;

    // Members

    get_pnp_id(pnp_id: string): string;
}
export module RRConfig {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        screen: RRScreen;
    }
}
export class RRConfig extends GObject.Object {
    static $gtype: GObject.GType<RRConfig>;

    constructor(properties?: Partial<RRConfig.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RRConfig.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set screen(val: RRScreen);

    // Constructors

    static new_current(screen: RRScreen): RRConfig;
    static new_stored(screen: RRScreen): RRConfig;

    // Members

    applicable(screen: RRScreen): boolean;
    apply_with_time(screen: RRScreen, timestamp: number): boolean;
    ensure_primary(): boolean;
    equal(config2: RRConfig): boolean;
    get_auto_scale(): boolean;
    get_base_scale(): number;
    get_clone(): boolean;
    get_outputs(): RROutputInfo[];
    load_current(): boolean;
    load_filename(filename: string): boolean;
    match(config2: RRConfig): boolean;
    sanitize(): void;
    save(): boolean;
    set_auto_scale(auto_scale: boolean): void;
    set_base_scale(base_scale: number): void;
    set_clone(clone: boolean): void;
    static apply_from_filename_with_time(screen: RRScreen, filename: string, timestamp: number): boolean;
    static get_backup_filename(): string;
    static get_intended_filename(): string;
    static get_legacy_filename(): string;
}
export module RRLabeler {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        config: RRConfig;
    }
}
export class RRLabeler extends GObject.Object {
    static $gtype: GObject.GType<RRLabeler>;

    constructor(properties?: Partial<RRLabeler.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RRLabeler.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set config(val: RRConfig);

    // Constructors

    static ["new"](config: RRConfig): RRLabeler;

    // Members

    get_rgba_for_output(output: RROutputInfo): Gdk.RGBA;
    hide(): void;
    show(): void;
}
export module RROutputInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class RROutputInfo extends GObject.Object {
    static $gtype: GObject.GType<RROutputInfo>;

    constructor(properties?: Partial<RROutputInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RROutputInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_aspect_ratio(): number;
    get_display_name(): string;
    get_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void;
    get_geometry(): [number, number, number, number];
    get_name(): string;
    get_preferred_height(): number;
    get_preferred_width(): number;
    get_primary(): boolean;
    get_product(): number;
    get_refresh_rate(): number;
    get_refresh_rate_f(): number;
    get_rotation(): RRRotation;
    get_scale(): number;
    get_serial(): number;
    get_vendor(): string[];
    is_active(): boolean;
    is_connected(): boolean;
    set_active(active: boolean): void;
    set_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void;
    set_geometry(x: number, y: number, width: number, height: number): void;
    set_primary(primary: boolean): void;
    set_refresh_rate(rate: number): void;
    set_refresh_rate_f(rate: number): void;
    set_rotation(rotation: RRRotation): void;
    set_scale(scale: number): void;
}
export module RRScreen {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        gdk_screen: Gdk.Screen;
        gdkScreen: Gdk.Screen;
    }
}
export class RRScreen extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<RRScreen>;

    constructor(properties?: Partial<RRScreen.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RRScreen.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get gdk_screen(): Gdk.Screen;
    get gdkScreen(): Gdk.Screen;

    // Fields
    priv: RRScreenPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "output-connected", callback: (_source: this, output: any | null) => void): number;
    connect_after(signal: "output-connected", callback: (_source: this, output: any | null) => void): number;
    emit(signal: "output-connected", output: any | null): void;
    connect(signal: "output-disconnected", callback: (_source: this, output: any | null) => void): number;
    connect_after(signal: "output-disconnected", callback: (_source: this, output: any | null) => void): number;
    emit(signal: "output-disconnected", output: any | null): void;

    // Constructors

    static ["new"](screen: Gdk.Screen): RRScreen;

    // Members

    calculate_best_global_scale(index: number): number;
    calculate_supported_scales(width: number, height: number, n_supported_scales: number): number;
    create_clone_modes(): RRMode;
    get_crtc_by_id(id: number): RRCrtc;
    get_dpms_mode(mode: RRDpmsMode): boolean;
    get_global_scale(): number;
    get_global_scale_setting(): number;
    get_output_by_id(id: number): RROutput;
    get_output_by_name(name: string): RROutput;
    get_ranges(): [number, number, number, number];
    get_timestamps(): [number, number];
    get_use_upscaling(): boolean;
    list_clone_modes(): RRMode[];
    list_crtcs(): RRCrtc[];
    list_modes(): RRMode[];
    list_outputs(): RROutput[];
    refresh(): boolean;
    set_dpms_mode(mode: RRDpmsMode): boolean;
    set_global_scale_setting(scale_factor: number): void;
    set_primary_output(output: RROutput): void;
    set_size(width: number, height: number, mm_width: number, mm_height: number): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module WallClock {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        clock: string;
        format_string: string;
        formatString: string;
    }
}
export class WallClock extends GObject.Object {
    static $gtype: GObject.GType<WallClock>;

    constructor(properties?: Partial<WallClock.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WallClock.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get clock(): string;
    get format_string(): string;
    set format_string(val: string);
    get formatString(): string;
    set formatString(val: string);

    // Fields
    parent_object: GObject.Object;
    priv: WallClockPrivate;

    // Constructors

    static ["new"](): WallClock;

    // Members

    get_clock(): string;
    get_clock_for_format(format_string: string): string;
    get_default_date_format(): string;
    get_default_time_format(): string;
    set_format_string(format_string?: string | null): boolean;
    static lctime_format(gettext_domain?: string | null, format_string?: string | null): string;
}
export module XkbInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class XkbInfo extends GObject.Object {
    static $gtype: GObject.GType<XkbInfo>;

    constructor(properties?: Partial<XkbInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<XkbInfo.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: GObject.Object;
    priv: XkbInfoPrivate;

    // Constructors

    static ["new"](): XkbInfo;

    // Members

    description_for_option(group_id: string, id: string): string;
    get_all_layouts(): string[];
    get_all_option_groups(): string[];
    get_layout_info(id: string): [boolean, string, string, string, string];
    get_layout_info_for_language(language: string): [boolean, string, string, string, string, string];
    get_options_for_group(group_id: string): string[];
}

export class BGCrossfadePrivate {
    static $gtype: GObject.GType<BGCrossfadePrivate>;

    constructor(copy: BGCrossfadePrivate);
}

export class DesktopThumbnailFactoryPrivate {
    static $gtype: GObject.GType<DesktopThumbnailFactoryPrivate>;

    constructor(copy: DesktopThumbnailFactoryPrivate);
}

export class PnpIdsPrivate {
    static $gtype: GObject.GType<PnpIdsPrivate>;

    constructor(copy: PnpIdsPrivate);
}

export class RRConfigPrivate {
    static $gtype: GObject.GType<RRConfigPrivate>;

    constructor(copy: RRConfigPrivate);
}

export class RRCrtc {
    static $gtype: GObject.GType<RRCrtc>;

    constructor(copy: RRCrtc);

    // Members
    can_drive_output(output: RROutput): boolean;
    get_current_mode(): RRMode;
    get_current_rotation(): RRRotation;
    get_gamma(size: number, red: number, green: number, blue: number): boolean;
    get_id(): number;
    get_position(x: number, y: number): void;
    get_rotations(): RRRotation;
    get_scale(): number;
    set_config_with_time(
        timestamp: number,
        x: number,
        y: number,
        mode: RRMode,
        rotation: RRRotation,
        outputs: RROutput,
        n_outputs: number,
        scale: number,
        global_scale: number
    ): boolean;
    set_gamma(size: number, red: number, green: number, blue: number): void;
    supports_rotation(rotation: RRRotation): boolean;
}

export class RRLabelerPrivate {
    static $gtype: GObject.GType<RRLabelerPrivate>;

    constructor(copy: RRLabelerPrivate);
}

export class RRMode {
    static $gtype: GObject.GType<RRMode>;

    constructor(copy: RRMode);

    // Members
    get_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void;
    get_freq(): number;
    get_freq_f(): number;
    get_height(): number;
    get_id(): number;
    get_width(): number;
}

export class RROutput {
    static $gtype: GObject.GType<RROutput>;

    constructor(copy: RROutput);

    // Members
    can_clone(clone: RROutput): boolean;
    get_backlight(): number;
    get_backlight_max(): number;
    get_backlight_min(): number;
    get_connector_type(): string;
    get_crtc(): RRCrtc;
    get_current_mode(): RRMode;
    get_edid_data(size: number): number;
    get_height_mm(): number;
    get_id(): number;
    get_ids_from_edid(vendor: string, product: number, serial: number): boolean;
    get_is_primary(): boolean;
    get_name(): string;
    get_position(x: number, y: number): void;
    get_possible_crtcs(): RRCrtc;
    get_preferred_mode(): RRMode;
    get_size_inches(): number;
    get_width_mm(): number;
    is_connected(): boolean;
    is_laptop(): boolean;
    list_modes(): RRMode;
    set_backlight(value: number): boolean;
    supports_mode(mode: RRMode): boolean;
}

export class RROutputInfoPrivate {
    static $gtype: GObject.GType<RROutputInfoPrivate>;

    constructor(copy: RROutputInfoPrivate);
}

export class RRScreenPrivate {
    static $gtype: GObject.GType<RRScreenPrivate>;

    constructor(copy: RRScreenPrivate);
}

export class WallClockPrivate {
    static $gtype: GObject.GType<WallClockPrivate>;

    constructor(copy: WallClockPrivate);
}

export class XkbInfoPrivate {
    static $gtype: GObject.GType<XkbInfoPrivate>;

    constructor(copy: XkbInfoPrivate);
}
