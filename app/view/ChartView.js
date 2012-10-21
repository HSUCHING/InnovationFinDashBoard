/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 上午10:28
 * To change this template use File | Settings | File Templates.
 */

console.log("chartview");

Ext.define('InnovationFinDashBoard.view.ChartView', {
    extend : 'Ext.Panel',
    xtype : 'chartview',
    id:'chartView',
    config : {
//        cls : 'componentBorder',
        layout:{
            type:'vbox',
            align:'stretch'
        },

        items:[{
//            flex:1,
            xtype:'panel',
            items:[{
                xtype : 'panel',
                id: 'dimensionbar',
//                scrollable : {
//                    direction : 'horizontal'
////                    slotSnapSize : {
////                        x : 180,
////                        y : 5
////                    }
//                },
                height:'100%',
                layout:{
                    type:'hbox',
                    align:'center',
                    pack:'left'
                },
                items:[{xtype:'dimensionitem'},{xtype:'dimensionitem'}]
//            items:[{xtype:'panel',html:'dsfda'},{xtype:'panel',html:'vvv'},{xtype:'panel',html:'dfd'}]
            },{
                xtype : 'toolbar',
                id:'toolbartop',
                docked : 'top',
                height : 30
            },{
                xtype : 'toolbar',
                docked : 'bottom',
                height : 30,
                items : [{
                    xtype : 'button',
                    iconCls : 'arrow_up',
                    docked : 'right',
                    id:'upbutton',
                    iconAlign : 'top',
                    height:25,
                    iconMask : true,
                    handler:function(button,event){
                        console.log(button);
                        button.setHidden(true);
                        Ext.getCmp('downbutton').setHidden(false);
                        Ext.getCmp('toolbartop').setHidden(true);
                        Ext.getCmp('dimensionsidebar').setHidden(true);
                        Ext.getCmp('dimensionbar').setHidden(true);
                    }
//                action : 'hideDimensionView'
                }, {
                    xtype : 'button',
                    docked : 'right',
                    id:'downbutton',
                    iconCls : 'arrow_down',
                    iconAlign : 'top',
                    height:25,
                    iconMask : true,
//                action : 'showDimensionView',
                    hidden : true,
                    handler:function(button,event){
                        console.log(button);
                        button.setHidden(true);
                        Ext.getCmp('upbutton').setHidden(false);
                        Ext.getCmp('dimensionbar').show();
                        Ext.getCmp('toolbartop').setHidden(false);
                        Ext.getCmp('dimensionsidebar').setHidden(false);
                        Ext.getCmp('dimensionbar').setHidden(false);
                    }
                } ]
            }, {
                xtype : 'toolbar',
                id : 'dimensionsidebar',
                docked : 'right',
                width : 55,
                items : [{
                    xtype : 'spacer'
                }, {
                    xtype : 'button',
                    width : 40,
                    iconCls : 'settings',
                    iconAlign : 'top',
                    iconMask : true,
                    action : 'setDimension'
                }, {
                    xtype : 'spacer',
                    height:10
                }, {
                    xtype : 'button',
                    width : 40,
                    iconCls : 'add',
                    iconAlign : 'top',
                    iconMask : true,
                    action : 'addDimension'
                }, {
                    xtype : 'spacer'
                }]
            }]
        },{
//            flex:3,
            xtype:'panel',
            html:'bbb'
        }
        ]
    }
})
