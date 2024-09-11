// let link = document.querySelector("#link");
// let con = document.querySelector("#container");
// let body = document.body;
// // console.log(link);

// link.addEventListener("click", function (e) {
//   console.log("link clicked");
//   e.preventDefault();
//   e.stopPropagation();
// },
// true);
// // con.addEventListener("click", function (a) {
// //   console.log("con clicked");
// // },
// // true);
// body.addEventListener("click", function (e) {
//   console.log("body clicked");
// },
// true);
// --------------------------------------------------
//settimeout and setinterval

// text = "hello";
// setTimeout(function () {
//   console.log(text);
// }, 3000);

// let stop=setTimeout(function () {
//   console.log(text);
// }, 3000);

// link.addEventListener("click",function(e){
//     clearTimeout(stop);
//     e.preventDefault();
// })

// ----------------------------------------

// setInterval(function () {
//   console.log(text);
// }, 3000);

// let stop=setInterval(function () {
//       console.log(text);
//     }, 2000);

//     link.addEventListener("click",function(e){
//         clearInterval(stop);
//         e.preventDefault();
//     })

// -----------------------------------------------------

let url = "https://www.google.com";
let features = "height=300;width=300";
window.open(url, "mywindow", "height=300;width=300");

let link = document.querySelector("#link");
let newwin;
link.addEventListener(
  "click",
  function (e) {
    console.log("link clicked");
    e.preventDefault();
    newwin = window.open(url, "mywindow", "height=300;width=300");
  },
  false
);

close.newwin();
