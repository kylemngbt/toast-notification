const buttons = document.querySelectorAll(".buttons button");
const toastBox = document.querySelector("#toast-box");
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showToast(e) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  switch(e.target.id) {
    case "success":
      toast.innerHTML = successMsg;
      break;
    
    case "error":
      toast.innerHTML = errorMsg;
      toast.classList.add("error");
      break;

    case "invalid":
      toast.innerHTML = invalidMsg;
      toast.classList.add("invalid");
      break;
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);

  toastBox.appendChild(toast);
}

buttons.forEach((button) => {
  button.addEventListener("click", showToast);
})