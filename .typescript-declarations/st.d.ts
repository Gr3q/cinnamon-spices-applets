/**
 * St 1.0
 *
 * Generated from 1.0
 */

import * as Atk from "atk";
import * as GObject from "gobject";
import * as Clutter from "clutter";
import * as cairo from "cairo";
import * as Gio from "gio";
import * as Json from "json";
import * as GLib from "glib";
import * as GdkPixbuf from "gdkpixbuf";
import * as Pango from "pango";
import * as Gtk from "gtk";
import * as Cogl from "cogl";

export const PARAM_READABLE: number;
export const PARAM_READWRITE: number;
export const PARAM_WRITABLE: number;
export function describe_actor(actor: Clutter.Actor): string;
export function get_slow_down_factor(): number;
export function set_slow_down_factor(factor: number): void;
export type ClipboardCallbackFunc = (clipboard: Clipboard, text: string) => void;
export type TextureCacheLoadImageCallback = (cache: TextureCache, handle: number, actor: Clutter.Actor) => void;

export namespace Align {
    export const $gtype: GObject.GType<Align>;
}

export enum Align {
    START = 0,
    MIDDLE = 1,
    END = 2,
}

export namespace BackgroundSize {
    export const $gtype: GObject.GType<BackgroundSize>;
}

export enum BackgroundSize {
    AUTO = 0,
    CONTAIN = 1,
    COVER = 2,
    FIXED = 3,
}

export namespace ClipboardType {
    export const $gtype: GObject.GType<ClipboardType>;
}

export enum ClipboardType {
    PRIMARY = 0,
    CLIPBOARD = 1,
}

export namespace Corner {
    export const $gtype: GObject.GType<Corner>;
}

export enum Corner {
    TOPLEFT = 0,
    TOPRIGHT = 1,
    BOTTOMRIGHT = 2,
    BOTTOMLEFT = 3,
}

export namespace GradientType {
    export const $gtype: GObject.GType<GradientType>;
}

export enum GradientType {
    NONE = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
    RADIAL = 3,
}

export namespace IconStyle {
    export const $gtype: GObject.GType<IconStyle>;
}

export enum IconStyle {
    REQUESTED = 0,
    REGULAR = 1,
    SYMBOLIC = 2,
}

export namespace IconType {
    export const $gtype: GObject.GType<IconType>;
}

export enum IconType {
    SYMBOLIC = 0,
    FULLCOLOR = 1,
    APPLICATION = 2,
    DOCUMENT = 3,
}

export namespace PolicyType {
    export const $gtype: GObject.GType<PolicyType>;
}

export enum PolicyType {
    ALWAYS = 0,
    AUTOMATIC = 1,
    NEVER = 2,
    EXTERNAL = 3,
}

export namespace SideNameSpace {
    export const $gtype: GObject.GType<Side>;
}

export enum Side {
    TOP = 0,
    RIGHT = 1,
    BOTTOM = 2,
    LEFT = 3,
}

export namespace TextAlign {
    export const $gtype: GObject.GType<TextAlign>;
}

export enum TextAlign {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
    JUSTIFY = 3,
}

export namespace TextDirection {
    export const $gtype: GObject.GType<TextDirection>;
}

export enum TextDirection {
    NONE = 0,
    LTR = 1,
    RTL = 2,
}

export namespace TextureCachePolicy {
    export const $gtype: GObject.GType<TextureCachePolicy>;
}

export enum TextureCachePolicy {
    NONE = 0,
    FOREVER = 1,
}

export namespace ButtonMask {
    export const $gtype: GObject.GType<ButtonMask>;
}

export enum ButtonMask {
    ONE = 1,
    TWO = 2,
    THREE = 4,
}

export namespace TableChildOptions {
    export const $gtype: GObject.GType<TableChildOptions>;
}

export enum TableChildOptions {
    KEEP_ASPECT_RATIO = 1,
    X_EXPAND = 2,
    Y_EXPAND = 4,
    X_FILL = 8,
    Y_FILL = 16,
}

export namespace TextDecoration {
    export const $gtype: GObject.GType<TextDecoration>;
}

export enum TextDecoration {
    UNDERLINE = 1,
    OVERLINE = 2,
    LINE_THROUGH = 4,
    BLINK = 8,
}
export module Adjustment {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        lower: number;
        page_increment: number;
        pageIncrement: number;
        page_size: number;
        pageSize: number;
        step_increment: number;
        stepIncrement: number;
        upper: number;
        value: number;
    }
}
export class Adjustment extends GObject.Object implements Clutter.Animatable {
    static $gtype: GObject.GType<Adjustment>;

    constructor(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get lower(): number;
    set lower(val: number);
    get page_increment(): number;
    set page_increment(val: number);
    get pageIncrement(): number;
    set pageIncrement(val: number);
    get page_size(): number;
    set page_size(val: number);
    get pageSize(): number;
    set pageSize(val: number);
    get step_increment(): number;
    set step_increment(val: number);
    get stepIncrement(): number;
    set stepIncrement(val: number);
    get upper(): number;
    set upper(val: number);
    get value(): number;
    set value(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](
        value: number,
        lower: number,
        upper: number,
        step_increment: number,
        page_increment: number,
        page_size: number
    ): Adjustment;

    // Members

    add_transition(name: string, transition: Clutter.Transition): void;
    adjust_for_scroll_event(delta: number): void;
    clamp_page(lower: number, upper: number): void;
    get_transition(name: string): Clutter.Transition | null;
    get_value(): number;
    get_values(): [number, number, number, number, number, number];
    remove_transition(name: string): void;
    set_value(value: number): void;
    set_values(
        value: number,
        lower: number,
        upper: number,
        step_increment: number,
        page_increment: number,
        page_size: number
    ): void;
    vfunc_changed(): void;

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
}
export module Bin {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Widget.ConstructorProperties {
        [key: string]: any;
        child: A;
        x_align: Align | any;
        xAlign: Align | any;
        x_fill: boolean;
        xFill: boolean;
        y_align: Align | any;
        yAlign: Align | any;
        y_fill: boolean;
        yFill: boolean;
    }
}
export class Bin<A extends Clutter.Actor = Clutter.Actor>
    extends Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Bin>;

