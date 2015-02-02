Ext.define("MyCal.view.Viewport", {
    extend:'Ext.container.Viewport',
    html: 'hello World',
	layout:'fit',
    items:[{
        xtype:'extensible.calendarpanel',
		store: Ext.create('Extensible.calendar.data.MemoryCalendarStore')
    }]
});