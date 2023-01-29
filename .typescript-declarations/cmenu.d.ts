/**
 * CMenu 3.0
 *
 * Generated from 3.0
 */

import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";

export const DESKTOPAPPINFO_FLATPAK_SUFFIX: string;

export namespace TreeItemType {
    export const $gtype: GObject.GType<TreeItemType>;
}

export enum TreeItemType {
    INVALID = 0,
    DIRECTORY = 1,
    ENTRY = 2,
    SEPARATOR = 3,
    HEADER = 4,
    ALIAS = 5,
}

export namespace TreeFlags {
    export const $gtype: GObject.GType<TreeFlags>;
}

export enum TreeFlags {
    NONE = 0,
    INCLUDE_EXCLUDED = 1,
    SHOW_EMPTY = 256,
    INCLUDE_NODISPLAY = 2,
    SHOW_ALL_SEPARATORS = 512,
    SORT_DISPLAY_NAME = 65536,
    INCLUDE_UNALLOCATED = 4,
}
export module DesktopAppInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DesktopAppInfo extends GObject.Object implements Gio.AppInfo {
    static $gtype: GObject.GType<DesktopAppInfo>;

    constructor(properties?: Partial<DesktopAppInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DesktopAppInfo.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](desktop_id: string): DesktopAppInfo;
    static new_from_filename(filename: string): DesktopAppInfo;
    static new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo;

    // Members

    get_action_name(action_name: string): string;
    get_boolean(key: string): boolean;
    get_categories(): string;
    get_filename(): string;
    get_flatpak_app_id(): string | null;
    get_generic_name(): string;
    get_is_flatpak(): boolean;
    get_is_hidden(): boolean;
    get_keywords(): string[];
    get_locale_string(key: string): string | null;
    get_nodisplay(): boolean;
    get_show_in(desktop_env?: string | null): boolean;
    get_startup_wm_class(): string;
    get_string(key: string): string;
    has_key(key: string): boolean;
    launch_action(action_name: string, launch_context?: Gio.AppLaunchContext | null): void;
    launch_uris_as_manager(
        uris: string[],
        launch_context: Gio.AppLaunchContext | null,
        spawn_flags: GLib.SpawnFlags
    ): boolean;
    list_actions(): string[];

    // Implemented Members

    add_supports_type(content_type: string): boolean;
    can_delete(): boolean;
    can_remove_supports_type(): boolean;
    ["delete"](): boolean;
    dup(): Gio.AppInfo;
    equal(appinfo2: Gio.AppInfo): boolean;
    get_commandline(): string | null;
    get_description(): string | null;
    get_display_name(): string;
    get_executable(): string;
    get_icon(): Gio.Icon | null;
    get_id(): string | null;
    get_name(): string;
    get_supported_types(): string[];
    launch(files?: Gio.File[] | null, context?: Gio.AppLaunchContext | null): boolean;
    launch_uris(uris?: string[] | null, context?: Gio.AppLaunchContext | null): boolean;
    launch_uris_async(
        uris?: string[] | null,
        context?: Gio.AppLaunchContext | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    launch_uris_finish(result: Gio.AsyncResult): boolean;
    remove_supports_type(content_type: string): boolean;
    set_as_default_for_extension(extension: string): boolean;
    set_as_default_for_type(content_type: string): boolean;
    set_as_last_used_for_type(content_type: string): boolean;
    should_show(): boolean;
    supports_files(): boolean;
    supports_uris(): boolean;
    vfunc_add_supports_type(content_type: string): boolean;
    vfunc_can_delete(): boolean;
    vfunc_can_remove_supports_type(): boolean;
    vfunc_do_delete(): boolean;
    vfunc_dup(): Gio.AppInfo;
    vfunc_equal(appinfo2: Gio.AppInfo): boolean;
    vfunc_get_commandline(): string | null;
    vfunc_get_description(): string | null;
    vfunc_get_display_name(): string;
    vfunc_get_executable(): string;
    vfunc_get_icon(): Gio.Icon | null;
    vfunc_get_id(): string | null;
    vfunc_get_name(): string;
    vfunc_get_supported_types(): string[];
    vfunc_launch(files?: Gio.File[] | null, context?: Gio.AppLaunchContext | null): boolean;
    vfunc_launch_uris(uris?: string[] | null, context?: Gio.AppLaunchContext | null): boolean;
    vfunc_launch_uris_async(
        uris?: string[] | null,
        context?: Gio.AppLaunchContext | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_launch_uris_finish(result: Gio.AsyncResult): boolean;
    vfunc_remove_supports_type(content_type: string): boolean;
    vfunc_set_as_default_for_extension(extension: string): boolean;
    vfunc_set_as_default_for_type(content_type: string): boolean;
    vfunc_set_as_last_used_for_type(content_type: string): boolean;
    vfunc_should_show(): boolean;
    vfunc_supports_files(): boolean;
    vfunc_supports_uris(): boolean;
}
export module Tree {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        flags: TreeFlags;
        menu_basename: string;
        menuBasename: string;
        menu_path: string;
        menuPath: string;
    }
}
export class Tree extends GObject.Object {
    static $gtype: GObject.GType<Tree>;

