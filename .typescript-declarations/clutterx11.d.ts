/**
 * ClutterX11 0
 *
 * Generated from 0.0
 */

import * as xlib from "xlib";
import * as Clutter from "clutter";
import * as GObject from "gobject";

export function get_default_display(): xlib.Display;
export function get_default_screen(): number;
export function get_use_argb_visual(): boolean;
export function get_use_stereo_stage(): boolean;
export function has_composite_extension(): boolean;
export function set_display(xdpy: xlib.Display): void;
export function set_use_argb_visual(use_argb: boolean): void;
export function set_use_stereo_stage(use_stereo: boolean): void;
export function trap_x_errors(): void;
export function untrap_x_errors(): number;
export type FilterFunc = (xev: xlib.XEvent, cev: Clutter.Event) => FilterReturn;

export namespace FilterReturn {
    export const $gtype: GObject.GType<FilterReturn>;
}

export enum FilterReturn {
    CONTINUE = 0,
    TRANSLATE = 1,
    REMOVE = 2,
}

export class XInputDevice {
    static $gtype: GObject.GType<XInputDevice>;

    constructor(copy: XInputDevice);
}
