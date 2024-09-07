const buttons = document.querySelectorAll(".buttons button");
const toastBox = document.querySelector("#toast-box");

function showToast() {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "Success";
  toastBox.appendChild(toast);
}

buttons.forEach((button) => {
  button.addEventListener("click", showToast);
})