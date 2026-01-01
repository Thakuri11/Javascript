alert("Ohh yeah! I did it!");
console.log("JavaScript is linked successfully!");
var aaa = prompt("Enter your name");
console.log("hello " + aaa);
var istrue = confirm("Are you sure you want to leave?");
if (istrue) {
  console.log("User chose to leave.");
} else {
  console.log("User chose to stay.");
}

//variable in js;

//1.var  [var is global scope ie changes made within the block level changes the value at global level]
var b = 5;
{
  var b = 10;
}
console.log(b); ////output is 10

//2.let [let is block scope ie the change in local level wont affect the value at global level ]
let c = 15;
{
  let c = 20;
}
console.log(c); ////output is 15

//rules
var _app = 1; // valid variable
var $app = 2; // valid variable
// var 1app=3;      invalid variable

//data types in js

// 1.primitive data types in js
let name = "John";
let nbr = 11;
let nbr2 = 11.11;
let x = true;
let y = undefined;
let z = null; //data type of null is object in js
console.log(typeof name, typeof nbr, typeof nbr2, typeof x, typeof y, typeof z);
//other data types = {bigInt,Symbol}

// 2.objects in js
let person = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person);
person.firstName = "Thakurii"; //modifying object
console.log(person);

// Q.write a js program to store name ,marks and phone nbr of student using objects
let student = {
  name: "Alan Walker",
  marks: 99,
};
console.log("Name:", student.name);
console.log("Marks:", student.marks);

//string   [string are immutable i.e the original string doesnot change]
let a = "apple";
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.length);
console.log(a.slice(1, 3));
console.log(a.slice(1));
console.log(a.replace("app", "bana"));
let g = "banana";
console.log(a.concat(g));
console.log(a.concat(g, "Avocado"));

console.log(a.indexOf("p"));
console.log(a.endsWith("a"));
console.log(a.startsWith("a"));

//Array    [Array are mutable]
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr[1] = 11;
console.log(arr);

console.log(typeof arr); //type of array is object in js
console.log(arr.toString()); //convert array to string separeted with commas
console.log(arr.join(" and ")); //join elements of array  with separator
console.log(arr.pop()); //pop(return) last element and alter the array
console.log(arr);
arr.push("Hello"); //push element at last posn of array
console.log(arr);
console.log(arr.shift()); //pop(return) first element and alter the array
console.log(arr);
arr.unshift("Lean"); //push the element at first posn
console.log(arr);
console.log(delete arr[0]); //delete the specified item but the memory remains allocated in array
console.log(arr);

//looping array      [Original array remain unchanged]
//1.foreach    [call array once for each element and does not return new array]
arr.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

//2.maps     [used to transform element in array and return new array]
let arr2 = arr.map((n) => {
  return n * 2;
});
console.log(arr2);

//3.filter   [used ton filter item from the array]
const lessthanfive = (e) => {
  if (e < 5) {
    return true;
  }
  return false;
};
console.log(arr2.filter(lessthanfive));

//function in js

//1. Normal function [hoisted i.e they can be called before defn]
function normal(a, b) {
  return a * b;
}
console.log(normal(6, 6));

//2. Function stored in variable [Not hoisted i.e they cant be called before defn]
let func = function add(a, b) {
  return a + b;
};
console.log(func(2, 3));

//3. Arrow function in js
const sum = (a, b) => a + b;
console.log(sum(5, 10));

//checking odd or even using arrow func
const find = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};
console.log(find(4));

//4. Anonymous Function [Function without name]
let wo = 0;
const WOName = (setInterval =
  (() => {
    console.log("Welcome after every 2 sec");
    wo++;
    if (wo >= 10) {
      clearInterval(WOName);
    }
  },
  200));

//5. Callback Function [ function that is passed as an argument and called later]
function mainf(a, Callback) {
  console.log(`${a} you are `);
  Callback();
}
mainf("Thakuri", function () {
  console.log("Welcome");
});

//6.Closures Function [A inner function remembers variables from its outer function]
function outerF(x) {
  return function innerF(y) {
    return x - y;
  };
}
let CF = outerF(5); //outerF function returned a innerF function and the returned function remember x=5
console.log(CF);
console.log(CF(2)); //runs innerF function with value of x=5 from outerF function
console.log(outerF(2)(5)); //run the function same as above but directly in one line

// Extra Example
function outer() {
  let count = 0;
  console.log(count);
  return () => {
    count++;
    console.log(count);
    return () => {
      count++;
      console.log(count);
      return () => {
        count++;
        console.log(count);
        return () => {
          count++;
          console.log(count);
          return () => {
            count++;
            console.log(count);
          };
        };
      };
    };
  };
}
outer()()()()()();

// Rest Operator
const Rop = (...abc) => {
  return abc;
};
console.log(Rop(10, 20, 30));

//Spread Operator
let Sop = [10, 20, 30];
console.log(...Sop);
