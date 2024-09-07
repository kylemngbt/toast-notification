const buttons = document.querySelectorAll(".buttons button");
const toastBox = document.querySelector("#toast-box");


buttons.forEach((button) => {
  button.addEventListener("click", showToast);
})