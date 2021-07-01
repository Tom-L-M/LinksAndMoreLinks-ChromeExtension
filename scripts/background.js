chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: '../public/views/options.html'
    });
});
