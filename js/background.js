var Background = function () {

};
Background.prototype.run = function(){
    this.addEventHandler();
};
/**
 *
 * @param details
 * + requestId
 * + url
 * + method
 * + frameId
 * + parentFrameId
 * + requestBody
 * + tabId
 * + type
 * + timeStamp
 */
Background.prototype.onBeforeRequest = function (details) {
    var url = details.url;
    if(url.indexOf("main_out.js") != -1){
        return {"redirectUrl":chrome.extension.getURL("js/concat.js")}
    }
    if(url.indexOf("master.js") != -1){
        return {"cancel":true};
    }
    if(url.indexOf("environment.js") != -1){
        return {"cancel":true};
    }
    if(url.indexOf("i18n.js") != -1){
        return {"cancel":true};
    }
    if(url.indexOf("soundjs.min.js") != -1){
        return {"cancel":true};
    }
    if(url.indexOf("agario.js") != -1){
        return {"cancel":true};
    }
    return {"cancel":false};
};

Background.prototype.onMessageRecived = function(request, sender, sendResponse){
    var response = null;
    switch(request.action){

    }
};
Background.prototype.addEventHandler = function(){
    var self = this;
    /**
     * handle message
     */
    chrome.runtime.onMessageExternal.addListener(
        function(request, sender, sendResponse) {
            self.onMessageRecived(request, sender, sendResponse);
        });
    /**
     * handle web request
     */
    chrome.webRequest.onBeforeRequest.addListener(
        function (details) {
            return self.onBeforeRequest(details);
        },
        {
            urls: ['<all_urls>']
        },
        ["blocking"]
    );
};
var background = new Background();
background.run();