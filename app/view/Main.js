Ext.define("InnovationFinDashBoard.view.Main", {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Img'
    ],


    config:{
        fullscreen:true,
        id:'myPanel',
        layout:{
            type:'vbox',
            align:'center',
            pack:'justify'
        },
        defaults:{
            width:200,
            height:200,
            mode:'img',
            listeners:{
                tap:function(img,ev){
                    Ext.Msg.alert(img.id);

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
    }

});
