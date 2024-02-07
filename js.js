let container = [];
const HK = "HK";
let haib;

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
      
  `;
  
  // contentContainer.innerHTML += html
  contentContainer.insertAdjacentHTML('beforeend', html);
  saveData();

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
  



  container.push({ comment, isCompleated: false, isDeleted: false });
  

  form["comment"].value = "";

  renderComment(comment)
  saveData();
  
}

function Delete(){
let taskItemtext = document.querySelector('.taskItem__text')
 for (let inpt of taskItemtext){
  let buttoncls = document.createElement('button')
  buttoncls.className = 'delete'
  buttoncls.innerHTML = 'Del'

  buttoncls.onclick = () => inpt.remove()
  inpt.append(buttoncls)
 }
}

(() => {

  loadData();

})();



//render items from localStorage
//add delete button for item

