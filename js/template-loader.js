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
            this.templates.mapPanel  = '<div class="grid">'+
                            '<span class="grid-cell">A1</span>'+
                            '<span class="grid-cell">A2</span>'+
                            '<span class="grid-cell">A3</span>'+
                            '<span class="grid-cell">A4</span>'+
                            '<span class="grid-cell">A5</span>'+
                            '<span class="grid-cell">A6</span>'+
                            '<span class="grid-cell">B1</span>'+
                            '<span class="grid-cell">B2</span>'+
                            '<span class="grid-cell">B3</span>'+
                            '<span class="grid-cell">B4</span>'+
                            '<span class="grid-cell">B5</span>'+
                            '<span class="grid-cell">B6</span>'+
                            '<span class="grid-cell">C1</span>'+
                            '<span class="grid-cell">C2</span>'+
                            '<span class="grid-cell">C3</span>'+
                            '<span class="grid-cell">C4</span>'+
                            '<span class="grid-cell">C5</span>'+
                            '<span class="grid-cell">C6</span>'+
                            '<span class="grid-cell">D1</span>'+
                            '<span class="grid-cell">D2</span>'+
                            '<span class="grid-cell">D3</span>'+
                            '<span class="grid-cell">D4</span>'+
                            '<span class="grid-cell">D5</span>'+
                            '<span class="grid-cell">D6</span>'+
                            '<span class="grid-cell">E1</span>'+
                            '<span class="grid-cell">E2</span>'+
                            '<span class="grid-cell">E3</span>'+
                            '<span class="grid-cell">E4</span>'+
                            '<span class="grid-cell">E5</span>'+
                            '<span class="grid-cell">E6</span>'+
                            '<span class="grid-cell">F1</span>'+
                            '<span class="grid-cell">F2</span>'+
                            '<span class="grid-cell">F3</span>'+
                            '<span class="grid-cell">F4</span>'+
                            '<span class="grid-cell">F5</span>'+
                            '<span class="grid-cell">F6</span>'+
                        '</div>'+
                        '<canvas class="minimap-canvas" id="minimap-canvas" width="300" height="300"></canvas>';
            this.templates.feedBotPannel ='<div class="bot-panel">' +
                    '<input type="checkbox" class="feedBotSetting" id="enableBot" data-key="botEnabled" checked/><label for="enableBot">Enable Bot</label><br>'+
                    '<label for="modelSelect">Mode</label>'+
                    '<select class="shootVirusMode" id="modelSelect" data-key="mode">' +
                        '<option value="NORMAL">Normal</option>' +
                        '<option value="MASTER">Master</option>' +
                        '<option value="FEEDING">Feeding</option>' +
                        '<option value="FOLLOWMOUSE">Follow mouse</option>' +
                        '<option value="SHOOTVIRUS">Shoot virus</option>' +
                    '</select><br>'+
                '</div>';
            this.templates.statsPanel = '<p id="serverInfo"><span id="serverIp"><%=serverIp%></span></p>';
            this.templates.commandPanel = '<div id="serverConnect" class="clearfix">' +
                                                        '<label for="minimumSizeToMerge">Size to Merge : <span id="sizeToMergeNumber">100</span></label>'+
                                                        '<input class="remoteBotOptionControl" data-key ="minimumSizeToMerge" type="range" min="10" max="5000" value="100" id="minimumSizeToMerge">' +
                                                        '<label for="masterProtecteDistance">Protecte Distance : <span id="sizeToMergeNumber">710</span></label>'+
                                                        '<input class="remoteBotOptionControl" data-key ="masterProtecteDistance" type="range" min="10" max="5000" value="710" id="masterProtecteDistance">' +
                                                        '<input type="text" class="form-control" id="partyConnectCode">' +
                                                        '<button class="btn btn-success btn-warning" id="invitePlayer">Invite bot</button>'+
                                                        '<button class="btn btn-success" id="connectPartyCode" >Connect</button>'+
                                                    '</div>';
            this.templates.ClientItemView = '<li id="<%=id%>"><span><%=name%></span></li>';
            this.templates.ClientCollectionView = '<div></div>';
        },
        onStart : function(options){
            console.log('module TemplateLoader start.');
            this.initTemlate();
        },
        getTemlate:function(template){
            var templateName = '';
            if(typeof template == 'string'){
                templateName = template;
            }else{
                templateName = template.name;
            }
            if(typeof this.templates[templateName] !='undefined'){
                if(typeof template.data != 'undefined'){
                    return _.template(this.templates[templateName],template.data);
                }else{
                    return _.template(this.templates[templateName]);
                }
            }
            return null;
        }
    });
    app.module("TemplateLoader", {
        moduleClass: AgarBot.Modules.TemplateLoader
    });
})(jQuery, Backbone, _, AgarBot, AgarBot.app);