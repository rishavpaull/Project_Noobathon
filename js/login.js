var username = "Guest";
var pass;
function validate() {
   username = document.getElementById("user").value;
   pass = document.getElementById("pwd").value;
   //  document.getElementById("log").innerHTML=username; 
  //  console.log(username + pass);
  }

function namechange(){
  // alert(username);
  console.log(username);
   document.getElementById("log").innerHTML = username;
}