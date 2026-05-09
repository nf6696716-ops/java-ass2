// let a = 20;
// let b = 30;
// let c = a + b;
// console.log("the result is :",c);
// let table = 2;
// console.log(table, "x",1,"=", table*1);
// console.log(table, "x",2,"=", table*2);
// console.log(table, "x",3,"=", table*3);
// console.log(table, "x",4,"=", table*4);
// console.log(table, "x",5,"=", table*5);
let age = 23;
if(age== 24){
    console.log("you are underage......");
}




// ==================== SECTION 1: if / else Basics ====================
console.log("=== Section 1: if / else Basics ===");

// 1. Simple example - number positive ho to print ho
let num1 = 5;
if (num1 > 0) {
  console.log("Positive number");
}

// 2. Program - even ya odd check kare
let num2 = 7;
if (num2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Output: Big
let x1 = 10;
if (x1 > 5) {
  console.log("Big");
} else {
  console.log("Small");
}

// 4. Output: No
let x2 = 2;
if (x2 > 5) {
  console.log("Yes");
} else {
  console.log("No");
}

// 5. Age check program 18+ allowed
let age1 = 20;
if (age1 >= 18) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

// ==================== SECTION 2: else if Ladder ====================
console.log("\n=== Section 2: else if Ladder ===");

// 1. Grade system program
let marks = 75;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("C");
}

// 2. Program - positive, negative ya zero
let num3 = -5;
if (num3 > 0) {
  console.log("Positive");
} else if (num3 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// ==================== SECTION 3: Nested Conditions ====================
console.log("\n=== Section 3: Nested Conditions ===");

// 1. Nested if example
let age2 = 20;
let hasID = true;
if (age2 >= 18) {
  if (hasID) {
    console.log("Allowed");
  } else {
    console.log("No ID");
  }
}

// 2. Login system program
let username = "Noor";
let password = "1234";
if (username === "Noor") {
  if (password === "1234") {
    console.log("Login Successful");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("Wrong Username");
}

// ==================== SECTION 4: switch Statement ====================
console.log("\n=== Section 4: switch Statement ===");

// 1. Day of week example
let day = 2;
switch(day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  default:
    console.log("Invalid");
}

// ==================== SECTION 5: for Loop ====================
console.log("\n=== Section 5: for Loop ===");

// 1. 1 se 10 tak print karo
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Even numbers print karo 1-20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3. Output: 1 2 3
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// 4. Reverse loop 10 se 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 5. Loop jo array print kare
let fruits = ["Apple", "Mango", "Banana"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ==================== SECTION 6: while Loop ====================
console.log("\n=== Section 6: while Loop ===");

// 1. 1 se 5 print karo using while
let i1 = 1;
while (i1 <= 5) {
  console.log(i1);
  i1++;
}

// 2. while example
let i2 = 1;
while (i2 <= 3) {
  console.log(i2);
  i2++;
}

// ==================== SECTION 7: do...while Loop ====================
console.log("\n=== Section 7: do...while Loop ===");

// 1. do while example - Output: 5
let i3 = 5;
do {
  console.log(i3);
  i3++;
} while (i3 < 5);

// ==================== SECTION 8: break & continue ====================
console.log("\n=== Section 8: break & continue ===");

// 1. break example - Output: 1 2
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// 2. continue example - Output: 1 2 4 5
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// ==================== SECTION 9: Functions Basics ====================
console.log("\n=== Section 9: Functions Basics ===");

// 1. Simple function jo "Hello" print kare
function sayHello() {
  console.log("Hello");
}
sayHello();

// 2. Output: Hi
function test() {
  console.log("Hi");
}
test();

// ==================== SECTION 10: Parameters & Return ====================
console.log("\n=== Section 10: Parameters & Return ===");

// 1. Function jo 2 numbers add kare - Output: 5
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// 2. Function jo square return kare
function square(num) {
  return num * num;
}
console.log(square(5)); // Output: 25

// ==================== SECTION 11: Default Parameters ====================
console.log("\n=== Section 11: Default Parameters ===");

// 1. Default parameter example
function greet(name = "Guest") {
  console.log(name);
}
greet(); // Output: Guest
greet("Ali"); // Output: Ali

// 2. Multiple default parameters
function userInfo(name = "Unknown", age = 18, city = "Faisalabad") {
  console.log(name, age, city);
}
userInfo();
userInfo("Noor", 22);