
  // select the elements
	// let list = document.querySelector('.list');
	// let todo = document.querySelector('.to-do');
  const dateElement = document.getElementById('date');


  // show today's date
  const options = {weekday : "long", month: "short", day: "numeric", hour: "numeric", minute: "numeric"};
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// function addItem(){  
//   let checkbox = document.createElement("INPUT");
//   checkbox.setAttribute("type", "checkbox");
//   checkbox.style.marginLeft = '-63px';
//   checkbox.style.position = 'absolute';
//   checkbox.style.display = 'inline-block';
//   let item = document.createElement('li');
//   item.style.position = "relative";
//   let trash = document.createElement("img");
//   trash.src = 'trash.png';
  // trash.setAttribute('src', 'trash.png');
  // trash.width = 20;
  // trash.height = 20;
  //  trash.style.display = 'inline-block';
  // trash.setAttribute("width", "20");
  // trash.setAttribute("height", "20");
//   trash.style.position = "absolute";
//   trash.style.height = '20px';
//   trash.style.width = '20px';
//   trash.style.marginLeft = '80%';
//   trash.style.marginTop = '0';
//   if (todo.value != ''){
//     item.innerHTML = todo.value;
//     list.appendChild(item);
//     item.appendChild(checkbox);
//     item.appendChild(trash);
//     todo.value = '';
//   } else {
//     alert('error');
//   }
// }



const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

let id = 0;

function addElement(toDo, id) {
    const text = `<li class="list__item">
                    <input type="checkbox" class="checkbox" id="${id}" job="complete">
                    <label class="label"> ${toDo}</label>
                    <span class="delete-icon" job="delete" id="${id}"></span>
                </li>`
    const position = 'beforeend'
    list.insertAdjacentHTML(position, text);
}

function completeToDo(element) {
    element.parentNode.querySelector('.label').classList.toggle('line');
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
}


function pressBtn() {
    const toDo = input.value;
    if(toDo) {
        addElement(toDo, id);
        id++;
    }else {
        alert('error');
    }
    input.value = '';
}

list.addEventListener('click', function(event){
    console.log('OK');
    let element = event.target;
    const elementJOB = event.target.attributes.job.value;
    if(elementJOB == 'complete') {
        completeToDo(element);
    }else if (elementJOB == 'delete') {
        removeToDo(element);
    }
});
