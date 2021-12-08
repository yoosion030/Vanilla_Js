const article = document.querySelector('article')

function htmlClick() {
  fetch('1.html').then(function (response) {
    response.text().then(function (text) {
      document.querySelector('article').innerHTML = text
    })
  })
}

function cssClick() {
  fetch('2.html').then(function (response) {
    response.text().then(function (text) {
      document.querySelector('article').innerHTML = text
    })
  })
}

function jsClick() {
  fetch('3.html').then(function (response) {
    response.text().then(function (text) {
      document.querySelector('article').innerHTML = text
    })
  })
}
