let container = [];
const HK = 'Hk';

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

function add() {

    const additionalInput = document.createElement('input');
    additionalInput.classList.add('inpt');
    additionalInput.type = 'text';
    additionalInput.placeholder = 'Additional Item';
    page.context.daysContainer.appendChild(additionalInput);
     

}





function addComent(event){
    event.preventDefault()
    const dat = new FormData(event.comment)
    
}


(() => {
    loadData();
    add();
})();
