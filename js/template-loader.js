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
            this.templates.mapPanel  = _.template('<div class="grid">'+
                            '<span class="grid-cell">A1</span>'+
                            '<span class="grid-cell">A2</span>'+
                            '<span class="grid-cell">A3</span>'+
                            '<span class="grid-cell">A4</span>'+
                            '<span class="grid-cell">B1</span>'+
                            '<span class="grid-cell">B2</span>'+
                            '<span class="grid-cell">B3</span>'+
                            '<span class="grid-cell">B4</span>'+
                            '<span class="grid-cell">C1</span>'+
                            '<span class="grid-cell">C2</span>'+
                            '<span class="grid-cell">C3</span>'+
                            '<span class="grid-cell">C4</span>'+
                            '<span class="grid-cell">D1</span>'+
                            '<span class="grid-cell">D2</span>'+
                            '<span class="grid-cell">D3</span>'+
                            '<span class="grid-cell">D4</span>'+
                        '</div>'+
                        '<canvas class="minimap-canvas" id="minimap-canvas" width="300" height="300"></canvas>');
            this.templates.feedBotPannel = _.template('<div class="bot-panel">' +
                    '<button id="feedBotToggle_master">Make slave</button>'+
                    '<button id="feedBotToggle_auto">Disable auto</button>'+
                '</div>');
            this.templates.clanFormField = _.template('<input type="text" class="form-control" id="ksIpInput" placeholder="Enter server IP">');
            this.templates.statsPanel = _.template('<p id="serverInfo"><span id="serverIp"><%=serverIp%></span></p>');
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