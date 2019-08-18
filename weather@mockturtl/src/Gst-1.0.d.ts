declare namespace imports.gi.Gst {

interface Allocator extends Object {
	alloc (size: number, params: AllocationParams) : Memory;
	free (memory: Memory) : void;
	set_default () : void;
}

var Allocator: {
	
	find (name: string) : Allocator;
	register (name: string, allocator: Allocator) : void;
}




interface Bin extends Element, ChildProxy {
	add (element: Element) : boolean;
	add_many (element_1: Element) : void;
	find_unlinked_pad (direction: PadDirection) : Pad;
	get_by_interface (iface: GObject.Type) : Element;
	get_by_name (name: string) : Element;
	get_by_name_recurse_up (name: string) : Element;
	get_suppressed_flags () : ElementFlags;
	iterate_all_by_interface (iface: GObject.Type) : Iterator;
	iterate_elements () : Iterator;
	iterate_recurse () : Iterator;
	iterate_sinks () : Iterator;
	iterate_sorted () : Iterator;
	iterate_sources () : Iterator;
	recalculate_latency () : boolean;
	remove (element: Element) : boolean;
	remove_many (element_1: Element) : void;
	set_suppressed_flags (flags: ElementFlags) : void;
	sync_children_states () : boolean;
}

var Bin: {
	new (name: string) : Element;
	
}




interface Bitmask {
	
}

var Bitmask: {
	
	
}




interface BufferPool extends Object {
	acquire_buffer (buffer: Buffer, params: BufferPoolAcquireParams) : FlowReturn;
	get_config () : Structure;
	get_options () : string[];
	has_option (option: string) : boolean;
	is_active () : boolean;
	release_buffer (buffer: Buffer) : void;
	set_active (active: boolean) : boolean;
	set_config (config: Structure) : boolean;
	set_flushing (flushing: boolean) : void;
}

var BufferPool: {
	new () : BufferPool;
	config_add_option (config: Structure, option: string) : void;
	config_get_allocator (config: Structure, allocator: Allocator, params: AllocationParams) : boolean;
	config_get_option (config: Structure, index: number) : string;
	config_get_params (config: Structure, caps: Caps, size: number, min_buffers: number, max_buffers: number) : boolean;
	config_has_option (config: Structure, option: string) : boolean;
	config_n_options (config: Structure) : number;
	config_set_allocator (config: Structure, allocator: Allocator, params: AllocationParams) : void;
	config_set_params (config: Structure, caps: Caps, size: number, min_buffers: number, max_buffers: number) : void;
	config_validate_params (config: Structure, caps: Caps, size: number, min_buffers: number, max_buffers: number) : boolean;
}




interface Bus extends Object {
	add_signal_watch () : void;
	add_signal_watch_full (priority: number) : void;
	add_watch (_func: BusFunc, user_data: any) : number;
	add_watch_full (priority: number, _func: BusFunc, user_data: any, notify: GLib.DestroyNotify) : number;
	async_signal_func (message: Message, data: any) : boolean;
	create_watch () : GLib.Source;
	disable_sync_message_emission () : void;
	enable_sync_message_emission () : void;
	get_pollfd (fd: GLib.PollFD) : void;
	have_pending () : boolean;
	peek () : Message;
	poll (events: MessageType, timeout: ClockTime) : Message;
	pop () : Message;
	pop_filtered (types: MessageType) : Message;
	post (message: Message) : boolean;
	remove_signal_watch () : void;
	remove_watch () : boolean;
	set_flushing (flushing: boolean) : void;
	set_sync_handler (_func: BusSyncHandler, user_data: any, notify: GLib.DestroyNotify) : void;
	sync_signal_handler (message: Message, data: any) : BusSyncReply;
	timed_pop (timeout: ClockTime) : Message;
	timed_pop_filtered (timeout: ClockTime, types: MessageType) : Message;
}

var Bus: {
	new () : Bus;
	
}




interface Clock extends Object {
	add_observation (slave: ClockTime, master: ClockTime, r_squared: number) : boolean;
	add_observation_unapplied (slave: ClockTime, master: ClockTime, r_squared: number, internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime) : boolean;
	adjust_unlocked (internal: ClockTime) : ClockTime;
	adjust_with_calibration (internal_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime) : ClockTime;
	get_calibration (internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime) : void;
	get_internal_time () : ClockTime;
	get_master () : Clock;
	get_resolution () : ClockTime;
	get_time () : ClockTime;
	get_timeout () : ClockTime;
	is_synced () : boolean;
	new_periodic_id (start_time: ClockTime, interval: ClockTime) : ClockID;
	new_single_shot_id (time: ClockTime) : ClockID;
	periodic_id_reinit (_id: ClockID, start_time: ClockTime, interval: ClockTime) : boolean;
	set_calibration (internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime) : void;
	set_master (master: Clock) : boolean;
	set_resolution (resolution: ClockTime) : ClockTime;
	set_synced (synced: boolean) : void;
	set_timeout (timeout: ClockTime) : void;
	single_shot_id_reinit (_id: ClockID, time: ClockTime) : boolean;
	unadjust_unlocked (external: ClockTime) : ClockTime;
	unadjust_with_calibration (external_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime) : ClockTime;
	wait_for_sync (timeout: ClockTime) : boolean;
}

var Clock: {
	
	id_compare_func (id1: any, id2: any) : number;
	id_get_clock (_id: ClockID) : Clock;
	id_get_time (_id: ClockID) : ClockTime;
	id_ref (_id: ClockID) : ClockID;
	id_unref (_id: ClockID) : void;
	id_unschedule (_id: ClockID) : void;
	id_uses_clock (_id: ClockID, clock: Clock) : boolean;
	id_wait (_id: ClockID, jitter: ClockTimeDiff) : ClockReturn;
	id_wait_async (_id: ClockID, _func: ClockCallback, user_data: any, destroy_data: GLib.DestroyNotify) : ClockReturn;
}




interface ControlBinding extends Object {
	// get_g_value_array (timestamp: ClockTime, interval: ClockTime, n_values: number, values: GObject.Value[]) : boolean;
	// get_value (timestamp: ClockTime) : GObject.Value;
	// get_value_array (timestamp: ClockTime, interval: ClockTime, n_values: number, values: any[]) : boolean;
	is_disabled () : boolean;
	set_disabled (disabled: boolean) : void;
	// sync_values (object: Object, timestamp: ClockTime, last_sync: ClockTime) : boolean;
}

var ControlBinding: {
	
	
}




interface ControlSource extends Object {
	control_source_get_value (timestamp: ClockTime, value: number) : boolean;
	control_source_get_value_array (timestamp: ClockTime, interval: ClockTime, n_values: number, values: number[]) : boolean;
}

var ControlSource: {
	
	
}




interface Device extends Object {
	create_element (name: string) : Element;
	get_caps () : Caps;
	get_device_class () : string;
	get_display_name () : string;
	get_properties () : Structure;
	has_classes (classes: string) : boolean;
	has_classesv (classes: string[]) : boolean;
	reconfigure_element (element: Element) : boolean;
}

var Device: {
	
	
}




interface DeviceMonitor extends Object {
	add_filter (classes: string, caps: Caps) : number;
	get_bus () : Bus;
	get_devices () : GLib.List;
	get_providers () : string[];
	get_show_all_devices () : boolean;
	remove_filter (filter_id: number) : boolean;
	set_show_all_devices (show_all: boolean) : void;
	start () : boolean;
	stop () : void;
}

var DeviceMonitor: {
	new () : DeviceMonitor;
	
}




interface DeviceProvider extends Object {
	can_monitor () : boolean;
	device_add (device: Device) : void;
	device_changed (device: Device, changed_device: Device) : void;
	device_remove (device: Device) : void;
	get_bus () : Bus;
	get_devices () : GLib.List;
	get_factory () : DeviceProviderFactory;
	get_hidden_providers () : string[];
	get_metadata (key: string) : string;
	hide_provider (name: string) : void;
	start () : boolean;
	stop () : void;
	unhide_provider (name: string) : void;
}

var DeviceProvider: {
	
	register (plugin: Plugin, name: string, rank: number, _type: GObject.Type) : boolean;
}




interface DeviceProviderFactory extends PluginFeature {
	get () : DeviceProvider;
	get_device_provider_type () : GObject.Type;
	get_metadata (key: string) : string;
	get_metadata_keys () : string[];
	has_classes (classes: string) : boolean;
	has_classesv (classes: string[]) : boolean;
}

var DeviceProviderFactory: {
	
	find (name: string) : DeviceProviderFactory;
	get_by_name (factoryname: string) : DeviceProvider;
	list_get_device_providers (minrank: Rank) : GLib.List;
}




interface DoubleRange {
	
}

var DoubleRange: {
	
	
}




interface DynamicTypeFactory extends PluginFeature {
	
}

var DynamicTypeFactory: {
	
	load (factoryname: string) : GObject.Type;
}




interface Element extends Object {
	abort_state () : void;
	add_pad (pad: Pad) : boolean;
	add_property_deep_notify_watch (property_name: string, include_value: boolean) : number;
	add_property_notify_watch (property_name: string, include_value: boolean) : number;
	call_async (_func: ElementCallAsyncFunc, user_data: any, destroy_notify: GLib.DestroyNotify) : void;
	change_state (transition: StateChange) : StateChangeReturn;
	continue_state (_ret: StateChangeReturn) : StateChangeReturn;
	create_all_pads () : void;
	foreach_pad (_func: ElementForeachPadFunc, user_data: any) : boolean;
	foreach_sink_pad (_func: ElementForeachPadFunc, user_data: any) : boolean;
	foreach_src_pad (_func: ElementForeachPadFunc, user_data: any) : boolean;
	get_base_time () : ClockTime;
	get_bus () : Bus;
	get_clock () : Clock;
	get_compatible_pad (pad: Pad, caps: Caps) : Pad;
	get_compatible_pad_template (compattempl: PadTemplate) : PadTemplate;
	get_context (context_type: string) : Context;
	get_context_unlocked (context_type: string) : Context;
	get_contexts () : GLib.List;
	get_factory () : ElementFactory;
	get_metadata (key: string) : string;
	get_pad_template (name: string) : PadTemplate;
	get_pad_template_list () : GLib.List;
	get_request_pad (name: string) : Pad;
	get_start_time () : ClockTime;
	get_state (state: State, pending: State, timeout: ClockTime) : StateChangeReturn;
	get_static_pad (name: string) : Pad;
	is_locked_state () : boolean;
	iterate_pads () : Iterator;
	iterate_sink_pads () : Iterator;
	iterate_src_pads () : Iterator;
	link (dest: Element) : boolean;
	link_filtered (dest: Element, filter: Caps) : boolean;
	link_many (element_2: Element) : boolean;
	link_pads (srcpadname: string, dest: Element, destpadname: string) : boolean;
	link_pads_filtered (srcpadname: string, dest: Element, destpadname: string, filter: Caps) : boolean;
	link_pads_full (srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck) : boolean;
	lost_state () : void;
	message_full (_type: MessageType, domain: GLib.Quark, code: number, text: string, _debug: string, file: string, _function: string, line: number) : void;
	message_full_with_details (_type: MessageType, domain: GLib.Quark, code: number, text: string, _debug: string, file: string, _function: string, line: number, structure: Structure) : void;
	no_more_pads () : void;
	post_message (message: Message) : boolean;
	provide_clock () : Clock;
	query (query: Query) : boolean;
	query_convert (src_format: Format, src_val: number, dest_format: Format, dest_val: number) : boolean;
	query_duration (format: Format, duration: number) : boolean;
	query_position (format: Format, cur: number) : boolean;
	release_request_pad (pad: Pad) : void;
	remove_pad (pad: Pad) : boolean;
	remove_property_notify_watch (watch_id: number) : void;
	request_pad (templ: PadTemplate, name: string, caps: Caps) : Pad;
	seek (rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number) : boolean;
	seek_simple (format: Format, seek_flags: SeekFlags, seek_pos: number) : boolean;
	send_event (event: Event) : boolean;
	set_base_time (time: ClockTime) : void;
	set_bus (bus: Bus) : void;
	set_clock (clock: Clock) : boolean;
	set_context (context: Context) : void;
	set_locked_state (locked_state: boolean) : boolean;
	set_start_time (time: ClockTime) : void;
	set_state (state: State) : StateChangeReturn;
	sync_state_with_parent () : boolean;
	unlink (dest: Element) : void;
	unlink_many (element_2: Element) : void;
	unlink_pads (srcpadname: string, dest: Element, destpadname: string) : void;
}

var Element: {
	
	make_from_uri (_type: URIType, uri: string, elementname: string) : Element;
	register (plugin: Plugin, name: string, rank: number, _type: GObject.Type) : boolean;
	state_change_return_get_name (state_ret: StateChangeReturn) : string;
	state_get_name (state: State) : string;
}




interface ElementFactory extends PluginFeature {
	can_sink_all_caps (caps: Caps) : boolean;
	can_sink_any_caps (caps: Caps) : boolean;
	can_src_all_caps (caps: Caps) : boolean;
	can_src_any_caps (caps: Caps) : boolean;
	create (name: string) : Element;
	get_element_type () : GObject.Type;
	get_metadata (key: string) : string;
	get_metadata_keys () : string[];
	get_num_pad_templates () : number;
	get_static_pad_templates () : GLib.List;
	get_uri_protocols () : string[];
	get_uri_type () : URIType;
	has_interface (interfacename: string) : boolean;
	list_is_type (_type: ElementFactoryListType) : boolean;
}

var ElementFactory: {
	
	find (name: string) : ElementFactory;
	list_filter (list: GLib.List, caps: Caps, direction: PadDirection, subsetonly: boolean) : GLib.List;
	list_get_elements (_type: ElementFactoryListType, minrank: Rank) : GLib.List;
	make (factoryname: string, name: string) : Element;
}




interface FlagSet {
	
}

var FlagSet: {
	
	register (flags_type: GObject.Type) : GObject.Type;
}




interface Fraction {
	
}

var Fraction: {
	
	
}




interface FractionRange {
	
}

var FractionRange: {
	
	
}




interface GhostPad extends ProxyPad {
	construct () : boolean;
	get_target () : Pad;
	set_target (newtarget: Pad) : boolean;
}

var GhostPad: {
	new (name: string, target: Pad) : Pad;
	new_from_template (name: string, target: Pad, templ: PadTemplate) : Pad;
	new_no_target (name: string, dir: PadDirection) : Pad;
	new_no_target_from_template (name: string, templ: PadTemplate) : Pad;
	activate_mode_default (pad: Pad, parent: Object, mode: PadMode, active: boolean) : boolean;
	internal_activate_mode_default (pad: Pad, parent: Object, mode: PadMode, active: boolean) : boolean;
}




interface Int64Range {
	
}

var Int64Range: {
	
	
}




interface IntRange {
	
}

var IntRange: {
	
	
}




interface Object extends GObject.InitiallyUnowned {
	add_control_binding (binding: ControlBinding) : boolean;
	default_error (error: GLib.Error, _debug: string) : void;
	get_control_binding (property_name: string) : ControlBinding;
	get_control_rate () : ClockTime;
	get_g_value_array (property_name: string, timestamp: ClockTime, interval: ClockTime, n_values: number, values: GObject.Value[]) : boolean;
	get_name () : string;
	get_parent () : Object;
	get_path_string () : string;
	get_value (property_name: string, timestamp: ClockTime) : GObject.Value;
	get_value_array (property_name: string, timestamp: ClockTime, interval: ClockTime, n_values: number, values: any) : boolean;
	has_active_control_bindings () : boolean;
	has_ancestor (ancestor: Object) : boolean;
	has_as_ancestor (ancestor: Object) : boolean;
	has_as_parent (parent: Object) : boolean;
	ref () : Object;
	remove_control_binding (binding: ControlBinding) : boolean;
	set_control_binding_disabled (property_name: string, disabled: boolean) : void;
	set_control_bindings_disabled (disabled: boolean) : void;
	set_control_rate (control_rate: ClockTime) : void;
	set_name (name: string) : boolean;
	set_parent (parent: Object) : boolean;
	suggest_next_sync () : ClockTime;
	sync_values (timestamp: ClockTime) : boolean;
	unparent () : void;
	unref () : void;
}

var Object: {
	
	check_uniqueness (list: GLib.List, name: string) : boolean;
	default_deep_notify (object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excluded_props: string[]) : void;
	ref_sink (object: any) : any;
	replace (oldobj: Object, newobj: Object) : boolean;
}




interface Pad extends Object {
	activate_mode (mode: PadMode, active: boolean) : boolean;
	add_probe (mask: PadProbeType, callback: PadProbeCallback, user_data: any, destroy_data: GLib.DestroyNotify) : number;
	can_link (sinkpad: Pad) : boolean;
	chain (buffer: Buffer) : FlowReturn;
	chain_list (list: BufferList) : FlowReturn;
	check_reconfigure () : boolean;
	create_stream_id (parent: Element, stream_id: string) : string;
	create_stream_id_printf (parent: Element, stream_id: string) : string;
	create_stream_id_printf_valist (parent: Element, stream_id: string, var_args: any[]) : string;
	event_default (parent: Object, event: Event) : boolean;
	forward (forward: PadForwardFunction, user_data: any) : boolean;
	get_allowed_caps () : Caps;
	get_current_caps () : Caps;
	get_direction () : PadDirection;
	get_element_private () : any;
	get_last_flow_return () : FlowReturn;
	get_offset () : number;
	get_pad_template () : PadTemplate;
	get_pad_template_caps () : Caps;
	get_parent_element () : Element;
	get_peer () : Pad;
	get_range (offset: number, size: number, buffer: Buffer) : FlowReturn;
	get_sticky_event (event_type: EventType, idx: number) : Event;
	get_stream () : Stream;
	get_stream_id () : string;
	get_task_state () : TaskState;
	has_current_caps () : boolean;
	is_active () : boolean;
	is_blocked () : boolean;
	is_blocking () : boolean;
	is_linked () : boolean;
	iterate_internal_links () : Iterator;
	iterate_internal_links_default (parent: Object) : Iterator;
	link (sinkpad: Pad) : PadLinkReturn;
	link_full (sinkpad: Pad, flags: PadLinkCheck) : PadLinkReturn;
	link_maybe_ghosting (sink: Pad) : boolean;
	link_maybe_ghosting_full (sink: Pad, flags: PadLinkCheck) : boolean;
	mark_reconfigure () : void;
	needs_reconfigure () : boolean;
	pause_task () : boolean;
	peer_query (query: Query) : boolean;
	peer_query_accept_caps (caps: Caps) : boolean;
	peer_query_caps (filter: Caps) : Caps;
	peer_query_convert (src_format: Format, src_val: number, dest_format: Format, dest_val: number) : boolean;
	peer_query_duration (format: Format, duration: number) : boolean;
	peer_query_position (format: Format, cur: number) : boolean;
	proxy_query_accept_caps (query: Query) : boolean;
	proxy_query_caps (query: Query) : boolean;
	pull_range (offset: number, size: number, buffer: Buffer) : FlowReturn;
	push (buffer: Buffer) : FlowReturn;
	push_event (event: Event) : boolean;
	push_list (list: BufferList) : FlowReturn;
	query (query: Query) : boolean;
	query_accept_caps (caps: Caps) : boolean;
	query_caps (filter: Caps) : Caps;
	query_convert (src_format: Format, src_val: number, dest_format: Format, dest_val: number) : boolean;
	query_default (parent: Object, query: Query) : boolean;
	query_duration (format: Format, duration: number) : boolean;
	query_position (format: Format, cur: number) : boolean;
	remove_probe (_id: number) : void;
	send_event (event: Event) : boolean;
	set_activate_function_full (activate: PadActivateFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_activatemode_function_full (activatemode: PadActivateModeFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_active (active: boolean) : boolean;
	set_chain_function_full (chain: PadChainFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_chain_list_function_full (chainlist: PadChainListFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_element_private (_priv: any) : void;
	set_event_full_function_full (event: PadEventFullFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_event_function_full (event: PadEventFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_getrange_function_full (get: PadGetRangeFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_iterate_internal_links_function_full (iterintlink: PadIterIntLinkFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_link_function_full (link: PadLinkFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_offset (offset: number) : void;
	set_query_function_full (query: PadQueryFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	set_unlink_function_full (unlink: PadUnlinkFunction, user_data: any, notify: GLib.DestroyNotify) : void;
	start_task (_func: TaskFunction, user_data: any, notify: GLib.DestroyNotify) : boolean;
	sticky_events_foreach (foreach_func: PadStickyEventsForeachFunction, user_data: any) : void;
	stop_task () : boolean;
	store_sticky_event (event: Event) : FlowReturn;
	unlink (sinkpad: Pad) : boolean;
	use_fixed_caps () : void;
}

var Pad: {
	new (name: string, direction: PadDirection) : Pad;
	new_from_static_template (templ: StaticPadTemplate, name: string) : Pad;
	new_from_template (templ: PadTemplate, name: string) : Pad;
	link_get_name (_ret: PadLinkReturn) : string;
}




interface PadTemplate extends Object {
	get_caps () : Caps;
	pad_created (pad: Pad) : void;
}

var PadTemplate: {
	new (name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps) : PadTemplate;
	new_from_static_pad_template_with_gtype (pad_template: StaticPadTemplate, pad_type: GObject.Type) : PadTemplate;
	new_with_gtype (name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps, pad_type: GObject.Type) : PadTemplate;
	
}




interface ParamArray extends GObject.ParamSpec {
	
}

var ParamArray: {
	
	
}




interface ParamFraction extends GObject.ParamSpec {
	
}

var ParamFraction: {
	
	
}




interface Pipeline extends Bin, ChildProxy {
	auto_clock () : void;
	get_auto_flush_bus () : boolean;
	get_bus () : Bus;
	get_clock () : Clock;
	get_delay () : ClockTime;
	get_latency () : ClockTime;
	get_pipeline_clock () : Clock;
	set_auto_flush_bus (auto_flush: boolean) : void;
	set_clock (clock: Clock) : boolean;
	set_delay (delay: ClockTime) : void;
	set_latency (latency: ClockTime) : void;
	use_clock (clock: Clock) : void;
}

var Pipeline: {
	new (name: string) : Element;
	
}




interface Plugin extends Object {
	add_dependency (env_vars: string[], paths: string[], names: string[], flags: PluginDependencyFlags) : void;
	add_dependency_simple (env_vars: string, paths: string, names: string, flags: PluginDependencyFlags) : void;
	get_cache_data () : Structure;
	get_description () : string;
	get_filename () : string;
	get_license () : string;
	get_name () : string;
	get_origin () : string;
	get_package () : string;
	get_release_date_string () : string;
	get_source () : string;
	get_version () : string;
	is_loaded () : boolean;
	load () : Plugin;
	set_cache_data (cache_data: Structure) : void;
}

var Plugin: {
	
	list_free (list: GLib.List) : void;
	load_by_name (name: string) : Plugin;
	load_file (filename: string) : Plugin;
	register_static (major_version: number, minor_version: number, name: string, description: string, init_func: PluginInitFunc, version: string, license: string, source: string, _package: string, origin: string) : boolean;
	register_static_full (major_version: number, minor_version: number, name: string, description: string, init_full_func: PluginInitFullFunc, version: string, license: string, source: string, _package: string, origin: string, user_data: any) : boolean;
}




interface PluginFeature extends Object {
	check_version (min_major: number, min_minor: number, min_micro: number) : boolean;
	get_plugin () : Plugin;
	get_plugin_name () : string;
	get_rank () : number;
	load () : PluginFeature;
	set_rank (rank: number) : void;
}

var PluginFeature: {
	
	list_copy (list: GLib.List) : GLib.List;
	list_debug (list: GLib.List) : void;
	list_free (list: GLib.List) : void;
	rank_compare_func (p1: any, p2: any) : number;
}




interface ProxyPad extends Pad {
	get_internal () : ProxyPad;
}

var ProxyPad: {
	
	chain_default (pad: Pad, parent: Object, buffer: Buffer) : FlowReturn;
	chain_list_default (pad: Pad, parent: Object, list: BufferList) : FlowReturn;
	getrange_default (pad: Pad, parent: Object, offset: number, size: number, buffer: Buffer) : FlowReturn;
	iterate_internal_links_default (pad: Pad, parent: Object) : Iterator;
}




interface Registry extends Object {
	add_feature (feature: PluginFeature) : boolean;
	add_plugin (plugin: Plugin) : boolean;
	check_feature_version (feature_name: string, min_major: number, min_minor: number, min_micro: number) : boolean;
	feature_filter (filter: PluginFeatureFilter, first: boolean, user_data: any) : GLib.List;
	find_feature (name: string, _type: GObject.Type) : PluginFeature;
	find_plugin (name: string) : Plugin;
	get_feature_list (_type: GObject.Type) : GLib.List;
	get_feature_list_by_plugin (name: string) : GLib.List;
	get_feature_list_cookie () : number;
	get_plugin_list () : GLib.List;
	lookup (filename: string) : Plugin;
	lookup_feature (name: string) : PluginFeature;
	plugin_filter (filter: PluginFilter, first: boolean, user_data: any) : GLib.List;
	remove_feature (feature: PluginFeature) : void;
	remove_plugin (plugin: Plugin) : void;
	scan_path (path: string) : boolean;
}

var Registry: {
	
	fork_is_enabled () : boolean;
	fork_set_enabled (enabled: boolean) : void;
	get () : Registry;
}




interface Stream extends Object {
	get_caps () : Caps;
	get_stream_flags () : StreamFlags;
	get_stream_id () : string;
	get_stream_type () : StreamType;
	get_tags () : TagList;
	set_caps (caps: Caps) : void;
	set_stream_flags (flags: StreamFlags) : void;
	set_stream_type (stream_type: StreamType) : void;
	set_tags (tags: TagList) : void;
}

var Stream: {
	new (stream_id: string, caps: Caps, _type: StreamType, flags: StreamFlags) : Stream;
	
}




interface StreamCollection extends Object {
	add_stream (stream: Stream) : boolean;
	get_size () : number;
	get_stream (index: number) : Stream;
	get_upstream_id () : string;
}

var StreamCollection: {
	new (upstream_id: string) : StreamCollection;
	
}




interface SystemClock extends Clock {
	
}

var SystemClock: {
	
	obtain () : Clock;
	set_default (new_clock: Clock) : void;
}




interface Task extends Object {
	get_pool () : TaskPool;
	get_state () : TaskState;
	join () : boolean;
	pause () : boolean;
	set_enter_callback (enter_func: TaskThreadFunc, user_data: any, notify: GLib.DestroyNotify) : void;
	set_leave_callback (leave_func: TaskThreadFunc, user_data: any, notify: GLib.DestroyNotify) : void;
	set_lock (mutex: GLib.RecMutex) : void;
	set_pool (pool: TaskPool) : void;
	set_state (state: TaskState) : boolean;
	start () : boolean;
	stop () : boolean;
}

var Task: {
	new (_func: TaskFunction, user_data: any, notify: GLib.DestroyNotify) : Task;
	cleanup_all () : void;
}




interface TaskPool extends Object {
	cleanup () : void;
	join (_id: any) : void;
	prepare () : void;
	push (_func: TaskPoolFunction, user_data: any) : any;
}

var TaskPool: {
	new () : TaskPool;
	
}




interface Tracer extends Object {
	
}

var Tracer: {
	
	
}




interface TracerFactory extends PluginFeature {
	get_tracer_type () : GObject.Type;
}

var TracerFactory: {
	
	get_list () : GLib.List;
}




interface TracerRecord extends Object {
	
}

var TracerRecord: {
	
	
}




interface TypeFindFactory extends PluginFeature {
	call_function (find: TypeFind) : void;
	get_caps () : Caps;
	get_extensions () : string[];
	has_function () : boolean;
}

var TypeFindFactory: {
	
	get_list () : GLib.List;
}




interface ValueArray {
	
}

var ValueArray: {
	
	append_and_take_value (value: GObject.Value, append_value: GObject.Value) : void;
	append_value (value: GObject.Value, append_value: GObject.Value) : void;
	get_size (value: GObject.Value) : number;
	get_value (value: GObject.Value, index: number) : GObject.Value;
	prepend_value (value: GObject.Value, prepend_value: GObject.Value) : void;
}




interface ValueList {
	
}

var ValueList: {
	
	append_and_take_value (value: GObject.Value, append_value: GObject.Value) : void;
	append_value (value: GObject.Value, append_value: GObject.Value) : void;
	concat (dest: GObject.Value, value1: GObject.Value, value2: GObject.Value) : void;
	get_size (value: GObject.Value) : number;
	get_value (value: GObject.Value, index: number) : GObject.Value;
	merge (dest: GObject.Value, value1: GObject.Value, value2: GObject.Value) : void;
	prepend_value (value: GObject.Value, prepend_value: GObject.Value) : void;
}




class AllocationParams {
	public flags: MemoryFlags;
	public align: number;
	public prefix: number;
	public padding: number;
	public _gst_reserved: any[];


	public copy () : AllocationParams;
	public free () : void;
	public init () : void;
}



class AllocatorClass {
	public object_class: ObjectClass;
	public _gst_reserved: any[];

	alloc : {(allocator: Allocator, size: number, params: AllocationParams) : Memory;};
	free : {(allocator: Allocator, memory: Memory) : void;};

}



class AllocatorPrivate {


}



class AtomicQueue {


	public length () : number;
	public peek () : any;
	public pop () : any;
	public push (data: any) : void;
	public ref () : void;
	public unref () : void;
}



class BinClass {
	public parent_class: ElementClass;
	public pool: GLib.ThreadPool;
	public _gst_reserved: any[];

	element_added : {(bin: Bin, child: Element) : void;};
	element_removed : {(bin: Bin, child: Element) : void;};
	add_element : {(bin: Bin, element: Element) : boolean;};
	remove_element : {(bin: Bin, element: Element) : boolean;};
	handle_message : {(bin: Bin, message: Message) : void;};
	do_latency : {(bin: Bin) : boolean;};
	deep_element_added : {(bin: Bin, sub_bin: Bin, child: Element) : void;};
	deep_element_removed : {(bin: Bin, sub_bin: Bin, child: Element) : void;};

}



class BinPrivate {


}



class Buffer {
	public mini_object: MiniObject;
	public pool: BufferPool;
	public pts: ClockTime;
	public dts: ClockTime;
	public duration: ClockTime;
	public offset: number;
	public offset_end: number;


	public add_meta (info: MetaInfo, params: any) : Meta;
	public add_parent_buffer_meta (ref: Buffer) : ParentBufferMeta;
	public add_protection_meta (info: Structure) : ProtectionMeta;
	public add_reference_timestamp_meta (reference: Caps, timestamp: ClockTime, duration: ClockTime) : ReferenceTimestampMeta;
	public append (buf2: Buffer) : Buffer;
	public append_memory (mem: Memory) : void;
	public append_region (buf2: Buffer, offset: number, size: number) : Buffer;
	public copy_deep () : Buffer;
	public copy_into (src: Buffer, flags: BufferCopyFlags, offset: number, size: number) : boolean;
	public copy_region (flags: BufferCopyFlags, offset: number, size: number) : Buffer;
	public extract (offset: number, dest: number[], size: number) : number;
	public extract_dup (offset: number, size: number, dest: number[], dest_size: number) : void;
	public fill (offset: number, src: number[], size: number) : number;
	public find_memory (offset: number, size: number, idx: number, length: number, skip: number) : boolean;
	public foreach_meta (_func: BufferForeachMetaFunc, user_data: any) : boolean;
	public get_all_memory () : Memory;
	public get_flags () : BufferFlags;
	public get_memory (idx: number) : Memory;
	public get_memory_range (idx: number, length: number) : Memory;
	public get_meta (api: GObject.Type) : Meta;
	public get_n_meta (api_type: GObject.Type) : number;
	public get_reference_timestamp_meta (reference: Caps) : ReferenceTimestampMeta;
	public get_size () : number;
	public get_sizes (offset: number, maxsize: number) : number;
	public get_sizes_range (idx: number, length: number, offset: number, maxsize: number) : number;
	public has_flags (flags: BufferFlags) : boolean;
	public insert_memory (idx: number, mem: Memory) : void;
	public is_all_memory_writable () : boolean;
	public is_memory_range_writable (idx: number, length: number) : boolean;
	public iterate_meta (state: any) : Meta;
	public iterate_meta_filtered (state: any, meta_api_type: GObject.Type) : Meta;
	public map (info: MapInfo, flags: MapFlags) : boolean;
	public map_range (idx: number, length: number, info: MapInfo, flags: MapFlags) : boolean;
	public memcmp (offset: number, mem: number[], size: number) : number;
	public memset (offset: number, _val: number, size: number) : number;
	public n_memory () : number;
	public peek_memory (idx: number) : Memory;
	public prepend_memory (mem: Memory) : void;
	public remove_all_memory () : void;
	public remove_memory (idx: number) : void;
	public remove_memory_range (idx: number, length: number) : void;
	public remove_meta (meta: Meta) : boolean;
	public replace_all_memory (mem: Memory) : void;
	public replace_memory (idx: number, mem: Memory) : void;
	public replace_memory_range (idx: number, length: number, mem: Memory) : void;
	public resize (offset: number, size: number) : void;
	public resize_range (idx: number, length: number, offset: number, size: number) : boolean;
	public set_flags (flags: BufferFlags) : boolean;
	public set_size (size: number) : void;
	public unmap (info: MapInfo) : void;
	public unset_flags (flags: BufferFlags) : boolean;
}



class BufferList {


	public calculate_size () : number;
	public copy_deep () : BufferList;
	public foreach (_func: BufferListFunc, user_data: any) : boolean;
	public get (idx: number) : Buffer;
	public get_writable (idx: number) : Buffer;
	public insert (idx: number, buffer: Buffer) : void;
	public length () : number;
	public remove (idx: number, length: number) : void;
}



class BufferPoolAcquireParams {
	public format: Format;
	public start: number;
	public stop: number;
	public flags: BufferPoolAcquireFlags;
	public _gst_reserved: any[];


}



class BufferPoolClass {
	public object_class: ObjectClass;
	public _gst_reserved: any[];

	get_options : {(pool: BufferPool) : string[];};
	set_config : {(pool: BufferPool, config: Structure) : boolean;};
	start : {(pool: BufferPool) : boolean;};
	stop : {(pool: BufferPool) : boolean;};
	acquire_buffer : {(pool: BufferPool, buffer: Buffer, params: BufferPoolAcquireParams) : FlowReturn;};
	alloc_buffer : {(pool: BufferPool, buffer: Buffer, params: BufferPoolAcquireParams) : FlowReturn;};
	reset_buffer : {(pool: BufferPool, buffer: Buffer) : void;};
	release_buffer : {(pool: BufferPool, buffer: Buffer) : void;};
	free_buffer : {(pool: BufferPool, buffer: Buffer) : void;};
	flush_start : {(pool: BufferPool) : void;};
	flush_stop : {(pool: BufferPool) : void;};

}



class BufferPoolPrivate {


}



class BusClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];

	message : {(bus: Bus, message: Message) : void;};
	sync_message : {(bus: Bus, message: Message) : void;};

}



class BusPrivate {


}



class Caps {
	public mini_object: MiniObject;


	public append (caps2: Caps) : void;
	public append_structure (structure: Structure) : void;
	public append_structure_full (structure: Structure, features: CapsFeatures) : void;
	public can_intersect (caps2: Caps) : boolean;
	public copy () : Caps;
	public copy_nth (nth: number) : Caps;
	public filter_and_map_in_place (_func: CapsFilterMapFunc, user_data: any) : void;
	public fixate () : Caps;
	public foreach (_func: CapsForeachFunc, user_data: any) : boolean;
	public get_features (index: number) : CapsFeatures;
	public get_size () : number;
	public get_structure (index: number) : Structure;
	public intersect (caps2: Caps) : Caps;
	public intersect_full (caps2: Caps, mode: CapsIntersectMode) : Caps;
	public is_always_compatible (caps2: Caps) : boolean;
	public is_any () : boolean;
	public is_empty () : boolean;
	public is_equal (caps2: Caps) : boolean;
	public is_equal_fixed (caps2: Caps) : boolean;
	public is_fixed () : boolean;
	public is_strictly_equal (caps2: Caps) : boolean;
	public is_subset (superset: Caps) : boolean;
	public is_subset_structure (structure: Structure) : boolean;
	public is_subset_structure_full (structure: Structure, features: CapsFeatures) : boolean;
	public map_in_place (_func: CapsMapFunc, user_data: any) : boolean;
	public merge (caps2: Caps) : Caps;
	public merge_structure (structure: Structure) : Caps;
	public merge_structure_full (structure: Structure, features: CapsFeatures) : Caps;
	public normalize () : Caps;
	public remove_structure (idx: number) : void;
	public set_features (index: number, features: CapsFeatures) : void;
	public set_features_simple (features: CapsFeatures) : void;
	public set_simple (field: string) : void;
	public set_simple_valist (field: string, varargs: any[]) : void;
	public set_value (field: string, value: GObject.Value) : void;
	public simplify () : Caps;
	public steal_structure (index: number) : Structure;
	public subtract (subtrahend: Caps) : Caps;
	public to_string () : string;
	public truncate () : Caps;
}



class CapsFeatures {


	public add (feature: string) : void;
	public add_id (feature: GLib.Quark) : void;
	public contains (feature: string) : boolean;
	public contains_id (feature: GLib.Quark) : boolean;
	public copy () : CapsFeatures;
	public free () : void;
	public get_nth (_i: number) : string;
	public get_nth_id (_i: number) : GLib.Quark;
	public get_size () : number;
	public is_any () : boolean;
	public is_equal (features2: CapsFeatures) : boolean;
	public remove (feature: string) : void;
	public remove_id (feature: GLib.Quark) : void;
	public set_parent_refcount (refcount: number) : boolean;
	public to_string () : string;
}



class ChildProxyInterface {
	public parent: GObject.TypeInterface;
	public _gst_reserved: any[];

	get_child_by_name : {(parent: ChildProxy, name: string) : GObject.Object;};
	get_child_by_index : {(parent: ChildProxy, index: number) : GObject.Object;};
	get_children_count : {(parent: ChildProxy) : number;};
	child_added : {(parent: ChildProxy, child: GObject.Object, name: string) : void;};
	child_removed : {(parent: ChildProxy, child: GObject.Object, name: string) : void;};

}



class ClockClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];

	change_resolution : {(clock: Clock, old_resolution: ClockTime, new_resolution: ClockTime) : ClockTime;};
	get_resolution : {(clock: Clock) : ClockTime;};
	get_internal_time : {(clock: Clock) : ClockTime;};
	wait : {(clock: Clock, entry: ClockEntry, jitter: ClockTimeDiff) : ClockReturn;};
	wait_async : {(clock: Clock, entry: ClockEntry) : ClockReturn;};
	unschedule : {(clock: Clock, entry: ClockEntry) : void;};

}



class ClockEntry {
	public refcount: number;
	public clock: Clock;
	public type: ClockEntryType;
	public time: ClockTime;
	public interval: ClockTime;
	public status: ClockReturn;
	public func: ClockCallback;
	public user_data: any;
	public destroy_data: GLib.DestroyNotify;
	public unscheduled: boolean;
	public woken_up: boolean;
	public _gst_reserved: any[];


}



class ClockPrivate {


}



class Context {


	public get_context_type () : string;
	public get_structure () : Structure;
	public has_context_type (context_type: string) : boolean;
	public is_persistent () : boolean;
	public writable_structure () : Structure;
}



class ControlBindingClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];

	sync_values : {(binding: ControlBinding, object: Object, timestamp: ClockTime, last_sync: ClockTime) : boolean;};
	get_value : {(binding: ControlBinding, timestamp: ClockTime) : GObject.Value;};
	get_value_array : {(binding: ControlBinding, timestamp: ClockTime, interval: ClockTime, n_values: number, values: any[]) : boolean;};
	get_g_value_array : {(binding: ControlBinding, timestamp: ClockTime, interval: ClockTime, n_values: number, values: GObject.Value[]) : boolean;};

}



class ControlBindingPrivate {


}



class ControlSourceClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];


}



class DateTime {


	public get_day () : number;
	public get_hour () : number;
	public get_microsecond () : number;
	public get_minute () : number;
	public get_month () : number;
	public get_second () : number;
	public get_time_zone_offset () : number;
	public get_year () : number;
	public has_day () : boolean;
	public has_month () : boolean;
	public has_second () : boolean;
	public has_time () : boolean;
	public has_year () : boolean;
	public ref () : DateTime;
	public to_g_date_time () : GLib.DateTime;
	public to_iso8601_string () : string;
	public unref () : void;
}



class DebugCategory {
	public threshold: number;
	public color: number;
	public name: string;
	public description: string;


	public free () : void;
	public get_color () : number;
	public get_description () : string;
	public get_name () : string;
	public get_threshold () : DebugLevel;
	public reset_threshold () : void;
	public set_threshold (level: DebugLevel) : void;
}



class DebugMessage {


	public get () : string;
}



class DeviceClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];

	create_element : {(device: Device, name: string) : Element;};
	reconfigure_element : {(device: Device, element: Element) : boolean;};

}



class DeviceMonitorClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];


}



