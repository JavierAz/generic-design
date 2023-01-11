const addNewMainWindow = document.getElementById("addNewMainWindow");
const addNewButton = document.getElementById("addButton");
const closeAddWindowButton = document.getElementById("closeAddWindowButton");
const cancelAddWindowButton = document.getElementById("cancelAddWindowButton");




addNewButton.addEventListener("click", () => {
  addNewMainWindow.showModal();
});

closeAddWindowButton.addEventListener("click", () => {
  addNewMainWindow.setAttribute("closing", "");

  addNewMainWindow.addEventListener(
    "animationend",
    () => {
      addNewMainWindow.removeAttribute("closing");
      addNewMainWindow.close();
    },
    { once: true }
  );
});

cancelAddWindowButton.addEventListener("click", () => {
  addNewMainWindow.setAttribute("closing", "");

  addNewMainWindow.addEventListener(
    "animationend",
    () => {
      addNewMainWindow.removeAttribute("closing");
      addNewMainWindow.close();
    },
    { once: true }
  );
});

addNewMainWindow.addEventListener("close", function(event){
  console.log(addNewMainWindow.returnValue);
});