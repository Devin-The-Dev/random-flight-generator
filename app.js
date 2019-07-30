document.getElementById('button').onclick = function generateFlight() {
    randomFlightButton()
};

function randomFlightButton() {
    var countryArr = ["USA", "Britain", "Australia", "Canada", "Mexico"];
    document.getElementById('result').innerHTML = countryList();
    function countryList() {
        countryArr;
        var randomNumber = Math.floor(Math.random() * countryArr.length);
        // Return needs to be done to have your result appear on the front end (from line 7).
        // This is when a "console.log" becomes a "return"
        return countryArr[randomNumber];
    }
}

// Future: Add a DB to store all the countries.
// MongoDB since I was taught the MERN stack.