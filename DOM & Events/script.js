 //#DOM [Document Object Model]    js uses the DOM to read and modify elements in html

 //*searching the DOM....Selecting the elements from DOM

 //1.querySelector [ Selects the first elements with specified id or class or tag ]

document.querySelector(".dom").style.backgroundColor = "green";

 //2.querySelectorAll [ Apply background color to all elements with specified class name ...it returns NodeList so we must use loop to apply changes on all]

// document.querySelectorAll(".dom").forEach(e => {e.style.backgroundColor = "green"});

//3.getElementById   [Select one element with sepecified id name]
document.getElementById("orangebox").style.backgroundColor = "orange";

 //4.getElementByClassName   [selects multiple elements with same class..Return Array ie.we need index or loop]
let dom = document.getElementsByClassName("dom");
dom[1].style.backgroundColor = "yellow";

// #Changing Content

//1.innerHTML  [changes or reads html contents ie text,img,even tags]
//change text when clicked!
function ClickMe() {
  document.getElementById("add").innerHTML = "You see ?I changed!";
}

//2.textContent [changes or reads plain text ]
function ClickMe2() {
  document.getElementById("txt").textContent = "I changed Again";
}

// #Event Listener [ listen for an event and handle it]
// Event is action done by user like:{click(),dblclick(),keyup(),keydown(),mouseover() and so on}
const eventh = document.getElementById("eventh");
eventh.addEventListener("click", function () {
  alert("Button Clicked!");
});

// #Event Object

//1.event.target() [Refers the element that triggered the event..used to knonw which element was clicked]
document.getElementById("myf").addEventListener("click", function (event) {
  console.log(event.target);
  console.log("Form Submitted!");
});

//2.event.preventDefault() [prevents from default behaviour of browser : like submit and reload in form submission]
document.getElementById("myf2").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Form Submitted Denied!");
});
