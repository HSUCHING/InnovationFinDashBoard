Ext.define("InnovationFinDashBoard.view.Main", {
    extend: 'Ext.NavigationView',

    requires: [
        'Ext.Img'
    ],


    config:{
        fullscreen:true,
        id:'myPanel',

        items:[{
            layout:{
                type:'vbox',
                align:'center',
                pack:'justify',
                fullscreen:true
            },
            defaults:{
                width:200,
                height:200,
                mode:'img',
                listeners:{
                    tap:function(img,ev){
                        Ext.Msg.alert(img.id);
                        Ext.getCmp('myPanel').push({
                            title:'Second',
                            html:'Second view!'
                        })
                    }
                }
            },
            items:[{
                xtype:'image',
                id:'dupont',
                src:'resources/images/dupont.jpg',
                flex: 1
            },{
                xtype:'image',
                src:'resources/images/Data_analysis.jpg',
                flex: 1
            },{
                xtype:'image',
                src:'resources/images/IDEA.jpg',
                flex: 1
            }]
        }]
    }
});
