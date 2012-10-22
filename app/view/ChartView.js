/**
 * Created with JetBrains WebStorm.
 * User: Hsuching
 * Date: 12-10-21
 * Time: 上午10:28
 * To change this template use File | Settings | File Templates.
 */
var cc1=Ext.create('InnovationFinDashBoard.view.DimensionItem1',{id:'dimensionitem1',autoDestory:false});
var cc2=Ext.create('InnovationFinDashBoard.view.DimensionItem2',{id:'dimensionitem2',autoDestory:false});
var cc3=Ext.create('InnovationFinDashBoard.view.DimensionItem3',{id:'dimensionitem3'});
var cc4=Ext.create('InnovationFinDashBoard.view.DimensionItem4',{id:'dimensionitem4',hidden:'true'});
var cc5=Ext.create('InnovationFinDashBoard.view.DimensionItem5',{id:'dimensionitem5',hidden:'true'});
var cc11=Ext.create('InnovationFinDashBoard.view.DimensionItem1',{id:'dimensionitem11',hidden:'true'});
var cc22=Ext.create('InnovationFinDashBoard.view.DimensionItem2',{id:'dimensionitem22',hidden:'true'});
var cc33=Ext.create('InnovationFinDashBoard.view.DimensionItem3',{id:'dimensionitem33',hidden:'true'});
var cc44=Ext.create('InnovationFinDashBoard.view.DimensionItem4',{id:'dimensionitem44'});
var cc55=Ext.create('InnovationFinDashBoard.view.DimensionItem5',{id:'dimensionitem55'});
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
                items:[cc1,cc2,cc3,cc4,cc5]
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
                        Ext.getCmp('dimensionbar2').hide();
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
//            flex:1,
            xtype:'panel',
//            hidden:true,
            id: 'dimensionbar2',
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
            items:[cc11,cc22,cc33,cc44,cc55]

        },{
//            flex:3,
            xtype:'panel',
            html:'bbb'
        }
        ]
    }
})
