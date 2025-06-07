const heading = document.querySelector(".heading");
const input = document.querySelector(".input");
const celisius = document.querySelector(".select1");
const fahrenhelt = document.querySelector(".select2");
const submit = document.querySelector(".submit-btn");
const noti = document.querySelector(".noti");

submit.onclick = function () {
  let inputValue = Number(input.value);
  if (celisius.checked) {
    inputValue = (inputValue * 9) / 5 + 32;
    noti.textContent = inputValue.toFixed(2);
  } else if (fahrenhelt.checked) {
    inputValue = ((inputValue - 32) * 5) / 9;
    noti.textContent = inputValue.toFixed(2);
  } else {
    noti.textContent = "Please choose an option and Submit again";
  }
};
