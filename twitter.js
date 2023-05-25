(() => {
    console.log('i')
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    console.log(obj)
  })
})();