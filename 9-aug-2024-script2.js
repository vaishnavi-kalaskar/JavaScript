//if-else in javascript
//syntx:
//if(condition){
//code to be executed if condition is true
//}else{
//code to be executed if condition is false
//}

//
let age = 18;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cant vote");
}

let num = 40;
if (num > 20 && num < 50) {
  console.log("number is between");
} else {
  console.log("number is not between");
}

year = 2016;
if (year % 4 == 0) {
  console.log("year is a leap year");
} else {
  console.log("year is not leap year");
}

let a = 5;
let b = 7;
let c = 5;

if (a == b && b == c && c == a) {
  console.log("equitateral triangle");
} else if (
  a * a + b * b == c * c ||
  b * b + c * c == a * a ||
  a * a + c * c == a * a
) {
  console.log("right angle triangle");
} else if (a == b || b == c || c == a) {
  console.log("isoscales triangle");
} else if (a !== b && b !== c && c !== a) {
  console.log("scalen triangle");
} else if (a == 0 || b == 0 || c == 0) {
  console.log("invalid triangle");
} else {
  console.log("not a triangle");
}

let MIL = 20;
let CPL = 3.12;
let WIL = MIL / 4;
let Total_milk = MIL + WIL;
let actual_cost_price = MIL * CPL;
let actual_sale_price = Total_milk * 4.75;
let profit = actual_sale_price - actual_cost_price;
console.log("cp:" + actual_cost_price + "Rs");
console.log("sp:" + actual_sale_price + "Rs");
console.log("profit:" + profit + "Rs");
