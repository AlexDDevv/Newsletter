const firstPage = document.querySelector(".container");
const inputEmail = document.getElementById("email");
const errorSpan = document.querySelector(".error-mail");
const btn = document.getElementById("btn");
const secondPage = document.querySelector(".container2");
const spanConfirm = document.getElementById("emailSent");
const dismissBtn = document.querySelector(".btn-dismiss");

btn.addEventListener("click", () => {
  if (!inputEmail.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    inputEmail.classList.add("input-error");
    errorSpan.classList.add("span-display");
  } else {
    inputEmail.classList.remove("input-error");
    errorSpan.classList.remove("span-display");
    spanConfirm.textContent = inputEmail.value;
    firstPage.style.display = "none";
    secondPage.style.display = "block";
  }
});

dismissBtn.addEventListener("click", () => {
  window.location.reload();
});
