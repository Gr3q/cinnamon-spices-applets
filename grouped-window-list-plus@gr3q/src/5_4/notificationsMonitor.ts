// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-

/* exported NotificationsMonitor */

const { signals: Signals } = imports;

const {
    Gio,
} = imports.gi;

const {
    main: Main,
} = imports.ui;


class NotificationsMonitor {
    private notifications: imports.ui.messageTray.Notification[] = [];
    private signal: number;

    constructor() {
        this.signal = Main.messageTray.connect('notify-applet-update', this._notification_added);
        // TODO: Check focused window and don't add it's notification that case
        // TODO: Remove notification associated with app when it gets focused
    }

    private _notification_added = (mTray: imports.ui.messageTray.MessageTray, notification: imports.ui.messageTray.Notification) => {
        
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
    }

    public destroy() {
        Main.messageTray.disconnect(this.signal);
    }
};

Signals.addSignalMethods(NotificationsMonitor.prototype);