class DeviceMonitorPrivate {


}



class DevicePrivate {


}



class DeviceProviderClass {
	public parent_class: ObjectClass;
	public factory: DeviceProviderFactory;
	public metadata: any;
	public _gst_reserved: any[];

	probe : {(provider: DeviceProvider) : GLib.List;};
	start : {(provider: DeviceProvider) : boolean;};
	stop : {(provider: DeviceProvider) : void;};

	public add_metadata (key: string, value: string) : void;
	public add_static_metadata (key: string, value: string) : void;
	public get_metadata (key: string) : string;
	public set_metadata (longname: string, classification: string, description: string, author: string) : void;
	public set_static_metadata (longname: string, classification: string, description: string, author: string) : void;
}



class DeviceProviderFactoryClass {


}



class DeviceProviderPrivate {


}



class DynamicTypeFactoryClass {


}



class ElementClass {
	public parent_class: ObjectClass;
	public metadata: any;
	public elementfactory: ElementFactory;
	public padtemplates: GLib.List;
	public numpadtemplates: number;
	public pad_templ_cookie: number;
	public _gst_reserved: any[];

	pad_added : {(element: Element, pad: Pad) : void;};
	pad_removed : {(element: Element, pad: Pad) : void;};
	no_more_pads : {(element: Element) : void;};
	request_new_pad : {(element: Element, templ: PadTemplate, name: string, caps: Caps) : Pad;};
	release_pad : {(element: Element, pad: Pad) : void;};
	get_state : {(element: Element, state: State, pending: State, timeout: ClockTime) : StateChangeReturn;};
	set_state : {(element: Element, state: State) : StateChangeReturn;};
	change_state : {(element: Element, transition: StateChange) : StateChangeReturn;};
	state_changed : {(element: Element, oldstate: State, newstate: State, pending: State) : void;};
	set_bus : {(element: Element, bus: Bus) : void;};
	provide_clock : {(element: Element) : Clock;};
	set_clock : {(element: Element, clock: Clock) : boolean;};
	send_event : {(element: Element, event: Event) : boolean;};
	query : {(element: Element, query: Query) : boolean;};
	post_message : {(element: Element, message: Message) : boolean;};
	set_context : {(element: Element, context: Context) : void;};

