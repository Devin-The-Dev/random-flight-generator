document.getElementById('button').onclick = function generateFlight() {
    randomFlightButton()
};

function randomFlightButton() {
    var countryArr = ["USA", "Britain", "Australia", "Canada", "Mexico", "Russia", "Egypt", "France", "Scotland", "Ireland", "Brazil", "Peru", "Japan", "China"];
    //  var countryPhoto = {
    //     Default: "large.jpg",
    //     USA : "imageFile",
    //     Britain : "imageFile"
    // }
    document.getElementById('result').innerHTML = countryList();
    function countryList() {
        countryArr;
        var randomNumber = Math.floor(Math.random() * countryArr.length);
        // Return needs to be done to have your result appear on the front end (from line 7).
        // This is when a "console.log" becomes a "return"
        return countryArr[randomNumber];
        // When getting result, display picture of country in the background
    }
    // document.getElementsByClassName('jumbotron').style.background = "url(" + countryPhoto.key + ") no-repeat center"
    // How to link randomNumber to countryPhoto key?

    // How do I get the function to change the CSS?
}

// Future: Add a DB to store all the countries.
// MongoDB since I was taught the MERN stack.