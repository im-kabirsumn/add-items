const inputItemsForm = document.getElementById("input-items-form"); // add an event listener for submit event to get submitted data 
const inputItems = document.getElementById("input-items");          // get it's value and push to local storage 
const itemsContainer = document.getElementById("items-container");                     // you'll inject the item-list element to this
// const itemList = document.createElement("div");              // you'll craft this element and inject it to the itemsContainer element. also you'll add two event listener for click event to Strikethrough this item after one click (just add strike class) and delete this item after double click on this item.


const items = JSON.parse(localStorage.getItem("item")) || [];


// Event Listeners
inputItemsForm.addEventListener("submit", addItem);
itemsContainer.addEventListener("click", deleteItem);

function addItem(e) {
  e.preventDefault();

  let inputValue = inputItems.value;

  createElement(inputValue);

  inputItemsForm.reset();
}

function deleteItem(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-icon")) {
    if (e.target.nodeName === "svg") {
      e.target.parentElement.remove();
    }
    if (e.target.nodeName === "path") {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function createElement(item) {
  const li = createLi(item);
  itemsContainer.appendChild(li);
}


function createLi(item) {
  const li = document.createElement("li");
  li.innerHTML = ` <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="delete-icon"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6 18 18 6M6 6l12 12"
    class="delete-icon"
  />
</svg>`;
  li.appendChild(document.createTextNode(item));
  li.className = "item-list";
  return li;
}



