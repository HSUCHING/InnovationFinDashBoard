Ext.define("InnovationFinDashBoard.view.Main", {
    extend: 'Ext.navigation.View',

    requires: [
        'Ext.Img'
    ],


    config:{
        autoDestory : false,
        id:'myPanel',
        fullscreen:true,
        cls:'backgd',
        navigationBar: {
            ui: 'dark',
            docked: 'top',
            cls:'navibar',
            height:80
        },
        items:[{
//            cls:'hometop',
            title:'<div class="hometop"></div>',
            layout:{
                type:'vbox',
                align:'stretch',
                pack:'justify',
                fullscreen:true
            },
            items:[{
                id:'homepanel1',
                xtype:'panel',
                flex:1,
                layout:{
                    type:'hbox',
                    align:'center',
                    pack:'center',
                    fullscreen:true
                },
                defaults:{
                    width:200,
                    height:150,
                    mode:'img',
                    cls:'imgborder',
                    listeners:{
                        tap:function(img,ev){
//                            Ext.Msg.alert(img.id);
//                            var tabview=new InnovationFinDashBoard.view.TabViewShow();
                            Ext.getCmp('myPanel').push(
//                                title:'Second',
//                                html:'Second view!'
//                                tabview
                                {
                                    xtype:'tabViewshow'
//
                                }
                            )
                        }
                    }
                },
                items:[{
                    xtype:'image',
                    id:'dupont',
                    html:'Dupont',
                    src:'resources/images/dupont.jpg'
                },{width:250},{
                    xtype:'image',
                    src:'resources/images/Data_analysis.jpg'
                },{width:250},{
                    xtype:'image',
                    src:'resources/images/IDEA.jpg'
                }]
            },{
                id:'homepanel2',
                xtype:'panel',
                flex:1,
                layout:{
                    type:'hbox',
                    align:'center',
                    pack:'center',
                    fullscreen:true
                },
                defaults:{
                    width:200,
                    height:150,
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
                    src:'resources/images/dupont.jpg',
                    flex: 1
                },{width:250},{
                    xtype:'image',
                    src:'resources/images/Data_analysis.jpg',
                    flex: 1
                },{width:250},{
                    xtype:'image',
                    src:'resources/images/IDEA.jpg',
                    flex: 1
                }]
            },{
                id:'homepanel3',
                xtype:'panel',
                flex:1,
                layout:{
                    type:'hbox',
                    align:'center',
                    pack:'center',
                    fullscreen:true
                },
                defaults:{
                    width:200,
                    height:150,
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
                    src:'resources/images/dupont.jpg',
                    flex: 1
                },{width:250},{
                    xtype:'image',
                    src:'resources/images/Data_analysis.jpg',
                    flex: 1
                },{width:250},{
                    xtype:'image',
                    src:'resources/images/IDEA.jpg',
                    flex: 1
                }]
            }]

        }]
    }
});
