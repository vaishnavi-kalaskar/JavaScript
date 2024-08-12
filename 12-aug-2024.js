//1. binary to decimal
// let n = (prompt("Enter the number:"));
// let sum = 0;
// let p = 1;

// while (n > 0) {
//   let n1 = n % 10;
//   n = Math.floor(n / 10);
//   sum += n1 * p;
//   p *= 2;
// }

// console.log("Decimal =", sum);

// //2.decimal to binary
let n = (prompt("Enter the number:"));
let sum = 0;
let p = 1;

while (n > 0) {
  let n1 = n % 2;
  n = Math.floor(n / 2);
  sum += n1 * p;
  p *= 10;
}

console.log("Decimal =", sum);

//pop-uo-boxes

//  alert("hii");
// let res=confirm("do you want to exit?");
// console.log(res)

// let age = prompt("enter your age",20);
// console.log("age=" ,age);

// let age = prompt(" enter your number:");
// console.log( (age>=18)? "g":"l");

//let res = prompt(" do you pass HSC exam? (y/n):");
// console.log((res=='y')?"pass":"fail");

// let ans=res== "y" ? "pass" : "fail";

// let ans = res == "y" ? prompt("which group do you have?") : "fail";
// console.log(ans);

// switch (res) {
//   case "y":
//   case "yes":
//   case "1":
//   case "Y":
//     console.log("you are eligibal for higher for higher studies");
//     break;
//   case "n":
//   case "No":
//   case "0":
//     console.log("you are not eligibal for higher studies");
//     break;
//     default:
//         console.log("invalid input")
// }

// let a=prompt("enter your number:");
// let b=prompt("enter your number");
// // let a=8
// // let  b=4
// let operator=prompt("enter operation:");

// switch(operator){
//     case "+":
//         console.log(a+b);
//         break;
//         case "-":
//             console.log(a-b);
//             break;
//             case "*":
//             console.log(a*b);
//             break;
//             case "/":
//             console.log(a/b);
//             break;
//              default:
//                 console.log("invalid opeartor")
// }

//bitwise operator

// console.log("a & b :", 13 & 26);
// console.log("a | b :", 13 | 26);
// console.log("a ^ b :", 13 ^ 26);
// console.log("a ^ b :", 13 ^ 16);
// let a = 2;
// console.log(a << 4);
// console.log(a >> 4);
// console.log(40 >> 1);
// let b = 26;
// console.log(~b);
// let num = 5;
// let complement = ~num;
// console.log(complement);
