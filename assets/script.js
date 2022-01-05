const form = document.querySelector('form')

form.onsubmit = (e) => {
  e.preventDefault()
  const inputText = document.querySelector('#text-input')
  adicionarTarefa(inputText.value)
  form.reset()
}

function adicionarTarefa(tarefa) {
  if (!tarefa) return alert('Insira uma tarefa para adicionar a lista!');

  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  const checkBox = document.createElement('input')
  const text = document.createTextNode(tarefa)
  const label = document.createElement('label')
  const button = document.createElement('button')

  checkBox.setAttribute('type', 'checkbox')
  button.innerText = 'Remover'
  button.setAttribute('id', 'button-list')
  label.appendChild(text)
  li.appendChild(checkBox)
  li.appendChild(label)
  li.appendChild(button)
  ul.appendChild(li)

  button.addEventListener('click', removerTarefa)
}

function removerTarefa(e) {
  e.preventDefault()
  const listItem = e.target.parentNode
  listItem.remove()
}