	public add_metadata (key: string, value: string) : void;
	public add_pad_template (templ: PadTemplate) : void;
	public add_static_metadata (key: string, value: string) : void;
	public add_static_pad_template (static_templ: StaticPadTemplate) : void;
	public add_static_pad_template_with_gtype (static_templ: StaticPadTemplate, pad_type: GObject.Type) : void;
	public get_metadata (key: string) : string;
	public get_pad_template (name: string) : PadTemplate;
	public get_pad_template_list () : GLib.List;
	public set_metadata (longname: string, classification: string, description: string, author: string) : void;
	public set_static_metadata (longname: string, classification: string, description: string, author: string) : void;
}



class ElementFactoryClass {


}



class Event {
	public mini_object: MiniObject;
	public type: EventType;
	public timestamp: number;
	public seqnum: number;


	public copy_segment (segment: Segment) : void;
	public get_running_time_offset () : number;
	public get_seqnum () : number;
	public get_structure () : Structure;
	public has_name (name: string) : boolean;
	public parse_buffer_size (format: Format, minsize: number, maxsize: number, async: boolean) : void;
	public parse_caps (caps: Caps) : void;
	public parse_flush_stop (reset_time: boolean) : void;
	public parse_gap (timestamp: ClockTime, duration: ClockTime) : void;
	public parse_group_id (group_id: number) : boolean;
	public parse_latency (latency: ClockTime) : void;
	public parse_protection (system_id: string, data: Buffer, origin: string) : void;
	public parse_qos (_type: QOSType, proportion: number, diff: ClockTimeDiff, timestamp: ClockTime) : void;
	public parse_seek (rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number) : void;
	public parse_seek_trickmode_interval (interval: ClockTime) : void;
	public parse_segment (segment: Segment) : void;
	public parse_segment_done (format: Format, position: number) : void;
	public parse_select_streams (streams: GLib.List) : void;
	public parse_sink_message (msg: Message) : void;
	public parse_step (format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean) : void;
	public parse_stream (stream: Stream) : void;
	public parse_stream_collection (collection: StreamCollection) : void;
	public parse_stream_flags (flags: StreamFlags) : void;
	public parse_stream_group_done (group_id: number) : void;
	public parse_stream_start (stream_id: string) : void;
	public parse_tag (taglist: TagList) : void;
	public parse_toc (toc: Toc, updated: boolean) : void;
	public parse_toc_select (uid: string) : void;
	public set_group_id (group_id: number) : void;
	public set_running_time_offset (offset: number) : void;
	public set_seek_trickmode_interval (interval: ClockTime) : void;
	public set_seqnum (seqnum: number) : void;
	public set_stream (stream: Stream) : void;
	public set_stream_flags (flags: StreamFlags) : void;
	public writable_structure () : Structure;
}



