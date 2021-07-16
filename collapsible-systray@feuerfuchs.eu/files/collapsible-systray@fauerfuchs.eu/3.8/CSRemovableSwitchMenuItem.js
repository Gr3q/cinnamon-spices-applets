"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSRemovableSwitchMenuItem = void 0;
const Lang = imports.lang;
const { Button, Icon, IconType, BoxLayout, Align } = imports.gi.St;
const Mainloop = imports.mainloop;
const { PopupSwitchMenuItem } = imports.ui.popupMenu;
class CSRemovableSwitchMenuItem extends PopupSwitchMenuItem {
    constructor(text, active, params) {
        super(text, active, params);
        this.remove = () => {
            this.emit('remove');
            this.destroy();
        };
        const iconDelete = new Icon({
            icon_name: 'edit-delete',
            icon_type: IconType.SYMBOLIC,
            style_class: 'popup-menu-icon'
        });
        this.deleteButton = new Button({ child: iconDelete });
        this.deleteButton.connect('clicked', this.remove);
        this.removeActor(this._statusBin);
        this._statusBin.destroy();
        this._statusBin = new BoxLayout({
            vertical: false,
            style: 'spacing: 6px;',
            x_align: Align.END
        });
        this.addActor(this._statusBin, { expand: true, span: -1, align: Align.END });
        this._statusBin.add(this._switch.actor);
        this._statusBin.add(this.deleteButton);
    }
}
exports.CSRemovableSwitchMenuItem = CSRemovableSwitchMenuItem;
//# sourceMappingURL=CSRemovableSwitchMenuItem.js.map