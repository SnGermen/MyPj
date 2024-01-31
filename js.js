let container = [];
const HK = 'Hk';
let actineContainer


const page = {
    context: {
        daysContainer: document.querySelector('.obligatory'),
    }
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






function addComent(event){
    event.preventDefault()
    const data = new FormData(event.target)
    const comment =  data.get('comment')
  container.push(comment)
    




    saveData()
}


(() => {

    loadData()

})();
