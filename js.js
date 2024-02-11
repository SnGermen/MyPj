let container = [];
const HK = "HK";

const page = {
  context: {
    daysContainer: document.querySelector(".obligatory"),
  },
};

function loadData() {
  const habitsString = localStorage.getItem(HK);
  const habitArr = JSON.parse(habitsString);
  if (Array.isArray(habitArr)) {
    container = habitArr;
  }
}

function renderAllItemes() {
  container.forEach((elem, index) => {
    console.log(elem);
    renderComment(elem.comment, elem.isCompleated, index);
  });
}

function saveData() {
  localStorage.setItem(HK, JSON.stringify(container));
}

function renderComment(comment, isCompleted = false, index) {
  const html = `
    <div class="taskItem">
      <input class="taskItem__checkbox" type="checkbox" ${
        isCompleted ? "checked" : ""
      } />
      <div class="taskItem__text">${comment}</div>
      <div class="taskItem__delete" onclick="deleteItem(${index})"></div>
  `;

  contentContainer.insertAdjacentHTML("beforeend", html);
}

function addComment(event) {
  const form = event.target;
  event.preventDefault();
  const data = new FormData(form);

  const comment = data.get("comment");
  form["comment"].classList.remove("noLeters");
  if (!comment) {
    form["comment"].classList.add("noLeters");
    return;
  }
  container.push({ comment, isCompleated: false, isDeleted: false });

  form["comment"].value = "";
  renderComment(comment, false, container.length - 1);
  saveData();
}


    function deleteItem(index) {
      // Найдем элемент по индексу в массиве
      const itemToDelete = container[index];
    
      // Убедимся, что элемент существует и не был удален ранее
      if (itemToDelete && !itemToDelete.isDeleted) {
        // Устанавливаем свойство isDeleted в true
        itemToDelete.isDeleted = true;
    
        // Удаляем элемент из массива
        container.splice(index, 1);
    
        // Сохранить данные в localStorage
      
    
        // Перерисовать все элементы, исключая удаленные
        renderAllItemes();
      }
  saveData();

    }
(() => {
  loadData();
  renderAllItemes();
})();

//render items from localStorage
//add delete button for item
