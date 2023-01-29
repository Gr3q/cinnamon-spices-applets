/**
 * XApp 1.0
 *
 * Generated from 1.0
 */

import * as Atk from "atk";
import * as Gio from "gio";
import * as GObject from "gobject";
import * as Gtk from "gtk";
import * as GLib from "glib";
import * as cairo from "cairo";

export function get_tmp_dir(): string;
export function pango_font_string_to_css(pango_font_string: string): string;
export function set_window_icon_from_file(window: Gtk.Window, file_name?: string | null): void;
export function set_window_icon_name(window: Gtk.Window, icon_name?: string | null): void;
export function set_window_progress(window: Gtk.Window, progress: number): void;
export function set_window_progress_pulse(window: Gtk.Window, pulse: boolean): void;
export function set_xid_icon_from_file(xid: number, file_name?: string | null): void;
export function set_xid_icon_name(xid: number, icon_name?: string | null): void;
export function set_xid_progress(xid: number, progress: number): void;
export function set_xid_progress_pulse(xid: number, pulse: boolean): void;
export function status_icon_interface_interface_info(): Gio.DBusInterfaceInfo;
export function status_icon_interface_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function util_get_session_is_running(): boolean;
export function util_gpu_offload_supported(): boolean;
export type FavoritesItemSelectedCallback = (favorites: Favorites, uri: string) => void;

export class IconSize {
    static $gtype: GObject.GType<IconSize>;

    constructor(copy: IconSize);

    // Fields
    static "16": number;
    static "22": number;
    static "24": number;
    static "32": number;
    static "48": number;
    static "96": number;
}

export namespace ScrollDirection {
    export const $gtype: GObject.GType<ScrollDirection>;
}

export enum ScrollDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
}

export namespace StatusIconState {
    export const $gtype: GObject.GType<StatusIconState>;
}

export enum StatusIconState {
    NATIVE = 0,
    FALLBACK = 1,
    NO_SUPPORT = 2,
}
export module Favorites {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Favorites extends GObject.Object {
    static $gtype: GObject.GType<Favorites>;

    constructor(properties?: Partial<Favorites.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Favorites.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Members

    add(uri: string): void;
    create_actions(mimetypes?: string | null): Gtk.Action[];
    create_menu(mimetypes: string | null, callback: FavoritesItemSelectedCallback): Gtk.Widget;
    find_by_display_name(display_name: string): FavoriteInfo;
    find_by_uri(uri: string): FavoriteInfo;
    get_favorites(mimetypes?: string[] | null): FavoriteInfo[];
    get_n_favorites(): number;
    launch(uri: string, timestamp: number): void;
    remove(uri: string): void;
    rename(old_uri: string, new_uri: string): void;
    static get_default(): Favorites;
}
export module GtkWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class GtkWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<GtkWindow>;

    constructor(properties?: Partial<GtkWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GtkWindow.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](type: Gtk.WindowType): GtkWindow;

    // Members

    set_icon_from_file(file_name?: string | null): void;
    // Conflicted with Gtk.Window.set_icon_from_file
    set_icon_from_file(...args: never[]): any;
    set_icon_name(icon_name?: string | null): void;
    set_progress(progress: number): void;
    set_progress_pulse(pulse: boolean): void;
}
export module IconChooserButton {
    export interface ConstructorProperties extends Gtk.Button.ConstructorProperties {
        [key: string]: any;
        category: string;
        icon: string;
        icon_size: Gtk.IconSize;
        iconSize: Gtk.IconSize;
    }
}
export class IconChooserButton
    extends Gtk.Button
    implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
{
    static $gtype: GObject.GType<IconChooserButton>;

    constructor(properties?: Partial<IconChooserButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconChooserButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get category(): string;
    set category(val: string);
    get icon(): string;
    set icon(val: string);
    get icon_size(): Gtk.IconSize;
    set icon_size(val: Gtk.IconSize);
    get iconSize(): Gtk.IconSize;
    set iconSize(val: Gtk.IconSize);

    // Implemented Properties

    get action_name(): string;
    set action_name(val: string);
    get actionName(): string;
    set actionName(val: string);
    get action_target(): GLib.Variant;
    set action_target(val: GLib.Variant);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get related_action(): Gtk.Action;
    set related_action(val: Gtk.Action);
    get relatedAction(): Gtk.Action;
    set relatedAction(val: Gtk.Action);
    get use_action_appearance(): boolean;
    set use_action_appearance(val: boolean);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): IconChooserButton;
    static new_with_size(icon_size: Gtk.IconSize): IconChooserButton;