class FormatDefinition {
	public value: Format;
	public nick: string;
	public description: string;
	public quark: GLib.Quark;


}



class GhostPadClass {
	public parent_class: ProxyPadClass;
	public _gst_reserved: any[];


}



class GhostPadPrivate {


}



class Iterator {
	//public copy: IteratorCopyFunction;
	//public next: IteratorNextFunction;
	public item: IteratorItemFunction;
	//public resync: IteratorResyncFunction;
	//public free: IteratorFreeFunction;
	public pushed: Iterator;
	public type: GObject.Type;
	public lock: GLib.Mutex;
	public cookie: number;
	public master_cookie: number;
	public size: number;
	public _gst_reserved: any[];


	public copy () : Iterator;
	public filter (_func: GLib.CompareFunc, user_data: GObject.Value) : Iterator;
	public find_custom (_func: GLib.CompareFunc, elem: GObject.Value, user_data: any) : boolean;
	public fold (_func: IteratorFoldFunction, _ret: GObject.Value, user_data: any) : IteratorResult;
	public foreach (_func: IteratorForeachFunction, user_data: any) : IteratorResult;
	public free () : void;
	public next (elem: GObject.Value) : IteratorResult;
	public push (other: Iterator) : void;
	public resync () : void;
}



class MapInfo {
	public memory: Memory;
	public flags: MapFlags;
	public data: number[];
	public size: number;
	public maxsize: number;
	public user_data: any[];
	public _gst_reserved: any[];


}



class Memory {
	public mini_object: MiniObject;
	public allocator: Allocator;
	public parent: Memory;
	public maxsize: number;
	public align: number;
	public offset: number;
	public size: number;


	public copy (offset: number, size: number) : Memory;
	public get_sizes (offset: number, maxsize: number) : number;
	public init (flags: MemoryFlags, allocator: Allocator, parent: Memory, maxsize: number, align: number, offset: number, size: number) : void;
	public is_span (mem2: Memory, offset: number) : boolean;
	public is_type (mem_type: string) : boolean;
	public make_mapped (info: MapInfo, flags: MapFlags) : Memory;
	public map (info: MapInfo, flags: MapFlags) : boolean;
	public resize (offset: number, size: number) : void;
	public share (offset: number, size: number) : Memory;
	public unmap (info: MapInfo) : void;
}



class Message {
	public mini_object: MiniObject;
	public type: MessageType;
	public timestamp: number;
	public src: Object;
	public seqnum: number;
	public lock: GLib.Mutex;
	public cond: GLib.Cond;


	public add_redirect_entry (location: string, tag_list: TagList, entry_struct: Structure) : void;
	public get_num_redirect_entries () : number;
	public get_seqnum () : number;
	public get_stream_status_object () : GObject.Value;
	public get_structure () : Structure;
	public has_name (name: string) : boolean;
	public parse_async_done (running_time: ClockTime) : void;
	public parse_buffering (percent: number) : void;
	public parse_buffering_stats (mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number) : void;
	public parse_clock_lost (clock: Clock) : void;
	public parse_clock_provide (clock: Clock, ready: boolean) : void;
	public parse_context_type (context_type: string) : boolean;
	public parse_device_added (device: Device) : void;
	public parse_device_changed (device: Device, changed_device: Device) : void;
	public parse_device_removed (device: Device) : void;
	public parse_error (gerror: GLib.Error, _debug: string) : void;
	public parse_error_details (structure: Structure) : void;
	public parse_group_id (group_id: number) : boolean;
	public parse_have_context (context: Context) : void;
	public parse_info (gerror: GLib.Error, _debug: string) : void;
	public parse_info_details (structure: Structure) : void;
	public parse_new_clock (clock: Clock) : void;
	public parse_progress (_type: ProgressType, code: string, text: string) : void;
	public parse_property_notify (object: Object, property_name: string, property_value: GObject.Value) : void;
	public parse_qos (live: boolean, running_time: number, stream_time: number, timestamp: number, duration: number) : void;
	public parse_qos_stats (format: Format, processed: number, dropped: number) : void;
	public parse_qos_values (jitter: number, proportion: number, quality: number) : void;
	public parse_redirect_entry (entry_index: number, location: string, tag_list: TagList, entry_struct: Structure) : void;
	public parse_request_state (state: State) : void;
	public parse_reset_time (running_time: ClockTime) : void;
	public parse_segment_done (format: Format, position: number) : void;
	public parse_segment_start (format: Format, position: number) : void;
	public parse_state_changed (oldstate: State, newstate: State, pending: State) : void;
	public parse_step_done (format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean) : void;
	public parse_step_start (active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean) : void;
	public parse_stream_collection (collection: StreamCollection) : void;
	public parse_stream_status (_type: StreamStatusType, owner: Element) : void;
	public parse_streams_selected (collection: StreamCollection) : void;
	public parse_structure_change (_type: StructureChangeType, owner: Element, busy: boolean) : void;
	public parse_tag (tag_list: TagList) : void;
	public parse_toc (toc: Toc, updated: boolean) : void;
	public parse_warning (gerror: GLib.Error, _debug: string) : void;
	public parse_warning_details (structure: Structure) : void;
	public set_buffering_stats (mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number) : void;
	public set_group_id (group_id: number) : void;
	public set_qos_stats (format: Format, processed: number, dropped: number) : void;
	public set_qos_values (jitter: number, proportion: number, quality: number) : void;
	public set_seqnum (seqnum: number) : void;
	public set_stream_status_object (object: GObject.Value) : void;
	public streams_selected_add (stream: Stream) : void;
	public streams_selected_get_size () : number;
	public streams_selected_get_stream (idx: number) : Stream;
	public writable_structure () : Structure;
}



class Meta {
	public flags: MetaFlags;
	public info: MetaInfo;


	public compare_seqnum (meta2: Meta) : number;
	public get_seqnum () : number;
}



class MetaInfo {
	public api: GObject.Type;
	public type: GObject.Type;
	public size: number;
	public init_func: MetaInitFunction;
	public free_func: MetaFreeFunction;
	public transform_func: MetaTransformFunction;


}



class MetaTransformCopy {
	public region: boolean;
	public offset: number;
	public size: number;


}



class MiniObject {
	public type: GObject.Type;
	public refcount: number;
	public lockstate: number;
	public flags: number;
	//public copy: MiniObjectCopyFunction;
	public dispose: MiniObjectDisposeFunction;
	public free: MiniObjectFreeFunction;
	public priv_uint: number;
	public priv_pointer: any;


	public add_parent (parent: MiniObject) : void;
	public copy () : MiniObject;
	public get_qdata (quark: GLib.Quark) : any;
	public init (flags: number, _type: GObject.Type, copy_func: MiniObjectCopyFunction, dispose_func: MiniObjectDisposeFunction, free_func: MiniObjectFreeFunction) : void;
	public is_writable () : boolean;
	public lock (flags: LockFlags) : boolean;
	public make_writable () : MiniObject;
	public ref () : MiniObject;
	public remove_parent (parent: MiniObject) : void;
	public set_qdata (quark: GLib.Quark, data: any, destroy: GLib.DestroyNotify) : void;
	public steal_qdata (quark: GLib.Quark) : any;
	public unlock (flags: LockFlags) : void;
	public unref () : void;
	public weak_ref (notify: MiniObjectNotify, data: any) : void;
	public weak_unref (notify: MiniObjectNotify, data: any) : void;
}



class ObjectClass {
	public parent_class: GObject.InitiallyUnownedClass;
	public path_string_separator: string;
	public _gst_reserved: any[];

	deep_notify : {(object: Object, orig: Object, pspec: GObject.ParamSpec) : void;};

}



class PadClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];

	linked : {(pad: Pad, peer: Pad) : void;};
	unlinked : {(pad: Pad, peer: Pad) : void;};

}



class PadPrivate {


}



class PadProbeInfo {
	public type: PadProbeType;
	public id: number;
	public data: any;
	public offset: number;
	public size: number;


	public get_buffer () : Buffer;
	public get_buffer_list () : BufferList;
	public get_event () : Event;
	public get_query () : Query;
}



class PadTemplateClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];

	pad_created : {(templ: PadTemplate, pad: Pad) : void;};

}



class ParamSpecArray {
	public parent_instance: GObject.ParamSpec;
	public element_spec: GObject.ParamSpec;


}



class ParamSpecFraction {
	public parent_instance: GObject.ParamSpec;
	public min_num: number;
	public min_den: number;
	public max_num: number;
	public max_den: number;
	public def_num: number;
	public def_den: number;


}



class ParentBufferMeta {
	public parent: Meta;
	public buffer: Buffer;


}



class ParseContext {


	public copy () : ParseContext;
	public free () : void;
	public get_missing_elements () : string[];
}



class PipelineClass {
	public parent_class: BinClass;
	public _gst_reserved: any[];


}



class PipelinePrivate {


}



class PluginClass {


}



class PluginDesc {
	public major_version: number;
	public minor_version: number;
	public name: string;
	public description: string;
	public plugin_init: PluginInitFunc;
	public version: string;
	public license: string;
	public source: string;
	public package: string;
	public origin: string;
	public release_datetime: string;
	public _gst_reserved: any[];


}



class PluginFeatureClass {


}



class Poll {


	public add_fd (fd: PollFD) : boolean;
	public fd_can_read (fd: PollFD) : boolean;
	public fd_can_write (fd: PollFD) : boolean;
	public fd_ctl_pri (fd: PollFD, active: boolean) : boolean;
	public fd_ctl_read (fd: PollFD, active: boolean) : boolean;
	public fd_ctl_write (fd: PollFD, active: boolean) : boolean;
	public fd_has_closed (fd: PollFD) : boolean;
	public fd_has_error (fd: PollFD) : boolean;
	public fd_has_pri (fd: PollFD) : boolean;
	public fd_ignored (fd: PollFD) : void;
	public free () : void;
	public get_read_gpollfd (fd: GLib.PollFD) : void;
	public read_control () : boolean;
	public remove_fd (fd: PollFD) : boolean;
	public restart () : void;
	public set_controllable (controllable: boolean) : boolean;
	public set_flushing (flushing: boolean) : void;
	public wait (timeout: ClockTime) : number;
	public write_control () : boolean;
}



class PollFD {
	public fd: number;
	public idx: number;


	public init () : void;
}



class PresetInterface {
	public parent: GObject.TypeInterface;
	public _gst_reserved: any[];

	get_preset_names : {(preset: Preset) : string[];};
	get_property_names : {(preset: Preset) : string[];};
	load_preset : {(preset: Preset, name: string) : boolean;};
	save_preset : {(preset: Preset, name: string) : boolean;};
	rename_preset : {(preset: Preset, old_name: string, new_name: string) : boolean;};
	delete_preset : {(preset: Preset, name: string) : boolean;};
	set_meta : {(preset: Preset, name: string, tag: string, value: string) : boolean;};
	get_meta : {(preset: Preset, name: string, tag: string, value: string) : boolean;};

}



