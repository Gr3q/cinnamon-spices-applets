declare module imports.misc.state {

    function intersect<T>(array1: T[], array2: T[], difference?: boolean): T[];

    function clone<T>(object: T, refs?: any[], cache?: any): T;

    /**
     * init:
     * @state (object): The applet that contains the context menu.
     * @listeners (array): The orientation of the applet.
     *
     * Constructor function
     *
     * Returns (object): The public API with state.
     */

    /**
     * get:
     * @key (string|null): The key to get from the state object.
     *
     * Passing null or an asterisk will retrieve the entire state object.
     * Passing keys with dot notation will return the corresponding object path.
     * E.g., "bar.foo".
     *
     * Returns (object): The cloned object.
     */

    /**
     * set:
     * @object (object): The object to assign into state.
     * @forceDispatch (boolean): Whether or not to force dispatching of callbacks from any
     * connected listeners on @object's keys. By default, this only occurs if the state has
     * actually changed as a result of setting.
     *
     * Copies a keyed object back into state, and calls dispatch to fire any connected callbacks.
     *
     * Returns (object): The public API for chaining.
     */

    /**
     * exclude:
     * @excludeKeys (array): Array of string keys.
     *
     * Returns (object): The public API with filtered state.
     */

    /**
     * trigger:
     *
     * Fires a callback event for any matching keys in the listener queue.
     * It supports passing through unlimited arguments to the callback.
     * Useful for setting up actions.
     *
     * Returns (any): Return result of the callback.
     */

    /**
     * connect:
     * @actions (string|array|object): Actions
     * @callback (function): The function to be invoked on either state
     * property change, or through the trigger method.
     *
     * Returns (number): The connection ID to use for later disconnection.
     */

    /**
     * disconnect:
     * @key (string): The ID to disconnect.
     *
     * Removes a callback listener from the queue.
     */

    /**
     * destroy:
     *
     * Assigns undefined to all state properties and listeners. Intended
     * to be used at the end of the application life cycle.
     *
     */

    interface Store<T> {
        get(): T;
        get<V extends keyof T>(key: V): T[V];
        set(object: Partial<T>, forceDispach?: boolean): Store<T>;
        /** TODO: properly narrow return type without excluded keys */
        exclude(excludeKeys: (keyof T)[]): T & Store<T>;
        trigger(key: keyof T): any;
        connect<Keys extends (keyof T)[]>(keys: Keys | keyof T | Partial<T>, callback?: (objectWithKeys: any) => void): number;
        disconnect(key: keyof T | (keyof T)[] | number): void;
        destroy(): void;

    }

    type CombinedStore<T> = T & Store<T>

    function createStore<T>(state?: T, listeners?: unknown[], connections?: number): CombinedStore<T>;
}
