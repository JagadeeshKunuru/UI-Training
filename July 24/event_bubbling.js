//what is an event?
//what is an event bubbling ?

function login(event) {
  console.log(event);
}

//Adding event listners to both div and button

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function () {
  console.log("child clicked");
});

//output
//Child clicked
//parent clicked

//This is called event bubbling
//When an event happens on an element, it first triggers event on that
//element, then it bubbles up to its parent element.
