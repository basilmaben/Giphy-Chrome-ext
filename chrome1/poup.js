document.addEventListener ("DOMContentLoader", function(){
    document.querySelector("button").addEventListener("click", function() {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "This message was sent from extension")
        })
        },false)
    },false);