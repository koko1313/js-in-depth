// setInterval happens many times (until gets stopped)
var intervalId = setInterval(function() {
    console.log("Greetings from setInterval");
}, 5000);

clearInterval(intervalId); // clears the interval