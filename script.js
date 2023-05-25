const form = document.querySelector('form');

(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    console.log(obj)
  })
})();

//salva o webhook
form.addEventListener('submit', (event) => {
    event.preventDefault()
})