class Promise {
	public parent: MiniObject;


	public expire () : void;
	public get_reply () : Structure;
	public interrupt () : void;
	public reply (_s: Structure) : void;
	public wait () : PromiseResult;
}



class ProtectionMeta {
	public meta: Meta;
	public info: Structure;


}



class ProxyPadClass {
	public parent_class: PadClass;
	public _gst_reserved: any[];


}



class ProxyPadPrivate {


}



class Query {
	public mini_object: MiniObject;
	public type: QueryType;


	public add_allocation_meta (api: GObject.Type, params: Structure) : void;
	public add_allocation_param (allocator: Allocator, params: AllocationParams) : void;
	public add_allocation_pool (pool: BufferPool, size: number, min_buffers: number, max_buffers: number) : void;
	public add_buffering_range (start: number, stop: number) : boolean;
	public add_scheduling_mode (mode: PadMode) : void;
	public find_allocation_meta (api: GObject.Type, index: number) : boolean;
	public get_n_allocation_metas () : number;
	public get_n_allocation_params () : number;
	public get_n_allocation_pools () : number;
	public get_n_buffering_ranges () : number;
	public get_n_scheduling_modes () : number;
	public get_structure () : Structure;
	public has_scheduling_mode (mode: PadMode) : boolean;
	public has_scheduling_mode_with_flags (mode: PadMode, flags: SchedulingFlags) : boolean;
	public parse_accept_caps (caps: Caps) : void;
	public parse_accept_caps_result (result: boolean) : void;
	public parse_allocation (caps: Caps, need_pool: boolean) : void;
	public parse_bitrate (nominal_bitrate: number) : void;
	public parse_buffering_percent (busy: boolean, percent: number) : void;
	public parse_buffering_range (format: Format, start: number, stop: number, estimated_total: number) : void;
	public parse_buffering_stats (mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number) : void;
	public parse_caps (filter: Caps) : void;
	public parse_caps_result (caps: Caps) : void;
	public parse_context (context: Context) : void;
	public parse_context_type (context_type: string) : boolean;
	public parse_convert (src_format: Format, src_value: number, dest_format: Format, dest_value: number) : void;
	public parse_duration (format: Format, duration: number) : void;
	public parse_latency (live: boolean, min_latency: ClockTime, max_latency: ClockTime) : void;
	public parse_n_formats (n_formats: number) : void;
	public parse_nth_allocation_meta (index: number, params: Structure) : GObject.Type;
	public parse_nth_allocation_param (index: number, allocator: Allocator, params: AllocationParams) : void;
	public parse_nth_allocation_pool (index: number, pool: BufferPool, size: number, min_buffers: number, max_buffers: number) : void;
	public parse_nth_buffering_range (index: number, start: number, stop: number) : boolean;
	public parse_nth_format (nth: number, format: Format) : void;
	public parse_nth_scheduling_mode (index: number) : PadMode;
	public parse_position (format: Format, cur: number) : void;
	public parse_scheduling (flags: SchedulingFlags, minsize: number, maxsize: number, align: number) : void;
	public parse_seeking (format: Format, seekable: boolean, segment_start: number, segment_end: number) : void;
	public parse_segment (rate: number, format: Format, start_value: number, stop_value: number) : void;
	public parse_uri (uri: string) : void;
	public parse_uri_redirection (uri: string) : void;
	public parse_uri_redirection_permanent (permanent: boolean) : void;
	public remove_nth_allocation_meta (index: number) : void;
	public remove_nth_allocation_param (index: number) : void;
	public remove_nth_allocation_pool (index: number) : void;
	public set_accept_caps_result (result: boolean) : void;
	public set_bitrate (nominal_bitrate: number) : void;
	public set_buffering_percent (busy: boolean, percent: number) : void;
	public set_buffering_range (format: Format, start: number, stop: number, estimated_total: number) : void;
	public set_buffering_stats (mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number) : void;
	public set_caps_result (caps: Caps) : void;
	public set_context (context: Context) : void;
	public set_convert (src_format: Format, src_value: number, dest_format: Format, dest_value: number) : void;
	public set_duration (format: Format, duration: number) : void;
	public set_formats (n_formats: number) : void;
	public set_formatsv (n_formats: number, formats: Format[]) : void;
	public set_latency (live: boolean, min_latency: ClockTime, max_latency: ClockTime) : void;
	public set_nth_allocation_param (index: number, allocator: Allocator, params: AllocationParams) : void;
	public set_nth_allocation_pool (index: number, pool: BufferPool, size: number, min_buffers: number, max_buffers: number) : void;
	public set_position (format: Format, cur: number) : void;
	public set_scheduling (flags: SchedulingFlags, minsize: number, maxsize: number, align: number) : void;
	public set_seeking (format: Format, seekable: boolean, segment_start: number, segment_end: number) : void;
	public set_segment (rate: number, format: Format, start_value: number, stop_value: number) : void;
	public set_uri (uri: string) : void;
	public set_uri_redirection (uri: string) : void;
	public set_uri_redirection_permanent (permanent: boolean) : void;
	public writable_structure () : Structure;
}



class ReferenceTimestampMeta {
	public parent: Meta;
	public reference: Caps;
	public timestamp: ClockTime;
	public duration: ClockTime;


}



class RegistryClass {
	public parent_class: ObjectClass;


}



class RegistryPrivate {


}



class Sample {


	public get_buffer () : Buffer;
	public get_buffer_list () : BufferList;
	public get_caps () : Caps;
	public get_info () : Structure;
	public get_segment () : Segment;
	public set_buffer (buffer: Buffer) : void;
	public set_buffer_list (buffer_list: BufferList) : void;
	public set_caps (caps: Caps) : void;
	public set_info (info: Structure) : boolean;
	public set_segment (segment: Segment) : void;
}



class Segment {
	public flags: SegmentFlags;
	public rate: number;
	public applied_rate: number;
	public format: Format;
	public base: number;
	public offset: number;
	public start: number;
	public stop: number;
	public time: number;
	public position: number;
	public duration: number;
	public _gst_reserved: any[];


	public clip (format: Format, start: number, stop: number, clip_start: number, clip_stop: number) : boolean;
	public copy () : Segment;
	public copy_into (dest: Segment) : void;
	public do_seek (rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number, update: boolean) : boolean;
	public free () : void;
	public init (format: Format) : void;
	public is_equal (s1: Segment) : boolean;
	public offset_running_time (format: Format, offset: number) : boolean;
	public position_from_running_time (format: Format, running_time: number) : number;
	public position_from_running_time_full (format: Format, running_time: number, position: number) : number;
	public position_from_stream_time (format: Format, stream_time: number) : number;
	public position_from_stream_time_full (format: Format, stream_time: number, position: number) : number;
	public set_running_time (format: Format, running_time: number) : boolean;
	public to_position (format: Format, running_time: number) : number;
	public to_running_time (format: Format, position: number) : number;
	public to_running_time_full (format: Format, position: number, running_time: number) : number;
	public to_stream_time (format: Format, position: number) : number;
	public to_stream_time_full (format: Format, position: number, stream_time: number) : number;
}



class StaticCaps {
	public caps: Caps;
	public string: string;
	public _gst_reserved: any[];


	public cleanup () : void;
	public get () : Caps;
}



class StaticPadTemplate {
	public name_template: string;
	public direction: PadDirection;
	public presence: PadPresence;
	public static_caps: StaticCaps;


	public get () : PadTemplate;
	public get_caps () : Caps;
}



class StreamClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];


}



class StreamCollectionClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];

	stream_notify : {(collection: StreamCollection, stream: Stream, pspec: GObject.ParamSpec) : void;};

}



class StreamCollectionPrivate {


}



class StreamPrivate {


}



class Structure {
	public type: GObject.Type;
	public name: GLib.Quark;


	public can_intersect (struct2: Structure) : boolean;
	public copy () : Structure;
	public filter_and_map_in_place (_func: StructureFilterMapFunc, user_data: any) : void;
	public fixate () : void;
	public fixate_field (field_name: string) : boolean;
	public fixate_field_boolean (field_name: string, target: boolean) : boolean;
	public fixate_field_nearest_double (field_name: string, target: number) : boolean;
	public fixate_field_nearest_fraction (field_name: string, target_numerator: number, target_denominator: number) : boolean;
	public fixate_field_nearest_int (field_name: string, target: number) : boolean;
	public fixate_field_string (field_name: string, target: string) : boolean;
	public foreach (_func: StructureForeachFunc, user_data: any) : boolean;
	public free () : void;
	public get (first_fieldname: string) : boolean;
	public get_array (fieldname: string, array: GObject.ValueArray) : boolean;
	public get_boolean (fieldname: string, value: boolean) : boolean;
	public get_clock_time (fieldname: string, value: ClockTime) : boolean;
	public get_date (fieldname: string, value: GLib.Date) : boolean;
	public get_date_time (fieldname: string, value: DateTime) : boolean;
	public get_double (fieldname: string, value: number) : boolean;
	public get_enum (fieldname: string, enumtype: GObject.Type, value: number) : boolean;
	public get_field_type (fieldname: string) : GObject.Type;
	public get_flagset (fieldname: string, value_flags: number, value_mask: number) : boolean;
	public get_fraction (fieldname: string, value_numerator: number, value_denominator: number) : boolean;
	public get_int (fieldname: string, value: number) : boolean;
	public get_int64 (fieldname: string, value: number) : boolean;
	public get_list (fieldname: string, array: GObject.ValueArray) : boolean;
	public get_name () : string;
	public get_name_id () : GLib.Quark;
	public get_string (fieldname: string) : string;
	public get_uint (fieldname: string, value: number) : boolean;
	public get_uint64 (fieldname: string, value: number) : boolean;
	public get_valist (first_fieldname: string, args: any[]) : boolean;
	public get_value (fieldname: string) : GObject.Value;
	public has_field (fieldname: string) : boolean;
	public has_field_typed (fieldname: string, _type: GObject.Type) : boolean;
	public has_name (name: string) : boolean;
	public id_get (first_field_id: GLib.Quark) : boolean;
	public id_get_valist (first_field_id: GLib.Quark, args: any[]) : boolean;
	public id_get_value (field: GLib.Quark) : GObject.Value;
	public id_has_field (field: GLib.Quark) : boolean;
	public id_has_field_typed (field: GLib.Quark, _type: GObject.Type) : boolean;
	public id_set (fieldname: GLib.Quark) : void;
	public id_set_valist (fieldname: GLib.Quark, varargs: any[]) : void;
	public id_set_value (field: GLib.Quark, value: GObject.Value) : void;
	public id_take_value (field: GLib.Quark, value: GObject.Value) : void;
	public intersect (struct2: Structure) : Structure;
	public is_equal (structure2: Structure) : boolean;
	public is_subset (superset: Structure) : boolean;
	public map_in_place (_func: StructureMapFunc, user_data: any) : boolean;
	public n_fields () : number;
	public nth_field_name (index: number) : string;
	public remove_all_fields () : void;
	public remove_field (fieldname: string) : void;
	public remove_fields (fieldname: string) : void;
	public remove_fields_valist (fieldname: string, varargs: any[]) : void;
	public set (fieldname: string) : void;
	public set_array (fieldname: string, array: GObject.ValueArray) : void;
	public set_list (fieldname: string, array: GObject.ValueArray) : void;
	public set_name (name: string) : void;
	public set_parent_refcount (refcount: number) : boolean;
	public set_valist (fieldname: string, varargs: any[]) : void;
	public set_value (fieldname: string, value: GObject.Value) : void;
	public take_value (fieldname: string, value: GObject.Value) : void;
	public to_string () : string;
}



class SystemClockClass {
	public parent_class: ClockClass;
	public _gst_reserved: any[];


}



class SystemClockPrivate {


}



class TagList {
	public mini_object: MiniObject;


	public add (mode: TagMergeMode, tag: string) : void;
	public add_valist (mode: TagMergeMode, tag: string, var_args: any[]) : void;
	public add_valist_values (mode: TagMergeMode, tag: string, var_args: any[]) : void;
	public add_value (mode: TagMergeMode, tag: string, value: GObject.Value) : void;
	public add_values (mode: TagMergeMode, tag: string) : void;
	public foreach (_func: TagForeachFunc, user_data: any) : void;
	public get_boolean (tag: string, value: boolean) : boolean;
	public get_boolean_index (tag: string, index: number, value: boolean) : boolean;
	public get_date (tag: string, value: GLib.Date) : boolean;
	public get_date_index (tag: string, index: number, value: GLib.Date) : boolean;
	public get_date_time (tag: string, value: DateTime) : boolean;
	public get_date_time_index (tag: string, index: number, value: DateTime) : boolean;
	public get_double (tag: string, value: number) : boolean;
	public get_double_index (tag: string, index: number, value: number) : boolean;
	public get_float (tag: string, value: number) : boolean;
	public get_float_index (tag: string, index: number, value: number) : boolean;
	public get_int (tag: string, value: number) : boolean;
	public get_int64 (tag: string, value: number) : boolean;
	public get_int64_index (tag: string, index: number, value: number) : boolean;
	public get_int_index (tag: string, index: number, value: number) : boolean;
	public get_pointer (tag: string, value: any) : boolean;
	public get_pointer_index (tag: string, index: number, value: any) : boolean;
	public get_sample (tag: string, sample: Sample) : boolean;
	public get_sample_index (tag: string, index: number, sample: Sample) : boolean;
	public get_scope () : TagScope;
	public get_string (tag: string, value: string) : boolean;
	public get_string_index (tag: string, index: number, value: string) : boolean;
	public get_tag_size (tag: string) : number;
	public get_uint (tag: string, value: number) : boolean;
	public get_uint64 (tag: string, value: number) : boolean;
	public get_uint64_index (tag: string, index: number, value: number) : boolean;
	public get_uint_index (tag: string, index: number, value: number) : boolean;
	public get_value_index (tag: string, index: number) : GObject.Value;
	public insert (from: TagList, mode: TagMergeMode) : void;
	public is_empty () : boolean;
	public is_equal (list2: TagList) : boolean;
	public merge (list2: TagList, mode: TagMergeMode) : TagList;
	public n_tags () : number;
	public nth_tag_name (index: number) : string;
	public peek_string_index (tag: string, index: number, value: string) : boolean;
	public remove_tag (tag: string) : void;
	public set_scope (scope: TagScope) : void;
	public to_string () : string;
}



