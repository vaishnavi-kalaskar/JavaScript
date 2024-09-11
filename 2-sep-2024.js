// let button = document.querySelector("#btn");
// console.log(button);

// let input = document.querySelector("#in");
// console.log(input);

// let box = document.querySelector("#box");
// console.log(box);

// //button event

// function Display() {
//   console.log("button is clicked.....");
//   console.log("clicked");
//     // button.style.backgroudColor = "red";
//   button.classList.toggle("bg-red");
// }
// //single click
// // button.addEventListener("click", Display);

// //double click
// button.addEventListener("dblclick", Display);

// button.addEventListener("dblclick", function () {
//   console.log("button is clicked.....");
//   console.log("clicked");
//   button.classList.toggle("bg-red");
// });
//  -----------------------------------------------------------------

// //right click h.w

// //input event

// // input.addEventListener("focus", function () {
// //   // input.style.background="yellow";
// //   input.classList.toggle("bg-yellow");
// // });

// // input.addEventListener("blur", function () {
// //   // input.style.background="white";
// //   input.classList.remove("bg-yellow");
// // });

// // input.addEventListener("change", function () {
// // //   console.log("input containt change");
// //   console.log("input containt change to:"+this.value);
// // });

// // input.addEventListener("input", function () {
// //   console.log("input containt change to:"+this.value);
// // });

// ------------------------------------------------------------------------
// //mouse event
// // box.addEventListener("mouseenter", function () {
// //   console.log(" mouse enter");
// // });

// // box.addEventListener("mouseleave", function () {
// //   console.log(" mouse exit");
// // });

// // box.addEventListener("mouseover", function () {
// //   console.log(" mouse over");
// // });

// box.addEventListener("mousedown", function () {
//   console.log(" mouse down");
// });

// box.addEventListener("mouseup", function () {
//   console.log(" mouse up");
// });

// --------------------------------------------------------------------
let button = document.querySelector("#btn");
let input = document.querySelector("#in");
let box = document.querySelector("#box");

function Display() {
  console.log("Button is Clicked!");
  button.style.backgroundColor = "red";
}

// // button Events:
button.addEventListener("click", function () {
  console.log("Button is Clicked!");
  button.classList.toggle("bg-red");
});
button.addEventListener("dblclick", function () {
  console.log("Button is Clicked!");
  button.classList.toggle("bg-red");
});

// // input Events:
input.addEventListener("focus", function () {
  input.classList.toggle("bg-yellow");
});

input.addEventListener("blur", function () {
  input.classList.toggle("bg-yellow");
});

input.addEventListener("change", function () {
  console.log("input content change to: " + this.value);
});

input.addEventListener("input", function () {
  console.log("input content change to: " + this.value);
});

// mouse Events:
// box.addEventListener("mouseover", function (e) {
//   console.log("Mouse is Over the box");
//   console.log("Mouse position: " + e.clientX + " " + e.clientY);
// });
// box.addEventListener("mouseenter", function (e) {
//   console.log("Mouse is Entered in box");
// });
// box.addEventListener("mouseleave", function () {
//   console.log("Mouse is Exit the box");
// });
// box.addEventListener("mouseup", function () {
//   console.log("Mouse is Up");
// });
// box.addEventListener("mousedown", function () {
//   console.log("Mouse is down");
// });

document.querySelector("#btn");
window.addEventListener("scroll", function () {
  console.log("scrolling");
});

// box.addEventListener("contextmenu", function () {
//   console.log("Mouse is down");
// });

box.addEventListener("contextmenu", (e) => {
  console.log("Mouse is down");
});

box.parentNode.addEventListener("mousemove", function () {
  console.log("Mouse move");
});

box.parentNode.addEventListener("mousemove", function (event) {
  console.log(event.x);
});

box.parentNode.addEventListener("mousemove", function (event) {
  console.log(event.y);
});
