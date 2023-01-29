/**
 * Cinnamon 0.1
 *
 * Generated from 0.1
 */

import * as Gio from "gio";
import * as Atk from "atk";
import * as Gtk from "gtk";
import * as GObject from "gobject";
import * as Clutter from "clutter";
import * as Cogl from "cogl";
import * as St from "st";
import * as cairo from "cairo";
import * as Meta from "meta";
import * as Soup from "soup";
import * as CMenu from "cmenu";
import * as GLib from "glib";
import * as Json from "json";
import * as Gdk from "gdk";

export function breakpoint(): void;
export function calendar_server_interface_info(): Gio.DBusInterfaceInfo;
export function calendar_server_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function get_event_state(event: Clutter.Event): Clutter.ModifierType;
export function get_file_contents_utf8(path: string, callback: FileContentsCallback): void;
export function get_file_contents_utf8_sync(path: string): string;
export function get_gpu_offload_supported(): boolean;
export function parse_search_provider(data: string): [boolean, string, string, string[], string];
export function shader_effect_set_double_uniform(effect: Clutter.ShaderEffect, name: string, value: number): void;
export function util_composite_capture_images(
    captures: Clutter.Capture,
    n_captures: number,
    x: number,
    y: number,
    target_width: number,
    target_height: number,
    target_scale: number
): cairo.Surface;
export function util_format_date(format: string, time_ms: number): string;
export function util_get_content_for_window_actor(
    window_actor: Meta.WindowActor,
    window_rect: Meta.Rectangle
): Clutter.Content | null;
export function util_get_icon_for_uri(text_uri: string): Gio.Icon;
export function util_get_label_for_uri(text_uri: string): string;
export function util_get_transformed_allocation(actor: Clutter.Actor): Clutter.ActorBox;
export function util_get_week_start(): number;
export function util_set_hidden_from_pick(actor: Clutter.Actor, hidden: boolean): void;
export function write_soup_message_to_stream(stream: Gio.OutputStream, message: Soup.Message): void;
export function write_string_to_stream(stream: Gio.OutputStream, str: string): boolean;
export type FileContentsCallback = (utf8_contents: string) => void;
export type LeisureFunction = (data?: any | null) => void;
export type PerfReplayFunction = (time: number, name: string, signature: string, arg: GObject.Value | any) => void;
export type PerfStatisticsCallback = (perf_log: PerfLog, data?: any | null) => void;
export type ScreenshotCallback = (
    screenshot: Screenshot,
    success: boolean,
    screenshot_area: cairo.RectangleInt
) => void;

export namespace AppState {
    export const $gtype: GObject.GType<AppState>;
}

export enum AppState {
    STOPPED = 0,
    STARTING = 1,
    RUNNING = 2,
}

export namespace Cursor {
    export const $gtype: GObject.GType<Cursor>;
}

export enum Cursor {
    DND_IN_DRAG = 0,
    DND_UNSUPPORTED_TARGET = 1,
    DND_MOVE = 2,
    DND_COPY = 3,
    POINTING_HAND = 4,
    RESIZE_BOTTOM = 5,
    RESIZE_TOP = 6,
    RESIZE_LEFT = 7,
    RESIZE_RIGHT = 8,
    RESIZE_BOTTOM_RIGHT = 9,
    RESIZE_BOTTOM_LEFT = 10,
    RESIZE_TOP_RIGHT = 11,
    RESIZE_TOP_LEFT = 12,
    CROSSHAIR = 13,
    TEXT = 14,
}

export namespace SnippetHook {
    export const $gtype: GObject.GType<SnippetHook>;
}

export enum SnippetHook {
    VERTEX = 0,
    VERTEX_TRANSFORM = 1,
    FRAGMENT = 2048,
    TEXTURE_COORD_TRANSFORM = 4096,
    LAYER_FRAGMENT = 6144,
    TEXTURE_LOOKUP = 6145,
}

export namespace StageInputMode {
    export const $gtype: GObject.GType<StageInputMode>;
}

export enum StageInputMode {
    NONREACTIVE = 0,
    NORMAL = 1,
    FOCUSED = 2,
    FULLSCREEN = 3,
}

export namespace ActionMode {
    export const $gtype: GObject.GType<ActionMode>;
}

export enum ActionMode {
    NONE = 0,
    NORMAL = 1,
    OVERVIEW = 2,
    LOCK_SCREEN = 4,
    UNLOCK_SCREEN = 8,
    LOGIN_SCREEN = 16,
    SYSTEM_MODAL = 32,
    LOOKING_GLASS = 64,
    POPUP = 128,
    ALL = -1,
}
export module App {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        state: AppState;
    }
}
export class App extends GObject.Object {
    static $gtype: GObject.GType<App>;

    constructor(properties?: Partial<App.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<App.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get state(): AppState;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "windows-changed", callback: (_source: this) => void): number;
    connect_after(signal: "windows-changed", callback: (_source: this) => void): number;
    emit(signal: "windows-changed"): void;

    // Members

