let para = document.createElement("p");
para.textContent = "new text content";
console.log(para);

let box = document.querySelector(".box");
console.log(box);

box.appendChild(para);
console.log(box);

let para2 = document.getElementById("para-2");
console.log(para2);

box.insertBefore(para, para2);
console.log(box);

box.removeChild(para);
console.log(box);

box.appendChild(para);
console.log(box);

// -----------------------------------------
//add id and class

para.id = "para-4";
console.log(box);

para.className = "pclass ";
console.log(box);
// ------------------------------------------------
//attributes

para.setAttribute("class", "bg-color");

let c = para.getAttribute("class");
console.log(c);

para.removeAttribute("class");
console.log(box);

// ------------------------------------------------------
// changing css
let myCss = getComputedStyle(box);
myCss.backgroundColor;
console.log(myCss);

console.log(myCss.backgroundColor);

let box1 = (box.style.backgroundColor = "red");
console.log(box1);

box.style.border = "2px solid black";

box.firstElementChild.style.color = "white";
box.firstElementChild.style.fontSize = "25px";
box.firstElementChild.style.fontStyle = "italic";

box.style.cssText = "background-color:pink;color:red;font-size:20px";

//  box.lastElementChild.style.cssText="color:green;font-size:30px";

box.style.cssText += "font-weight:800;font-style:italic";

//we add all class list all are goes to domtokenlist

let list = box.classList;
console.log(list);

box.classList.add("bg-color");

box.classList.add("pc");

box.classList.remove("pc");

box.classList.add("pb");

let f = box.classList.replace("pb", "pc");
console.log(f);
