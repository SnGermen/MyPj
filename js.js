
let container = []
let HK = 'Hk'


page = {
    context: {
        daysContainer: document.querySelector('.obligatory'),
       
    }
}


//utilis
function loadData(){
    const habbitsString = localStorage.getItem(HK)
    const habbitArr = JSON.parse(habbitsString)
    if(Array.isArray(habbitArr)){
        container = habbitArr
    }
}

function saveData(){
    localStorage.setItem(HK, JSON.stringify(container))
}


function add(act){
    page.context.daysContainer.innerHTML = ''

   act.days.array.forEach((day, i) => {
    const element = document.createElement('div')
    element.classList.add('hb')
    element.innerHTML = 
    `<input class="inpt"
    type="text"
    placeholder="Item">
    <button class="del" onclick = "Deleted(${i})>
     <img  src="/img/delete.svg" alt="delete">
     </button>
`
    page.context.daysContainer.appendChild(element)
   });
}



(()=>{
    loadData()
})