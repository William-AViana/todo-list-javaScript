const FORMULARIO = document.querySelector('form')
const res = document.querySelector('.resultado')
var inputText = document.querySelector('#text')
var arrayList = []

function addOnBody(arrayList) {

  res.innerHTML = arrayList
  console.log(arrayList)
}

function adicionarNaLista(inputText) {
  if (!inputText.value) return;

  arrayList.push(inputText.value)
  inputText.value = ''

  addOnBody(arrayList)
}




FORMULARIO.addEventListener('submit', (e) => {
  e.preventDefault()

  adicionarNaLista(inputText)

})