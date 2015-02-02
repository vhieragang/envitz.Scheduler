Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        "Extensible": "/extensible/src"
    }
});


Ext.application({
    name:'MyCal',
    appFolder:'/app',
    autoCreateViewport:true,
    launch:function(){
    }
});