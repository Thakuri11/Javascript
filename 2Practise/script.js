//Q.finding the max value in array
let arr = [1, 2, 3, 100, 4];
let max = arr[0];
arr.forEach((e) => {
  if (e > max) {
    max = e;
  }
});
console.log(max);

//Q.Reverse the number
let n = 5011;
let result = 0;
while (n > 0) {
  let b = n % 10;
  result = result * 10 + b;

  n = Math.floor(n / 10);
}
console.log(result);

//Q. USe of objects
const obj = {
  name: "Rahul",
  age: "21",
};
document.getElementById("try").innerHTML =
  "My name is " + obj.name + " and I am " + obj.age + " years old";

//change text when clicked!
function ClickMe() {
  document.getElementById("add").innerHTML = "Text changed!";
}

//using addEventListener[perform without innnerHtml]
const abc = document.getElementById("next");
abc.addEventListener("click", function () {
  alert("Button Clicked!");
});

//Increment-Decrement Counter

let count = 0;
//Increment
document.getElementById("inc").addEventListener("click", () => {
  count++;
  document.getElementById("cnt").innerHTML = count;
});

//Decrement
document.getElementById("dec").addEventListener("click", () => {
  count--;
  document.getElementById("cnt").innerHTML = count;
});

//Reset
document.getElementById("res").addEventListener("click", () => {
  count = 0;
  document.getElementById("cnt").innerHTML = count;
});


