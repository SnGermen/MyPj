let container = [];
const HK = "Hk";
let golActiveHabitId;

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

function rerender(activeHabitId) {
  golActiveHabitId = activeHabitId;
  const activeHabit = container.find((habit) => habit.id === activeHabitId);
  if (!activeHabit) {
    return;
  }
}

function addComment(event) {
  const form = event.target;
  event.preventDefault();
  const data = new FormData(form);

  const comment = data.get("comment");

  if (!comment.trim()) {
    form['comment'].classList.add('noLeters');
  } else {
    form['comment'].classList.remove('noLeters');
 }
    container = container.map(habit => {
      if (habit.id === golActiveHabitId) {
        return {
          ...habit,
       
        };
      }
      return habit;
    });

    
    form['comment'].value = '';
    rerender(golActiveHabitId);
    saveData();
 
}

(() => {
  loadData();
})()