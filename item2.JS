var fname = prompt("Enter your first name:", "0");
var lname = prompt("Enter your last name", "0");
var birthyr = prompt("Enter your birth year:", "0");

var age = 2025 - birthyr;

document.getElementById("fname").innerHTML = fname;
document.getElementById("lname").innerHTML = lname;
document.getElementById("age").innerHTML = age;