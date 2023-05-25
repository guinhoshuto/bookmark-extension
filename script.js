const form = document.querySelector('form')

//adiciona
chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
    if (request.response.bodySize > 40*1024) {
      chrome.devtools.inspectedWindow.eval(
          'console.log(request.request.url)');
    }
  }
);

//salva o webhook
form.addEventListener('submit', (event) => {
    event.preventDefault()
})