class TagSetterInterface {
	public g_iface: GObject.TypeInterface;


}



class TaskClass {
	public parent_class: ObjectClass;
	public pool: TaskPool;
	public _gst_reserved: any[];


}



class TaskPoolClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];

	prepare : {(pool: TaskPool) : void;};
	cleanup : {(pool: TaskPool) : void;};
	push : {(pool: TaskPool, _func: TaskPoolFunction, user_data: any) : any;};
	join : {(pool: TaskPool, _id: any) : void;};

}



class TaskPrivate {


}



class TimedValue {
	public timestamp: ClockTime;
	public value: number;


}



class Toc {


	public append_entry (entry: TocEntry) : void;
	public dump () : void;
	public find_entry (uid: string) : TocEntry;
	public get_entries () : GLib.List;
	public get_scope () : TocScope;
	public get_tags () : TagList;
	public merge_tags (tags: TagList, mode: TagMergeMode) : void;
	public set_tags (tags: TagList) : void;
}



class TocEntry {


	public append_sub_entry (subentry: TocEntry) : void;
	public get_entry_type () : TocEntryType;
	public get_loop (loop_type: TocLoopType, repeat_count: number) : boolean;
	public get_parent () : TocEntry;
	public get_start_stop_times (start: number, stop: number) : boolean;
	public get_sub_entries () : GLib.List;
	public get_tags () : TagList;
	public get_toc () : Toc;
	public get_uid () : string;
	public is_alternative () : boolean;
	public is_sequence () : boolean;
	public merge_tags (tags: TagList, mode: TagMergeMode) : void;
	public set_loop (loop_type: TocLoopType, repeat_count: number) : void;
	public set_start_stop_times (start: number, stop: number) : void;
	public set_tags (tags: TagList) : void;
}



class TocSetterInterface {
	public g_iface: GObject.TypeInterface;


}



class TracerClass {
	public parent_class: ObjectClass;
	public _gst_reserved: any[];


}



class TracerFactoryClass {


}



class TracerPrivate {


}



class TracerRecordClass {


}



class TypeFind {
	public data: any;
	public _gst_reserved: any[];

	//peek : {(data: any, offset: number, size: number) : number;};
	//suggest : {(data: any, probability: number, caps: Caps) : void;};
	//get_length : {(data: any) : number;};

	public get_length () : number;
	public peek (offset: number, size: number) : number[];
	public suggest (probability: number, caps: Caps) : void;
	public suggest_simple (probability: number, media_type: string, fieldname: string) : void;
}



class TypeFindFactoryClass {


}



class URIHandlerInterface {
	public parent: GObject.TypeInterface;

	get_type : {(_type: GObject.Type) : URIType;};
	get_protocols : {(_type: GObject.Type) : string[];};
	get_uri : {(handler: URIHandler) : string;};
	set_uri : {(handler: URIHandler, uri: string) : boolean;};

}



class Uri {


	public append_path (relative_path: string) : boolean;
	public append_path_segment (path_segment: string) : boolean;
	public equal (second: Uri) : boolean;
	public from_string_with_base (uri: string) : Uri;
	public get_fragment () : string;
	public get_host () : string;
	public get_media_fragment_table () : GLib.HashTable;
	public get_path () : string;
	public get_path_segments () : GLib.List;
	public get_path_string () : string;
	public get_port () : number;
	public get_query_keys () : GLib.List;
	public get_query_string () : string;
	public get_query_table () : GLib.HashTable;
	public get_query_value (query_key: string) : string;
	public get_scheme () : string;
	public get_userinfo () : string;
	public is_normalized () : boolean;
	public is_writable () : boolean;
	public join (ref_uri: Uri) : Uri;
	public make_writable () : Uri;
	public new_with_base (scheme: string, userinfo: string, host: string, _port: number, path: string, query: string, fragment: string) : Uri;
	public normalize () : boolean;
	public query_has_key (query_key: string) : boolean;
	public remove_query_key (query_key: string) : boolean;
	public set_fragment (fragment: string) : boolean;
	public set_host (host: string) : boolean;
	public set_path (path: string) : boolean;
	public set_path_segments (path_segments: GLib.List) : boolean;
	public set_path_string (path: string) : boolean;
	public set_port (_port: number) : boolean;
	public set_query_string (query: string) : boolean;
	public set_query_table (query_table: GLib.HashTable) : boolean;
	public set_query_value (query_key: string, query_value: string) : boolean;
	public set_scheme (scheme: string) : boolean;
	public set_userinfo (userinfo: string) : boolean;
	public to_string () : string;
}



class ValueTable {
	public type: GObject.Type;
	public compare: ValueCompareFunc;
	public serialize: ValueSerializeFunc;
	public deserialize: ValueDeserializeFunc;
	public _gst_reserved: any[];


}



interface ChildProxy {
	child_added (child: GObject.Object, name: string) : void;
	child_removed (child: GObject.Object, name: string) : void;
	get (first_property_name: string) : void;
	get_child_by_index (index: number) : GObject.Object;
	get_child_by_name (name: string) : GObject.Object;
	get_children_count () : number;
	get_property (name: string, value: GObject.Value) : void;
	get_valist (first_property_name: string, var_args: any[]) : void;
	lookup (name: string, target: GObject.Object, pspec: GObject.ParamSpec) : boolean;
	set (first_property_name: string) : void;
	set_property (name: string, value: GObject.Value) : void;
	set_valist (first_property_name: string, var_args: any[]) : void;
}

var ChildProxy: {
	
	
}




interface Preset {
	delete_preset (name: string) : boolean;
	get_meta (name: string, tag: string, value: string) : boolean;
	get_preset_names () : string[];
	get_property_names () : string[];
	is_editable () : boolean;
	load_preset (name: string) : boolean;
	rename_preset (old_name: string, new_name: string) : boolean;
	save_preset (name: string) : boolean;
	set_meta (name: string, tag: string, value: string) : boolean;
}

var Preset: {
	
	get_app_dir () : string;
	set_app_dir (app_dir: string) : boolean;
}




interface TagSetter {
	add_tag_valist (mode: TagMergeMode, tag: string, var_args: any[]) : void;
	add_tag_valist_values (mode: TagMergeMode, tag: string, var_args: any[]) : void;
	add_tag_value (mode: TagMergeMode, tag: string, value: GObject.Value) : void;
	add_tag_values (mode: TagMergeMode, tag: string) : void;
	add_tags (mode: TagMergeMode, tag: string) : void;
	get_tag_list () : TagList;
	get_tag_merge_mode () : TagMergeMode;
	merge_tags (list: TagList, mode: TagMergeMode) : void;
	reset_tags () : void;
	set_tag_merge_mode (mode: TagMergeMode) : void;
}

var TagSetter: {
	
	
}




interface TocSetter {
	get_toc () : Toc;
	reset () : void;
	set_toc (toc: Toc) : void;
}

var TocSetter: {
	
	
}




interface URIHandler {
	get_protocols () : string[];
	get_uri () : string;
	get_uri_type () : URIType;
	set_uri (uri: string) : boolean;
}

var URIHandler: {
	
	
}




enum BufferingMode {
	stream = 0,
	download = 1,
	timeshift = 2,
	live = 3
}



enum BusSyncReply {
	drop = 0,
	pass = 1,
	async = 2
}



enum CapsIntersectMode {
	zig_zag = 0,
	first = 1
}



enum ClockEntryType {
	single = 0,
	periodic = 1
}



enum ClockReturn {
	ok = 0,
	early = 1,
	unscheduled = 2,
	busy = 3,
	badtime = 4,
	error = 5,
	unsupported = 6,
	done = 7
}



enum ClockType {
	realtime = 0,
	monotonic = 1,
	other = 2
}



enum CoreError {
	failed = 1,
	too_lazy = 2,
	not_implemented = 3,
	state_change = 4,
	pad = 5,
	thread = 6,
	negotiation = 7,
	event = 8,
	seek = 9,
	caps = 10,
	tag = 11,
	missing_plugin = 12,
	clock = 13,
	disabled = 14,
	num_errors = 15
}



enum DebugColorMode {
	off = 0,
	on = 1,
	unix = 2
}



enum DebugLevel {
	none = 0,
	error = 1,
	warning = 2,
	fixme = 3,
	info = 4,
	debug = 5,
	log = 6,
	trace = 7,
	memdump = 9,
	count = 10
}



enum EventType {
	unknown = 0,
	flush_start = 2563,
	flush_stop = 5127,
	stream_start = 10254,
	caps = 12814,
	segment = 17934,
	stream_collection = 19230,
	tag = 20510,
	buffersize = 23054,
	sink_message = 25630,
	stream_group_done = 26894,
	eos = 28174,
	toc = 30750,
	protection = 33310,
	segment_done = 38406,
	gap = 40966,
	qos = 48641,
	seek = 51201,
	navigation = 53761,
	latency = 56321,
	step = 58881,
	reconfigure = 61441,
	toc_select = 64001,
	select_streams = 66561,
	custom_upstream = 69121,
	custom_downstream = 71686,
	custom_downstream_oob = 74242,
	custom_downstream_sticky = 76830,
	custom_both = 79367,
	custom_both_oob = 81923
}



enum FlowReturn {
	custom_success_2 = 102,
	custom_success_1 = 101,
	custom_success = 100,
	ok = 0,
	not_linked = -1,
	flushing = -2,
	eos = -3,
	not_negotiated = -4,
	error = -5,
	not_supported = -6,
	custom_error = -100,
	custom_error_1 = -101,
	custom_error_2 = -102
}



enum Format {
	undefined = 0,
	default = 1,
	bytes = 2,
	time = 3,
	buffers = 4,
	percent = 5
}



enum IteratorItem {
	skip = 0,
	pass = 1,
	end = 2
}



enum IteratorResult {
	done = 0,
	ok = 1,
	resync = 2,
	error = 3
}



enum LibraryError {
	failed = 1,
	too_lazy = 2,
	init = 3,
	shutdown = 4,
	settings = 5,
	encode = 6,
	num_errors = 7
}



enum PadDirection {
	unknown = 0,
	src = 1,
	sink = 2
}



enum PadLinkReturn {
	ok = 0,
	wrong_hierarchy = -1,
	was_linked = -2,
	wrong_direction = -3,
	noformat = -4,
	nosched = -5,
	refused = -6
}



enum PadMode {
	none = 0,
	push = 1,
	pull = 2
}



enum PadPresence {
	always = 0,
	sometimes = 1,
	request = 2
}



enum PadProbeReturn {
	drop = 0,
	ok = 1,
	remove = 2,
	pass = 3,
	handled = 4
}



enum ParseError {
	syntax = 0,
	no_such_element = 1,
	no_such_property = 2,
	link = 3,
	could_not_set_property = 4,
	empty_bin = 5,
	empty = 6,
	delayed_link = 7
}



enum PluginError {
	module = 0,
	dependencies = 1,
	name_mismatch = 2
}



enum ProgressType {
	start = 0,
	continue = 1,
	complete = 2,
	canceled = 3,
	error = 4
}



enum PromiseResult {
	pending = 0,
	interrupted = 1,
	replied = 2,
	expired = 3
}



enum QOSType {
	overflow = 0,
	underflow = 1,
	throttle = 2
}



enum QueryType {
	unknown = 0,
	position = 2563,
	duration = 5123,
	latency = 7683,
	jitter = 10243,
	rate = 12803,
	seeking = 15363,
	segment = 17923,
	convert = 20483,
	formats = 23043,
	buffering = 28163,
	custom = 30723,
	uri = 33283,
	allocation = 35846,
	scheduling = 38401,
	accept_caps = 40963,
	caps = 43523,
	drain = 46086,
	context = 48643,
	bitrate = 51202
}



enum Rank {
	none = 0,
	marginal = 64,
	secondary = 128,
	primary = 256
}



enum ResourceError {
	failed = 1,
	too_lazy = 2,
	not_found = 3,
	busy = 4,
	open_read = 5,
	open_write = 6,
	open_read_write = 7,
	close = 8,
	read = 9,
	write = 10,
	seek = 11,
	sync = 12,
	settings = 13,
	no_space_left = 14,
	not_authorized = 15,
	num_errors = 16
}



enum SearchMode {
	exact = 0,
	before = 1,
	after = 2
}



enum SeekType {
	none = 0,
	set = 1,
	end = 2
}



enum State {
	void_pending = 0,
	null = 1,
	ready = 2,
	paused = 3,
	playing = 4
}



enum StateChange {
	null_to_ready = 10,
	ready_to_paused = 19,
	paused_to_playing = 28,
	playing_to_paused = 35,
	paused_to_ready = 26,
	ready_to_null = 17,
	null_to_null = 9,
	ready_to_ready = 18,
	paused_to_paused = 27,
	playing_to_playing = 36
}



enum StateChangeReturn {
	failure = 0,
	success = 1,
	async = 2,
	no_preroll = 3
}



enum StreamError {
	failed = 1,
	too_lazy = 2,
	not_implemented = 3,
	type_not_found = 4,
	wrong_type = 5,
	codec_not_found = 6,
	decode = 7,
	encode = 8,
	demux = 9,
	mux = 10,
	format = 11,
	decrypt = 12,
	decrypt_nokey = 13,
	num_errors = 14
}



enum StreamStatusType {
	create = 0,
	enter = 1,
	leave = 2,
	destroy = 3,
	start = 8,
	pause = 9,
	stop = 10
}



enum StructureChangeType {
	link = 0,
	unlink = 1
}



enum TagFlag {
	undefined = 0,
	meta = 1,
	encoded = 2,
	decoded = 3,
	count = 4
}



enum TagMergeMode {
	undefined = 0,
	replace_all = 1,
	replace = 2,
	append = 3,
	prepend = 4,
	keep = 5,
	keep_all = 6,
	count = 7
}



enum TagScope {
	stream = 0,
	global = 1
}



enum TaskState {
	started = 0,
	stopped = 1,
	paused = 2
}



enum TocEntryType {
	angle = -3,
	version = -2,
	edition = -1,
	invalid = 0,
	title = 1,
	track = 2,
	chapter = 3
}



enum TocLoopType {
	none = 0,
	forward = 1,
	reverse = 2,
	ping_pong = 3
}



enum TocScope {
	global = 1,
	current = 2
}



