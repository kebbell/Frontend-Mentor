



function myFunction() {
  var x = document.getElementById("MyInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}