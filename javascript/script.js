const buttons = document.querySelectorAll(".buttons button");
 
buttons.forEach((button) => {
  button.addEventListener("click", showToast);
})