document.getElementById('button').onclick = function generateFlight() {
    randomFlightButton()
};

function randomFlightButton() {
    var countryArr = ["USA", "Britain", "Australia", "Canada", "Mexico", "Russia", "Egypt", "France", "Scotland", "Ireland", "Brazil", "Peru", "Japan", "China", "Spain"];
    document.getElementById('result').innerHTML = countryList();
    // document.getElementsByClassName('jumbotron')[0].style.background = "url('./" + countryList() + ".jpg') no-repeat center";
    function countryList() {
        countryArr;
        var randomNumber = Math.floor(Math.random() * countryArr.length);
        // Return needs to be done to have your result appear on the front end (from line 7).
        // This is when a "console.log" becomes a "return"
        return countryArr[randomNumber];
        // When getting result, display picture of country in the background
    }
    // cannot set property 'background' of undefined

    // --------
    // randomFLightButton() inside above line will crash site (inifite loop)
    // It seems like it's a syntax error
    // countryArr[randomNumber] is in countryList(); it's a scope issue
    // -------------
    // countryList() throws an error "Cannot set property 'background' of undefined"
    // -------------
    // Failed to load resource: the server responded with a status of 404 
    // There's only an image for USA
    // -------------
    // Images are working now but they don't always match with said country. Seems like it's randomly selecting a country and image separately. 
}

// Future: Add a DB to store all the countries.
// MongoDB since I was taught the MERN stack.
