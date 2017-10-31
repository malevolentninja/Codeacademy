# Meet JSON


### 1. JSON Syntax
```sh
var clubMember = {
    "firstname":"John",
    "lastname":"Doe",
    "memberStatus":"Full",
    "city":"London",
    
};
alert(clubMember.city);
```

### 2. Using JSON.parse()

```sh
var Mary = '{ "height":1.9, "age":36, "eyeColor":"brown"}';

// use JSON.parse() to create an object 'objectMary':
var objectMary = JSON.parse(Mary);
console.log(objectMary.age);
```

### 3. Using JSON.stringyfy()

```sh
var Mary = new Object();
Mary.height = 1.9;
Mary.age = 36;
Mary.eyecolor = "brown";

// serialize the object using JSON.striniy():
console.log(JSON.stringify(Mary));
```


### 4. Simulating Associative Arrays


```sh
var conference = {
    "startDay" : "Monday",
    "nextDay" : "Tuesday",
    "endDay" : "Wednesday"
};


// using JSON notation
 console.log(conference['endDay']);
```

### 5.  Creating an object with JSON

```sh
var user = {
    "username" : "laura123",
    "city" : "New York",
    "system" : "linux",
    "date" : "30th October"
};
console.log("User " + user.username + " is located in " + user.city + "  uses " + user.system + " and date " + user.date);
```

