(function($, Backbone, _, AgarBot, app){
    AgarBot.Modules.TemplateLoader =Marionette.Module.extend({
        initialize: function(moduleName, app, options) {
            this.templates  = {};
            console.log('module TemplateLoader initialize');
        },
        initTemlate : function(){
            this.templates.panel = _.template(
                '<div class="control-panel">' +
                    '<# if(canRunBot == true){ #><button class="btn btn-runbot" id="runbot">Run bot</button><# } #>' +
                '</div>'
            );
            this.templates.mapPanel  = _.template(
                '<div class="control-panel">' +
                    '<div class="minimap-panel">' +
                        '<canvas class="minimap-canvas" id="minimap-canvas" width="300" height="300"></canvas>'+
                    '</div>'+
                '</div>'
            );
        },
        onStart : function(options){
            console.log('module TemplateLoader start.');
            this.initTemlate();
        },
        getTemlate:function(templateName){
            if(typeof this.templates[templateName] !='undefined'){
                return this.templates[templateName];
            }
            return null;
        }
    });
    app.module("TemplateLoader", {
        moduleClass: AgarBot.Modules.TemplateLoader
    });
})(jQuery, Backbone, _, AgarBot, AgarBot.app);