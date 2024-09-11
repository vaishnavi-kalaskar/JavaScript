// let a=document.getElementById("hero");
// console.log(a.innerText);

// let p= a.nextElementSibling;
// console.log(p.innerText);

// let parent=a.parentElement;
// console.log(parent);
// -------------------------------------------
// let p1=document.querySelector("#list");
// let c3=p1.lastElementChild;
// console.log(c3.innerText);

// let c1=p1.firstElementChild;
// console.log(c1);

// let ch=p1.children;
// console.log(ch[1].textContent);

// ------------------------------------------------

// let list=document.querySelector("#list");

// let newelem=document.createElement("li");
// newelem.textContent="list-item 4";
// list.appendChild(newelem);
// console.log(list)

// // let element=list.firstElementChild;
// let element=list.firstElementChild.nextElementSibling;
// list.insertBefore(newelem,element);

// -----------------------------------------------------

let list = document.querySelector("#list");
let item = document.createElement("li");
item.textContent = "this is para";
list.append(item);
// list.prepend(item)

let items = document.createElement("li");
items.textContent = "this is paragraph";
list.prepend(items);

let para = document.createElement("p");
para.textContent = "this is new paragraph";
list.after(para);
list.before(para);
