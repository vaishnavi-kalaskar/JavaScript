//   1.quqderent
// let x = 3;
// let y = -9;
// if (x > 0 && y > 0) {
//   console.log("quaderent 1");
// } else if (x < 0 && y > 0) {
//   console.log("quaderent 2");
// } else if (x < 0 && y < 0) {
//   console.log("quaredent 3");
// } else if (x > 0 && y < 0) {
//   console.log("quaderent4");
// } else if (x > 0 && y == 0) {
//   console.log("on x axis");
// } else if (x < 0 && y == 0) {
//   console.log("on -x axis");
// } else if (x == 0 && y > 0) {
//   console.log("on y axis ");
// } else if (x == 0 && y < 0) {
//   console.log("on -y axis");
// } else if (x == 0 && y == 0) {
//   console.log("origin");
// } else {
//   console.log("all equal");
// }

// 2. tax
// let bs = 480000;
// if (bs <= 150000) {
//   console.log(" no tax ");
// } else if (bs >= 150000 && bs <= 300000) {
//   tax = bs / 5;
//   console.log("tax amount is: " + tax);
// } else if (bs >= 300000 && bs <= 500000) {
//   tax = bs / 7;
//   console.log("tax amount is: " + tax);
// } else {
//   console.log("your tax is:" + bs);
// }

// 3.profit or loss
// let sp = 50;
// let cp = 40;
// if (sp > cp) {
//   let profit = sp - cp;
//   let per = (profit / cp) * 100;
//   console.log("total profit" + profit);
//   console.log("total percentage" + per);
// }
// if (sp < cp) {
//   let loss = sp - cp;
//   let per = (loss / cp) * 100;
//   console.log("total profit" + loss);
//   console.log("total percentage" + per);
// } else {
//   console.log("no loss no profit");
// }

//  4.withdrawl amount
// let camt = 20000;
// let n = 2000;
// if (camt >= n) {
//   w = camt - n;
//   console.log("your withdrwal amount:" + n);
//   console.log("current amount:" + w);
// } else {
//   console.log("not withdrawl");
// }

//  5. check number is divisibal by 5 or 7

// let n = 105;
// if (n % 5 == 0) {
//   if (n % 7 == 0) {
//     console.log(n + " is divisibal by 5 and 7");
//   } else {
//     console.log(n + " is not divisibal by 5 but not 7");
//   }
// } else {
//   if (n % 7 == 0) {
//     console.log(n + " divisibal by 7 or not 5");
//   } else {
//     console.log(n + " not divisibal by 5 or not 7");
//   }
// }

// 6.check eligibal for blood notation
// let age = 20;
// let wt = 55;
// let hb = 11;
// if (age >= 18) {
//   if (hb >= 12) {
//     if (wt >= 55) {
//       console.log("you are able to blood donate");
//     } else {
//       console.log("age and hb is valid but not wt");
//     }
//   } else {
//     console.log("age and weight valid hb not valid");
//   }
// } else {
//   console.log("age is not valid");
// }

// 7.find total ,per,and class of students marks

// let m1 = 98;
// let m2 = 89;
// let m3 = 78;
// let total = m1 + m2 + m3;
// let percentage = total / 3.0;

// console.log("Total marks: " + total);
// console.log("Percentage: " + percentage + "%");

// if (m1 >= 40) {
//   if (m2 >= 40) {
//     if (m3 >= 40) {
//       if (percentage >= 75) {
//         console.log("Class: Distinction");
//       } else if (percentage >= 60) {
//         console.log("Class: First Class");
//       } else if (percentage >= 50) {
//         console.log("Class: Second Class");
//       } else if (percentage >= 40) {
//         console.log("Class: Pass Class");
//       }
//     } else {
//       console.log("Result: ATKT Fail");
//     }
//   } else {
//     console.log("Result: ATKT Fail");
//   }
// } else {
//   console.log("Result: Fail");
// }

// 8.tickit
// let age = 45;
// let tp = 40;
// if (age < 12) {
//   let dis = tp * 0.2;
//   let total = tp - dis;
//   console.log("Your Discount:" + total);
// } else if (age > 12) {
//   let dis = tp * 0.1;
//   let total = tp - dis;
//   console.log("Your Discount:" + total);
// } else {
//   console.log("Your are watch movie ");
// }

// 9.traffic light
// let color = "r";
// if (color == "r" || color == "R") {
//   console.log("stop");
// }
// if (color == "y" || color == "Y") {
//   console.log(" slowly go");
// }
// if (color == "g" || color == "G") {
//   console.log("go");
// }

//  10.print number is that in month
// let n = 5;
// if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12) {
//   console.log("Monthly days is 30");
// } else if (n == 9 || n == 4 || n == 6 || n == 11) {
//   console.log("Monthly days is 31");
// } else if (n == 2) {
//   console.log("Monthly days is 28/29");
// }

// 11.find hra ,ta,da
// let bs = 20000;
// hra = bs * 0.2;
// da = bs * 0.4;
// gs = bs + hra + da;
// console.log("HRA:" + hra);
// console.log("DA:" + da);
// console.log("GS:" + gs);
