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
                    '<div class="minimap-panel">' +
                        '<div class="grid">'+
                            '<span class="grid-cell">A1</span>'+
                            '<span class="grid-cell">A2</span>'+
                            '<span class="grid-cell">A3</span>'+
                            '<span class="grid-cell">B1</span>'+
                            '<span class="grid-cell">B2</span>'+
                            '<span class="grid-cell">B3</span>'+
                            '<span class="grid-cell">C1</span>'+
                            '<span class="grid-cell">C2</span>'+
                            '<span class="grid-cell">C3</span>'+
                        '</div>'+
                        '<canvas class="minimap-canvas" id="minimap-canvas" width="300" height="300"></canvas>'+
                    '</div>'
            );
            this.templates.feedBotPannel = _.template(
                '<div class="bot-panel">' +
                    '<button id="feedBotToggle">Make slave</button>'+
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