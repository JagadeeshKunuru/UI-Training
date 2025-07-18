let loginButtonEle = document.getElementById("login-btn")

console.log(loginButtonEle)

//How can we add an event listener to this button element ?

// loginButtonEle.addEventListener("click", function() {
//     console.log("user logged in")
//     //backend calls success
//     const response = false;
//     if(response) {
//         let paraEle = document.getElementById("para1")
//         paraEle.innerText = "User logged in successfully!"
//     } else {
//         let paraEle = document.getElementById("para1")
//         paraEle.innerText = "User authentication failed!"
//     }
// })

function checkUserAccess() {
     const response = false;
    if(response) {
        let paraEle = document.getElementById("para1")
        paraEle.innerText = "User logged in successfully!"
    } else {
        let paraEle = document.getElementById("para1")
        paraEle.innerText = "User authentication failed!"
    }
}