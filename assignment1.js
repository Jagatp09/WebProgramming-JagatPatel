// Utility function to generate a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Variables storing predefined data
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Jagat Patel",
    "Jagat Patel: jagat01@gmail.com",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// HTTP Request function
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}


// Automate Tests function
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    // Function to generate and test a random request
    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    // Execute randomRequest every 1 second
    setInterval(randomRequest, 1000);
}

// Invoke the automateTests function to start testing
automateTests();
