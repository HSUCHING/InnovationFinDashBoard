/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 下午1:02
 * To change this template use File | Settings | File Templates.
 */


Ext.define("InnovationFinDashBoard.view.DimensionItem1", {
    extend: 'Ext.Panel',
    xtype: 'dimensionitem1',
//    id:'dimensionitem1',

    config: {
        clickable: true,
        name: 'default',
        layout: {
            type:'vbox',
            align:'center',
            pack:'center'
        },
        defaults:{
            width: 150,
            height: 25
        },
        style:'border:1px black solid',
        items: [
            {
                xtype: 'button',
//                flex: 1,
                docked:'bottom',
                text:'Remove',
                itemId: 'removeButton',
                //action: 'removeThisTile',
                ui: 'decline',
                hidden: true,
//                handler: this.removeButtonTap,
                scope: this
            },
            {
                xtype: 'panel',
                id:'context',
                html:"Country",
                style:{"text-align":"center","padding-top":"5%"},
//                height:40
                flex: 3

            },
            {
                xtype: 'button',
//                flex: 1,
                docked:'top',
                text: 'Add',
                itemId: 'addButton',
                //action: 'addThisTile',
                ui: 'confirm',
                hidden: true,
//                handler: this.addButtonTap,
                scope: this
            }
        ]


    }}
    )

