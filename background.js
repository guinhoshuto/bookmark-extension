const filter = {
    // types: ["xmlhttprequest"],
    urls: ["*://*.twitter.com/*"],
}

chrome.webRequest.onCompleted.addListener((details) => {
    console.log('ue')
    console.log(details)
}, filter, ["responseHeaders"])