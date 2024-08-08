(() => {
    let toDoListArray = [];
    const form = document.querySelector(".form");
    const input = document.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();  
      const itemId = String(Date.now());
      const toDoItem = input.value;  
      addItemToDOM(itemId, toDoItem);
      addItemToArray(itemId, toDoItem);
      input.value = "";
    });
  
    ul.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      if (!id) return;
      removeItemToDOM(id);
      removeItemToArray(id);
    });
  
    const addItemToDOM = (itemId, toDoItem) => {
      const li = document.createElement("li");
      li.setAttribute("data-id", itemId);
      li.innerText = toDoItem;
      ul.appendChild(li);
    };
  
    const addItemToArray = (itemId, toDoItem) => {
      toDoListArray.push({ itemId, toDoItem });
    };
  
    const removeItemToDOM = (id) => {
      const li = document.querySelector(`[data-id="${id}"]`);
      ul.removeChild(li);
    };
  
    const removeItemToArray = (id) => {
      toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    };
})();