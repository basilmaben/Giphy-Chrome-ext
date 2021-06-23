document.addEventListener("DomContentLoaded", function () {
    document.querySelector("button").addEventListener("click", function() {
        //alert("hi");
        chrome.tabs.query({currentwindow: tue, active: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,"This Message was sent from extension")
            })  
    }, false)
    }, false);
    