var nickname = "Mark";
var heightInch = 67;
var weightKg = 90;

var heightFeet = parseInt(heightInch/ 12);
var heightRem = ((parseFloat(heightInch))% 12);

var weightLbs = ((parseFloat(weightKg))* 2.20462);

alert("Name: "+ nickname+ "\nHeight: "+ heightFeet+ "\'"+ heightRem+ "\" \nWeight: "+ weightLbs+ " lbs")