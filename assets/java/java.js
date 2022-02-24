var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4) {
                counter = 1;
            }
        }, 5000);

//////////////////////////////////////
const link = [...document.querySelectorAll(".header-nav__item-link")];
link.forEach(item => item.addEventListener("mouseenter", handleHoverLink));
const line = document.createElement("div");
line.className = "line-effect";
document.body.appendChild(line);

function handleHoverLink (e) {

    const {left, top, width, heigth} = e.target.getBoundingClientRect();
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + heigth + offsetBottom}px`;
}

///////////progress

const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset;
    // chieu cao cua docucment

    const height = document.documentElement.scrollHeight - 
                    document.documentElement.clientHeight;
    const width = (scrollTop / height) * 100;
    progress.style.width = `${width}%`;
});

//scrollHeight full chieu cao
// clientHeight chieu cao ko bao gom 
//scrollHeight(kich thuoc nhin thay o man hinh)

// .progress {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 0%;
//     height: 3px;
//     background-color: #fc466b;
//     transition: all 0.2s linear;
//     z-index: 100;
// }
//todo list

const form = document.querySelector(".header__search");
const todoList = document.querySelector(".todo-list");

function createTodoItem (title) {
    const template = `
    <div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="ti-trash todo-remove"></i>
    </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoValue = this.elements["todo"].value;
    if (!todoValue) return;
    // console.log(todoValue);
    
    createTodoItem(todoValue);

    this.elements["todo"].value="";
});

// remove
todoList.addEventListener("click", function(e) {
    if (e.target.matches(".todo-remove")) {
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);
    }
});