    // Members

    get_dialog(): IconChooserDialog;
    get_icon(): string;
    set_default_category(category?: string | null): void;
    set_icon(icon?: string | null): void;
    set_icon_size(icon_size: Gtk.IconSize): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Gtk.Action): void;
    get_related_action(): Gtk.Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Gtk.Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Gtk.Action | null): void;
    vfunc_sync_action_properties(action?: Gtk.Action | null): void;
    vfunc_update(action: Gtk.Action, property_name: string): void;
}
export module IconChooserDialog {
    export interface ConstructorProperties extends GtkWindow.ConstructorProperties {
        [key: string]: any;
        allow_paths: boolean;
        allowPaths: boolean;
        default_icon: string;
        defaultIcon: string;
        icon_size: IconSize;
        iconSize: IconSize;
    }
}
export class IconChooserDialog extends GtkWindow implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<IconChooserDialog>;

    constructor(properties?: Partial<IconChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconChooserDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get allow_paths(): boolean;
    set allow_paths(val: boolean);
    get allowPaths(): boolean;
    set allowPaths(val: boolean);
    get default_icon(): string;
    set default_icon(val: string);
    get defaultIcon(): string;
    set defaultIcon(val: string);
    get icon_size(): IconSize;
    set icon_size(val: IconSize);
    get iconSize(): IconSize;
    set iconSize(val: IconSize);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close", callback: (_source: this) => void): number;
    connect_after(signal: "close", callback: (_source: this) => void): number;
    emit(signal: "close"): void;
    connect(signal: "select", callback: (_source: this) => void): number;
    connect_after(signal: "select", callback: (_source: this) => void): number;
    emit(signal: "select"): void;

    // Constructors

    static ["new"](): IconChooserDialog;

    // Members

    add_button(button: Gtk.Widget, packing: Gtk.PackType, response_id: Gtk.ResponseType): void;
    add_custom_category(name: string, icons: string[]): void;
    get_default_icon(): string;
    get_icon_string(): string;
    run(): number;
    run_with_category(category: string): number;
    run_with_icon(icon: string): number;
    set_default_icon(icon: string): void;
}
export module KbdLayoutController {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        enabled: boolean;
    }
}
export class KbdLayoutController extends GObject.Object {
    static $gtype: GObject.GType<KbdLayoutController>;

    constructor(properties?: Partial<KbdLayoutController.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<KbdLayoutController.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get enabled(): boolean;

    // Fields
    parent_object: GObject.Object;
    priv: KbdLayoutControllerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "config-changed", callback: (_source: this) => void): number;
    connect_after(signal: "config-changed", callback: (_source: this) => void): number;
    emit(signal: "config-changed"): void;
    connect(signal: "layout-changed", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "layout-changed", callback: (_source: this, object: number) => void): number;
    emit(signal: "layout-changed", object: number): void;

    // Constructors

    static ["new"](): KbdLayoutController;

    // Members

    get_all_names(): string[];
    get_current_flag_id(): number;
    get_current_group(): number;
    get_current_icon_name(): string;
    get_current_name(): string;
    get_current_short_group_label(): string;
    get_current_variant_label(): string;
    get_enabled(): boolean;
    get_flag_id_for_group(group: number): number;
    get_icon_name_for_group(group: number): string;
    get_short_group_label_for_group(group: number): string;
    get_variant_label_for_group(group: number): string;
    next_group(): void;
    previous_group(): void;
    set_current_group(group: number): void;
    static render_cairo_subscript(
        cr: cairo.Context,
        x: number,
        y: number,
        width: number,
        height: number,
        subscript: number
    ): void;
}
export module MonitorBlanker {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class MonitorBlanker extends GObject.Object {
    static $gtype: GObject.GType<MonitorBlanker>;