    constructor(properties?: Partial<Bin.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Bin.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get child(): A;
    set child(val: A);
    // This accessor conflicts with another accessor's type in a parent class or interface.
    get x_align(): Align | any;
    // This accessor conflicts with another accessor's type in a parent class or interface.
    set x_align(val: Align | any);
    // This accessor conflicts with another accessor's type in a parent class or interface.
    get xAlign(): Align | any;
    // This accessor conflicts with another accessor's type in a parent class or interface.
    set xAlign(val: Align | any);
    get x_fill(): boolean;
    set x_fill(val: boolean);
    get xFill(): boolean;
    set xFill(val: boolean);
    // This accessor conflicts with another accessor's type in a parent class or interface.
    get y_align(): Align | any;
    // This accessor conflicts with another accessor's type in a parent class or interface.
    set y_align(val: Align | any);
    // This accessor conflicts with another accessor's type in a parent class or interface.
    get yAlign(): Align | any;
    // This accessor conflicts with another accessor's type in a parent class or interface.
    set yAlign(val: Align | any);
    get y_fill(): boolean;
    set y_fill(val: boolean);
    get yFill(): boolean;
    set yFill(val: boolean);

    // Constructors

    static ["new"](): Bin;

    // Members

    get_alignment(x_align: Align, y_align: Align): void;
    get_child(): A;
    get_fill(): [boolean, boolean];
    set_alignment(x_align: Align, y_align: Align): void;
    set_child(child?: A | null): void;
    set_fill(x_fill: boolean, y_fill: boolean): void;

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
export module BorderImage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BorderImage extends GObject.Object {
    static $gtype: GObject.GType<BorderImage>;

    constructor(properties?: Partial<BorderImage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BorderImage.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        filename: string,
        border_top: number,
        border_right: number,
        border_bottom: number,
        border_left: number
    ): BorderImage;

    // Members

    equal(other: BorderImage): boolean;
    get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void;
    get_filename(): string;
}
export module BoxLayout {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Viewport.ConstructorProperties<Clutter.BoxLayout> {
        [key: string]: any;
        pack_start: boolean;
        packStart: boolean;
        vertical: boolean;
    }
}
export class BoxLayout<A extends Clutter.Actor = Clutter.Actor>
    extends Viewport<Clutter.BoxLayout>
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable, Scrollable
{
    static $gtype: GObject.GType<BoxLayout>;

    constructor(properties?: Partial<BoxLayout.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<BoxLayout.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get pack_start(): boolean;
    set pack_start(val: boolean);
    get packStart(): boolean;
    set packStart(val: boolean);
    get vertical(): boolean;
    set vertical(val: boolean);

    // Implemented Properties

    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);

    // Constructors

    static ["new"](): BoxLayout;

    // Members

    get_pack_start(): boolean;
    get_vertical(): boolean;
    insert_actor(actor: A, pos: number): void;
    insert_before(actor: A, sibling: A): void;
    set_pack_start(pack_start: boolean): void;
    set_vertical(vertical: boolean): void;

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
    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
}
export module BoxLayoutChild {
    export interface ConstructorProperties extends Clutter.ChildMeta.ConstructorProperties {
        [key: string]: any;
        expand: boolean;
        x_align: Align;
        xAlign: Align;
        x_fill: boolean;
        xFill: boolean;
        y_align: Align;
        yAlign: Align;
        y_fill: boolean;
        yFill: boolean;
    }
}
export class BoxLayoutChild extends Clutter.ChildMeta {
    static $gtype: GObject.GType<BoxLayoutChild>;

    constructor(properties?: Partial<BoxLayoutChild.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BoxLayoutChild.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get expand(): boolean;
    set expand(val: boolean);
    get x_align(): Align;
    set x_align(val: Align);
    get xAlign(): Align;
    set xAlign(val: Align);
    get x_fill(): boolean;
    set x_fill(val: boolean);
    get xFill(): boolean;
    set xFill(val: boolean);
    get y_align(): Align;
    set y_align(val: Align);
    get yAlign(): Align;
    set yAlign(val: Align);
    get y_fill(): boolean;
    set y_fill(val: boolean);
    get yFill(): boolean;
    set yFill(val: boolean);
}
export module Button {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Bin.ConstructorProperties<A> {
        [key: string]: any;
        button_mask: ButtonMask;
        buttonMask: ButtonMask;
        checked: boolean;
        label: string;
        pressed: boolean;
        toggle_mode: boolean;
        toggleMode: boolean;
    }
}
export class Button<A extends Clutter.Actor = Clutter.Actor>
    extends Bin<A>
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Button>;

    constructor(properties?: Partial<Button.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Button.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get button_mask(): ButtonMask;
    set button_mask(val: ButtonMask);
    get buttonMask(): ButtonMask;
    set buttonMask(val: ButtonMask);
    get checked(): boolean;
    set checked(val: boolean);
    get label(): string;
    set label(val: string);
    get pressed(): boolean;
    get toggle_mode(): boolean;
    set toggle_mode(val: boolean);
    get toggleMode(): boolean;
    set toggleMode(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "clicked", callback: (_source: this, clicked_button: number) => void): number;
    connect_after(signal: "clicked", callback: (_source: this, clicked_button: number) => void): number;
    emit(signal: "clicked", clicked_button: number): void;

    // Constructors

    static ["new"](): Button;
    static new_with_label(text: string): Button;

    // Members

    fake_release(): void;
    get_button_mask(): ButtonMask;
    get_checked(): boolean;
    get_label(): string;
    get_toggle_mode(): boolean;
    set_button_mask(mask: ButtonMask): void;
    set_checked(checked: boolean): void;
    set_label(text: string): void;
    set_toggle_mode(toggle: boolean): void;
    vfunc_clicked(): void;
    vfunc_transition(): void;

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
export module Clipboard {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Clipboard extends GObject.Object {
    static $gtype: GObject.GType<Clipboard>;

    constructor(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_text(type: ClipboardType, callback: ClipboardCallbackFunc): void;
    set_text(type: ClipboardType, text: string): void;
    static get_default(): Clipboard;
}
export module DrawingArea {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class DrawingArea<A extends Clutter.Actor = Clutter.Actor>
    extends Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<DrawingArea>;

    constructor(properties?: Partial<DrawingArea.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<DrawingArea.ConstructorProperties<A>>, ...args: any[]): void;

    // Fields
    priv: DrawingAreaPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "repaint", callback: (_source: this) => void): number;
    connect_after(signal: "repaint", callback: (_source: this) => void): number;
    emit(signal: "repaint"): void;

    // Members

    get_context(): cairo.Context;
    get_surface_size(): [number, number];
    queue_repaint(): void;
    vfunc_repaint(): void;

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
export module Entry {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Widget.ConstructorProperties {
        [key: string]: any;
        clutter_text: Clutter.Text;
        clutterText: Clutter.Text;
        hint_text: string;
        hintText: string;
        text: string;
    }
}
export class Entry<A extends Clutter.Actor = Clutter.Actor>
    extends Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Entry>;

    constructor(properties?: Partial<Entry.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Entry.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get clutter_text(): Clutter.Text;
    get clutterText(): Clutter.Text;
    get hint_text(): string;
    set hint_text(val: string);
    get hintText(): string;
    set hintText(val: string);
    get text(): string;
    set text(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "primary-icon-clicked", callback: (_source: this) => void): number;
    connect_after(signal: "primary-icon-clicked", callback: (_source: this) => void): number;
    emit(signal: "primary-icon-clicked"): void;
    connect(signal: "secondary-icon-clicked", callback: (_source: this) => void): number;
    connect_after(signal: "secondary-icon-clicked", callback: (_source: this) => void): number;
    emit(signal: "secondary-icon-clicked"): void;

    // Constructors

    static ["new"](text: string): Entry;
    // Conflicted with Clutter.Actor.new
    static ["new"](...args: never[]): any;

    // Members

    get_clutter_text(): Clutter.Actor;
    get_hint_text(): string;
    get_text(): string;
    set_hint_text(text?: string | null): void;
    set_primary_icon(icon?: Clutter.Actor | null): void;
    set_primary_icon_from_file(filename?: string | null): void;
    set_secondary_icon(icon?: Clutter.Actor | null): void;
    set_secondary_icon_from_file(filename?: string | null): void;
    set_text(text?: string | null): void;
    vfunc_primary_icon_clicked(): void;
    vfunc_secondary_icon_clicked(): void;

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
export module FocusManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class FocusManager extends GObject.Object {
    static $gtype: GObject.GType<FocusManager>;

    constructor(properties?: Partial<FocusManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FocusManager.ConstructorProperties>, ...args: any[]): void;

    // Members

    add_group(root: Widget): void;
    get_group(widget: Widget): Widget;
    remove_group(root: Widget): void;
    static get_for_stage(stage: Clutter.Stage): FocusManager;
}
export module Group {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class Group<A extends Clutter.Actor = Clutter.Actor>
    extends Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Group>;

    constructor(properties?: Partial<Group.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Group.ConstructorProperties<A>>, ...args: any[]): void;

    // Constructors

    static ["new"](): Group;

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
export module Icon {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Widget.ConstructorProperties {
        [key: string]: any;
        gicon: Gio.Icon;
        icon_name: string;
        iconName: string;
        icon_size: number;
        iconSize: number;
        icon_type: IconType;
        iconType: IconType;
    }
}
export class Icon<A extends Clutter.Actor = Clutter.Actor>
    extends Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Icon>;

    constructor(properties?: Partial<Icon.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Icon.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);
    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get icon_size(): number;
    set icon_size(val: number);
    get iconSize(): number;
    set iconSize(val: number);
    get icon_type(): IconType;
    set icon_type(val: IconType);
    get iconType(): IconType;
    set iconType(val: IconType);

    // Constructors

    static ["new"](): Icon;

    // Members

    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_icon_size(): number;
    get_icon_type(): IconType;
    set_gicon(gicon?: Gio.Icon | null): void;
    set_icon_name(icon_name: string): void;
    set_icon_size(size: number): void;
    set_icon_type(icon_type: IconType): void;

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
export module ImageContent {
    export interface ConstructorProperties extends Clutter.Image.ConstructorProperties {
        [key: string]: any;
        preferred_height: number;
        preferredHeight: number;
        preferred_width: number;
        preferredWidth: number;
    }
}
export class ImageContent extends Clutter.Image implements Clutter.Content {
    static $gtype: GObject.GType<ImageContent>;

    constructor(properties?: Partial<ImageContent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ImageContent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get preferred_height(): number;
    get preferredHeight(): number;
    get preferred_width(): number;
    get preferredWidth(): number;

    // Members

    static new_with_preferred_size(width: number, height: number): Clutter.Content;

    // Implemented Members

    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    invalidate_size(): void;
    vfunc_attached(actor: Clutter.Actor): void;
    vfunc_detached(actor: Clutter.Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_invalidate_size(): void;
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
}
export module Label {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Widget.ConstructorProperties {
        [key: string]: any;
        clutter_text: Clutter.Text;
        clutterText: Clutter.Text;
        text: string;
    }
}
export class Label<A extends Clutter.Actor = Clutter.Actor>
    extends Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Label>;

    constructor(properties?: Partial<Label.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Label.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get clutter_text(): Clutter.Text;
    get clutterText(): Clutter.Text;
    get text(): string;
    set text(val: string);

    // Constructors

    static ["new"](text: string): Label;
    // Conflicted with Clutter.Actor.new
    static ["new"](...args: never[]): any;

    // Members

    get_clutter_text(): Clutter.Actor;
    get_text(): string;
    set_text(text: string): void;

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
export module Polygon {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Clutter.Actor.ConstructorProperties {
        [key: string]: any;
        debug: boolean;
        llc_x: number;
        llcX: number;
        llc_y: number;
        llcY: number;
        lrc_x: number;
        lrcX: number;
        lrc_y: number;
        lrcY: number;
        ulc_x: number;
        ulcX: number;
        ulc_y: number;
        ulcY: number;
        urc_x: number;
        urcX: number;
        urc_y: number;
        urcY: number;
    }
}
export class Polygon<A extends Clutter.Actor = Clutter.Actor>
    extends Clutter.Actor
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Polygon>;

    constructor(properties?: Partial<Polygon.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Polygon.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get debug(): boolean;
    set debug(val: boolean);
    get llc_x(): number;
    set llc_x(val: number);
    get llcX(): number;
    set llcX(val: number);
    get llc_y(): number;
    set llc_y(val: number);
    get llcY(): number;
    set llcY(val: number);
    get lrc_x(): number;
    set lrc_x(val: number);
    get lrcX(): number;
    set lrcX(val: number);
    get lrc_y(): number;
    set lrc_y(val: number);
    get lrcY(): number;
    set lrcY(val: number);
    get ulc_x(): number;
    set ulc_x(val: number);
    get ulcX(): number;
    set ulcX(val: number);
    get ulc_y(): number;
    set ulc_y(val: number);
    get ulcY(): number;
    set ulcY(val: number);
    get urc_x(): number;
    set urc_x(val: number);
    get urcX(): number;
    set urcX(val: number);
    get urc_y(): number;
    set urc_y(val: number);
    get urcY(): number;
    set urcY(val: number);

    // Fields
    priv: PolygonPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "repaint", callback: (_source: this) => void): number;
    connect_after(signal: "repaint", callback: (_source: this) => void): number;
    emit(signal: "repaint"): void;

    // Members

    queue_repaint(): void;
    vfunc_repaint(): void;

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
export module ScrollBar {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Widget.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        vertical: boolean;
    }
}
export class ScrollBar<A extends Clutter.Actor = Clutter.Actor>
    extends Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<ScrollBar>;

    constructor(properties?: Partial<ScrollBar.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<ScrollBar.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get adjustment(): Adjustment;
    set adjustment(val: Adjustment);
    get vertical(): boolean;
    set vertical(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "scroll-start", callback: (_source: this) => void): number;
    connect_after(signal: "scroll-start", callback: (_source: this) => void): number;
    emit(signal: "scroll-start"): void;
    connect(signal: "scroll-stop", callback: (_source: this) => void): number;
    connect_after(signal: "scroll-stop", callback: (_source: this) => void): number;
    emit(signal: "scroll-stop"): void;

    // Constructors

    static ["new"](adjustment: Adjustment): ScrollBar;
    // Conflicted with Clutter.Actor.new
    static ["new"](...args: never[]): any;

    // Members

    get_adjustment(): Adjustment;
    set_adjustment(adjustment: Adjustment): void;
    vfunc_scroll_start(): void;
    vfunc_scroll_stop(): void;

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
export module ScrollView {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Bin.ConstructorProperties<A> {
        [key: string]: any;
        enable_auto_scrolling: boolean;
        enableAutoScrolling: boolean;
        enable_mouse_scrolling: boolean;
        enableMouseScrolling: boolean;
        hscroll: ScrollBar;
        hscrollbar_policy: PolicyType;
        hscrollbarPolicy: PolicyType;
        hscrollbar_visible: boolean;
        hscrollbarVisible: boolean;
        overlay_scrollbars: boolean;
        overlayScrollbars: boolean;
        vscroll: ScrollBar;
        vscrollbar_policy: PolicyType;
        vscrollbarPolicy: PolicyType;
        vscrollbar_visible: boolean;
        vscrollbarVisible: boolean;
    }
}
export class ScrollView<A extends Clutter.Actor = Clutter.Actor>
    extends Bin<A>
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<ScrollView>;

    constructor(properties?: Partial<ScrollView.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<ScrollView.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get enable_auto_scrolling(): boolean;
    set enable_auto_scrolling(val: boolean);
    get enableAutoScrolling(): boolean;
    set enableAutoScrolling(val: boolean);
    get enable_mouse_scrolling(): boolean;
    set enable_mouse_scrolling(val: boolean);
    get enableMouseScrolling(): boolean;
    set enableMouseScrolling(val: boolean);
    get hscroll(): ScrollBar;
    get hscrollbar_policy(): PolicyType;
    set hscrollbar_policy(val: PolicyType);
    get hscrollbarPolicy(): PolicyType;
    set hscrollbarPolicy(val: PolicyType);
    get hscrollbar_visible(): boolean;
    get hscrollbarVisible(): boolean;
    get overlay_scrollbars(): boolean;
    set overlay_scrollbars(val: boolean);
    get overlayScrollbars(): boolean;
    set overlayScrollbars(val: boolean);
    get vscroll(): ScrollBar;
    get vscrollbar_policy(): PolicyType;
    set vscrollbar_policy(val: PolicyType);
    get vscrollbarPolicy(): PolicyType;
    set vscrollbarPolicy(val: PolicyType);
    get vscrollbar_visible(): boolean;
    get vscrollbarVisible(): boolean;

    // Constructors

    static ["new"](): ScrollView;

    // Members

    get_auto_scrolling(): boolean;
    get_column_size(): number;
    get_hscroll_bar(): ScrollBar;
    get_mouse_scrolling(): boolean;
    get_overlay_scrollbars(): boolean;
    get_row_size(): number;
    get_vscroll_bar(): ScrollBar;
    set_auto_scrolling(enabled: boolean): void;
    set_column_size(column_size: number): void;
    set_mouse_scrolling(enabled: boolean): void;
    set_overlay_scrollbars(enabled: boolean): void;
    set_policy(hscroll: PolicyType, vscroll: PolicyType): void;
    set_row_size(row_size: number): void;
    update_fade_effect(vfade_offset: number, hfade_offset: number): void;

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
export module ScrollViewFade {
    export interface ConstructorProperties extends Clutter.ShaderEffect.ConstructorProperties {
        [key: string]: any;
        fade_edges: boolean;
        fadeEdges: boolean;
        hfade_offset: number;
        hfadeOffset: number;
        vfade_offset: number;
        vfadeOffset: number;
    }
}
export class ScrollViewFade extends Clutter.ShaderEffect {
    static $gtype: GObject.GType<ScrollViewFade>;

    constructor(properties?: Partial<ScrollViewFade.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrollViewFade.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get fade_edges(): boolean;
    set fade_edges(val: boolean);
    get fadeEdges(): boolean;
    set fadeEdges(val: boolean);
    get hfade_offset(): number;
    set hfade_offset(val: number);
    get hfadeOffset(): number;
    set hfadeOffset(val: number);
    get vfade_offset(): number;
    set vfade_offset(val: number);
    get vfadeOffset(): number;
    set vfadeOffset(val: number);

    // Constructors

    static ["new"](): ScrollViewFade;
}
export module Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        font_name: string;
        fontName: string;
        gtk_icon_theme: string;
        gtkIconTheme: string;
        magnifier_active: boolean;
        magnifierActive: boolean;
    }
}
export class Settings extends GObject.Object {
    static $gtype: GObject.GType<Settings>;

    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get font_name(): string;
    get fontName(): string;
    get gtk_icon_theme(): string;
    get gtkIconTheme(): string;
    get magnifier_active(): boolean;
    get magnifierActive(): boolean;

    // Members

    static get(): Settings;
}
export module Table {
    export interface ConstructorProperties<A extends Clutter.Actor = Clutter.Actor>
        extends Widget.ConstructorProperties {
        [key: string]: any;
        column_count: number;
        columnCount: number;
        homogeneous: boolean;
        row_count: number;
        rowCount: number;
    }
}
export class Table<A extends Clutter.Actor = Clutter.Actor>
    extends Widget
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<A>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Table>;

    constructor(properties?: Partial<Table.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<Table.ConstructorProperties<A>>, ...args: any[]): void;

    // Properties
    get column_count(): number;
    get columnCount(): number;
    get homogeneous(): boolean;
    set homogeneous(val: boolean);
    get row_count(): number;
    get rowCount(): number;

    // Constructors

    static ["new"](): Table;

    // Members

    child_get_allocate_hidden(child: Clutter.Actor): boolean;
    child_get_col_span(child: Clutter.Actor): number;
    child_get_row_span(child: Clutter.Actor): number;
    child_get_x_align(child: Clutter.Actor): Align;
    child_get_x_expand(child: Clutter.Actor): boolean;
    child_get_x_fill(child: Clutter.Actor): boolean;
    child_get_y_align(child: Clutter.Actor): Align;
    child_get_y_expand(child: Clutter.Actor): boolean;
    child_get_y_fill(child: Clutter.Actor): boolean;
    child_set_allocate_hidden(child: Clutter.Actor, value: boolean): void;
    child_set_col_span(child: Clutter.Actor, span: number): void;
    child_set_row_span(child: Clutter.Actor, span: number): void;
    child_set_x_align(child: Clutter.Actor, align: Align): void;
    child_set_x_expand(child: Clutter.Actor, expand: boolean): void;
    child_set_x_fill(child: Clutter.Actor, fill: boolean): void;
    child_set_y_align(child: Clutter.Actor, align: Align): void;
    child_set_y_expand(child: Clutter.Actor, expand: boolean): void;
    child_set_y_fill(child: Clutter.Actor, fill: boolean): void;
    get_column_count(): number;
    get_row_count(): number;

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
export module TableChild {
    export interface ConstructorProperties extends Clutter.ChildMeta.ConstructorProperties {
        [key: string]: any;
        allocate_hidden: boolean;
        allocateHidden: boolean;
        col: number;
        col_span: number;
        colSpan: number;
        row: number;
        row_span: number;
        rowSpan: number;
        x_align: Align;
        xAlign: Align;
        x_expand: boolean;
        xExpand: boolean;
        x_fill: boolean;
        xFill: boolean;
        y_align: Align;
        yAlign: Align;
        y_expand: boolean;
        yExpand: boolean;
        y_fill: boolean;
        yFill: boolean;
    }
}
export class TableChild extends Clutter.ChildMeta {
    static $gtype: GObject.GType<TableChild>;

    constructor(properties?: Partial<TableChild.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TableChild.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get allocate_hidden(): boolean;
    set allocate_hidden(val: boolean);
    get allocateHidden(): boolean;
    set allocateHidden(val: boolean);
    get col(): number;
    set col(val: number);
    get col_span(): number;
    set col_span(val: number);
    get colSpan(): number;
    set colSpan(val: number);
    get row(): number;
    set row(val: number);
    get row_span(): number;
    set row_span(val: number);
    get rowSpan(): number;
    set rowSpan(val: number);
    get x_align(): Align;
    set x_align(val: Align);
    get xAlign(): Align;
    set xAlign(val: Align);
    get x_expand(): boolean;
    set x_expand(val: boolean);
    get xExpand(): boolean;
    set xExpand(val: boolean);
    get x_fill(): boolean;
    set x_fill(val: boolean);
    get xFill(): boolean;
    set xFill(val: boolean);
    get y_align(): Align;
    set y_align(val: Align);
    get yAlign(): Align;
    set yAlign(val: Align);
    get y_expand(): boolean;
    set y_expand(val: boolean);
    get yExpand(): boolean;
    set yExpand(val: boolean);
    get y_fill(): boolean;
    set y_fill(val: boolean);
    get yFill(): boolean;
    set yFill(val: boolean);
}
export module TextureCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextureCache extends GObject.Object {
    static $gtype: GObject.GType<TextureCache>;

    constructor(properties?: Partial<TextureCache.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextureCache.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TextureCachePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "icon-theme-changed", callback: (_source: this) => void): number;
    connect_after(signal: "icon-theme-changed", callback: (_source: this) => void): number;
    emit(signal: "icon-theme-changed"): void;
    connect(signal: "texture-file-changed", callback: (_source: this, object: Gio.File) => void): number;
    connect_after(signal: "texture-file-changed", callback: (_source: this, object: Gio.File) => void): number;
    emit(signal: "texture-file-changed", object: Gio.File): void;

    // Members

    bind_cairo_surface_property(object: GObject.Object, property_name: string, size: number): Widget;
    load_file_async(
        file: Gio.File,
        available_width: number,
        available_height: number,
        paint_scale: number,
        resource_scale: number
    ): Clutter.Actor;
    load_file_simple(file_path: string): Clutter.Actor;
    load_file_to_cairo_surface(file_path: string): cairo.Surface;
    load_from_raw(
        data: Uint8Array | string,
        has_alpha: boolean,
        width: number,
        height: number,
        rowstride: number,
        size: number
    ): Clutter.Actor;
    load_gfile_to_cairo_surface(file: Gio.File, paint_scale: number, resource_scale: number): cairo.Surface;
    load_gicon(theme_node: ThemeNode | null, icon: Gio.Icon, size: number): Clutter.Actor;
    load_gicon_with_scale(
        theme_node: ThemeNode | null,
        icon: Gio.Icon,
        size: number,
        paint_scale: number,
        resource_scale: number
    ): Clutter.Actor;
    load_icon_name(theme_node: ThemeNode | null, name: string, icon_type: IconType, size: number): Clutter.Actor;
    load_image_from_file_async(
        path: string,
        width: number,
        height: number,
        callback: TextureCacheLoadImageCallback
    ): number;
    load_sliced_image(
        path: string,
        grid_width: number,
        grid_height: number,
        load_callback?: GLib.Func | null
    ): Clutter.Actor;
    load_sliced_image_file(
        file: Gio.File,
        grid_width: number,
        grid_height: number,
        paint_scale: number,
        resource_scale: number,
        load_callback?: GLib.Func | null
    ): Clutter.Actor;
    load_uri_async(uri: string, available_width: number, available_height: number): Clutter.Actor;
    rescan_icon_theme(): boolean;
    static get_default(): TextureCache;
    static load_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf, size: number): Clutter.Actor;
}
export module Theme {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        application_stylesheet: string;
        applicationStylesheet: string;
        default_stylesheet: string;
        defaultStylesheet: string;
        fallback_stylesheet: string;
        fallbackStylesheet: string;
        theme_stylesheet: string;
        themeStylesheet: string;
    }
}
export class Theme extends GObject.Object {
    static $gtype: GObject.GType<Theme>;

    constructor(properties?: Partial<Theme.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Theme.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get application_stylesheet(): string;
    get applicationStylesheet(): string;
    get default_stylesheet(): string;
    get defaultStylesheet(): string;
    get fallback_stylesheet(): string;
    get fallbackStylesheet(): string;
    get theme_stylesheet(): string;
    get themeStylesheet(): string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "custom-stylesheets-changed", callback: (_source: this) => void): number;
    connect_after(signal: "custom-stylesheets-changed", callback: (_source: this) => void): number;
    emit(signal: "custom-stylesheets-changed"): void;

    // Constructors

    static ["new"](application_stylesheet: string, theme_stylesheet: string, default_stylesheet: string): Theme;

    // Members

    get_custom_stylesheets(): string[];
    load_stylesheet(path: string): boolean;
    unload_stylesheet(path: string): void;
}
export module ThemeContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        scale_factor: number;
        scaleFactor: number;
    }
}
export class ThemeContext extends GObject.Object {
    static $gtype: GObject.GType<ThemeContext>;

    constructor(properties?: Partial<ThemeContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThemeContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get scale_factor(): number;
    set scale_factor(val: number);
    get scaleFactor(): number;
    set scaleFactor(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](): ThemeContext;

    // Members

    get_font(): Pango.FontDescription;
    get_root_node(): ThemeNode;
    get_theme(): Theme;
    intern_node(node: ThemeNode): ThemeNode;
    set_font(font: Pango.FontDescription): void;
    set_theme(theme: Theme): void;
    static get_for_stage(stage: Clutter.Stage): ThemeContext;
    static get_scale_for_stage(): number;
}
export module ThemeNode {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ThemeNode extends GObject.Object {
    static $gtype: GObject.GType<ThemeNode>;

    constructor(properties?: Partial<ThemeNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThemeNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        context: ThemeContext,
        parent_node: ThemeNode | null,
        theme: Theme | null,
        element_type: GObject.GType,
        element_id: string | null,
        element_class: string | null,
        pseudo_class: string | null,
        inline_style: string,
        important: boolean
    ): ThemeNode;

    // Members

    adjust_for_height(for_height: number): number;
    adjust_for_width(for_width: number): number;
    adjust_preferred_height(min_height_p: number, natural_height_p: number): [number, number];
    adjust_preferred_width(min_width_p: number, natural_width_p: number): [number, number];
    copy_cached_paint_state(other: ThemeNode): void;
    equal(node_b: ThemeNode): boolean;
    geometry_equal(other: ThemeNode): boolean;
    get_background_bumpmap(): string;
    get_background_color(): Clutter.Color;
    get_background_gradient(): [GradientType, Clutter.Color, Clutter.Color];
    get_background_image(): string;
    get_background_image_shadow(): Shadow;
    get_background_paint_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
    get_border_color(side: Side): Clutter.Color;
    get_border_image(): BorderImage;
    get_border_radius(corner: Corner): number;
    get_border_width(side: Side): number;
    get_box_shadow(): Shadow;
    get_color(property_name: string): Clutter.Color;
    get_content_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
    get_double(property_name: string): number;
    get_element_classes(): string[];
    get_element_id(): string;
    get_element_type(): GObject.GType;
    get_font(): Pango.FontDescription;
    get_font_features(): string;
    get_foreground_color(): Clutter.Color;
    get_height(): number;
    get_horizontal_padding(): number;
    get_icon_colors(): IconColors;
    get_icon_style(): IconStyle;
    get_length(property_name: string): number;
    get_letter_spacing(): number;
    get_margin(side: Side): number;
    get_max_height(): number;
    get_max_width(): number;
    get_min_height(): number;
    get_min_width(): number;
    get_outline_color(): Clutter.Color;
    get_outline_width(): number;
    get_padding(side: Side): number;
    get_paint_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
    get_parent(): ThemeNode;
    get_pseudo_classes(): string[];
    get_shadow(property_name: string): Shadow;
    get_text_align(): TextAlign;
    get_text_decoration(): TextDecoration;
    get_text_shadow(): Shadow;
    get_theme(): Theme;
    get_transition_duration(): number;
    get_vertical_padding(): number;
    get_width(): number;
    hash(): number;
    lookup_color(property_name: string, inherit: boolean): [boolean, Clutter.Color];
    lookup_double(property_name: string, inherit: boolean): [boolean, number];
    lookup_length(property_name: string, inherit: boolean): [boolean, number];
    lookup_shadow(property_name: string, inherit: boolean): [boolean, Shadow];
    paint_equal(other: ThemeNode): boolean;
}
export module Viewport {
    export interface ConstructorProperties<
        A extends Clutter.LayoutManager = Clutter.LayoutManager,
        B extends Clutter.Content = Clutter.Content,
        C extends Clutter.Actor = Clutter.Actor
    > extends Widget.ConstructorProperties<A, B> {
        [key: string]: any;
    }
}
export class Viewport<
        A extends Clutter.LayoutManager = Clutter.LayoutManager,
        B extends Clutter.Content = Clutter.Content,
        C extends Clutter.Actor = Clutter.Actor
    >
    extends Widget<A, B>
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<C>, Clutter.Scriptable, Scrollable
{
    static $gtype: GObject.GType<Viewport>;

    constructor(properties?: Partial<Viewport.ConstructorProperties<A, B, C>>, ...args: any[]);
    _init(properties?: Partial<Viewport.ConstructorProperties<A, B, C>>, ...args: any[]): void;

    // Implemented Properties

    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);

    // Implemented Members

    add_actor(actor: C): void;
    // Conflicted with Clutter.Container.add_actor
    add_actor(...args: never[]): any;
    child_get_property(child: C, property: string, value: GObject.Value | any): void;
    // Conflicted with Clutter.Container.child_get_property
    child_get_property(...args: never[]): any;
    child_notify(child: C, pspec: GObject.ParamSpec): void;
    // Conflicted with Clutter.Container.child_notify
    child_notify(...args: never[]): any;
    child_set_property(child: C, property: string, value: GObject.Value | any): void;
    // Conflicted with Clutter.Container.child_set_property
    child_set_property(...args: never[]): any;
    create_child_meta(actor: C): void;
    // Conflicted with Clutter.Container.create_child_meta
    create_child_meta(...args: never[]): any;
    destroy_child_meta(actor: C): void;
    // Conflicted with Clutter.Container.destroy_child_meta
    destroy_child_meta(...args: never[]): any;
    find_child_by_name(child_name: string): C;
    // Conflicted with Clutter.Container.find_child_by_name
    find_child_by_name(...args: never[]): any;
    get_child_meta(actor: C): Clutter.ChildMeta;
    // Conflicted with Clutter.Container.get_child_meta
    get_child_meta(...args: never[]): any;
    get_children(): C[];
    // Conflicted with Clutter.Actor.get_children
    get_children(...args: never[]): any;
    lower_child(actor: C, sibling?: C | null): void;
    // Conflicted with Clutter.Container.lower_child
    lower_child(...args: never[]): any;
    raise_child(actor: C, sibling?: C | null): void;
    // Conflicted with Clutter.Container.raise_child
    raise_child(...args: never[]): any;
    remove_actor(actor: C): void;
    // Conflicted with Clutter.Container.remove_actor
    remove_actor(...args: never[]): any;
    sort_depth_order(): void;
    vfunc_actor_added(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_actor_added
    vfunc_actor_added(...args: never[]): any;
    vfunc_actor_removed(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_actor_removed
    vfunc_actor_removed(...args: never[]): any;
    vfunc_add(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_add
    vfunc_add(...args: never[]): any;
    vfunc_child_notify(child: C, pspec: GObject.ParamSpec): void;
    // Conflicted with Clutter.Container.vfunc_child_notify
    vfunc_child_notify(...args: never[]): any;
    vfunc_create_child_meta(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_create_child_meta
    vfunc_create_child_meta(...args: never[]): any;
    vfunc_destroy_child_meta(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_destroy_child_meta
    vfunc_destroy_child_meta(...args: never[]): any;
    vfunc_get_child_meta(actor: C): Clutter.ChildMeta;
    // Conflicted with Clutter.Container.vfunc_get_child_meta
    vfunc_get_child_meta(...args: never[]): any;
    vfunc_lower(actor: C, sibling?: C | null): void;
    // Conflicted with Clutter.Container.vfunc_lower
    vfunc_lower(...args: never[]): any;
    vfunc_raise(actor: C, sibling?: C | null): void;
    // Conflicted with Clutter.Container.vfunc_raise
    vfunc_raise(...args: never[]): any;
    vfunc_remove(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_remove
    vfunc_remove(...args: never[]): any;
    vfunc_sort_depth_order(): void;
    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
}
export module Widget {
    export interface ConstructorProperties<
        A extends Clutter.LayoutManager = Clutter.LayoutManager,
        B extends Clutter.Content = Clutter.Content,
        C extends Clutter.Actor = Clutter.Actor
    > extends Clutter.Actor.ConstructorProperties<A, B> {
        [key: string]: any;
        accessible_name: string;
        accessibleName: string;
        accessible_role: Atk.Role;
        accessibleRole: Atk.Role;
        can_focus: boolean;
        canFocus: boolean;
        hover: boolean;
        important: boolean;
        label_actor: Clutter.Actor;
        labelActor: Clutter.Actor;
        pseudo_class: string;
        pseudoClass: string;
        style: string;
        style_class: string;
        styleClass: string;
        theme: Theme;
        track_hover: boolean;
        trackHover: boolean;
    }
}
export class Widget<
        A extends Clutter.LayoutManager = Clutter.LayoutManager,
        B extends Clutter.Content = Clutter.Content,
        C extends Clutter.Actor = Clutter.Actor
    >
    extends Clutter.Actor<A, B>
    implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container<C>, Clutter.Scriptable
{
    static $gtype: GObject.GType<Widget>;

    constructor(properties?: Partial<Widget.ConstructorProperties<A, B, C>>, ...args: any[]);
    _init(properties?: Partial<Widget.ConstructorProperties<A, B, C>>, ...args: any[]): void;

    // Properties
    get accessible_name(): string;
    set accessible_name(val: string);
    get accessibleName(): string;
    set accessibleName(val: string);
    get accessible_role(): Atk.Role;
    set accessible_role(val: Atk.Role);
    get accessibleRole(): Atk.Role;
    set accessibleRole(val: Atk.Role);
    get can_focus(): boolean;
    set can_focus(val: boolean);
    get canFocus(): boolean;
    set canFocus(val: boolean);
    get hover(): boolean;
    set hover(val: boolean);
    get important(): boolean;
    set important(val: boolean);
    get label_actor(): Clutter.Actor;
    set label_actor(val: Clutter.Actor);
    get labelActor(): Clutter.Actor;
    set labelActor(val: Clutter.Actor);
    get pseudo_class(): string;
    set pseudo_class(val: string);
    get pseudoClass(): string;
    set pseudoClass(val: string);
    get style(): string;
    set style(val: string);
    get style_class(): string;
    set style_class(val: string);
    get styleClass(): string;
    set styleClass(val: string);
    get theme(): Theme;
    set theme(val: Theme);
    get track_hover(): boolean;
    set track_hover(val: boolean);
    get trackHover(): boolean;
    set trackHover(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "popup-menu", callback: (_source: this) => void): number;
    connect_after(signal: "popup-menu", callback: (_source: this) => void): number;
    emit(signal: "popup-menu"): void;
    connect(signal: "style-changed", callback: (_source: this) => void): number;
    connect_after(signal: "style-changed", callback: (_source: this) => void): number;
    emit(signal: "style-changed"): void;

    // Members

    add_accessible_state(state: Atk.StateType): void;
    add_style_class_name(style_class: string): void;
    add_style_pseudo_class(pseudo_class: string): void;
    change_style_pseudo_class(pseudo_class: string, add: boolean): void;
    destroy_children(): void;
    ensure_style(): void;
    get_accessible_name(): string;
    get_accessible_role(): Atk.Role;
    get_can_focus(): boolean;
    get_direction(): TextDirection;
    get_focus_chain(): Clutter.Actor[];
    get_hover(): boolean;
    get_important(): boolean;
    get_label_actor(): Clutter.Actor;
    get_style(): string;
    get_style_class_name(): string;
    get_style_pseudo_class(): string;
    get_theme(): Theme;
    get_theme_node(): ThemeNode;
    get_track_hover(): boolean;
    has_style_class_name(style_class: string): boolean;
    has_style_pseudo_class(pseudo_class: string): boolean;
    move_before(actor: Clutter.Actor, sibling: Clutter.Actor): void;
    move_child(actor: Clutter.Actor, pos: number): void;
    navigate_focus(from: Clutter.Actor | null, direction: Gtk.DirectionType, wrap_around: boolean): boolean;
    paint_background(paint_context: Clutter.PaintContext): void;
    peek_theme_node(): ThemeNode;
    popup_menu(): void;
    remove_accessible_state(state: Atk.StateType): void;
    remove_style_class_name(style_class: string): void;
    remove_style_pseudo_class(pseudo_class: string): void;
    set_accessible(accessible: Atk.Object): void;
    set_accessible_name(name?: string | null): void;
    set_accessible_role(role: Atk.Role): void;
    set_can_focus(can_focus: boolean): void;
    set_direction(dir: TextDirection): void;
    set_hover(hover: boolean): void;
    set_important(important: boolean): void;
    set_label_actor(label: Clutter.Actor): void;
    set_style(style?: string | null): void;
    set_style_class_name(style_class_list?: string | null): void;
    set_style_pseudo_class(pseudo_class_list?: string | null): void;
    set_theme(theme: Theme): void;
    set_track_hover(track_hover: boolean): void;
    style_changed(): void;
    sync_hover(): void;
    vfunc_get_focus_chain(): Clutter.Actor[];
    vfunc_navigate_focus(from: Clutter.Actor | null, direction: Gtk.DirectionType): boolean;
    vfunc_popup_menu(): void;
    vfunc_style_changed(): void;
    static get_default_direction(): TextDirection;
    static set_default_direction(dir: TextDirection): void;

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
    add_actor(actor: C): void;
    // Conflicted with Clutter.Container.add_actor
    add_actor(...args: never[]): any;
    child_get_property(child: C, property: string, value: GObject.Value | any): void;
    // Conflicted with Clutter.Container.child_get_property
    child_get_property(...args: never[]): any;
    child_notify(child: C, pspec: GObject.ParamSpec): void;
    // Conflicted with Clutter.Container.child_notify
    child_notify(...args: never[]): any;
    child_set_property(child: C, property: string, value: GObject.Value | any): void;
    // Conflicted with Clutter.Container.child_set_property
    child_set_property(...args: never[]): any;
    create_child_meta(actor: C): void;
    // Conflicted with Clutter.Container.create_child_meta
    create_child_meta(...args: never[]): any;
    destroy_child_meta(actor: C): void;
    // Conflicted with Clutter.Container.destroy_child_meta
    destroy_child_meta(...args: never[]): any;
    find_child_by_name(child_name: string): C;
    // Conflicted with Clutter.Container.find_child_by_name
    find_child_by_name(...args: never[]): any;
    get_child_meta(actor: C): Clutter.ChildMeta;
    // Conflicted with Clutter.Container.get_child_meta
    get_child_meta(...args: never[]): any;
    get_children(): C[];
    // Conflicted with Clutter.Actor.get_children
    get_children(...args: never[]): any;
    lower_child(actor: C, sibling?: C | null): void;
    // Conflicted with Clutter.Container.lower_child
    lower_child(...args: never[]): any;
    raise_child(actor: C, sibling?: C | null): void;
    // Conflicted with Clutter.Container.raise_child
    raise_child(...args: never[]): any;
    remove_actor(actor: C): void;
    // Conflicted with Clutter.Container.remove_actor
    remove_actor(...args: never[]): any;
    sort_depth_order(): void;
    vfunc_actor_added(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_actor_added
    vfunc_actor_added(...args: never[]): any;
    vfunc_actor_removed(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_actor_removed
    vfunc_actor_removed(...args: never[]): any;
    vfunc_add(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_add
    vfunc_add(...args: never[]): any;
    vfunc_child_notify(child: C, pspec: GObject.ParamSpec): void;
    // Conflicted with Clutter.Container.vfunc_child_notify
    vfunc_child_notify(...args: never[]): any;
    vfunc_create_child_meta(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_create_child_meta
    vfunc_create_child_meta(...args: never[]): any;
    vfunc_destroy_child_meta(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_destroy_child_meta
    vfunc_destroy_child_meta(...args: never[]): any;
    vfunc_get_child_meta(actor: C): Clutter.ChildMeta;
    // Conflicted with Clutter.Container.vfunc_get_child_meta
    vfunc_get_child_meta(...args: never[]): any;
    vfunc_lower(actor: C, sibling?: C | null): void;
    // Conflicted with Clutter.Container.vfunc_lower
    vfunc_lower(...args: never[]): any;
    vfunc_raise(actor: C, sibling?: C | null): void;
    // Conflicted with Clutter.Container.vfunc_raise
    vfunc_raise(...args: never[]): any;
    vfunc_remove(actor: C): void;
    // Conflicted with Clutter.Container.vfunc_remove
    vfunc_remove(...args: never[]): any;
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
export module WidgetAccessible {
    export interface ConstructorProperties extends Atk.GObjectAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class WidgetAccessible extends Atk.GObjectAccessible implements Atk.Action, Atk.Component {
    static $gtype: GObject.GType<WidgetAccessible>;

    constructor(properties?: Partial<WidgetAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WidgetAccessible.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}

export class BinPrivate {
    static $gtype: GObject.GType<BinPrivate>;

    constructor(copy: BinPrivate);
}

export class BoxLayoutChildPrivate {
    static $gtype: GObject.GType<BoxLayoutChildPrivate>;

    constructor(copy: BoxLayoutChildPrivate);
}

export class BoxLayoutPrivate {
    static $gtype: GObject.GType<BoxLayoutPrivate>;

    constructor(copy: BoxLayoutPrivate);
}

export class ButtonPrivate {
    static $gtype: GObject.GType<ButtonPrivate>;

    constructor(copy: ButtonPrivate);
}

export class ClipboardPrivate {
    static $gtype: GObject.GType<ClipboardPrivate>;

    constructor(copy: ClipboardPrivate);
}

export class DrawingAreaPrivate {
    static $gtype: GObject.GType<DrawingAreaPrivate>;

    constructor(copy: DrawingAreaPrivate);
}

export class EntryPrivate {
    static $gtype: GObject.GType<EntryPrivate>;

    constructor(copy: EntryPrivate);
}

export class FocusManagerPrivate {
    static $gtype: GObject.GType<FocusManagerPrivate>;

    constructor(copy: FocusManagerPrivate);
}

export class GroupPrivate {
    static $gtype: GObject.GType<GroupPrivate>;

    constructor(copy: GroupPrivate);
}

export class IconColors {
    static $gtype: GObject.GType<IconColors>;

    constructor();
    constructor(
        properties?: Partial<{
            ref_count?: number;
            foreground?: Clutter.Color;
            warning?: Clutter.Color;
            error?: Clutter.Color;
            success?: Clutter.Color;
        }>
    );
    constructor(copy: IconColors);

    // Fields
    ref_count: number;
    foreground: Clutter.Color;
    warning: Clutter.Color;
    error: Clutter.Color;
    success: Clutter.Color;

    // Constructors
    static ["new"](): IconColors;

    // Members
    copy(): IconColors;
    ref(): IconColors;
    unref(): void;
}

export class IconPrivate {
    static $gtype: GObject.GType<IconPrivate>;

    constructor(copy: IconPrivate);
}

export class LabelPrivate {
    static $gtype: GObject.GType<LabelPrivate>;

    constructor(copy: LabelPrivate);
}

export class PolygonPrivate {
    static $gtype: GObject.GType<PolygonPrivate>;

    constructor(copy: PolygonPrivate);
}

export class ScrollBarPrivate {
    static $gtype: GObject.GType<ScrollBarPrivate>;

    constructor(copy: ScrollBarPrivate);
}

export class ScrollViewPrivate {
    static $gtype: GObject.GType<ScrollViewPrivate>;

    constructor(copy: ScrollViewPrivate);
}

export class Shadow {
    static $gtype: GObject.GType<Shadow>;

    constructor(
        properties?: Partial<{
            color?: Clutter.Color;
            xoffset?: number;
            yoffset?: number;
            blur?: number;
            spread?: number;
            inset?: boolean;
            ref_count?: number;
        }>
    );
    constructor(copy: Shadow);

    // Fields
    color: Clutter.Color;
    xoffset: number;
    yoffset: number;
    blur: number;
    spread: number;
    inset: boolean;
    ref_count: number;

    // Constructors
    static ["new"](
        color: Clutter.Color,
        xoffset: number,
        yoffset: number,
        blur: number,
        spread: number,
        inset: boolean
    ): Shadow;

    // Members
    equal(other: Shadow): boolean;
    get_box(actor_box: Clutter.ActorBox, shadow_box: Clutter.ActorBox): void;
    ref(): Shadow;
    unref(): void;
}

export class ShadowHelper {
    static $gtype: GObject.GType<ShadowHelper>;

    constructor(shadow: Shadow);
    constructor(copy: ShadowHelper);

    // Constructors
    static ["new"](shadow: Shadow): ShadowHelper;

    // Members
    copy(): ShadowHelper;
    free(): void;
    paint(framebuffer: Cogl.Framebuffer, actor_box: Clutter.ActorBox, paint_opacity: number): void;
    update(source: Clutter.Actor): void;
}

export class TablePrivate {
    static $gtype: GObject.GType<TablePrivate>;

    constructor(copy: TablePrivate);
}

export class TextureCachePrivate {
    static $gtype: GObject.GType<TextureCachePrivate>;

    constructor(copy: TextureCachePrivate);
}

export class ViewportPrivate {
    static $gtype: GObject.GType<ViewportPrivate>;

    constructor(copy: ViewportPrivate);
}

export class WidgetAccessiblePrivate {
    static $gtype: GObject.GType<WidgetAccessiblePrivate>;

    constructor(copy: WidgetAccessiblePrivate);
}

export class WidgetPrivate {
    static $gtype: GObject.GType<WidgetPrivate>;

    constructor(copy: WidgetPrivate);
}

export interface ScrollableNamespace {
    $gtype: GObject.GType<Scrollable>;
    prototype: ScrollablePrototype;
}
export type Scrollable = ScrollablePrototype;
export interface ScrollablePrototype extends GObject.Object {
    // Properties
    hadjustment: Adjustment;
    vadjustment: Adjustment;

    // Members

    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
}

export const Scrollable: ScrollableNamespace;
