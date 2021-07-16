const { Button, Icon, IconType, BoxLayout, Align }        = imports.gi.St;
const { PopupSwitchMenuItem } = imports.ui.popupMenu;

// ------------------------------------------------------------------------------------------------------

export interface CSRemovableSwitchMenuItem {
	connect(event: string, cb: (...args: any) => any): number;
}

export class CSRemovableSwitchMenuItem extends PopupSwitchMenuItem {
	deleteButton: imports.gi.St.Button;
	appID?: string;
	override _statusBin: any;


	constructor(text: string, active: boolean, params?: imports.ui.popupMenu.PopupBaseMenuItemParams) {
		super(text, active, params);

		const iconDelete = new Icon({
            icon_name:   'edit-delete',
            icon_type:   IconType.SYMBOLIC,
            style_class: 'popup-menu-icon'
        });

        this.deleteButton = new Button({ child: iconDelete });
        this.deleteButton.connect('clicked', this.remove);

        this.removeActor(this._statusBin);
        this._statusBin.destroy();

        this._statusBin = new BoxLayout({
            vertical: false,
            style:    'spacing: 6px;',
            x_align:  Align.END
        });
        this.addActor(this._statusBin, { expand: true, span: -1, align: Align.END });
        this._statusBin.add(this._switch.actor);
        this._statusBin.add(this.deleteButton);
	}

    /*
     * User clicked the "remove" button
     */
    remove = () => {
        this.emit('remove');
        this.destroy();
    }
}