    activate(): void;
    activate_full(workspace: number, timestamp: number): void;
    activate_window(window: Meta.Window | null, timestamp: number): void;
    can_open_new_window(): boolean;
    create_icon_texture(size: number): Clutter.Actor;
    create_icon_texture_for_window(size: number, for_window?: Meta.Window | null): Clutter.Actor;
    get_app_info(): CMenu.DesktopAppInfo;
    get_description(): string;
    get_flatpak_app_id(): string;
    get_id(): string;
    get_is_flatpak(): boolean;
    get_keywords(): string;
    get_n_windows(): number;
    get_name(): string;
    get_nodisplay(): boolean;
    get_pids(): number[];
    get_state(): AppState;
    get_tree_entry(): CMenu.TreeEntry;
    get_windows(): Meta.Window[];
    is_on_workspace(workspace: Meta.Workspace): boolean;
    is_window_backed(): boolean;
    launch(timestamp: number, uris: string[], workspace: number): [boolean, string];
    launch_offloaded(timestamp: number, uris: string[], workspace: number): [boolean, string];
    open_new_window(workspace: number): void;
    request_quit(): boolean;
}
export module AppSystem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AppSystem extends GObject.Object {
    static $gtype: GObject.GType<AppSystem>;

    constructor(properties?: Partial<AppSystem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppSystem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: AppSystemPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "app-state-changed", callback: (_source: this, object: App) => void): number;
    connect_after(signal: "app-state-changed", callback: (_source: this, object: App) => void): number;
    emit(signal: "app-state-changed", object: App): void;
    connect(signal: "installed-changed", callback: (_source: this) => void): number;
    connect_after(signal: "installed-changed", callback: (_source: this) => void): number;
    emit(signal: "installed-changed"): void;

    // Members

