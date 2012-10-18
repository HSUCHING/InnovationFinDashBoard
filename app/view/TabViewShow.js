/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/17/12
 * Time: 6:20 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.view.TabViewShow",{
    extend: 'Ext.TabPanel',
    xtype:'tabViewshow',

    config:{
        id:'tabPanel',
        ui:'dark',
        tabBarPosition:'bottom',
//            activeItem:1,
        layout:{animation:{type:'flip',direction:'right',duration:1000}},
        items:[{
                title:'Tree View',
                html:'Tree View',
                iconCls:'home'
            },
            {
                title:'Table View',
                items:[{xtype:'tableview'}],
                iconCls:'user'
            },
            {
                title:'Chart View',
                html:'Chart View',
                iconCls:'user'
            }],
        listeners:{
            activeitemchange:function(item,newValue,oldValue){
                Ext.Msg.alert("切换");
                console.log(oldValue);
                console.log(newValue);
                newValue.addCls('colorRed');
                console.log(item.getActiveItem().title);
                return true;
            },
            painted:function(item){
                Ext.Msg.alert("Hello");
//                    var it=item.getItems();
//                    item.getItems().items[0].addCls('colorRed');
                console.log(item.getActiveItem().title);

            }
        }
    }

});