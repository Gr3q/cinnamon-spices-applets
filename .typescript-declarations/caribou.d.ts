/**
 * Caribou 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject";
import * as Gdk from "gdk";

export type KeyButtonCallback = (keybuttoncode: number, pressed: boolean) => void;

export namespace ModifierState {
    export const $gtype: GObject.GType<ModifierState>;
}

export enum ModifierState {
    NONE = 0,
    LATCHED = 1,
    LOCKED = 2,
}

export namespace ScanGrouping {
    export const $gtype: GObject.GType<ScanGrouping>;
}

export enum ScanGrouping {
    NONE = 0,
    SUBGROUPS = 1,
    ROWS = 2,
    LINEAR = 3,
}
export module DisplayAdapter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        display: Gdk.Display;
    }
}
export abstract class DisplayAdapter extends GObject.Object {
    static $gtype: GObject.GType<DisplayAdapter>;

    constructor(properties?: Partial<DisplayAdapter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DisplayAdapter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get display(): Gdk.Display;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "modifiers-changed", callback: (_source: this, modifiers: number) => void): number;
    connect_after(signal: "modifiers-changed", callback: (_source: this, modifiers: number) => void): number;
    emit(signal: "modifiers-changed", modifiers: number): void;
    connect(
        signal: "group-changed",
        callback: (_source: this, gid: number, group: string, variant: string) => void
    ): number;
    connect_after(
        signal: "group-changed",
        callback: (_source: this, gid: number, group: string, variant: string) => void
    ): number;
    emit(signal: "group-changed", gid: number, group: string, variant: string): void;
    connect(signal: "config-changed", callback: (_source: this) => void): number;
    connect_after(signal: "config-changed", callback: (_source: this) => void): number;
    emit(signal: "config-changed"): void;

    // Members

    keyval_press(keyval: number): void;
    keyval_release(keyval: number): void;
    mod_lock(mask: number): void;
    mod_unlock(mask: number): void;
    mod_latch(mask: number): void;
    mod_unlatch(mask: number): void;
    get_current_group(): [number, string, string];
    get_groups(): [string[], string[]];
    register_key_func(keyval: number, func?: KeyButtonCallback | null): void;
    register_button_func(button: number, func?: KeyButtonCallback | null): void;
    get_display(): Gdk.Display;
    vfunc_keyval_press(keyval: number): void;
    vfunc_keyval_release(keyval: number): void;
    vfunc_mod_lock(mask: number): void;
    vfunc_mod_unlock(mask: number): void;
    vfunc_mod_latch(mask: number): void;
    vfunc_mod_unlatch(mask: number): void;
    vfunc_get_current_group(): [number, string, string];
    vfunc_get_groups(): [string[], string[]];
    vfunc_register_key_func(keyval: number, func?: KeyButtonCallback | null): void;
    vfunc_register_button_func(button: number, func?: KeyButtonCallback | null): void;
    static set_default(adapter: DisplayAdapter): boolean;
    static get_default(): DisplayAdapter;
}
export module NullAdapter {
    export interface ConstructorProperties extends DisplayAdapter.ConstructorProperties {
        [key: string]: any;
    }
}
export class NullAdapter extends DisplayAdapter {
    static $gtype: GObject.GType<NullAdapter>;

    constructor(properties?: Partial<NullAdapter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NullAdapter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): NullAdapter;
}
export module XAdapter {
    export interface ConstructorProperties extends DisplayAdapter.ConstructorProperties {
        [key: string]: any;
    }
}
export class XAdapter extends DisplayAdapter {
    static $gtype: GObject.GType<XAdapter>;

    constructor(properties?: Partial<XAdapter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<XAdapter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): XAdapter;
}
export module KeyboardModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        active_group: string;
        activeGroup: string;
        keyboard_type: string;
        keyboardType: string;
        keyboard_file: string;
        keyboardFile: string;
    }
}
export class KeyboardModel extends GObject.Object implements IKeyboardObject {
    static $gtype: GObject.GType<KeyboardModel>;

    constructor(properties?: Partial<KeyboardModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<KeyboardModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active_group(): string;
    set active_group(val: string);
    get activeGroup(): string;
    set activeGroup(val: string);
    get keyboard_type(): string;
    get keyboardType(): string;
    get keyboard_file(): string;
    get keyboardFile(): string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "group-added", callback: (_source: this, name: string) => void): number;
    connect_after(signal: "group-added", callback: (_source: this, name: string) => void): number;
    emit(signal: "group-added", name: string): void;
    connect(signal: "group-removed", callback: (_source: this, name: string) => void): number;
    connect_after(signal: "group-removed", callback: (_source: this, name: string) => void): number;
    emit(signal: "group-removed", name: string): void;

    // Constructors

    static ["new"](): KeyboardModel;

    // Members

    get_groups(): string[];
    get_group(group_name: string): GroupModel;
    get_active_group(): string;
    get_keyboard_type(): string;
    get_keyboard_file(): string;

    // Implemented Members

    get_children(): IKeyboardObject[];
    get_keys(): KeyModel[];
    vfunc_get_children(): IKeyboardObject[];
    vfunc_get_keys(): KeyModel[];
}
export module KeyboardService {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class KeyboardService extends GObject.Object {
    static $gtype: GObject.GType<KeyboardService>;

    constructor(properties?: Partial<KeyboardService.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<KeyboardService.ConstructorProperties>, ...args: any[]): void;

    // Members

    set_cursor_location(x: number, y: number, w: number, h: number): void;
    set_entry_location(x: number, y: number, w: number, h: number): void;
    show(timestamp: number): void;
    hide(timestamp: number): void;
    register_keyboard(name: string): void;
    name_lost(name: string): void;
    vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void;
    vfunc_set_entry_location(x: number, y: number, w: number, h: number): void;
    vfunc_show(timestamp: number): void;
    vfunc_hide(timestamp: number): void;
    vfunc_name_lost(name: string): void;
}
export module GroupModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        active_level: string;
        activeLevel: string;
    }
}
export class GroupModel extends GObject.Object implements IKeyboardObject {
    static $gtype: GObject.GType<GroupModel>;

    constructor(properties?: Partial<GroupModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GroupModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active_level(): string;
    set active_level(val: string);
    get activeLevel(): string;
    set activeLevel(val: string);

    // Fields
    group: string;
    variant: string;

    // Constructors

    static ["new"](group: string, variant: string): GroupModel;

    // Members

    get_levels(): string[];
    get_level(level_name: string): LevelModel;
    get_active_level(): string;
    static create_group_name(group: string, variant: string): string;

    // Implemented Members

    get_children(): IKeyboardObject[];
    get_keys(): KeyModel[];
    vfunc_get_children(): IKeyboardObject[];
    vfunc_get_keys(): KeyModel[];
}
export module LevelModel {
    export interface ConstructorProperties extends ScannableGroup.ConstructorProperties {
        [key: string]: any;
        mode: string;
    }
}
export class LevelModel extends ScannableGroup implements IKeyboardObject {
    static $gtype: GObject.GType<LevelModel>;

    constructor(properties?: Partial<LevelModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LevelModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get mode(): string;
    set mode(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "level-toggled", callback: (_source: this, new_level: string) => void): number;
    connect_after(signal: "level-toggled", callback: (_source: this, new_level: string) => void): number;
    emit(signal: "level-toggled", new_level: string): void;

    // Constructors

    static ["new"](mode: string): LevelModel;

    // Members

    get_rows(): RowModel[];
    get_mode(): string;

    // Implemented Members

    get_children(): IKeyboardObject[];
    get_keys(): KeyModel[];
    vfunc_get_children(): IKeyboardObject[];
    vfunc_get_keys(): KeyModel[];
}
export module RowModel {
    export interface ConstructorProperties extends ScannableGroup.ConstructorProperties {
        [key: string]: any;
    }
}
export class RowModel extends ScannableGroup implements IScannableItem, IKeyboardObject {
    static $gtype: GObject.GType<RowModel>;

    constructor(properties?: Partial<RowModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RowModel.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get scan_stepping(): boolean;
    set scan_stepping(val: boolean);
    get scanStepping(): boolean;
    set scanStepping(val: boolean);
    get scan_selected(): boolean;
    set scan_selected(val: boolean);
    get scanSelected(): boolean;
    set scanSelected(val: boolean);

    // Constructors

    static ["new"](): RowModel;

    // Members

    get_columns(): ColumnModel[];

    // Implemented Members

    get_scan_stepping(): boolean;
    set_scan_stepping(value: boolean): void;
    get_scan_selected(): boolean;
    set_scan_selected(value: boolean): void;
    vfunc_get_scan_stepping(): boolean;
    vfunc_set_scan_stepping(value: boolean): void;
    vfunc_get_scan_selected(): boolean;
    vfunc_set_scan_selected(value: boolean): void;
    get_children(): IKeyboardObject[];
    get_keys(): KeyModel[];
    vfunc_get_children(): IKeyboardObject[];
    vfunc_get_keys(): KeyModel[];
}
export module KeyModel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        align: string;
        width: number;
        toggle: string;
        repeatable: boolean;
        is_modifier: boolean;
        isModifier: boolean;
        show_subkeys: boolean;
        showSubkeys: boolean;
        name: string;
        keyval: number;
        text: string;
        label: string;
    }
}
export class KeyModel extends GObject.Object implements IScannableItem, IKeyboardObject {
    static $gtype: GObject.GType<KeyModel>;

    constructor(properties?: Partial<KeyModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<KeyModel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get align(): string;
    set align(val: string);
    get width(): number;
    set width(val: number);
    get toggle(): string;
    set toggle(val: string);
    get repeatable(): boolean;
    set repeatable(val: boolean);
    get is_modifier(): boolean;
    set is_modifier(val: boolean);
    get isModifier(): boolean;
    set isModifier(val: boolean);
    get show_subkeys(): boolean;
    set show_subkeys(val: boolean);
    get showSubkeys(): boolean;
    set showSubkeys(val: boolean);
    get name(): string;
    set name(val: string);
    get keyval(): number;
    set keyval(val: number);
    get text(): string;
    set text(val: string);
    get label(): string;
    set label(val: string);

    // Fields
    modifier_state: ModifierState;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "key-hold-end", callback: (_source: this) => void): number;
    connect_after(signal: "key-hold-end", callback: (_source: this) => void): number;
    emit(signal: "key-hold-end"): void;
    connect(signal: "key-hold", callback: (_source: this) => void): number;
    connect_after(signal: "key-hold", callback: (_source: this) => void): number;
    emit(signal: "key-hold"): void;

    // Implemented Properties

    get scan_stepping(): boolean;
    set scan_stepping(val: boolean);
    get scanStepping(): boolean;
    set scanStepping(val: boolean);
    get scan_selected(): boolean;
    set scan_selected(val: boolean);
    get scanSelected(): boolean;
    set scanSelected(val: boolean);

    // Constructors

    static ["new"](name: string, text?: string | null): KeyModel;

    // Members

    press(): void;
    release(): void;
    get_extended_keys(): KeyModel[];
    activate(): void;
    get_align(): string;
    set_align(value: string): void;
    get_width(): number;
    set_width(value: number): void;
    get_toggle(): string;
    set_toggle(value: string): void;
    get_repeatable(): boolean;
    set_repeatable(value: boolean): void;
    get_is_modifier(): boolean;
    set_is_modifier(value: boolean): void;
    get_show_subkeys(): boolean;
    get_name(): string;
    get_keyval(): number;
    get_text(): string | null;
    get_label(): string;
    set_label(value: string): void;

    // Implemented Members

    get_scan_stepping(): boolean;
    set_scan_stepping(value: boolean): void;
    get_scan_selected(): boolean;
    set_scan_selected(value: boolean): void;
    vfunc_get_scan_stepping(): boolean;
    vfunc_set_scan_stepping(value: boolean): void;
    vfunc_get_scan_selected(): boolean;
    vfunc_set_scan_selected(value: boolean): void;
    get_children(): IKeyboardObject[];
    get_keys(): KeyModel[];
    vfunc_get_children(): IKeyboardObject[];
    vfunc_get_keys(): KeyModel[];
}
export module ColumnModel {
    export interface ConstructorProperties extends ScannableGroup.ConstructorProperties {
        [key: string]: any;
    }
}
export class ColumnModel extends ScannableGroup implements IScannableItem, IKeyboardObject {
    static $gtype: GObject.GType<ColumnModel>;

    constructor(properties?: Partial<ColumnModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColumnModel.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get scan_stepping(): boolean;
    set scan_stepping(val: boolean);
    get scanStepping(): boolean;
    set scanStepping(val: boolean);
    get scan_selected(): boolean;
    set scan_selected(val: boolean);
    get scanSelected(): boolean;
    set scanSelected(val: boolean);

    // Constructors

    static ["new"](): ColumnModel;

    // Members

    get_key(index: number): KeyModel;
    first_key(): KeyModel;

    // Implemented Members

    get_scan_stepping(): boolean;
    set_scan_stepping(value: boolean): void;
    get_scan_selected(): boolean;
    set_scan_selected(value: boolean): void;
    vfunc_get_scan_stepping(): boolean;
    vfunc_set_scan_stepping(value: boolean): void;
    vfunc_get_scan_selected(): boolean;
    vfunc_set_scan_selected(value: boolean): void;
    get_children(): IKeyboardObject[];
    get_keys(): KeyModel[];
    vfunc_get_children(): IKeyboardObject[];
    vfunc_get_keys(): KeyModel[];
}
export module Scanner {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bind_settings: boolean;
        bindSettings: boolean;
        scan_grouping: number;
        scanGrouping: number;
        scan_enabled: boolean;
        scanEnabled: boolean;
        step_time: number;
        stepTime: number;
        switch_device: string;
        switchDevice: string;
        keyboard_key: string;
        keyboardKey: string;
        mouse_button: number;
        mouseButton: number;
        scan_cycles: number;
        scanCycles: number;
        autorestart: boolean;
        inverse_scanning: boolean;
        inverseScanning: boolean;
    }
}
export class Scanner extends GObject.Object {
    static $gtype: GObject.GType<Scanner>;

    constructor(properties?: Partial<Scanner.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Scanner.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get bind_settings(): boolean;
    get bindSettings(): boolean;
    get scan_grouping(): number;
    set scan_grouping(val: number);
    get scanGrouping(): number;
    set scanGrouping(val: number);
    get scan_enabled(): boolean;
    set scan_enabled(val: boolean);
    get scanEnabled(): boolean;
    set scanEnabled(val: boolean);
    get step_time(): number;
    set step_time(val: number);
    get stepTime(): number;
    set stepTime(val: number);
    get switch_device(): string;
    set switch_device(val: string);
    get switchDevice(): string;
    set switchDevice(val: string);
    get keyboard_key(): string;
    set keyboard_key(val: string);
    get keyboardKey(): string;
    set keyboardKey(val: string);
    get mouse_button(): number;
    set mouse_button(val: number);
    get mouseButton(): number;
    set mouseButton(val: number);
    get scan_cycles(): number;
    set scan_cycles(val: number);
    get scanCycles(): number;
    set scanCycles(val: number);
    get autorestart(): boolean;
    set autorestart(val: boolean);
    get inverse_scanning(): boolean;
    set inverse_scanning(val: boolean);
    get inverseScanning(): boolean;
    set inverseScanning(val: boolean);

    // Constructors

    static ["new"](): Scanner;

    // Members

    set_keyboard(keyboard: KeyboardModel): void;
    reset(): void;
    get_bind_settings(): boolean;
    get_scan_grouping(): number;
    set_scan_grouping(value: number): void;
    get_scan_enabled(): boolean;
    set_scan_enabled(value: boolean): void;
    get_step_time(): number;
    set_step_time(value: number): void;
    get_switch_device(): string;
    set_switch_device(value: string): void;
    get_keyboard_key(): string;
    set_keyboard_key(value: string): void;
    get_mouse_button(): number;
    set_mouse_button(value: number): void;
    get_scan_cycles(): number;
    set_scan_cycles(value: number): void;
    get_autorestart(): boolean;
    set_autorestart(value: boolean): void;
    get_inverse_scanning(): boolean;
    set_inverse_scanning(value: boolean): void;
}
export module ScannableGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class ScannableGroup extends GObject.Object implements IScannableGroup {
    static $gtype: GObject.GType<ScannableGroup>;

    constructor(properties?: Partial<ScannableGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScannableGroup.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get scan_grouping(): ScanGrouping;
    set scan_grouping(val: ScanGrouping);
    get scanGrouping(): ScanGrouping;
    set scanGrouping(val: ScanGrouping);

    // Members

    get_scan_children(): IScannableItem[];
    child_select(): IScannableItem | null;
    vfunc_get_scan_children(): IScannableItem[];
    vfunc_child_select(): IScannableItem | null;

    // Implemented Members

    scan_reset(): void;
    child_step(cycles: number): IScannableItem | null;
    get_step_path(): IScannableItem[];
    get_selected_path(): IScannableItem[];
    get_scan_grouping(): ScanGrouping;
    set_scan_grouping(value: ScanGrouping): void;
    vfunc_scan_reset(): void;
    vfunc_child_step(cycles: number): IScannableItem | null;
    vfunc_get_step_path(): IScannableItem[];
    vfunc_get_selected_path(): IScannableItem[];
    vfunc_get_scan_grouping(): ScanGrouping;
    vfunc_set_scan_grouping(value: ScanGrouping): void;
}

export class DisplayAdapterPrivate {
    static $gtype: GObject.GType<DisplayAdapterPrivate>;

    constructor(copy: DisplayAdapterPrivate);
}

export class NullAdapterPrivate {
    static $gtype: GObject.GType<NullAdapterPrivate>;

    constructor(copy: NullAdapterPrivate);
}

export class XAdapterPrivate {
    static $gtype: GObject.GType<XAdapterPrivate>;

    constructor(copy: XAdapterPrivate);
}

export class KeyboardModelPrivate {
    static $gtype: GObject.GType<KeyboardModelPrivate>;

    constructor(copy: KeyboardModelPrivate);
}

export class KeyboardServicePrivate {
    static $gtype: GObject.GType<KeyboardServicePrivate>;

    constructor(copy: KeyboardServicePrivate);
}

export class GroupModelPrivate {
    static $gtype: GObject.GType<GroupModelPrivate>;

    constructor(copy: GroupModelPrivate);
}

export class LevelModelPrivate {
    static $gtype: GObject.GType<LevelModelPrivate>;

    constructor(copy: LevelModelPrivate);
}

export class RowModelPrivate {
    static $gtype: GObject.GType<RowModelPrivate>;

    constructor(copy: RowModelPrivate);
}

export class KeyModelPrivate {
    static $gtype: GObject.GType<KeyModelPrivate>;

    constructor(copy: KeyModelPrivate);
}

export class ColumnModelPrivate {
    static $gtype: GObject.GType<ColumnModelPrivate>;

    constructor(copy: ColumnModelPrivate);
}

export class ScannerPrivate {
    static $gtype: GObject.GType<ScannerPrivate>;

    constructor(copy: ScannerPrivate);
}

export class ScannableGroupPrivate {
    static $gtype: GObject.GType<ScannableGroupPrivate>;

    constructor(copy: ScannableGroupPrivate);
}

export interface IScannableItemNamespace {
    $gtype: GObject.GType<IScannableItem>;
    prototype: IScannableItemPrototype;
}
export type IScannableItem = IScannableItemPrototype;
export interface IScannableItemPrototype extends GObject.Object {
    // Properties
    scan_stepping: boolean;
    scanStepping: boolean;
    scan_selected: boolean;
    scanSelected: boolean;

    // Members

    get_scan_stepping(): boolean;
    set_scan_stepping(value: boolean): void;
    get_scan_selected(): boolean;
    set_scan_selected(value: boolean): void;
    vfunc_get_scan_stepping(): boolean;
    vfunc_set_scan_stepping(value: boolean): void;
    vfunc_get_scan_selected(): boolean;
    vfunc_set_scan_selected(value: boolean): void;
}

export const IScannableItem: IScannableItemNamespace;

export interface IScannableGroupNamespace {
    $gtype: GObject.GType<IScannableGroup>;
    prototype: IScannableGroupPrototype;
}
export type IScannableGroup = IScannableGroupPrototype;
export interface IScannableGroupPrototype extends GObject.Object {
    // Properties
    scan_grouping: ScanGrouping;
    scanGrouping: ScanGrouping;

    // Members

    child_select(): IScannableItem | null;
    scan_reset(): void;
    get_scan_children(): IScannableItem[];
    child_step(cycles: number): IScannableItem | null;
    get_step_path(): IScannableItem[];
    get_selected_path(): IScannableItem[];
    get_scan_grouping(): ScanGrouping;
    set_scan_grouping(value: ScanGrouping): void;
    vfunc_child_select(): IScannableItem | null;
    vfunc_scan_reset(): void;
    vfunc_get_scan_children(): IScannableItem[];
    vfunc_child_step(cycles: number): IScannableItem | null;
    vfunc_get_step_path(): IScannableItem[];
    vfunc_get_selected_path(): IScannableItem[];
    vfunc_get_scan_grouping(): ScanGrouping;
    vfunc_set_scan_grouping(value: ScanGrouping): void;
}

export const IScannableGroup: IScannableGroupNamespace;

export interface IKeyboardObjectNamespace {
    $gtype: GObject.GType<IKeyboardObject>;
    prototype: IKeyboardObjectPrototype;
}
export type IKeyboardObject = IKeyboardObjectPrototype;
export interface IKeyboardObjectPrototype extends GObject.Object {
    // Members

    get_children(): IKeyboardObject[];
    get_keys(): KeyModel[];
    vfunc_get_children(): IKeyboardObject[];
    vfunc_get_keys(): KeyModel[];
}

export const IKeyboardObject: IKeyboardObjectNamespace;
