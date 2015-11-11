/*
(function ($) {
    var jsBefore = [
        chrome.runtime.getURL('js/lib/underscore-min.js'),
        chrome.runtime.getURL('js/lib/backbone-min.js'),
        chrome.runtime.getURL('js/lib/backbone.marionette.js'),
        chrome.runtime.getURL('js/bot/Application.js')
    ];

    var jsAfter = [
        //Content script
        chrome.runtime.getURL('js/bot/FeedBot.js'),
        // End of the world
        chrome.runtime.getURL('js/bot/StartApplication.js')
    ];

    inserJs(jsBefore, $('script[src="js/jquery.js"]'));
    inserJs(jsAfter, $('script[src*="main_out.js"]'));

    function inserJs(srcSet, el){
        $.each(srcSet, function (index, src) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = src;
            $(script).insertAfter(el);
            el = $(script);
        });
    }
})(jQuery);*/