enum TracerValueScope {
	process = 0,
	thread = 1,
	element = 2,
	pad = 3
}



enum TypeFindProbability {
	none = 0,
	minimum = 1,
	possible = 50,
	likely = 80,
	nearly_certain = 99,
	maximum = 100
}



enum URIError {
	unsupported_protocol = 0,
	bad_uri = 1,
	bad_state = 2,
	bad_reference = 3
}



enum URIType {
	unknown = 0,
	sink = 1,
	src = 2
}



enum AllocatorFlags {
	custom_alloc = 16,
	last = 1048576
}



enum BinFlags {
	no_resync = 16384,
	streams_aware = 32768,
	last = 524288
}



enum BufferCopyFlags {
	none = 0,
	flags = 1,
	timestamps = 2,
	meta = 4,
	memory = 8,
	merge = 16,
	deep = 32
}



enum BufferFlags {
	live = 16,
	decode_only = 32,
	discont = 64,
	resync = 128,
	corrupted = 256,
	marker = 512,
	header = 1024,
	gap = 2048,
	droppable = 4096,
	delta_unit = 8192,
	tag_memory = 16384,
	sync_after = 32768,
	non_droppable = 65536,
	last = 1048576
}



enum BufferPoolAcquireFlags {
	none = 0,
	key_unit = 1,
	dontwait = 2,
	discont = 4,
	last = 65536
}



enum BusFlags {
	flushing = 16,
	flag_last = 32
}



enum CapsFlags {
	any = 16
}



enum ClockFlags {
	can_do_single_sync = 16,
	can_do_single_async = 32,
	can_do_periodic_sync = 64,
	can_do_periodic_async = 128,
	can_set_resolution = 256,
	can_set_master = 512,
	needs_startup_sync = 1024,
	last = 4096
}



enum DebugColorFlags {
	fg_black = 0,
	fg_red = 1,
	fg_green = 2,
	fg_yellow = 3,
	fg_blue = 4,
	fg_magenta = 5,
	fg_cyan = 6,
	fg_white = 7,
	bg_black = 0,
	bg_red = 16,
	bg_green = 32,
	bg_yellow = 48,
	bg_blue = 64,
	bg_magenta = 80,
	bg_cyan = 96,
	bg_white = 112,
	bold = 256,
	underline = 512
}



enum DebugGraphDetails {
	media_type = 1,
	caps_details = 2,
	non_default_params = 4,
	states = 8,
	full_params = 16,
	all = 15,
	verbose = 4294967295
}



enum ElementFlags {
	locked_state = 16,
	sink = 32,
	source = 64,
	provide_clock = 128,
	require_clock = 256,
	indexable = 512,
	last = 16384
}



enum EventTypeFlags {
	upstream = 1,
	downstream = 2,
	serialized = 4,
	sticky = 8,
	sticky_multi = 16
}



enum LockFlags {
	read = 1,
	write = 2,
	exclusive = 4,
	last = 256
}



enum MapFlags {
	read = 1,
	write = 2,
	flag_last = 65536
}



enum MemoryFlags {
	readonly = 2,
	no_share = 16,
	zero_prefixed = 32,
	zero_padded = 64,
	physically_contiguous = 128,
	not_mappable = 256,
	last = 1048576
}



enum MessageType {
	unknown = 0,
	eos = 1,
	error = 2,
	warning = 4,
	info = 8,
	tag = 16,
	buffering = 32,
	state_changed = 64,
	state_dirty = 128,
	step_done = 256,
	clock_provide = 512,
	clock_lost = 1024,
	new_clock = 2048,
	structure_change = 4096,
	stream_status = 8192,
	application = 16384,
	element = 32768,
	segment_start = 65536,
	segment_done = 131072,
	duration_changed = 262144,
	latency = 524288,
	async_start = 1048576,
	async_done = 2097152,
	request_state = 4194304,
	step_start = 8388608,
	qos = 16777216,
	progress = 33554432,
	toc = 67108864,
	reset_time = 134217728,
	stream_start = 268435456,
	need_context = 536870912,
	have_context = 1073741824,
	extended = 2147483648,
	device_added = 2147483649,
	device_removed = 2147483650,
	property_notify = 2147483651,
	stream_collection = 2147483652,
	streams_selected = 2147483653,
	redirect = 2147483654,
	device_changed = 2147483654,
	any = 4294967295
}



enum MetaFlags {
	none = 0,
	readonly = 1,
	pooled = 2,
	locked = 4,
	last = 65536
}



enum MiniObjectFlags {
	lockable = 1,
	lock_readonly = 2,
	may_be_leaked = 4,
	last = 16
}



enum ObjectFlags {
	may_be_leaked = 1,
	last = 16
}



enum PadFlags {
	blocked = 16,
	flushing = 32,
	eos = 64,
	blocking = 128,
	need_parent = 256,
	need_reconfigure = 512,
	pending_events = 1024,
	fixed_caps = 2048,
	proxy_caps = 4096,
	proxy_allocation = 8192,
	proxy_scheduling = 16384,
	accept_intersect = 32768,
	accept_template = 65536,
	last = 1048576
}



enum PadLinkCheck {
	nothing = 0,
	hierarchy = 1,
	template_caps = 2,
	caps = 4,
	no_reconfigure = 8,
	default = 5
}



enum PadProbeType {
	invalid = 0,
	idle = 1,
	block = 2,
	buffer = 16,
	buffer_list = 32,
	event_downstream = 64,
	event_upstream = 128,
	event_flush = 256,
	query_downstream = 512,
	query_upstream = 1024,
	push = 4096,
	pull = 8192,
	blocking = 3,
	data_downstream = 112,
	data_upstream = 128,
	data_both = 240,
	block_downstream = 114,
	block_upstream = 130,
	event_both = 192,
	query_both = 1536,
	all_both = 1776,
	scheduling = 12288
}



enum PadTemplateFlags {
	last = 256
}



enum ParseFlags {
	none = 0,
	fatal_errors = 1,
	no_single_element_bins = 2,
	place_in_bin = 4
}



enum PipelineFlags {
	fixed_clock = 524288,
	last = 8388608
}



enum PluginDependencyFlags {
	none = 0,
	recurse = 1,
	paths_are_default_only = 2,
	file_name_is_suffix = 4,
	file_name_is_prefix = 8,
	paths_are_relative_to_exe = 16
}



enum PluginFlags {
	cached = 16,
	blacklisted = 32
}



enum QueryTypeFlags {
	upstream = 1,
	downstream = 2,
	serialized = 4
}



enum SchedulingFlags {
	seekable = 1,
	sequential = 2,
	bandwidth_limited = 4
}



enum SeekFlags {
	none = 0,
	flush = 1,
	accurate = 2,
	key_unit = 4,
	segment = 8,
	trickmode = 16,
	skip = 16,
	snap_before = 32,
	snap_after = 64,
	snap_nearest = 96,
	trickmode_key_units = 128,
	trickmode_no_audio = 256
}



enum SegmentFlags {
	none = 0,
	reset = 1,
	trickmode = 16,
	skip = 16,
	segment = 8,
	trickmode_key_units = 128,
	trickmode_no_audio = 256
}



enum StackTraceFlags {
	full = 1
}



enum StreamFlags {
	none = 0,
	sparse = 1,
	select = 2,
	unselect = 4
}



enum StreamType {
	unknown = 1,
	audio = 2,
	video = 4,
	container = 8,
	text = 16
}



enum TracerValueFlags {
	none = 0,
	optional = 1,
	aggregated = 2
}



interface BufferForeachMetaFunc {
	(buffer: Buffer, meta: Meta, user_data: any) : boolean;
}



interface BufferListFunc {
	(buffer: Buffer, idx: number, user_data: any) : boolean;
}



interface BusFunc {
	(bus: Bus, message: Message, user_data: any) : boolean;
}



interface BusSyncHandler {
	(bus: Bus, message: Message, user_data: any) : BusSyncReply;
}



interface CapsFilterMapFunc {
	(features: CapsFeatures, structure: Structure, user_data: any) : boolean;
}



interface CapsForeachFunc {
	(features: CapsFeatures, structure: Structure, user_data: any) : boolean;
}



interface CapsMapFunc {
	(features: CapsFeatures, structure: Structure, user_data: any) : boolean;
}



interface ClockCallback {
	(clock: Clock, time: ClockTime, _id: ClockID, user_data: any) : boolean;
}



interface ControlBindingConvert {
	(binding: ControlBinding, src_value: number, dest_value: GObject.Value) : void;
}



interface ControlSourceGetValue {
	(self: ControlSource, timestamp: ClockTime, value: number) : boolean;
}



interface ControlSourceGetValueArray {
	(self: ControlSource, timestamp: ClockTime, interval: ClockTime, n_values: number, values: number) : boolean;
}



interface DebugFuncPtr {
	() : void;
}



interface ElementCallAsyncFunc {
	(element: Element, user_data: any) : void;
}



interface ElementForeachPadFunc {
	(element: Element, pad: Pad, user_data: any) : boolean;
}



interface IteratorCopyFunction {
	(_it: Iterator, copy: Iterator) : void;
}



interface IteratorFoldFunction {
	(item: GObject.Value, _ret: GObject.Value, user_data: any) : boolean;
}



interface IteratorForeachFunction {
	(item: GObject.Value, user_data: any) : void;
}



interface IteratorFreeFunction {
	(_it: Iterator) : void;
}



interface IteratorItemFunction {
	(_it: Iterator, item: GObject.Value) : IteratorItem;
}



interface IteratorNextFunction {
	(_it: Iterator, result: GObject.Value) : IteratorResult;
}



interface IteratorResyncFunction {
	(_it: Iterator) : void;
}



interface LogFunction {
	(category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object, message: DebugMessage, user_data: any) : void;
}



interface MemoryCopyFunction {
	(mem: Memory, offset: number, size: number) : Memory;
}



interface MemoryIsSpanFunction {
	(mem1: Memory, mem2: Memory, offset: number) : boolean;
}



interface MemoryMapFullFunction {
	(mem: Memory, info: MapInfo, maxsize: number) : any;
}



interface MemoryMapFunction {
	(mem: Memory, maxsize: number, flags: MapFlags) : any;
}



interface MemoryShareFunction {
	(mem: Memory, offset: number, size: number) : Memory;
}



interface MemoryUnmapFullFunction {
	(mem: Memory, info: MapInfo) : void;
}



interface MemoryUnmapFunction {
	(mem: Memory) : void;
}



interface MetaFreeFunction {
	(meta: Meta, buffer: Buffer) : void;
}



interface MetaInitFunction {
	(meta: Meta, params: any, buffer: Buffer) : boolean;
}



interface MetaTransformFunction {
	(transbuf: Buffer, meta: Meta, buffer: Buffer, _type: GLib.Quark, data: any) : boolean;
}



interface MiniObjectCopyFunction {
	(obj: MiniObject) : MiniObject;
}



interface MiniObjectDisposeFunction {
	(obj: MiniObject) : boolean;
}



interface MiniObjectFreeFunction {
	(obj: MiniObject) : void;
}



interface MiniObjectNotify {
	(user_data: any, obj: MiniObject) : void;
}



interface PadActivateFunction {
	(pad: Pad, parent: Object) : boolean;
}



interface PadActivateModeFunction {
	(pad: Pad, parent: Object, mode: PadMode, active: boolean) : boolean;
}



interface PadChainFunction {
	(pad: Pad, parent: Object, buffer: Buffer) : FlowReturn;
}



interface PadChainListFunction {
	(pad: Pad, parent: Object, list: BufferList) : FlowReturn;
}



interface PadEventFullFunction {
	(pad: Pad, parent: Object, event: Event) : FlowReturn;
}



interface PadEventFunction {
	(pad: Pad, parent: Object, event: Event) : boolean;
}



interface PadForwardFunction {
	(pad: Pad, user_data: any) : boolean;
}



interface PadGetRangeFunction {
	(pad: Pad, parent: Object, offset: number, length: number, buffer: Buffer) : FlowReturn;
}



interface PadIterIntLinkFunction {
	(pad: Pad, parent: Object) : Iterator;
}



interface PadLinkFunction {
	(pad: Pad, parent: Object, peer: Pad) : PadLinkReturn;
}



interface PadProbeCallback {
	(pad: Pad, info: PadProbeInfo, user_data: any) : PadProbeReturn;
}



interface PadQueryFunction {
	(pad: Pad, parent: Object, query: Query) : boolean;
}



interface PadStickyEventsForeachFunction {
	(pad: Pad, event: Event, user_data: any) : boolean;
}



interface PadUnlinkFunction {
	(pad: Pad, parent: Object) : void;
}



interface PluginFeatureFilter {
	(feature: PluginFeature, user_data: any) : boolean;
}



interface PluginFilter {
	(plugin: Plugin, user_data: any) : boolean;
}



interface PluginInitFullFunc {
	(plugin: Plugin, user_data: any) : boolean;
}



interface PluginInitFunc {
	(plugin: Plugin) : boolean;
}



interface PromiseChangeFunc {
	(promise: Promise, user_data: any) : void;
}



interface StructureFilterMapFunc {
	(field_id: GLib.Quark, value: GObject.Value, user_data: any) : boolean;
}



interface StructureForeachFunc {
	(field_id: GLib.Quark, value: GObject.Value, user_data: any) : boolean;
}



interface StructureMapFunc {
	(field_id: GLib.Quark, value: GObject.Value, user_data: any) : boolean;
}



interface TagForeachFunc {
	(list: TagList, tag: string, user_data: any) : void;
}



interface TagMergeFunc {
	(dest: GObject.Value, src: GObject.Value) : void;
}



interface TaskFunction {
	(user_data: any) : void;
}



interface TaskPoolFunction {
	(user_data: any) : void;
}



interface TaskThreadFunc {
	(task: Task, thread: GLib.Thread, user_data: any) : void;
}



interface TypeFindFunction {
	(find: TypeFind, user_data: any) : void;
}



interface ValueCompareFunc {
	(value1: GObject.Value, value2: GObject.Value) : number;
}



interface ValueDeserializeFunc {
	(dest: GObject.Value, _s: string) : boolean;
}



interface ValueSerializeFunc {
	(value1: GObject.Value) : string;
}



type ClockID = any;



type ClockTime = number;



type ClockTimeDiff = number;



type ElementFactoryListType = number;



function buffer_get_max_memory (): number;



