document.body.style.backgroundColor = "red";

document.body.firstElementChild.firstElementChild.children[1].style.backgroundColor =
  "orange";

let box = document.querySelector("#box");
console.log(box);

// let boxcopy=box.cloneNode();
// console.log(boxcopy);
// boxcopy.id="Box";

let boxcopy = box.cloneNode(true);
console.log(boxcopy);
// boxcopy.id="Box";

document.body.appendChild(boxcopy);

let listelem = document.querySelector("#list");
console.log(listelem);

// -----------------------------------------------------------
// let c=listelem.classList.contains("p30");
// console.log(c);
console.log(listelem.classList.contains("p30"));

console.log(listelem.classList);
console.log(listelem.classList.add("bg-pri"));

console.log(listelem.classList.contains("bg-pri"));

console.log(listelem.classList.remove("bg-sec"));

console.log(listelem.classList.replace("bg-pri", "bg-sec"));

console.log(listelem.classList.toggle("bg-pri"));
console.log(listelem.classList.toggle("bg-pri"));

// ---------------------------------------------------------------

let Box = document.querySelector("#box");

console.log("client height:", Box.clientHeight);

console.log("client width :", Box.clientWidth);

console.log("offset top :", Box.offsetWidth);

console.log("offset left :", Box.offsetHeight);

// -------------------------------------------------------------------

let current_date = new Date();
console.log(current_date);

let new_date = new Date(2002, 10, 28, 2, 40, 8); //("yyyy","mm","dd","h","m","s","ms")
console.log(new_date);

console.log(new_date.getTime());
console.log(new_date.getDay());
console.log(new_date.getHours());

let new_d = new Date("2003 october 23");
console.log(new_d);
