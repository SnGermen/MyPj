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

function saveData() {
  localStorage.setItem(HK, JSON.stringify(container));
}





function renderComment(comment, isCompleted = false) {
  const html = `
    <div class="taskItem">
      <input class="taskItem__checkbox" type="checkbox" ${
        isCompleted ? 'checked' : ''
      } />
      <div class="taskItem__text">${comment}</div>
    </div>
  `
  // contentContainer.innerHTML += html
  contentContainer.insertAdjacentHTML('beforeend', html)


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
  console.log(comment);
  renderComment(comment)



  container.push({ comment, isCompleated: false, isDeleted: false });
  

  form["comment"].value = "";


  saveData();
  
}

(() => {

  loadData();

})();



//render items from localStorage
//add delete button for item

