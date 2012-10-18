/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/18/12
 * Time: 12:25 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.TableView",{
    extend: 'Ext.Panel',
    config:{
        id:'tableview',
        layout:'fit',
        items:[{
            xtype: 'toolbar',
//            title:'我的标题栏',
            docked:'top',
            items:[{
                xtype:'button',
                text:'View All Data',
                width:200
            },{

                xtype:'spacer',
                width:30

            },{
                xtype:'image',
                src:'resources/icons/dividing.png',
                mode:'img',
                width:40,
                height:40
            },{

                xtype:'spacer',
                width:30

            },{
                xtype:'searchfield',
                id:'search',
                placeHolder:'请输入...',
                width:200
            },{
                xtype:'button',
                text:'Search Product',
                width:200
            },
            {
                xtype:'spacer',
                width:30
            },{
                xtype:'image',
                src:'resources/icons/dividing.png',
                mode:'img',
                width:40,
                height:40
            },{
                xtype:'spacer',
                width:30
            },{
                xtype:'spinnerfield',
                maxValue:2012,
                value:2000,
                increment:1,
                groupButtons:false,
                width:200
            },{
                text:'Q1'
            },{
                text:'Q2'
            },{
                text:'Q3'
            },{
                text:'Q4'
            }]
        },{
            xtype:'panel',
            html:'content'

        }



        ]
    }




})
