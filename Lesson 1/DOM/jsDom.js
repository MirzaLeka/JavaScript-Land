
let divTag = document.createElement("div");
divTag.classList = "div";
document.body.appendChild(divTag);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Insert text");
input.setAttribute("autofocus", "true");
input.classList = "myInput";
divTag.appendChild(input);

let button = document.createElement("button");
button.classList = "myBtn";
button.textContent = "Submit";
divTag.appendChild(button);

let list = document.createElement("ul");
document.body.appendChild(list);

button.addEventListener("click", createItem);

function createItem () {

    let trimmed = input.value.trim();

    if (!trimmed) {
        return alert("Please insert text");
    }

    let item = document.createElement("li");
    item.textContent = trimmed;
    item.style.color = "orange";
    list.appendChild(item);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList = "deleteBtn";
    deleteBtn.addEventListener("click", deleteItem);
    item.appendChild(deleteBtn);

    input.value = '';
    input.focus();

}

function deleteItem() {
    this.parentNode.remove();
    input.focus();
}

