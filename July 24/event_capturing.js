//revers functionality of event bubbling
//this is also called event trickling

//Adding event listners to both div and button

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent clicked");
  },
  true
);

document.getElementById("child").addEventListener("click", function () {
  console.log("child clicked");
});

//when we pass a third argument to an event listener then based on that condition --
//it will behave either bubbling or capturing
//if it is true for the parent - then it is capturing
//by default third param is false