function calculate_linear_regression (xy: ClockTime, temp: ClockTime, _n: number, m_num: ClockTime, m_denom: ClockTime, _b: ClockTime, xbase: ClockTime, r_squared: number): boolean;



function caps_features_from_string (features: string): CapsFeatures;



function caps_from_string (string: string): Caps;



function clear_mini_object (object_ptr: MiniObject): void;



function clear_object (object_ptr: Object): void;



function clear_structure (structure_ptr: Structure): void;



function core_error_quark (): GLib.Quark;



function debug_add_log_function (_func: LogFunction, user_data: any, notify: GLib.DestroyNotify): void;



function debug_add_ring_buffer_logger (max_size_per_thread: number, thread_timeout: number): void;



function debug_bin_to_dot_data (bin: Bin, details: DebugGraphDetails): string;



function debug_bin_to_dot_file (bin: Bin, details: DebugGraphDetails, file_name: string): void;



function debug_bin_to_dot_file_with_ts (bin: Bin, details: DebugGraphDetails, file_name: string): void;



function debug_construct_term_color (colorinfo: number): string;



function debug_construct_win_color (colorinfo: number): number;



function debug_get_all_categories (): GLib.SList;



function debug_get_color_mode (): DebugColorMode;



function debug_get_default_threshold (): DebugLevel;



function debug_get_stack_trace (flags: StackTraceFlags): string;



function debug_is_active (): boolean;



function debug_is_colored (): boolean;



function debug_level_get_name (level: DebugLevel): string;



function debug_log (category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object, format: string): void;



function debug_log_default (category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object, message: DebugMessage, user_data: any): void;



function debug_log_valist (category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object, format: string, args: any[]): void;



function debug_print_stack_trace (): void;



function debug_remove_log_function (_func: LogFunction): number;



function debug_remove_log_function_by_data (data: any): number;



function debug_remove_ring_buffer_logger (): void;



function debug_ring_buffer_logger_get_logs (): string[];



function debug_set_active (active: boolean): void;



function debug_set_color_mode (mode: DebugColorMode): void;



function debug_set_color_mode_from_string (mode: string): void;



function debug_set_colored (colored: boolean): void;



function debug_set_default_threshold (level: DebugLevel): void;



function debug_set_threshold_for_name (name: string, level: DebugLevel): void;



function debug_set_threshold_from_string (list: string, reset: boolean): void;



function debug_unset_threshold_for_name (name: string): void;



function deinit (): void;



function dynamic_type_register (plugin: Plugin, _type: GObject.Type): boolean;



function error_get_message (domain: GLib.Quark, code: number): string;



function event_type_get_flags (_type: EventType): EventTypeFlags;



function event_type_get_name (_type: EventType): string;



function event_type_to_quark (_type: EventType): GLib.Quark;



function filename_to_uri (filename: string): string;



function flow_get_name (_ret: FlowReturn): string;



function flow_to_quark (_ret: FlowReturn): GLib.Quark;



function format_get_by_nick (nick: string): Format;



function format_get_details (format: Format): FormatDefinition;



function format_get_name (format: Format): string;



function format_iterate_definitions (): Iterator;



function format_register (nick: string, description: string): Format;



function format_to_quark (format: Format): GLib.Quark;



function formats_contains (formats: Format[], format: Format): boolean;



function get_main_executable_path (): string;



function info_strdup_printf (format: string): string;



function info_strdup_vprintf (format: string, args: any[]): string;



function info_vasprintf (result: string, format: string, args: any[]): number;



function init (argc: number, argv: string[]): void;



function init_check (argc: number, argv: string[]): boolean;



function init_get_option_group (): GLib.OptionGroup;



function is_caps_features (obj: any): boolean;



function is_initialized (): boolean;



function library_error_quark (): GLib.Quark;



function make_element_message_details (name: string): Structure;



function message_type_get_name (_type: MessageType): string;



function message_type_to_quark (_type: MessageType): GLib.Quark;



function meta_api_type_get_tags (api: GObject.Type): string[];



function meta_api_type_has_tag (api: GObject.Type, tag: GLib.Quark): boolean;



function meta_api_type_register (api: string, tags: string[]): GObject.Type;



function meta_get_info (_impl: string): MetaInfo;



function meta_register (api: GObject.Type, _impl: string, size: number, init_func: MetaInitFunction, free_func: MetaFreeFunction, transform_func: MetaTransformFunction): MetaInfo;



function mini_object_replace (olddata: MiniObject, newdata: MiniObject): boolean;



function mini_object_steal (olddata: MiniObject): MiniObject;



function mini_object_take (olddata: MiniObject, newdata: MiniObject): boolean;



function pad_mode_get_name (mode: PadMode): string;



function param_spec_array (name: string, nick: string, blurb: string, element_spec: GObject.ParamSpec, flags: GObject.ParamFlags): GObject.ParamSpec;



function param_spec_fraction (name: string, nick: string, blurb: string, min_num: number, min_denom: number, max_num: number, max_denom: number, default_num: number, default_denom: number, flags: GObject.ParamFlags): GObject.ParamSpec;



function parent_buffer_meta_api_get_type (): GObject.Type;



function parent_buffer_meta_get_info (): MetaInfo;



function parse_bin_from_description (bin_description: string, ghost_unlinked_pads: boolean): Bin;



function parse_bin_from_description_full (bin_description: string, ghost_unlinked_pads: boolean, context: ParseContext, flags: ParseFlags): Element;



function parse_error_quark (): GLib.Quark;



function parse_launch (pipeline_description: string): Element;



function parse_launch_full (pipeline_description: string, context: ParseContext, flags: ParseFlags): Element;



function parse_launchv (argv: string[]): Element;



function parse_launchv_full (argv: string[], context: ParseContext, flags: ParseFlags): Element;



function plugin_error_quark (): GLib.Quark;



function poll_new (controllable: boolean): Poll;



function poll_new_timer (): Poll;



function preset_get_app_dir (): string;



function preset_set_app_dir (app_dir: string): boolean;



function print (format: string): void;



function printerr (format: string): void;



function printerrln (format: string): void;



function println (format: string): void;



function protection_filter_systems_by_available_decryptors (system_identifiers: string[]): string[];



function protection_meta_api_get_type (): GObject.Type;



function protection_meta_get_info (): MetaInfo;



function protection_select_system (system_identifiers: string[]): string;



function query_type_get_flags (_type: QueryType): QueryTypeFlags;



function query_type_get_name (_type: QueryType): string;



function query_type_to_quark (_type: QueryType): GLib.Quark;



function reference_timestamp_meta_api_get_type (): GObject.Type;



function reference_timestamp_meta_get_info (): MetaInfo;



function resource_error_quark (): GLib.Quark;



function segtrap_is_enabled (): boolean;



function segtrap_set_enabled (enabled: boolean): void;



function state_change_get_name (transition: StateChange): string;



function static_caps_get_type (): GObject.Type;



function static_pad_template_get_type (): GObject.Type;



function stream_error_quark (): GLib.Quark;



function stream_type_get_name (stype: StreamType): string;



function structure_from_string (string: string, _end: string): Structure;



function tag_exists (tag: string): boolean;



function tag_get_description (tag: string): string;



function tag_get_flag (tag: string): TagFlag;



function tag_get_nick (tag: string): string;



function tag_get_type (tag: string): GObject.Type;



function tag_is_fixed (tag: string): boolean;



function tag_list_copy_value (dest: GObject.Value, list: TagList, tag: string): boolean;



function tag_merge_strings_with_comma (dest: GObject.Value, src: GObject.Value): void;



function tag_merge_use_first (dest: GObject.Value, src: GObject.Value): void;



function tag_register (name: string, flag: TagFlag, _type: GObject.Type, nick: string, blurb: string, _func: TagMergeFunc): void;



function tag_register_static (name: string, flag: TagFlag, _type: GObject.Type, nick: string, blurb: string, _func: TagMergeFunc): void;



function toc_entry_type_get_nick (_type: TocEntryType): string;



function type_find_get_type (): GObject.Type;



function type_find_register (plugin: Plugin, name: string, rank: number, _func: TypeFindFunction, extensions: string, possible_caps: Caps, data: any, data_notify: GLib.DestroyNotify): boolean;



function update_registry (): boolean;



function uri_construct (protocol: string, location: string): string;



function uri_error_quark (): GLib.Quark;



function uri_from_string (uri: string): Uri;



function uri_get_location (uri: string): string;



function uri_get_protocol (uri: string): string;



function uri_has_protocol (uri: string, protocol: string): boolean;



function uri_is_valid (uri: string): boolean;



function uri_join_strings (base_uri: string, ref_uri: string): string;



function uri_protocol_is_supported (_type: URIType, protocol: string): boolean;



function uri_protocol_is_valid (protocol: string): boolean;



function util_array_binary_search (array: any, num_elements: number, element_size: number, search_func: GLib.CompareDataFunc, mode: SearchMode, search_data: any, user_data: any): any;



function util_double_to_fraction (src: number, dest_n: number, dest_d: number): void;



function util_dump_buffer (buf: Buffer): void;



function util_dump_mem (mem: number[], size: number): void;



function util_fraction_add (a_n: number, a_d: number, b_n: number, b_d: number, res_n: number, res_d: number): boolean;



function util_fraction_compare (a_n: number, a_d: number, b_n: number, b_d: number): number;



function util_fraction_multiply (a_n: number, a_d: number, b_n: number, b_d: number, res_n: number, res_d: number): boolean;



function util_fraction_to_double (src_n: number, src_d: number, dest: number): void;



function util_gdouble_to_guint64 (value: number): number;



function util_get_object_array (object: GObject.Object, name: string, array: GObject.ValueArray): boolean;



function util_get_timestamp (): ClockTime;



function util_greatest_common_divisor (_a: number, _b: number): number;



function util_greatest_common_divisor_int64 (_a: number, _b: number): number;



function util_group_id_next (): number;



function util_guint64_to_gdouble (value: number): number;



function util_seqnum_compare (s1: number, s2: number): number;



function util_seqnum_next (): number;



function util_set_object_arg (object: GObject.Object, name: string, value: string): void;



function util_set_object_array (object: GObject.Object, name: string, array: GObject.ValueArray): boolean;



function util_set_value_from_string (value: GObject.Value, value_str: string): void;



function util_uint64_scale (_val: number, _num: number, denom: number): number;



function util_uint64_scale_ceil (_val: number, _num: number, denom: number): number;



function util_uint64_scale_int (_val: number, _num: number, denom: number): number;



function util_uint64_scale_int_ceil (_val: number, _num: number, denom: number): number;



function util_uint64_scale_int_round (_val: number, _num: number, denom: number): number;



function util_uint64_scale_round (_val: number, _num: number, denom: number): number;



function value_can_compare (value1: GObject.Value, value2: GObject.Value): boolean;



function value_can_intersect (value1: GObject.Value, value2: GObject.Value): boolean;



function value_can_subtract (minuend: GObject.Value, subtrahend: GObject.Value): boolean;



function value_can_union (value1: GObject.Value, value2: GObject.Value): boolean;



function value_compare (value1: GObject.Value, value2: GObject.Value): number;



function value_deserialize (dest: GObject.Value, src: string): boolean;



function value_fixate (dest: GObject.Value, src: GObject.Value): boolean;



function value_fraction_multiply (product: GObject.Value, factor1: GObject.Value, factor2: GObject.Value): boolean;



function value_fraction_subtract (dest: GObject.Value, minuend: GObject.Value, subtrahend: GObject.Value): boolean;



function value_get_bitmask (value: GObject.Value): number;



function value_get_caps (value: GObject.Value): Caps;



function value_get_caps_features (value: GObject.Value): CapsFeatures;



function value_get_double_range_max (value: GObject.Value): number;



function value_get_double_range_min (value: GObject.Value): number;



function value_get_flagset_flags (value: GObject.Value): number;



function value_get_flagset_mask (value: GObject.Value): number;



function value_get_fraction_denominator (value: GObject.Value): number;



function value_get_fraction_numerator (value: GObject.Value): number;



function value_get_fraction_range_max (value: GObject.Value): GObject.Value;



function value_get_fraction_range_min (value: GObject.Value): GObject.Value;



function value_get_int64_range_max (value: GObject.Value): number;



function value_get_int64_range_min (value: GObject.Value): number;



function value_get_int64_range_step (value: GObject.Value): number;



function value_get_int_range_max (value: GObject.Value): number;



function value_get_int_range_min (value: GObject.Value): number;



function value_get_int_range_step (value: GObject.Value): number;



function value_get_structure (value: GObject.Value): Structure;



function value_init_and_copy (dest: GObject.Value, src: GObject.Value): void;



function value_intersect (dest: GObject.Value, value1: GObject.Value, value2: GObject.Value): boolean;



function value_is_fixed (value: GObject.Value): boolean;



function value_is_subset (value1: GObject.Value, value2: GObject.Value): boolean;



function value_register (table: ValueTable): void;



function value_serialize (value: GObject.Value): string;



function value_set_bitmask (value: GObject.Value, bitmask: number): void;



function value_set_caps (value: GObject.Value, caps: Caps): void;



function value_set_caps_features (value: GObject.Value, features: CapsFeatures): void;



function value_set_double_range (value: GObject.Value, start: number, _end: number): void;



function value_set_flagset (value: GObject.Value, flags: number, mask: number): void;



function value_set_fraction (value: GObject.Value, numerator: number, denominator: number): void;



function value_set_fraction_range (value: GObject.Value, start: GObject.Value, _end: GObject.Value): void;



function value_set_fraction_range_full (value: GObject.Value, numerator_start: number, denominator_start: number, numerator_end: number, denominator_end: number): void;



function value_set_int64_range (value: GObject.Value, start: number, _end: number): void;



function value_set_int64_range_step (value: GObject.Value, start: number, _end: number, step: number): void;



function value_set_int_range (value: GObject.Value, start: number, _end: number): void;



function value_set_int_range_step (value: GObject.Value, start: number, _end: number, step: number): void;



function value_set_structure (value: GObject.Value, structure: Structure): void;



function value_subtract (dest: GObject.Value, minuend: GObject.Value, subtrahend: GObject.Value): boolean;



function value_union (dest: GObject.Value, value1: GObject.Value, value2: GObject.Value): boolean;



function version (major: number, minor: number, micro: number, nano: number): void;



function version_string (): string;

}