let box = document.querySelector("#btn");
// window.addEventListener("scroll", function () {
//   console.log("scrolling");
//   if (this.window.pageYOffset > 500) {
//     this.document.body.style.backgroundColor = "red";
//   } else {
//     this.document.body.style.backgroundColor = "white";
//   }
// });

// window.addEventListener("wheel", function(event){
//     // console.log(event.deltaY)
//     if(event.deltaY>0){
//         console.log("scroll up ")
//     }
//     else if(event.deltaY<0){
//      console.log("scroll down")
//     }
//  })

// box.parentNode.addEventListener("mousemove", function (event) {
//   console.log(event.x);
// });

//load event

window.addEventListener("DOMContentLoaded", () =>
  console.log("document loaded")
);
window.addEventListener("load", () => console.log("content loaded"));
