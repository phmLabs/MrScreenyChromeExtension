chrome.browserAction.onClicked.addListener(function (tab) {
    tabUrl = tab.url;

    chrome.storage.sync.get({
        mrScreenyEndpoint: ''
    }, function (items) {
        endpoint = items.mrScreenyEndpoint;

        data = {'url': tabUrl};

        var xhr = new XMLHttpRequest();
        xhr.open('POST', endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        console.log(JSON.stringify(data));

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }

        xhr.send(JSON.stringify(data));
    });
});