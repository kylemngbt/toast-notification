const buttons = document.querySelectorAll(".buttons button");
const toastBox = document.querySelector("#toast-box");
const successMsg = "Successfully submitted";
const errorMsg = "Please fix the error!";
const invalidMsg = "Invalid input, check again"

function showToast(e) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  switch(e.target.id) {
    case "success":
      toast.innerHTML = successMsg;
      break;
    
    case "error":
      toast.innerHTML = errorMsg;
      break;

    case "invalid":
      toast.innerHTML = invalidMsg;
      break;
  }
  toastBox.appendChild(toast);
}

buttons.forEach((button) => {
  button.addEventListener("click", showToast);
})