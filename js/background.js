var Background = function () {

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
        return {"redirectUrl":chrome.extension.getURL("js/agar/main_out.js")}
    }else if(url.indexOf("agario.js") != -1){
        return {"redirectUrl":chrome.extension.getURL("js/agar/agario.js")}
    }

    return {"cancel":false};
};

Background.prototype.replaceScript = function (){

};

var background = new Background();

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return background.onBeforeRequest(details);
    },
    {
        urls: ['<all_urls>']
    },
    ["blocking"]
);