    constructor(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get flags(): TreeFlags;
    get menu_basename(): string;
    get menuBasename(): string;
    get menu_path(): string;
    get menuPath(): string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](menu_basename: string, flags: TreeFlags): Tree;
    static new_for_path(menu_path: string, flags: TreeFlags): Tree;

    // Members

    get_canonical_menu_path(): string;
    get_directory_from_path(path: string): TreeDirectory;
    get_entry_by_id(id: string): TreeEntry;
    get_root_directory(): TreeDirectory;
    load_sync(): boolean;
    static item_ref(item?: any | null): any | null;
    static item_unref(item?: any | null): void;
}

export class TreeAlias {
    static $gtype: GObject.GType<TreeAlias>;

    constructor(copy: TreeAlias);

    // Members
    get_aliased_directory(): TreeDirectory;
    get_aliased_entry(): TreeEntry;
    get_aliased_item_type(): TreeItemType;
    get_directory(): TreeDirectory;
    get_parent(): TreeDirectory;
    get_tree(): Tree;
}

export class TreeDirectory {
    static $gtype: GObject.GType<TreeDirectory>;

    constructor(copy: TreeDirectory);

    // Members
    get_comment(): string;
    get_desktop_file_path(): string;
    get_generic_name(): string;
    get_icon(): Gio.Icon;
    get_is_nodisplay(): boolean;
    get_menu_id(): string;
    get_name(): string;
    get_parent(): TreeDirectory;
    get_tree(): Tree;
    iter(): TreeIter;
    make_path(entry: TreeEntry): string;
}

export class TreeEntry {
    static $gtype: GObject.GType<TreeEntry>;

    constructor(copy: TreeEntry);

    // Members
    get_app_info(): DesktopAppInfo;
    get_desktop_file_id(): string;
    get_desktop_file_path(): string;
    get_is_excluded(): boolean;
    get_is_flatpak(): boolean;
    get_is_nodisplay_recurse(): boolean;
    get_is_unallocated(): boolean;
    get_parent(): TreeDirectory;
    get_tree(): Tree;
}

export class TreeHeader {
    static $gtype: GObject.GType<TreeHeader>;

    constructor(copy: TreeHeader);

    // Members
    get_directory(): TreeDirectory;
    get_parent(): TreeDirectory;
    get_tree(): Tree;
}

export class TreeIter {
    static $gtype: GObject.GType<TreeIter>;

    constructor(copy: TreeIter);

    // Members
    get_alias(): TreeAlias;
    get_directory(): TreeDirectory;
    get_entry(): TreeEntry;
    get_header(): TreeHeader;
    get_separator(): TreeSeparator;
    next(): TreeItemType;
}

export class TreeSeparator {
    static $gtype: GObject.GType<TreeSeparator>;

    constructor(copy: TreeSeparator);

    // Members
    get_parent(): TreeDirectory;
    get_tree(): Tree;
}
