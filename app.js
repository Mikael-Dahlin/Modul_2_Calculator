// declare variables for the html elements
const screen = document.querySelector(".screen");
const yellowButtons = document.querySelectorAll(".btn-yellow");
const greyButtons = Array.from(document.querySelectorAll(".btn-grey")).filter(
  (element) => element.getAttribute("data-num") != null
);
const clear = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");

// add event listener for yellow buttons
yellowButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    addYellowToScreen(element);
  });
});

// add event listener for grey buttons
greyButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    addGreyToScreen(element);
  });
});

// add event listener for clear button
clear.addEventListener("click", (event) => {
  event.preventDefault();
  clearScreen();
});

// add event listener for equal button
equal.addEventListener("click", (event) => {
  event.preventDefault();
  evalScreen();
});

// function for adding values of yellow buttons (with spaces)
function addYellowToScreen(element) {
  // check if the screen ends with empty space (last button press was a yellow button)
  if (screen.value.slice(-1) === " ") {
    // if yes then replace last button press
    screen.value = `${screen.value.slice(0, -3)} ${element.getAttribute(
      "data-num"
    )} `;
  } else {
    // else normal button press
    screen.value = `${screen.value} ${element.getAttribute("data-num")} `;
  }
}

// function for adding values of grey buttons (without spaces)
function addGreyToScreen(element) {
  screen.value = `${screen.value}${element.getAttribute("data-num")}`;
}

// function for clearing the screen
function clearScreen() {
  screen.value = "";
}

// function for calculations (using eval)
function evalScreen() {
  screen.value = eval(screen.value);
}
