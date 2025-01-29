function myFunction() {
    if (confirm("Do you wish to share your personal information with the site?")){
        console.log("Name: "+ nickname+ "\nHeight: "+ heightFeet+ "\'"+ heightRem+ "\" \nWeight: "+ weightLbs+ " lbs");
    }
    else {
        console.log("User does not wish to share his/her information.");
    }
}