    get_all(): App[];
    get_running(): App[];
    get_tree(): CMenu.Tree;
    lookup_app(id: string): App;
    lookup_desktop_wmclass(wmclass?: string | null): App;
    lookup_flatpak_app_id(app_id: string): App;
    lookup_startup_wmclass(wmclass?: string | null): App;
    vfunc_favorites_changed(): void;
    vfunc_installed_changed(): void;
    static get_default(): AppSystem;
}
export module CalendarServerProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class CalendarServerProxy
    extends Gio.DBusProxy
    implements CalendarServer, Gio.AsyncInitable<CalendarServerProxy>, Gio.DBusInterface, Gio.Initable
{
    static $gtype: GObject.GType<CalendarServerProxy>;

    constructor(properties?: Partial<CalendarServerProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CalendarServerProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get since(): number;
    set since(val: number);
    get status(): number;
    set status(val: number);
    get until(): number;
    set until(val: number);

    // Constructors

    static new_finish(res: Gio.AsyncResult): CalendarServerProxy;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;
    static new_for_bus_finish(res: Gio.AsyncResult): CalendarServerProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): CalendarServerProxy;
    // Conflicted with Gio.DBusProxy.new_for_bus_sync
    static new_for_bus_sync(...args: never[]): any;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): CalendarServerProxy;
    // Conflicted with Gio.DBusProxy.new_sync
    static new_sync(...args: never[]): any;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<CalendarServerProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<CalendarServerProxy> | null
    ): void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_exit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
    call_exit_finish(res: Gio.AsyncResult): boolean;
    call_exit_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_time_range(
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_time_range_finish(res: Gio.AsyncResult): boolean;
    call_set_time_range_sync(
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_exit(invocation: Gio.DBusMethodInvocation): void;
    complete_set_time_range(invocation: Gio.DBusMethodInvocation): void;
    emit_client_disappeared(arg_source_uid: string): void;
    emit_events_added_or_updated(arg_events: GLib.Variant): void;
    emit_events_removed(arg_ids: string): void;
    vfunc_client_disappeared(arg_source_uid: string): void;
    vfunc_events_added_or_updated(arg_events: GLib.Variant): void;
    vfunc_events_removed(arg_ids: string): void;
    vfunc_handle_exit(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_time_range(
        invocation: Gio.DBusMethodInvocation,
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean
    ): boolean;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): CalendarServerProxy;
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
}
export module CalendarServerSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class CalendarServerSkeleton extends Gio.DBusInterfaceSkeleton implements CalendarServer, Gio.DBusInterface {
    static $gtype: GObject.GType<CalendarServerSkeleton>;

    constructor(properties?: Partial<CalendarServerSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CalendarServerSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get since(): number;
    set since(val: number);
    get status(): number;
    set status(val: number);
    get until(): number;
    set until(val: number);

    // Constructors

    static ["new"](): CalendarServerSkeleton;

    // Implemented Members

    call_exit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
    call_exit_finish(res: Gio.AsyncResult): boolean;
    call_exit_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_time_range(
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_time_range_finish(res: Gio.AsyncResult): boolean;
    call_set_time_range_sync(
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_exit(invocation: Gio.DBusMethodInvocation): void;
    complete_set_time_range(invocation: Gio.DBusMethodInvocation): void;
    emit_client_disappeared(arg_source_uid: string): void;
    emit_events_added_or_updated(arg_events: GLib.Variant): void;
    emit_events_removed(arg_ids: string): void;
    vfunc_client_disappeared(arg_source_uid: string): void;
    vfunc_events_added_or_updated(arg_events: GLib.Variant): void;
    vfunc_events_removed(arg_ids: string): void;
    vfunc_handle_exit(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_time_range(
        invocation: Gio.DBusMethodInvocation,
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean
    ): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module DocSystem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DocSystem extends GObject.Object {
    static $gtype: GObject.GType<DocSystem>;

    constructor(properties?: Partial<DocSystem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DocSystem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocSystemPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Members

    get_all(): Gtk.RecentInfo[];
    static get_default(): DocSystem;
}
export module EmbeddedWindow {
    export interface ConstructorProperties extends Gtk.Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class EmbeddedWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
    static $gtype: GObject.GType<EmbeddedWindow>;

    constructor(properties?: Partial<EmbeddedWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EmbeddedWindow.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): EmbeddedWindow;
}
export module GLSLQuad {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLSLQuad<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<GLSLQuad>;

    constructor(properties?: Partial<GLSLQuad.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<GLSLQuad.ConstructorProperties<A>>, ...args: any[]): void;

    // Members

    add_glsl_snippet(hook: SnippetHook, declarations: string, code: string, is_replace: boolean): void;
    get_uniform_location(name: string): number;
    set_uniform_float(uniform: number, n_components: number, value: number[]): void;
    vfunc_build_pipeline(): void;

    // Implemented Members

    find_property(property_name: string): GObject.ParamSpec;
    get_initial_state(property_name: string, value: GObject.Value | any): void;
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
    set_final_state(property_name: string, value: GObject.Value | any): void;
    vfunc_animate_property(
        animation: Clutter.Animation,
        property_name: string,
        initial_value: GObject.Value | any,
        final_value: GObject.Value | any,
        progress: number,
        value: GObject.Value | any
    ): boolean;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
    vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: GObject.Value | any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: GObject.Value | any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    // Conflicted with Clutter.Actor.get_children
    get_children(...args: never[]): any;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
    set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
    vfunc_set_id(id_: string): void;
}
export module GenericContainer {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends St.Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class GenericContainer<A extends Clutter.Actor = Clutter.Actor>
    extends St.Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<GenericContainer>;

    constructor(properties?: Partial<GenericContainer.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<GenericContainer.ConstructorProperties<A>>, ...args: any[]): void;

    // Fields
    priv: GenericContainerPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "allocate",
        callback: (_source: this, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void
    ): number;
    connect_after(
        signal: "allocate",
        callback: (_source: this, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void
    ): number;
    emit(signal: "allocate", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void;
    connect(
        signal: "get-preferred-height",
        callback: (_source: this, for_width: number, alloc: GenericContainerAllocation) => void
    ): number;
    connect_after(
        signal: "get-preferred-height",
        callback: (_source: this, for_width: number, alloc: GenericContainerAllocation) => void
    ): number;
    emit(signal: "get-preferred-height", for_width: number, alloc: GenericContainerAllocation): void;
    connect(
        signal: "get-preferred-width",
        callback: (_source: this, for_height: number, alloc: GenericContainerAllocation) => void
    ): number;
    connect_after(
        signal: "get-preferred-width",
        callback: (_source: this, for_height: number, alloc: GenericContainerAllocation) => void
    ): number;
    emit(signal: "get-preferred-width", for_height: number, alloc: GenericContainerAllocation): void;

    // Members

    get_n_skip_paint(): number;
    get_skip_paint(child: A): boolean;
    set_skip_paint(child: A, skip: boolean): void;

    // Implemented Members

    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: GObject.Value | any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: GObject.Value | any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    // Conflicted with Clutter.Actor.get_children
    get_children(...args: never[]): any;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
}
export module Global {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        background_actor: Clutter.Actor;
        backgroundActor: Clutter.Actor;
        bottom_window_group: Clutter.Actor;
        bottomWindowGroup: Clutter.Actor;
        datadir: string;
        desklet_container: Clutter.Actor;
        deskletContainer: Clutter.Actor;
        display: Meta.Display;
        focus_manager: St.FocusManager;
        focusManager: St.FocusManager;
        gdk_screen: Gdk.Screen;
        gdkScreen: Gdk.Screen;
        imagedir: string;
        overlay_group: Clutter.Actor;
        overlayGroup: Clutter.Actor;
        screen: Screen;
        screen_height: number;
        screenHeight: number;
        screen_width: number;
        screenWidth: number;
        session_running: boolean;
        sessionRunning: boolean;
        settings: Gio.Settings;
        stage: Clutter.Actor;
        stage_input_mode: StageInputMode;
        stageInputMode: StageInputMode;
        top_window_group: Clutter.Actor;
        topWindowGroup: Clutter.Actor;
        ui_scale: number;
        uiScale: number;
        userdatadir: string;
        window_group: Clutter.Actor;
        windowGroup: Clutter.Actor;
        window_manager: WM;
        windowManager: WM;
        workspace_manager: Meta.WorkspaceManager;
        workspaceManager: Meta.WorkspaceManager;
    }
}
export class Global extends GObject.Object {
    static $gtype: GObject.GType<Global>;

    constructor(properties?: Partial<Global.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Global.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get background_actor(): Clutter.Actor;
    get backgroundActor(): Clutter.Actor;
    get bottom_window_group(): Clutter.Actor;
    get bottomWindowGroup(): Clutter.Actor;
    get datadir(): string;
    get desklet_container(): Clutter.Actor;
    get deskletContainer(): Clutter.Actor;
    get display(): Meta.Display;
    get focus_manager(): St.FocusManager;
    get focusManager(): St.FocusManager;
    get gdk_screen(): Gdk.Screen;
    get gdkScreen(): Gdk.Screen;
    get imagedir(): string;
    get overlay_group(): Clutter.Actor;
    get overlayGroup(): Clutter.Actor;
    get screen(): Screen;
    get screen_height(): number;
    get screenHeight(): number;
    get screen_width(): number;
    get screenWidth(): number;
    get session_running(): boolean;
    get sessionRunning(): boolean;
    get settings(): Gio.Settings;
    get stage(): Clutter.Actor;
    get stage_input_mode(): StageInputMode;
    set stage_input_mode(val: StageInputMode);
    get stageInputMode(): StageInputMode;
    set stageInputMode(val: StageInputMode);
    get top_window_group(): Clutter.Actor;
    get topWindowGroup(): Clutter.Actor;
    get ui_scale(): number;
    get uiScale(): number;
    get userdatadir(): string;
    get window_group(): Clutter.Actor;
    get windowGroup(): Clutter.Actor;
    get window_manager(): WM;
    get windowManager(): WM;
    get workspace_manager(): Meta.WorkspaceManager;
    get workspaceManager(): Meta.WorkspaceManager;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "notify-error", callback: (_source: this, object: string, p0: string) => void): number;
    connect_after(signal: "notify-error", callback: (_source: this, object: string, p0: string) => void): number;
    emit(signal: "notify-error", object: string, p0: string): void;
    connect(signal: "scale-changed", callback: (_source: this) => void): number;
    connect_after(signal: "scale-changed", callback: (_source: this) => void): number;
    emit(signal: "scale-changed"): void;
    connect(signal: "shutdown", callback: (_source: this) => void): number;
    connect_after(signal: "shutdown", callback: (_source: this) => void): number;
    emit(signal: "shutdown"): void;

    // Members

    alloc_leak(mb: number): void;
    begin_modal(timestamp: number, options: Meta.ModalOptions): boolean;
    begin_work(): void;
    create_app_launch_context(): Gio.AppLaunchContext;
    create_pointer_barrier(x1: number, y1: number, x2: number, y2: number, directions: number): number;
    destroy_pointer_barrier(barrier: number): void;
    dump_gjs_stack(): void;
    end_modal(timestamp: number): void;
    end_work(): void;
    get_current_time(): number;
    get_display(): Meta.Display;
    get_gdk_screen(): Gdk.Screen;
    get_md5_for_string(string: string): string;
    get_pid(): number;
    get_pointer(): [number, number, Clutter.ModifierType];
    get_screen(): Screen;
    get_settings(): Gio.Settings;
    get_stage(): Clutter.Stage;
    get_window_actors(): Meta.WindowActor[];
    notify_error(msg: string, details: string): void;
    real_restart(): void;
    reexec_self(): void;
    run_at_leisure(func: LeisureFunction): void;
    segfault(): void;
    set_cursor(type: Cursor): void;
    set_pointer(x: number, y: number): void;
    set_stage_input_mode(mode: StageInputMode): void;
    set_stage_input_region(rectangles: Meta.Rectangle[]): void;
    sync_pointer(): void;
    unset_cursor(): void;
    static get(): Global;
}
export module GtkEmbed {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Clutter.Clone.ConstructorProperties<A> {
        [key: string]: any;
        window: EmbeddedWindow;
    }
}
export class GtkEmbed<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Clone<A>
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<GtkEmbed>;

    constructor(properties?: Partial<GtkEmbed.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<GtkEmbed.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get window(): EmbeddedWindow;

    // Constructors

    static ["new"](window: EmbeddedWindow): GtkEmbed;
    // Conflicted with Clutter.Clone.new
    static ["new"](...args: never[]): any;

    // Implemented Members

    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: GObject.Value | any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: GObject.Value | any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    // Conflicted with Clutter.Actor.get_children
    get_children(...args: never[]): any;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
}
export module PerfLog {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PerfLog extends GObject.Object {
    static $gtype: GObject.GType<PerfLog>;

    constructor(properties?: Partial<PerfLog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PerfLog.ConstructorProperties>, ...args: any[]): void;

    // Members

    add_statistics_callback(callback: PerfStatisticsCallback): void;
    collect_statistics(): void;
    define_event(name: string, description: string, signature: string): void;
    define_statistic(name: string, description: string, signature: string): void;
    dump_events(out: Gio.OutputStream): boolean;
    dump_log(out: Gio.OutputStream): boolean;
    event(name: string): void;
    event_i(name: string, arg: number): void;
    event_s(name: string, arg: string): void;
    event_x(name: string, arg: number): void;
    replay(replay_function: PerfReplayFunction): void;
    set_enabled(enabled: boolean): void;
    update_statistic_i(name: string, value: number): void;
    update_statistic_x(name: string, value: number): void;
    static get_default(): PerfLog;
}
export module Recorder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        display: Meta.Display;
        draw_cursor: boolean;
        drawCursor: boolean;
        file_template: string;
        fileTemplate: string;
        framerate: number;
        pipeline: string;
        stage: Clutter.Stage;
    }
}
export class Recorder extends GObject.Object {
    static $gtype: GObject.GType<Recorder>;

    constructor(properties?: Partial<Recorder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Recorder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set display(val: Meta.Display);
    get draw_cursor(): boolean;
    set draw_cursor(val: boolean);
    get drawCursor(): boolean;
    set drawCursor(val: boolean);
    get file_template(): string;
    set file_template(val: string);
    get fileTemplate(): string;
    set fileTemplate(val: string);
    get framerate(): number;
    set framerate(val: number);
    get pipeline(): string;
    set pipeline(val: string);
    get stage(): Clutter.Stage;
    set stage(val: Clutter.Stage);

    // Constructors

    static ["new"](stage: Clutter.Stage): Recorder;

    // Members

    close(): void;
    is_recording(): boolean;
    record(): [boolean, string];
    set_area(x: number, y: number, width: number, height: number): void;
    set_draw_cursor(draw_cursor: boolean): void;
    set_file_template(file_template: string): void;
    set_framerate(framerate: number): void;
    set_pipeline(pipeline?: string | null): void;
}
export module Screen {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        display: Meta.Display;
        n_workspaces: number;
        nWorkspaces: number;
    }
}
export class Screen extends GObject.Object {
    static $gtype: GObject.GType<Screen>;

    constructor(properties?: Partial<Screen.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Screen.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get display(): Meta.Display;
    get n_workspaces(): number;
    get nWorkspaces(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "in-fullscreen-changed", callback: (_source: this) => void): number;
    connect_after(signal: "in-fullscreen-changed", callback: (_source: this) => void): number;
    emit(signal: "in-fullscreen-changed"): void;
    connect(signal: "monitors-changed", callback: (_source: this) => void): number;
    connect_after(signal: "monitors-changed", callback: (_source: this) => void): number;
    emit(signal: "monitors-changed"): void;
    connect(signal: "restacked", callback: (_source: this) => void): number;
    connect_after(signal: "restacked", callback: (_source: this) => void): number;
    emit(signal: "restacked"): void;
    connect(signal: "window-added", callback: (_source: this, object: Meta.Window, p0: number) => void): number;
    connect_after(signal: "window-added", callback: (_source: this, object: Meta.Window, p0: number) => void): number;
    emit(signal: "window-added", object: Meta.Window, p0: number): void;
    connect(
        signal: "window-entered-monitor",
        callback: (_source: this, object: number, p0: Meta.Window) => void
    ): number;
    connect_after(
        signal: "window-entered-monitor",
        callback: (_source: this, object: number, p0: Meta.Window) => void
    ): number;
    emit(signal: "window-entered-monitor", object: number, p0: Meta.Window): void;
    connect(signal: "window-left-monitor", callback: (_source: this, object: number, p0: Meta.Window) => void): number;
    connect_after(
        signal: "window-left-monitor",
        callback: (_source: this, object: number, p0: Meta.Window) => void
    ): number;
    emit(signal: "window-left-monitor", object: number, p0: Meta.Window): void;
    connect(
        signal: "window-monitor-changed",
        callback: (_source: this, object: Meta.Window, p0: number) => void
    ): number;
    connect_after(
        signal: "window-monitor-changed",
        callback: (_source: this, object: Meta.Window, p0: number) => void
    ): number;
    emit(signal: "window-monitor-changed", object: Meta.Window, p0: number): void;
    connect(signal: "window-removed", callback: (_source: this, object: Meta.Window) => void): number;
    connect_after(signal: "window-removed", callback: (_source: this, object: Meta.Window) => void): number;
    emit(signal: "window-removed", object: Meta.Window): void;
    connect(signal: "window-skip-taskbar-changed", callback: (_source: this, object: Meta.Window) => void): number;
    connect_after(
        signal: "window-skip-taskbar-changed",
        callback: (_source: this, object: Meta.Window) => void
    ): number;
    emit(signal: "window-skip-taskbar-changed", object: Meta.Window): void;
    connect(
        signal: "window-workspace-changed",
        callback: (_source: this, object: Meta.Window, p0: Meta.Workspace) => void
    ): number;
    connect_after(
        signal: "window-workspace-changed",
        callback: (_source: this, object: Meta.Window, p0: Meta.Workspace) => void
    ): number;
    emit(signal: "window-workspace-changed", object: Meta.Window, p0: Meta.Workspace): void;
    connect(signal: "workareas-changed", callback: (_source: this) => void): number;
    connect_after(signal: "workareas-changed", callback: (_source: this) => void): number;
    emit(signal: "workareas-changed"): void;
    connect(signal: "workspace-added", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "workspace-added", callback: (_source: this, object: number) => void): number;
    emit(signal: "workspace-added", object: number): void;
    connect(signal: "workspace-removed", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "workspace-removed", callback: (_source: this, object: number) => void): number;
    emit(signal: "workspace-removed", object: number): void;
    connect(
        signal: "workspace-switched",
        callback: (_source: this, object: number, p0: number, p1: Meta.MotionDirection) => void
    ): number;
    connect_after(
        signal: "workspace-switched",
        callback: (_source: this, object: number, p0: number, p1: Meta.MotionDirection) => void
    ): number;
    emit(signal: "workspace-switched", object: number, p0: number, p1: Meta.MotionDirection): void;

    // Constructors

    static ["new"](display: Meta.Display): Screen;

    // Members

    append_new_workspace(activate: boolean, timestamp: number): Meta.Workspace;
    get_active_workspace(): Meta.Workspace;
    get_active_workspace_index(): number;
    get_current_monitor(): number;
    get_display(): Meta.Display;
    get_monitor_geometry(monitor: number): Meta.Rectangle;
    get_monitor_in_fullscreen(monitor: number): boolean;
    get_monitor_index_for_rect(rect: Meta.Rectangle): number;
    get_mouse_window(not_this_one?: Meta.Window | null): Meta.Window;
    get_n_monitors(): number;
    get_n_workspaces(): number;
    get_primary_monitor(): number;
    get_size(): [number, number];
    get_workspace_by_index(index: number): Meta.Workspace;
    get_xwindow_for_window(window: Meta.Window): number;
    override_workspace_layout(
        starting_corner: Meta.DisplayCorner,
        vertical_layout: boolean,
        n_rows: number,
        n_columns: number
    ): void;
    remove_workspace(workspace: Meta.Workspace, timestamp: number): void;
    show_desktop(timestamp: number): void;
    toggle_desktop(timestamp: number): void;
    unshow_desktop(): void;
}
export module Screenshot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Screenshot extends GObject.Object {
    static $gtype: GObject.GType<Screenshot>;

    constructor(properties?: Partial<Screenshot.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Screenshot.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Screenshot;

    // Members

    screenshot(include_cursor: boolean, filename: string, callback: ScreenshotCallback): void;
    screenshot_area(
        include_cursor: boolean,
        x: number,
        y: number,
        width: number,
        height: number,
        filename: string,
        callback: ScreenshotCallback
    ): void;
    screenshot_window(
        include_frame: boolean,
        include_cursor: boolean,
        filename: string,
        callback: ScreenshotCallback
    ): void;
}
export module Slicer {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends St.Bin.ConstructorProperties<A> {
        [key: string]: any;
    }
}
export class Slicer<A extends Clutter.Actor = Clutter.Actor>
    extends St.Bin<A>
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Slicer>;

    constructor(properties?: Partial<Slicer.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Slicer.ConstructorProperties<A>>, ...args: any[]): void;

    // Fields
    priv: SlicerPrivate;

    // Implemented Members

    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: GObject.Value | any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: GObject.Value | any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    // Conflicted with Clutter.Actor.get_children
    get_children(...args: never[]): any;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
}
export module Stack {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends St.Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class Stack<A extends Clutter.Actor = Clutter.Actor>
    extends St.Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Stack>;

    constructor(properties?: Partial<Stack.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Stack.ConstructorProperties<A>>, ...args: any[]): void;

    // Fields
    priv: StackPrivate;

    // Implemented Members

    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: GObject.Value | any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: GObject.Value | any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    // Conflicted with Clutter.Actor.get_children
    get_children(...args: never[]): any;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
}
export module TrayIcon {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends GtkEmbed.ConstructorProperties<A> {
        [key: string]: any;
        pid: number;
        title: string;
        wm_class: string;
        wmClass: string;
    }
}
export class TrayIcon<A extends Clutter.Actor = Clutter.Actor>
    extends GtkEmbed<A>
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<TrayIcon>;

    constructor(properties?: Partial<TrayIcon.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<TrayIcon.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get pid(): number;
    get title(): string;
    get wm_class(): string;
    get wmClass(): string;

    // Fields
    priv: TrayIconPrivate;

    // Constructors

    static ["new"](window: EmbeddedWindow): TrayIcon;
    // Conflicted with Clutter.Clone.new
    static ["new"](...args: never[]): any;

    // Members

    handle_event(event_type: Clutter.EventType, event: Clutter.Event): boolean;

    // Implemented Members

    add_actor(actor: A): void;
    child_get_property(child: A, property: string, value: GObject.Value | any): void;
    child_notify(child: A, pspec: GObject.ParamSpec): void;
    child_set_property(child: A, property: string, value: GObject.Value | any): void;
    create_child_meta(actor: A): void;
    destroy_child_meta(actor: A): void;
    find_child_by_name(child_name: string): A;
    get_child_meta(actor: A): Clutter.ChildMeta;
    get_children(): A[];
    // Conflicted with Clutter.Actor.get_children
    get_children(...args: never[]): any;
    lower_child(actor: A, sibling?: A | null): void;
    raise_child(actor: A, sibling?: A | null): void;
    remove_actor(actor: A): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: A): void;
    vfunc_actor_removed(actor: A): void;
    vfunc_add(actor: A): void;
    vfunc_child_notify(child: A, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: A): void;
    vfunc_destroy_child_meta(actor: A): void;
    vfunc_get_child_meta(actor: A): Clutter.ChildMeta;
    vfunc_lower(actor: A, sibling?: A | null): void;
    vfunc_raise(actor: A, sibling?: A | null): void;
    vfunc_remove(actor: A): void;
    vfunc_sort_depth_order(): void;
}
export module TrayManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bg_color: Clutter.Color;
        bgColor: Clutter.Color;
    }
}
export class TrayManager extends GObject.Object {
    static $gtype: GObject.GType<TrayManager>;

    constructor(properties?: Partial<TrayManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TrayManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get bg_color(): Clutter.Color;
    get bgColor(): Clutter.Color;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "tray-icon-added", callback: (_source: this, object: Clutter.Actor) => void): number;
    connect_after(signal: "tray-icon-added", callback: (_source: this, object: Clutter.Actor) => void): number;
    emit(signal: "tray-icon-added", object: Clutter.Actor): void;
    connect(signal: "tray-icon-removed", callback: (_source: this, object: Clutter.Actor) => void): number;
    connect_after(signal: "tray-icon-removed", callback: (_source: this, object: Clutter.Actor) => void): number;
    emit(signal: "tray-icon-removed", object: Clutter.Actor): void;

    // Constructors

    static ["new"](): TrayManager;

    // Members

    manage_screen(theme_widget: St.Widget): void;
    redisplay(): void;
    set_orientation(orientation: Clutter.Orientation): void;
    unmanage_screen(): void;
}
export module WM {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class WM extends GObject.Object {
    static $gtype: GObject.GType<WM>;

    constructor(properties?: Partial<WM.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WM.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "confirm-display-change", callback: (_source: this) => void): number;
    connect_after(signal: "confirm-display-change", callback: (_source: this) => void): number;
    emit(signal: "confirm-display-change"): void;
    connect(signal: "create-close-dialog", callback: (_source: this, window: Meta.Window) => Meta.CloseDialog): number;
    connect_after(
        signal: "create-close-dialog",
        callback: (_source: this, window: Meta.Window) => Meta.CloseDialog
    ): number;
    emit(signal: "create-close-dialog", window: Meta.Window): void;
    connect(
        signal: "create-inhibit-shortcuts-dialog",
        callback: (_source: this, window: Meta.Window) => Meta.InhibitShortcutsDialog
    ): number;
    connect_after(
        signal: "create-inhibit-shortcuts-dialog",
        callback: (_source: this, window: Meta.Window) => Meta.InhibitShortcutsDialog
    ): number;
    emit(signal: "create-inhibit-shortcuts-dialog", window: Meta.Window): void;
    connect(signal: "destroy", callback: (_source: this, object: Meta.WindowActor) => void): number;
    connect_after(signal: "destroy", callback: (_source: this, object: Meta.WindowActor) => void): number;
    emit(signal: "destroy", object: Meta.WindowActor): void;
    connect(signal: "filter-keybinding", callback: (_source: this, object: Meta.KeyBinding) => boolean): number;
    connect_after(signal: "filter-keybinding", callback: (_source: this, object: Meta.KeyBinding) => boolean): number;
    emit(signal: "filter-keybinding", object: Meta.KeyBinding): void;
    connect(signal: "hide-tile-preview", callback: (_source: this) => void): number;
    connect_after(signal: "hide-tile-preview", callback: (_source: this) => void): number;
    emit(signal: "hide-tile-preview"): void;
    connect(signal: "kill-switch-workspace", callback: (_source: this) => void): number;
    connect_after(signal: "kill-switch-workspace", callback: (_source: this) => void): number;
    emit(signal: "kill-switch-workspace"): void;
    connect(signal: "kill-window-effects", callback: (_source: this, object: Meta.WindowActor) => void): number;
    connect_after(signal: "kill-window-effects", callback: (_source: this, object: Meta.WindowActor) => void): number;
    emit(signal: "kill-window-effects", object: Meta.WindowActor): void;
    connect(signal: "map", callback: (_source: this, object: Meta.WindowActor) => void): number;
    connect_after(signal: "map", callback: (_source: this, object: Meta.WindowActor) => void): number;
    emit(signal: "map", object: Meta.WindowActor): void;
    connect(signal: "minimize", callback: (_source: this, object: Meta.WindowActor) => void): number;
    connect_after(signal: "minimize", callback: (_source: this, object: Meta.WindowActor) => void): number;
    emit(signal: "minimize", object: Meta.WindowActor): void;
    connect(
        signal: "show-tile-preview",
        callback: (_source: this, object: Meta.Window, p0: Meta.Rectangle, p1: number) => void
    ): number;
    connect_after(
        signal: "show-tile-preview",
        callback: (_source: this, object: Meta.Window, p0: Meta.Rectangle, p1: number) => void
    ): number;
    emit(signal: "show-tile-preview", object: Meta.Window, p0: Meta.Rectangle, p1: number): void;
    connect(
        signal: "show-window-menu",
        callback: (_source: this, object: Meta.Window, p0: number, p1: Meta.Rectangle) => void
    ): number;
    connect_after(
        signal: "show-window-menu",
        callback: (_source: this, object: Meta.Window, p0: number, p1: Meta.Rectangle) => void
    ): number;
    emit(signal: "show-window-menu", object: Meta.Window, p0: number, p1: Meta.Rectangle): void;
    connect(
        signal: "size-change",
        callback: (
            _source: this,
            object: Meta.WindowActor,
            p0: Meta.SizeChange,
            p1: Meta.Rectangle,
            p2: Meta.Rectangle
        ) => void
    ): number;
    connect_after(
        signal: "size-change",
        callback: (
            _source: this,
            object: Meta.WindowActor,
            p0: Meta.SizeChange,
            p1: Meta.Rectangle,
            p2: Meta.Rectangle
        ) => void
    ): number;
    emit(
        signal: "size-change",
        object: Meta.WindowActor,
        p0: Meta.SizeChange,
        p1: Meta.Rectangle,
        p2: Meta.Rectangle
    ): void;
    connect(signal: "size-changed", callback: (_source: this, object: Meta.WindowActor) => void): number;
    connect_after(signal: "size-changed", callback: (_source: this, object: Meta.WindowActor) => void): number;
    emit(signal: "size-changed", object: Meta.WindowActor): void;
    connect(
        signal: "switch-workspace",
        callback: (_source: this, object: number, p0: number, p1: number) => void
    ): number;
    connect_after(
        signal: "switch-workspace",
        callback: (_source: this, object: number, p0: number, p1: number) => void
    ): number;
    emit(signal: "switch-workspace", object: number, p0: number, p1: number): void;
    connect(signal: "switch-workspace-complete", callback: (_source: this) => void): number;
    connect_after(signal: "switch-workspace-complete", callback: (_source: this) => void): number;
    emit(signal: "switch-workspace-complete"): void;
    connect(signal: "unminimize", callback: (_source: this, object: Meta.WindowActor) => void): number;
    connect_after(signal: "unminimize", callback: (_source: this, object: Meta.WindowActor) => void): number;
    emit(signal: "unminimize", object: Meta.WindowActor): void;

    // Constructors

    static ["new"](plugin: Meta.Plugin): WM;

    // Members

    complete_display_change(ok: boolean): void;
    completed_destroy(actor: Meta.WindowActor): void;
    completed_map(actor: Meta.WindowActor): void;
    completed_minimize(actor: Meta.WindowActor): void;
    completed_size_change(actor: Meta.WindowActor): void;
    completed_switch_workspace(): void;
    completed_unminimize(actor: Meta.WindowActor): void;
}
export module WindowTracker {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        focus_app: App;
        focusApp: App;
    }
}
export class WindowTracker extends GObject.Object {
    static $gtype: GObject.GType<WindowTracker>;

    constructor(properties?: Partial<WindowTracker.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WindowTracker.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get focus_app(): App;
    get focusApp(): App;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "startup-sequence-changed",
        callback: (_source: this, object: Meta.StartupSequence) => void
    ): number;
    connect_after(
        signal: "startup-sequence-changed",
        callback: (_source: this, object: Meta.StartupSequence) => void
    ): number;
    emit(signal: "startup-sequence-changed", object: Meta.StartupSequence): void;
    connect(signal: "window-app-changed", callback: (_source: this, object: Meta.Window) => void): number;
    connect_after(signal: "window-app-changed", callback: (_source: this, object: Meta.Window) => void): number;
    emit(signal: "window-app-changed", object: Meta.Window): void;

    // Members

    get_app_from_pid(pid: number): App;
    get_startup_sequences(): Meta.StartupSequence[];
    get_window_app(metawin: Meta.Window): App;
    is_window_interesting(window: Meta.Window): boolean;
    static get_default(): WindowTracker;
}

export class AppPrivate {
    static $gtype: GObject.GType<AppPrivate>;

    constructor(copy: AppPrivate);
}

export class AppSystemPrivate {
    static $gtype: GObject.GType<AppSystemPrivate>;

    constructor(copy: AppSystemPrivate);
}

export class CalendarServerProxyPrivate {
    static $gtype: GObject.GType<CalendarServerProxyPrivate>;

    constructor(copy: CalendarServerProxyPrivate);
}

export class CalendarServerSkeletonPrivate {
    static $gtype: GObject.GType<CalendarServerSkeletonPrivate>;

    constructor(copy: CalendarServerSkeletonPrivate);
}

export class DocSystemPrivate {
    static $gtype: GObject.GType<DocSystemPrivate>;

    constructor(copy: DocSystemPrivate);
}

export class GenericContainerAllocation {
    static $gtype: GObject.GType<GenericContainerAllocation>;

    constructor(
        properties?: Partial<{
            min_size?: number;
            natural_size?: number;
        }>
    );
    constructor(copy: GenericContainerAllocation);

    // Fields
    min_size: number;
    natural_size: number;
}

export class GenericContainerPrivate {
    static $gtype: GObject.GType<GenericContainerPrivate>;

    constructor(copy: GenericContainerPrivate);
}

export class SlicerPrivate {
    static $gtype: GObject.GType<SlicerPrivate>;

    constructor(copy: SlicerPrivate);
}

export class StackPrivate {
    static $gtype: GObject.GType<StackPrivate>;

    constructor(copy: StackPrivate);
}

export class TrayIconPrivate {
    static $gtype: GObject.GType<TrayIconPrivate>;

    constructor(copy: TrayIconPrivate);
}

export class WindowTrackerPrivate {
    static $gtype: GObject.GType<WindowTrackerPrivate>;

    constructor(copy: WindowTrackerPrivate);
}

export interface CalendarServerNamespace {
    $gtype: GObject.GType<CalendarServer>;
    prototype: CalendarServerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type CalendarServer = CalendarServerPrototype;
export interface CalendarServerPrototype extends GObject.Object {
    // Properties
    since: number;
    status: number;
    until: number;

    // Members

    call_exit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
    call_exit_finish(res: Gio.AsyncResult): boolean;
    call_exit_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_set_time_range(
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_set_time_range_finish(res: Gio.AsyncResult): boolean;
    call_set_time_range_sync(
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    complete_exit(invocation: Gio.DBusMethodInvocation): void;
    complete_set_time_range(invocation: Gio.DBusMethodInvocation): void;
    emit_client_disappeared(arg_source_uid: string): void;
    emit_events_added_or_updated(arg_events: GLib.Variant): void;
    emit_events_removed(arg_ids: string): void;
    vfunc_client_disappeared(arg_source_uid: string): void;
    vfunc_events_added_or_updated(arg_events: GLib.Variant): void;
    vfunc_events_removed(arg_ids: string): void;
    vfunc_handle_exit(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_set_time_range(
        invocation: Gio.DBusMethodInvocation,
        arg_since: number,
        arg_until: number,
        arg_force_reload: boolean
    ): boolean;
}

export const CalendarServer: CalendarServerNamespace;
