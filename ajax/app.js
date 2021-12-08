const article = document.querySelector('article')

function fetchPage(name) {
  fetch(name).then(function (response) {
    response.text().then(function (text) {
      document.querySelector('article').innerHTML = text
    })
  })
}

if (location.hash) {
  fetchPage(location.hash.substring(2))
  console.log('hu')
} else {
}
