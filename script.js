const placeholders = [...document.getElementsByClassName("container__placeholder")];
const dragItem = document.getElementById("drag-item");

dragItem.addEventListener("dragstart", e => {
      placeholders.map(item => item.classList.add("active"));
      e.target.classList.add("dragged")
})
dragItem.addEventListener("dragend", e => {
      placeholders.map(item => item.classList.remove("active"));
      e.target.classList.remove("dragged")
      
})