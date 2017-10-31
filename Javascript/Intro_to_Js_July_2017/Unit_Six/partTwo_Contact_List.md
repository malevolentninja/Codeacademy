# Unit Six: Part Two - Contact List

### 1.1 What you will be building

```sh

var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");

```


### 1.2 Creating Your Contact object

```sh
var friends = new Object();
```


### 1.3 Adding Your Friends

```sh
var friends = new Object();
friends.steve = {}
friends.bill = {};
```

### 1.4 Adding Properties
```sh
var friends = new Object();
friends.steve = 
{
    firstName: "Steve",
    lastName: "Smith",
    number: "666-666-666"
};
friends.bill = 
{
    firstName: "Bill",
    lastName: "Smith",
    number: "666-666-666"    
};
```

### 1.5 Tossing in an array

```sh
var friends = new Object();
friends.steve = 
{
    firstName: "Steve",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
friends.bill = 
{
    firstName: "Bill",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
```

### 1.6 List 'em all

```sh
var friends = new Object();
friends.steve = 
{
    firstName: "Steve",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
friends.bill = 
{
    firstName: "Bill",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};

var list = function (friends) 
{
    for(var firstName in friends)
    {
        console.log(firstName);
    }        
}
```


### 1.7 Search for a friend

```sh
var friends = new Object();
friends.steve = 
{
    firstName: "Steve",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
friends.bill = 
{
    firstName: "Bill",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
var list = function (friends) 
{
    for(var firstName in friends)
    {
        console.log(firstName);
    }        
}
var search = function (name)
{
    for(var firstName in friends)
    {
        if(friends[firstName].firstName === name)
        {
            console.log(friends[firstName]);
            return friends[firstName];
        }
    }     
}

```

### 1.8 Victory
```sh
var friends = new Object();
friends.steve = 
{
    firstName: "Steve",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
friends.bill = 
{
    firstName: "Bill",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
var list = function (friends) 
{
    for(var firstName in friends)
    {
        console.log(firstName);
    }        
}
var search = function (name)
{
    for(var firstName in friends)
    {
        if(friends[firstName].firstName === name)
        {
            console.log(friends[firstName]);
            return friends[firstName];
        }
    }     
}
```
