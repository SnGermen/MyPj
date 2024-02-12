let container = []
const HK = 'HK'
const contentContainer = document.getElementById('contentContainer')


function loadData() {
  const String = localStorage.getItem(HK)
  const Arr = JSON.parse(String)
  if (Array.isArray(Arr)) {
    container = Arr
  }
}

function renderAllItemes() {
  container.forEach((elem, index) => {
    if (!elem.isDeleted) renderComment(elem.comment, elem.isCompleated, index)
  })
}

function saveData() {
  localStorage.setItem(HK, JSON.stringify(container))
}

function renderComment(comment, isCompleted = false, index) {
  const html = `
    <div class="taskItem" data-id="${index}">
      <input class="taskItem__checkbox" type="checkbox" ${
        isCompleted ? 'checked' : ''
      } />
      <div class="taskItem__text">${comment}</div>
      <div class="taskItem__delete"></div>
  `

  contentContainer.insertAdjacentHTML('beforeend', html)
}

function addComment(event) {
  const form = event.target
  event.preventDefault()
  const data = new FormData(form)

  const comment = data.get('comment')
  form['comment'].classList.remove('noLeters')
  if (!comment) {
    form['comment'].classList.add('noLeters')
    return
  }
  container.push({ comment, isCompleated: false, isDeleted: false })

  form['comment'].value = ''
  renderComment(comment, false, container.length - 1)
  saveData()
}

contentContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('taskItem__delete')) {
    const currentElement = event.target.parentElement
    const currentElementIndex = Number(currentElement.getAttribute('data-id'))
    console.log(currentElement)
    currentElement.remove()
    container[currentElementIndex].isDeleted = true

    saveData()
  }
})

function rerender(item){
  if(container[currentElementIndex].isDeleted = true){
    item.forEach(element => element.appendChilde('.deleted__div'))
    item.forEach(element => {element.appendChilde('.done__div')})
  }
  saveData()
}

;(() => {
  loadData()
  renderAllItemes()
})()

//render items from localStorage
//add delete button for item
