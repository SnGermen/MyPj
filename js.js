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



  container.push(Object.assign( {comment}));

  const contentContainer = document.getElementById("contentContainer");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = comment;
  contentContainer.appendChild(newDiv);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  contentContainer.appendChild(checkbox);

  form["comment"].value = "";
  saveData();

}

(() => {
  loadData();
})();