const placeholders = [...document.getElementsByClassName("container__placeholder")];
const dragItem = document.getElementById("drag-item");

dragItem.addEventListener("dragstart", e => {
      placeholders.map(item => item.classList.add("active"));
      e.target.classList.add("hold")
      setTimeout(() => e.target.classList.add("dragged"), 0);
})
dragItem.addEventListener("dragend", e => {
      placeholders.map(item => item.classList.remove("active"));
      e.target.classList.remove("dragged", "hold");
      
})

placeholders.map(placeholder => {
      placeholder.addEventListener("dragenter", e => {
            e.target.classList.add("hoverd");
      })
      placeholder.addEventListener("dragleave", e => {
            e.target.classList.remove("hoverd");
      })
      placeholder.addEventListener("dragover", e => {
            e.preventDefault();
      })
      placeholder.addEventListener("drop", e => {
            e.target.append(dragItem);
            e.target.classList.remove("hoverd");
      })
})