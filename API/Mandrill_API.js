1. Introduction - set up account
//no code

2. Getting started with Mandrill JavaScript Library
// Replace 'API_KEY' with your own api


// Create a generic function to log the response from Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// Create a new instance of the Mandrill class from the mandrill
// library. It takes one parameter, your API key.

var m = new mandrill.Mandrill('API_KEY');

// Ping your Mandrill account using the users/ping method

m.users.ping(function(res) {
    log(res);
    }, function(err) {
    log(err);
    });
    
3.  Send a text email

// add API key 

// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('API_KEY');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"malevolentninja@blobby.com",
        "to":[{"email":"your_recipient_address"}],
        "subject": "Sending a text email from the Mandrill API",
        "text": "I'm learning the Mandrill API at Codecademy."
    }
};

function sendTheMail() {
// Send the email!

    m(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}

/*For the official Mandrill API wrappers, API calls follow the documented methods. 
So, for example, to ping the account, you can call the users.ping method. 
Likewise, to send a message, you'd use messages.send. 
Change line 22 to call the messages.send method on the variable m 
which is an instance of the Mandrill class to be able to send the message. */

4. Send an HTML email with open and click tracking
