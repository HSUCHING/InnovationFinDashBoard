/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/23/12
 * Time: 4:27 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.controller.Main",{
    extend: 'Ext.app.Controller',

        config:{

            refs:{
                AddDimension:'button[action=addbutton]',
                RemoveDimension:'button[action=removebutton]'
            },
            control:{
                AddDimension:{
                    tap:'addDimensionItem'
                },
                RemoveDimension:{
                    tap:'removeDimensionItem'
                }
            }
        },

        addDimensionItem:function(button,event){

            switch(button.getParent().id){
                case "dimensionitem11":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem1').show();
                    break;
                }
                case "dimensionitem22":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem2').show();
                    break;
                }
                case "dimensionitem33":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem3').show();
                    break;
                }
                case "dimensionitem44":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem4').show();
                    break;
                }
                case "dimensionitem55":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem5').show();
                    break;
                }
            }
        },

        removeDimensionItem:function(button,event){

            switch(button.getParent().id){
                case "dimensionitem1":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem11').show();
                    break;
                }
                case "dimensionitem2":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem22').show();
                    break;
                }
                case "dimensionitem3":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem33').show();
                    break;
                }
                case "dimensionitem4":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem44').show();
                    break;
                }
                case "dimensionitem5":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem55').show();
                    break;
                }
            }

        }

    }
)