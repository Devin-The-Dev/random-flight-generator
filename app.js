document.getElementById('button').onclick = function generateFlight() {
    randomFlightButton()
};

function randomFlightButton() {
    var countryArr = ["USA", "Britain", "Australia"];//, "Canada", "Mexico", "Russia", "Egypt", "France", "Scotland", "Ireland", "Brazil", "Peru", "Japan", "China", "Spain"];
    var country = "";
    function countryList() {
        var randomNumber = Math.floor(Math.random() * countryArr.length);
        // Return needs to be done to have your result appear on the front end (from line 7).
        // This is when a "console.log" becomes a "return"
        country = countryArr[randomNumber];
        return country;
        // When getting result, display picture of country in the background
    }
    countryList();
    document.getElementById('result').innerHTML = country;
    document.getElementsByClassName('jumbotron')[0].style.background = "url('./" + country + ".jpg') no-repeat center";
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
    // Country names and pictures weren't matching because I needed a variable to store the result.
}

// Future: Add a DB to store all the countries.
// MongoDB since I was taught the MERN stack.
