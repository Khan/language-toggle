'use strict';

const languages = [
    {id:"en", name:"English", active:true},

    {id:"hy", name:"հայերեն (Armenian)", active:false},
    {id:"az", name:"Azərbaycanca (Azerbaijani)", active:false},
    {id:"bn", name:"বাংলা (Bangla)", active:false},
    {id:"bg", name:"български (Bulgarian)", active:false},
    {id:"my", name:"ဗမာ  (Burmese)", active:false},
    {id:"zh-hans", name:"简体中文 (Simplified Chinese)", active:false},
    {id:"cs", name:"čeština (Czech)", active:false},
    {id:"da", name:"Dansk (Danish)", active:false},
    {id:"nl", name:"Nederlands (Dutch)", active:false},
    {id:"fr", name:"Français (French)", active:true},
    {id:"ka", name:"ქართული (Georgian)", active:false},
    {id:"de", name:"Deutsch (German)", active:false},
    {id:"gu", name:"ગુજરાતી (Gujarati)", active:false},
    {id:"hi", name:"हिंदी (Hindi)", active:false},
    {id:"hu", name:"Magyar (Hungarian)", active:false},
    {id:"it", name:"Italiano (Italian)", active:false},
    {id:"id", name:"Bahasa (Indonesian)", active:false},
    {id:"ja", name:"日本語 (Japanese)", active:false},
    {id:"kn", name:"ಕನ್ನಡ (Kannada)", active:false},
    {id:"mn", name:"монгол (Mongolian)", active:false},
    {id:"nb", name:"norsk bokmål (Norwegian)", active:false},
    {id:"pl", name:"Polski (Polish)", active:false},
    {id:"pt", name:"Português (Portuguese)", active:true},
    {id:"pt-pt", name:"Português europeu (Portuguese)", active:false},
    {id:"ru", name:"русский (Russian)", active:false},
    {id:"sr", name:"Српски (Serbian)", active:false},
    {id:"es", name:"Español (Spanish)", active:true},
    {id:"sv", name:"Svenska (Swedish)", active:false},
    {id:"ta", name:"தமிழ் (Tamil)", active:false},
    {id:"tr", name:"Türkçe (Turkish)", active:false},
    {id:"uz", name:"O'zbek (Uzbek)", active:false}
]

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({langs: languages}, function() {
        console.log("Initial Langs are "+ languages);
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{ conditions: [new
            chrome.declarativeContent.PageStateMatcher({ pageUrl: {hostSuffix:
                'khanacademy.org'},
            })
        ], actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
