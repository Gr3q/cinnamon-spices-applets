"use strict";
const { signals: Signals } = imports;
const { Gio, } = imports.gi;
const { main: Main, } = imports.ui;
class NotificationsMonitor {
    constructor() {
        this.notifications = [];
        this._notification_added = (mTray, notification) => {
            const existing_index = this.notifications.indexOf(notification);
            if (existing_index != -1)
                this.notifications.splice(existing_index, 1);
            if (notification["_destroyed"]) {
                return;
            }
            this.notifications.push(notification);
            notification.connect('destroy', () => {
                let i = this.notifications.indexOf(notification);
                if (i != -1)
                    this.notifications.splice(i, 1);
            });
        };
        this.signal = Main.messageTray.connect('notify-applet-update', this._notification_added);
    }
    destroy() {
        Main.messageTray.disconnect(this.signal);
    }
}
;
Signals.addSignalMethods(NotificationsMonitor.prototype);
