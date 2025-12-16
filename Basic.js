// alert("Fck yeah! You did it!");
// console.log("JavaScript is linked successfully!");
// var a =prompt("Enter your name");
// console.log("hello " + a);
// var istrue = confirm("Are you sure you want to leave?");
// if (istrue) {
//     console.log("User chose to leave.");
// } else {
//     console.log("User chose to stay.");
// }

//variable in js
// var b = 5;

// {
//   var b = 10;
// }
// console.log(b);
// let c = 15;
// {
//   let c = 20;
// }
// console.log(c);

// //rules
// var _app = 1; // valid variable
// var $app = 2; // valid variable
// // var 1app=3;      invalid variable

// //data types in js

// // 1.primitive data types in js
// let name = "John";
// let nbr = 11;
// let nbr2 = 11.11;
// let x = true;
// let y = undefined;
// let z = null; //data type of null is object in js
// console.log(typeof name, typeof nbr, typeof nbr2, typeof x, typeof y, typeof z);
// //other data types = {bigInt,Symbol}

// // 2.objects in js
// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(person);
// person.firstName = "Thakurii"; //modifying object
// console.log(person);

// // Q.write a js program to store name ,marks and phone nbr of student using objects
// let student = {
//   name: "Alan Walker",
//   marks: 99,
// };
// console.log("Name:", student.name);
// console.log("Marks:", student.marks);

// // arrow function in js
// const sum = (a, b) => a + b;
// console.log(sum(5, 10));

// //string   [string are immutable i.e the original string doesnot change]
// let a = "apple";
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.length);
// console.log(a.slice(1, 3));
// console.log(a.slice(1));
// console.log(a.replace("app", "bana"));
// let g = "banana";
// console.log(a.concat(g));
// console.log(a.concat(g, "Avocado"));

// console.log(a.indexOf("p"));
// console.log(a.endsWith("a"));
// console.log(a.startsWith("a"));

//Array    [Array are mutable]
// let arr =[1,2,3,4,5];
// console.log(arr);
// arr[1]= 11;
// console.log(arr);

// console.log(typeof(arr));   //type of array is object in js
// console.log(arr.toString());    //convert array to string separeted with commas
// console.log(arr.join(" and "));   //join elements of array  with separator
// console.log(arr.pop());              //pop(return) last element and alter the array
// console.log(arr);
// arr.push("Hello");                    //push element at last posn of array
// console.log(arr);
// console.log(arr.shift());          //pop(return) first element and alter the array
// console.log(arr);
// arr.unshift("Lean");                //push the element at first posn
// console.log(arr);
// console.log(delete arr[0]);         //delete the specified item but the memory remains allocated in array
// console.log(arr);

//looping array      [Original array remain unchanged]
//1.foreach    [call array once for each element and does not return new array]
// arr.forEach((value,index,arr)=>{
//   console.log(value,index,arr);
// })

// //2.maps     [used to transform element in array and return new array]
// let arr2 = arr.map(function(n)
// {
//   return n * 2;
// });
// console.log(arr2);

// //3.filter   [used ton filter item from the array]
// const lessthanfive =(e)=>
// {
//   if (e<5)
//   {
//     return true;
//   }
//   return false;
// }
// console.log(arr2.filter(lessthanfive));

//DOM     [Document Object Model]    used to access and modify html through js
// Apply background color to all elements with class "dom"
document.querySelectorAll(".dom").forEach(el => el.style.backgroundColor = "green");
