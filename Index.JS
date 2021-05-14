//Program to disable or enable a button using javascript
let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".input").value === "option-1") {
    button.disabled = true; //button remains disabled
  } 
 
}
 