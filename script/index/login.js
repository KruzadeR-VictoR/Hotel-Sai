// var username =document.getElementById("uname").value;
function login() {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pass").value;
  if (username == "" || password == "") {
    alert("All fields are required");
  } if (username != "" && password != "") {
    localStorage.setItem("Name",username);
    window.open("./../homepage.html") ;
  }
    // alert("Login successfully");
  // } else {
  //   if (username != "admin" && password != "admin#123") {
  //     alert("Invalid Credential");
  //   } else if (password != "admin#123") {
  //     alert("Invalid Password");
  //   } else {
  //     alert("Invalid Username");
  //   }
  // }  
}
