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
            type:'hbox'
//            align:"stretch",
//            pack:"justify"
        },
        items:[{
            xtype:'toolbar',
            docked:'top',
            layout:{
                type:'hbox',
                align:'middle',
                pack:'center'
            },
            items:[{
                xtype:'button',
                text:'View Tree',
                width:200,
                action:'poptree'
            }]
        },{
            xtype:'panel',
            id:'paneltreeview',
            style:'margin-left:200px',
            height:200
        },{
            xtype:'panel',
            id:'treeDetail',
            style:'border:1px white solid',
//            hidden:true,
            docked:'right',
            width:400,
            layout:{
                type:'vbox',
                align:'stretch',
                pack:'start'
            },
            items:[{
                xtype:'toolbar',
                style:{"font-size":"15px"},
                title:'Tree Detail',
                height:40,
                docked:'top'
            },{
                xtype:'panel',
                height:10
            },{
                xtype:'panel',
                html:'<div class="haschildrencircle"></div>Collapsable Node'
            },{
                xtype:'panel',
                height:20
            },{
                xtype:'panel',
                html:'<div class="hasnochildrencircle"></div>No collapsable Node'
            },{
                xtype:'panel',
                id:'shownodedetail'
            }]
        }]


    }
})