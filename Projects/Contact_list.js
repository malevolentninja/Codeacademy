//Bill gates and steve jobs used as default for a contact list
var friends = {
bill: {
    firstName: "Bill",
    lastName: "Gates",
    number: "(542) 555-5555",
    address: ['One Microsoft Way','Redmond','WA','98052']
    },
steve: {
    firstName:"Steve",
    lastName:"Jobs",
    number: "(541) 555-5555",
    address: ['Two Apple Way','Redmond','CA','95014']
    }
};

var list = function(friends) {
    for (key in friends) {
        console.log(key);
    };
};

var search = function(name) {
    for (var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
            };
    };
};

search("Steve");
