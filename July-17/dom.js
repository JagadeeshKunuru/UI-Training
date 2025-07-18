//what is a DOM ?
//DOM - Document Object Model

//getElementById
// let paraOneEl = document.getElementById("para1")
// paraOneEl.innerHTML = "Something else"
// console.log(paraOneEl.innerText)

// let paraThreeEl = document.getElementById("para3")
// paraThreeEl.innerText = "This is Para three"

//getElementsByClassName

// let para = document.getElementsByClassName("para1-class")
// console.log("para", para[1])
// para[1].innerText = "This is a class"

//querySelector

let divEle = document.querySelector("div")
//divEle.innerText = "This is not a div"

//innerHTML innerText
// console.log("html", divEle.innerHTML)
// console.log("text", divEle.innerText)

//How can we add an element inside another element - how to create an element

let pEle = document.createElement("p")
divEle.appendChild(pEle)
pEle.innerText = "This is a p tag"

//how can we remove an element

divEle.removeChild(pEle)
