//with the below code, we write all the click handlers for all the list items
// document.getElementById("one").addEventListener("click", function () {
//   console.log("One clicked");
// });
// document.getElementById("two").addEventListener("click", function () {
//   console.log("two clicked");
// });
// document.getElementById("three").addEventListener("click", function () {
//   console.log("three clicked");
// });

//instead of writing handlers for all the list items, we can directly write a handler to its
//parent

document.getElementById("parent").addEventListener("click", function (event) {
  console.log("event", event.target.textContent);
  if (event.target.textContent === "List one") {
    console.log("One clicked");
  }
});
