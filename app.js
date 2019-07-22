document.getElementById('button').onclick = function () {
    randomFlightButton()
};

function randomFlightButton() {
    document.getElementById('result').innerHTML = countryList();
    // In order to get random country, I'll need to create a database and it'll select a country based on it's number id.
    // Lets go with Mongo since I was taught the MERN stack.
    function countryList() {
        let countryArr = ["USA", "Britain", "Australia"];
        // attach this to Math.random
    }
}
