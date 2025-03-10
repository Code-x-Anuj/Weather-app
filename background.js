
chrome.action.onClicked.addListener(() => {
    const extensionUrl = chrome.runtime.getURL("index.html");

    // Always create a new tab, regardless of existing ones
    chrome.tabs.create({ url: extensionUrl });
});