/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-20
 * Time: 下午9:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.TreeView",{
    extend: 'Ext.Panel',
    xtype:'treeview',


    config:{
        id:'treeview',
        layout:{
            type:'vbox',
            align:"stretch",
            pack:"center"
        },
        items:[{
            xtype:'toolbar',
            docked:'top',
            items:[{
                xtype:'button',
                text:'View Tree',
                width:200,
                action:'poptree'
            }]
        },{
            xtype:'panel',
            id:'paneltreeview',
            flex:1
        }]


    }
})