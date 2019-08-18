declare namespace imports.gi.CDesktopEnums {

enum BackgroundShading {
	solid = 0,
	vertical = 1,
	horizontal = 2
}



enum BackgroundStyle {
	none = 0,
	wallpaper = 1,
	centered = 2,
	scaled = 3,
	stretched = 4,
	zoom = 5,
	spanned = 6
}



enum FocusMode {
	click = 0,
	sloppy = 1,
	mouse = 2
}



enum FocusNewWindows {
	smart = 0,
	strict = 1
}



enum MagnifierLensShape {
	none = 0,
	square = 1,
	horizontal = 2,
	vertical = 3
}



enum MagnifierMouseTrackingMode {
	none = 0,
	centered = 1,
	proportional = 2,
	push = 3
}



enum MagnifierScreenPosition {
	none = 0,
	full_screen = 1,
	top_half = 2,
	bottom_half = 3,
	left_half = 4,
	right_half = 5
}



enum MediaKeyType {
	mute = 0,
	mute_quiet = 1,
	volume_up = 2,
	volume_up_quiet = 3,
	volume_down = 4,
	volume_down_quiet = 5,
	mic_mute = 6,
	eject = 7,
	media = 8,
	screenshot = 9,
	window_screenshot = 10,
	play = 11,
	pause = 12,
	stop = 13,
	previous = 14,
	next = 15,
	rewind = 16,
	forward = 17,
	repeat = 18,
	random = 19,
	area_screenshot = 20,
	screenshot_clip = 21,
	window_screenshot_clip = 22,
	area_screenshot_clip = 23,
	separator = 24,
	touchpad = 25,
	touchpad_on = 26,
	touchpad_off = 27,
	logout = 28,
	shutdown = 29,
	home = 30,
	calculator = 31,
	search = 32,
	email = 33,
	screensaver = 34,
	help = 35,
	terminal = 36,
	www = 37,
	video_out = 38,
	rotate_video = 39,
	rotate_video_lock = 40,
	screenreader = 41,
	on_screen_keyboard = 42,
	increase_text = 43,
	decrease_text = 44,
	toggle_contrast = 45,
	suspend = 46,
	hibernate = 47,
	screen_brightness_up = 48,
	screen_brightness_down = 49,
	keyboard_brightness_up = 50,
	keyboard_brightness_down = 51,
	keyboard_brightness_toggle = 52,
	battery = 53,
	last = 54
}



enum MouseDwellDirection {
	left = 0,
	right = 1,
	up = 2,
	down = 3
}



enum MouseDwellMode {
	window = 0,
	gesture = 1
}



enum ProxyMode {
	none = 0,
	manual = 1,
	auto = 2
}



enum ScreensaverMode {
	blank_only = 0,
	random = 1,
	single = 2
}



enum TitlebarAction {
	toggle_shade = 0,
	toggle_maximize = 1,
	toggle_maximize_horizontally = 2,
	toggle_maximize_vertically = 3,
	toggle_stuck = 4,
	toggle_above = 5,
	minimize = 6,
	none = 7,
	lower = 8,
	menu = 9
}



enum TitlebarScrollAction {
	shade = 10,
	opacity = 11,
	none = 12
}



enum ToolbarIconSize {
	small = 0,
	large = 1
}



enum ToolbarStyle {
	both = 0,
	both_horiz = 1,
	icons = 2,
	text = 3
}



enum VisualBellType {
	fullscreen_flash = 0,
	frame_flash = 1
}

}