    constructor(properties?: Partial<MonitorBlanker.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MonitorBlanker.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): MonitorBlanker;

    // Members

    are_monitors_blanked(): boolean;
    blank_other_monitors(window: Gtk.Window): void;
    unblank_monitors(): void;
}
export module ObjectManagerClient {
    export interface ConstructorProperties extends Gio.DBusObjectManagerClient.ConstructorProperties {
        [key: string]: any;
    }
}
export class ObjectManagerClient
    extends Gio.DBusObjectManagerClient
    implements Gio.AsyncInitable<ObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable
{
    static $gtype: GObject.GType<ObjectManagerClient>;

    constructor(properties?: Partial<ObjectManagerClient.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ObjectManagerClient.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): ObjectManagerClient;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;
    static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ObjectManagerClient;
    // Conflicted with Gio.DBusObjectManagerClient.new_for_bus_sync
    static new_for_bus_sync(...args: never[]): any;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ObjectManagerClient;
    // Conflicted with Gio.DBusObjectManagerClient.new_sync
    static new_sync(...args: never[]): any;

    // Members

    static get_proxy_type(
        manager: Gio.DBusObjectManagerClient,
        object_path: string,
        interface_name?: string | null,
        user_data?: any | null
    ): GObject.GType;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null
    ): void;
    // Conflicted with Gio.DBusObjectManagerClient.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusObjectManagerClientFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null
    ): void;
    // Conflicted with Gio.DBusObjectManagerClient.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): ObjectManagerClient;
    // Conflicted with Gio.DBusObjectManagerClient.new_finish
    new_finish(...args: never[]): any;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;
    get_object(object_path: string): Gio.DBusObject | null;
    get_object_path(): string;
    get_objects(): Gio.DBusObject[];
    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;
    vfunc_get_object(object_path: string): Gio.DBusObject | null;
    vfunc_get_object_path(): string;
    vfunc_get_objects(): Gio.DBusObject[];
    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
    vfunc_object_added(object: Gio.DBusObject): void;
    vfunc_object_removed(object: Gio.DBusObject): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module ObjectProxy {
    export interface ConstructorProperties extends Gio.DBusObjectProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ObjectProxy extends Gio.DBusObjectProxy implements Gio.DBusObject, Object {
    static $gtype: GObject.GType<ObjectProxy>;

    constructor(properties?: Partial<ObjectProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ObjectProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get status_icon_interface(): StatusIconInterface;
    set status_icon_interface(val: StatusIconInterface);
    get statusIconInterface(): StatusIconInterface;
    set statusIconInterface(val: StatusIconInterface);

    // Constructors

    static ["new"](connection: Gio.DBusConnection, object_path: string): ObjectProxy;

    // Implemented Members

    get_interface(interface_name: string): Gio.DBusInterface | null;
    get_interfaces(): Gio.DBusInterface[];
    get_object_path(): string;
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;
    vfunc_get_interfaces(): Gio.DBusInterface[];
    vfunc_get_object_path(): string;
    vfunc_interface_added(interface_: Gio.DBusInterface): void;
    vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    get_status_icon_interface(): StatusIconInterface | null;
}
export module ObjectSkeleton {
    export interface ConstructorProperties extends Gio.DBusObjectSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class ObjectSkeleton extends Gio.DBusObjectSkeleton implements Gio.DBusObject, Object {
    static $gtype: GObject.GType<ObjectSkeleton>;

    constructor(properties?: Partial<ObjectSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ObjectSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get status_icon_interface(): StatusIconInterface;
    set status_icon_interface(val: StatusIconInterface);
    get statusIconInterface(): StatusIconInterface;
    set statusIconInterface(val: StatusIconInterface);

    // Constructors

    static ["new"](object_path: string): ObjectSkeleton;

    // Members

    set_status_icon_interface(interface_?: StatusIconInterface | null): void;

    // Implemented Members

    get_interface(interface_name: string): Gio.DBusInterface | null;
    get_interfaces(): Gio.DBusInterface[];
    get_object_path(): string;
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;
    vfunc_get_interfaces(): Gio.DBusInterface[];
    vfunc_get_object_path(): string;
    vfunc_interface_added(interface_: Gio.DBusInterface): void;
    vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    get_status_icon_interface(): StatusIconInterface | null;
}
export module PreferencesWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class PreferencesWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<PreferencesWindow>;

    constructor(properties?: Partial<PreferencesWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PreferencesWindow.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close", callback: (_source: this) => void): number;
    connect_after(signal: "close", callback: (_source: this) => void): number;
    emit(signal: "close"): void;

    // Constructors

    static ["new"](): PreferencesWindow;

    // Members

    add_button(button: Gtk.Widget, pack_type: Gtk.PackType): void;
    add_page(widget: Gtk.Widget, name: string, title: string): void;
    vfunc_close(): void;
}
export module StackSidebar {
    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {
        [key: string]: any;
        stack: Gtk.Stack;
    }
}
export class StackSidebar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<StackSidebar>;

    constructor(properties?: Partial<StackSidebar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StackSidebar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get stack(): Gtk.Stack;
    set stack(val: Gtk.Stack);

    // Constructors

    static ["new"](): StackSidebar;

    // Members

    get_stack(): Gtk.Stack | null;
    set_stack(stack: Gtk.Stack): void;
}
export module StatusIcon {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        icon_size: number;
        iconSize: number;
        name: string;
        primary_menu: Gtk.Widget;
        primaryMenu: Gtk.Widget;
        secondary_menu: Gtk.Widget;
        secondaryMenu: Gtk.Widget;
    }
}
export class StatusIcon extends GObject.Object {
    static $gtype: GObject.GType<StatusIcon>;

    constructor(properties?: Partial<StatusIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusIcon.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get icon_size(): number;
    set icon_size(val: number);
    get iconSize(): number;
    set iconSize(val: number);
    get name(): string;
    set name(val: string);
    get primary_menu(): Gtk.Widget;
    set primary_menu(val: Gtk.Widget);
    get primaryMenu(): Gtk.Widget;
    set primaryMenu(val: Gtk.Widget);
    get secondary_menu(): Gtk.Widget;
    set secondary_menu(val: Gtk.Widget);
    get secondaryMenu(): Gtk.Widget;
    set secondaryMenu(val: Gtk.Widget);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this, button: number, time: number) => void): number;
    connect_after(signal: "activate", callback: (_source: this, button: number, time: number) => void): number;
    emit(signal: "activate", button: number, time: number): void;
    connect(
        signal: "button-press-event",
        callback: (_source: this, x: number, y: number, button: number, time: number, panel_position: number) => void
    ): number;
    connect_after(
        signal: "button-press-event",
        callback: (_source: this, x: number, y: number, button: number, time: number, panel_position: number) => void
    ): number;
    emit(
        signal: "button-press-event",
        x: number,
        y: number,
        button: number,
        time: number,
        panel_position: number
    ): void;
    connect(
        signal: "button-release-event",
        callback: (_source: this, x: number, y: number, button: number, time: number, panel_position: number) => void
    ): number;
    connect_after(
        signal: "button-release-event",
        callback: (_source: this, x: number, y: number, button: number, time: number, panel_position: number) => void
    ): number;
    emit(
        signal: "button-release-event",
        x: number,
        y: number,
        button: number,
        time: number,
        panel_position: number
    ): void;
    connect(
        signal: "scroll-event",
        callback: (_source: this, amount: number, direction: ScrollDirection, time: number) => void
    ): number;
    connect_after(
        signal: "scroll-event",
        callback: (_source: this, amount: number, direction: ScrollDirection, time: number) => void
    ): number;
    emit(signal: "scroll-event", amount: number, direction: ScrollDirection, time: number): void;
    connect(signal: "state-changed", callback: (_source: this, new_state: StatusIconState) => void): number;
    connect_after(signal: "state-changed", callback: (_source: this, new_state: StatusIconState) => void): number;
    emit(signal: "state-changed", new_state: StatusIconState): void;

    // Constructors

    static ["new"](): StatusIcon;
    static new_with_name(name: string): StatusIcon;

    // Members

    get_icon_size(): number;
    get_primary_menu(): Gtk.Widget;
    get_secondary_menu(): Gtk.Widget;
    get_state(): StatusIconState;
    get_visible(): boolean;
    popup_menu(
        menu: Gtk.Menu | null,
        x: number,
        y: number,
        button: number,
        _time: number,
        panel_position: number
    ): void;
    set_icon_name(icon_name: string): void;
    set_label(label: string): void;
    set_metadata(metadata?: string | null): void;
    set_name(name: string): void;
    set_primary_menu(menu?: Gtk.Menu | null): void;
    set_secondary_menu(menu?: Gtk.Menu | null): void;
    set_tooltip_text(tooltip_text: string): void;
    set_visible(visible: boolean): void;
    static any_monitors(): boolean;
}
export module StatusIconInterfaceProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class StatusIconInterfaceProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<StatusIconInterfaceProxy>, Gio.DBusInterface, Gio.Initable, StatusIconInterface
{
    static $gtype: GObject.GType<StatusIconInterfaceProxy>;

    constructor(properties?: Partial<StatusIconInterfaceProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusIconInterfaceProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get icon_size(): number;
    set icon_size(val: number);
    get iconSize(): number;
    set iconSize(val: number);
    get label(): string;
    set label(val: string);
    get metadata(): string;
    set metadata(val: string);
    get name(): string;
    set name(val: string);
    get primary_menu_is_open(): boolean;
    set primary_menu_is_open(val: boolean);
    get primaryMenuIsOpen(): boolean;
    set primaryMenuIsOpen(val: boolean);
    get secondary_menu_is_open(): boolean;
    set secondary_menu_is_open(val: boolean);
    get secondaryMenuIsOpen(): boolean;
    set secondaryMenuIsOpen(val: boolean);
    get tooltip_text(): string;
    set tooltip_text(val: string);
    get tooltipText(): string;
    set tooltipText(val: string);
    get visible(): boolean;
    set visible(val: boolean);

    // Constructors

    static new_finish(res: Gio.AsyncResult): StatusIconInterfaceProxy;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;
    static new_for_bus_finish(res: Gio.AsyncResult): StatusIconInterfaceProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): StatusIconInterfaceProxy;
    // Conflicted with Gio.DBusProxy.new_for_bus_sync
    static new_for_bus_sync(...args: never[]): any;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): StatusIconInterfaceProxy;
    // Conflicted with Gio.DBusProxy.new_sync
    static new_sync(...args: never[]): any;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<StatusIconInterfaceProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<StatusIconInterfaceProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): StatusIconInterfaceProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
    call_button_press(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_button_press_finish(res: Gio.AsyncResult): boolean;
    call_button_press_sync(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_button_release(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_button_release_finish(res: Gio.AsyncResult): boolean;
    call_button_release_sync(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_scroll(
        arg_delta: number,
        arg_orientation: number,
        arg_time: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_scroll_finish(res: Gio.AsyncResult): boolean;
    call_scroll_sync(
        arg_delta: number,
        arg_orientation: number,
        arg_time: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_button_press(invocation: Gio.DBusMethodInvocation): void;
    complete_button_release(invocation: Gio.DBusMethodInvocation): void;
    complete_scroll(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_button_press(
        invocation: Gio.DBusMethodInvocation,
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number
    ): boolean;
    vfunc_handle_button_release(
        invocation: Gio.DBusMethodInvocation,
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number
    ): boolean;
    vfunc_handle_scroll(
        invocation: Gio.DBusMethodInvocation,
        arg_delta: number,
        arg_orientation: number,
        arg_time: number
    ): boolean;
}
export module StatusIconInterfaceSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class StatusIconInterfaceSkeleton
    extends Gio.DBusInterfaceSkeleton
    implements Gio.DBusInterface, StatusIconInterface
{
    static $gtype: GObject.GType<StatusIconInterfaceSkeleton>;

    constructor(properties?: Partial<StatusIconInterfaceSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusIconInterfaceSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get icon_size(): number;
    set icon_size(val: number);
    get iconSize(): number;
    set iconSize(val: number);
    get label(): string;
    set label(val: string);
    get metadata(): string;
    set metadata(val: string);
    get name(): string;
    set name(val: string);
    get primary_menu_is_open(): boolean;
    set primary_menu_is_open(val: boolean);
    get primaryMenuIsOpen(): boolean;
    set primaryMenuIsOpen(val: boolean);
    get secondary_menu_is_open(): boolean;
    set secondary_menu_is_open(val: boolean);
    get secondaryMenuIsOpen(): boolean;
    set secondaryMenuIsOpen(val: boolean);
    get tooltip_text(): string;
    set tooltip_text(val: string);
    get tooltipText(): string;
    set tooltipText(val: string);
    get visible(): boolean;
    set visible(val: boolean);

    // Constructors

    static ["new"](): StatusIconInterfaceSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    call_button_press(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_button_press_finish(res: Gio.AsyncResult): boolean;
    call_button_press_sync(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_button_release(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_button_release_finish(res: Gio.AsyncResult): boolean;
    call_button_release_sync(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_scroll(
        arg_delta: number,
        arg_orientation: number,
        arg_time: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_scroll_finish(res: Gio.AsyncResult): boolean;
    call_scroll_sync(
        arg_delta: number,
        arg_orientation: number,
        arg_time: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_button_press(invocation: Gio.DBusMethodInvocation): void;
    complete_button_release(invocation: Gio.DBusMethodInvocation): void;
    complete_scroll(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_button_press(
        invocation: Gio.DBusMethodInvocation,
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number
    ): boolean;
    vfunc_handle_button_release(
        invocation: Gio.DBusMethodInvocation,
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number
    ): boolean;
    vfunc_handle_scroll(
        invocation: Gio.DBusMethodInvocation,
        arg_delta: number,
        arg_orientation: number,
        arg_time: number
    ): boolean;
}
export module StatusIconMonitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class StatusIconMonitor extends GObject.Object {
    static $gtype: GObject.GType<StatusIconMonitor>;

    constructor(properties?: Partial<StatusIconMonitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusIconMonitor.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "icon-added", callback: (_source: this, proxy: StatusIconInterfaceProxy) => void): number;
    connect_after(signal: "icon-added", callback: (_source: this, proxy: StatusIconInterfaceProxy) => void): number;
    emit(signal: "icon-added", proxy: StatusIconInterfaceProxy): void;
    connect(signal: "icon-removed", callback: (_source: this, proxy: StatusIconInterfaceProxy) => void): number;
    connect_after(signal: "icon-removed", callback: (_source: this, proxy: StatusIconInterfaceProxy) => void): number;
    emit(signal: "icon-removed", proxy: StatusIconInterfaceProxy): void;

    // Constructors

    static ["new"](): StatusIconMonitor;

    // Members

    list_icons(): StatusIconMonitor[];
}
export module StyleManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        widget: Gtk.Widget;
    }
}
export class StyleManager extends GObject.Object {
    static $gtype: GObject.GType<StyleManager>;

    constructor(properties?: Partial<StyleManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get widget(): Gtk.Widget;
    set widget(val: Gtk.Widget);

    // Constructors

    static ["new"](): StyleManager;

    // Members

    get_widget(): Gtk.Widget;
    remove_style_property(name: string): void;
    set_from_pango_font_string(desc_string: string): void;
    set_style_property(name: string, value: string): void;
    set_widget(widget: Gtk.Widget): void;
}

export class FavoriteInfo {
    static $gtype: GObject.GType<FavoriteInfo>;

    constructor(
        properties?: Partial<{
            uri?: string;
            display_name?: string;
            cached_mimetype?: string;
        }>
    );
    constructor(copy: FavoriteInfo);

    // Fields
    uri: string;
    display_name: string;
    cached_mimetype: string;

    // Members
    copy(): FavoriteInfo;
    free(): void;
}

export class KbdLayoutControllerPrivate {
    static $gtype: GObject.GType<KbdLayoutControllerPrivate>;

    constructor(copy: KbdLayoutControllerPrivate);
}

export class ObjectManagerClientPrivate {
    static $gtype: GObject.GType<ObjectManagerClientPrivate>;

    constructor(copy: ObjectManagerClientPrivate);
}

export class ObjectProxyPrivate {
    static $gtype: GObject.GType<ObjectProxyPrivate>;

    constructor(copy: ObjectProxyPrivate);
}

export class ObjectSkeletonPrivate {
    static $gtype: GObject.GType<ObjectSkeletonPrivate>;

    constructor(copy: ObjectSkeletonPrivate);
}

export class StatusIconInterfaceProxyPrivate {
    static $gtype: GObject.GType<StatusIconInterfaceProxyPrivate>;

    constructor(copy: StatusIconInterfaceProxyPrivate);
}

export class StatusIconInterfaceSkeletonPrivate {
    static $gtype: GObject.GType<StatusIconInterfaceSkeletonPrivate>;

    constructor(copy: StatusIconInterfaceSkeletonPrivate);
}

export class VisibilityGroup {
    static $gtype: GObject.GType<VisibilityGroup>;

    constructor(visible: boolean, sensitive: boolean, widgets?: Gtk.Widget[] | null);
    constructor(copy: VisibilityGroup);

    // Fields
    widgets: Gtk.Widget[];
    visible: boolean;
    sensitive: boolean;

    // Constructors
    static ["new"](visible: boolean, sensitive: boolean, widgets?: Gtk.Widget[] | null): VisibilityGroup;

    // Members
    add_widget(widget: Gtk.Widget): void;
    get_sensitive(): boolean;
    get_visible(): boolean;
    get_widgets(): Gtk.Widget[];
    hide(): void;
    remove_widget(widget: Gtk.Widget): boolean;
    set_sensitive(sensitive: boolean): void;
    set_visible(visible: boolean): void;
    set_widgets(widgets?: Gtk.Widget[] | null): void;
    show(): void;
}

export interface ObjectNamespace {
    $gtype: GObject.GType<Object>;
    prototype: ObjectPrototype;
}
export type Object = ObjectPrototype;
export interface ObjectPrototype extends Gio.DBusObject {
    // Properties
    status_icon_interface: StatusIconInterface;
    statusIconInterface: StatusIconInterface;

    // Members

    get_status_icon_interface(): StatusIconInterface | null;
}

export const Object: ObjectNamespace;

export interface StatusIconInterfaceNamespace {
    $gtype: GObject.GType<StatusIconInterface>;
    prototype: StatusIconInterfacePrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type StatusIconInterface = StatusIconInterfacePrototype;
export interface StatusIconInterfacePrototype extends GObject.Object {
    // Properties
    icon_name: string;
    iconName: string;
    icon_size: number;
    iconSize: number;
    label: string;
    metadata: string;
    name: string;
    primary_menu_is_open: boolean;
    primaryMenuIsOpen: boolean;
    secondary_menu_is_open: boolean;
    secondaryMenuIsOpen: boolean;
    tooltip_text: string;
    tooltipText: string;
    visible: boolean;

    // Members

    call_button_press(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_button_press_finish(res: Gio.AsyncResult): boolean;
    call_button_press_sync(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_button_release(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_button_release_finish(res: Gio.AsyncResult): boolean;
    call_button_release_sync(
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    call_scroll(
        arg_delta: number,
        arg_orientation: number,
        arg_time: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_scroll_finish(res: Gio.AsyncResult): boolean;
    call_scroll_sync(
        arg_delta: number,
        arg_orientation: number,
        arg_time: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_button_press(invocation: Gio.DBusMethodInvocation): void;
    complete_button_release(invocation: Gio.DBusMethodInvocation): void;
    complete_scroll(invocation: Gio.DBusMethodInvocation): void;
    vfunc_handle_button_press(
        invocation: Gio.DBusMethodInvocation,
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number
    ): boolean;
    vfunc_handle_button_release(
        invocation: Gio.DBusMethodInvocation,
        arg_x: number,
        arg_y: number,
        arg_button: number,
        arg_time: number,
        arg_panel_position: number
    ): boolean;
    vfunc_handle_scroll(
        invocation: Gio.DBusMethodInvocation,
        arg_delta: number,
        arg_orientation: number,
        arg_time: number
    ): boolean;
}

export const StatusIconInterface: StatusIconInterfaceNamespace;
