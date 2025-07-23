//one type of storage system which will be persisted inside the browser.
//stores in key values pair

localStorage.clear();
function login() {
  //BE API calls
  //token
  localStorage.setItem("token", "Bearer EAXXXXX");
}

function logout() {
  const token = localStorage.getItem("token");
  if (token) {
    localStorage.clear();
  }
}
