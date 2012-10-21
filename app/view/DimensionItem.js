/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 下午1:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.DimensionItem", {
    extend: 'Ext.Panel',
    xtype: 'dimensionitem',

    config: {
        clickable: true,
        name: 'default',
        layout: 'vbox',
        width: 160,
        height: 80,
        items: [
            {
                xtype: 'button',
                flex: 1,
                text: 'Remove',
                itemId: 'removeButton',
                //action: 'removeThisTile',
                ui: 'decline',
                height: 30,
                hidden: true,
                handler: this.removeButtonTap,
                scope: this
            },
            {
                xtype: 'button',
                flex: 1,
                text: 'Add',
                itemId: 'addButton',
                //action: 'addThisTile',
                ui: 'confirm',
                height: 30,
                hidden: true,
                handler: this.addButtonTap,
                scope: this
            },
            {
                xtype: 'panel',
                flex: 2
            }

        ]

    }}
    )

