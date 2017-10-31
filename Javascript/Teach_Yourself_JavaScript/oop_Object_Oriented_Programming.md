# Object Oriented Programming

### 1. Creating an Object
```sh
var Car = new Object();

Car.color = "red";
// add a property 'color' to your object
// and set its value to "red".



console.log("The object Car has color: " + Car.color);
```

### 2. Anonymous Functions

```sh
var Car = new Object();

Car.color = "red";

// Using an anonymous function, add a method brake()
// that logs the string "Braking!" to the console:
function Brake() {
    console.log("Braking!")
}
Car.brake = Brake;

Car.brake();
```

### 3. Using a Constructor Function

```sh
function Person(personName){
    this.name = personName;
    this.info = "I'm a person called " + this.name;
    this.showInfo = function(){
        console.log(this.info);
    };
}

var name = prompt("Who are you?");
person1 = new Person(name);

// add code to create another Person object called person2, again via a prompt
// You'll need code similar to the two lines above.
var name = prompt("Who are you?");
person2 = new Person(name);

person1.showInfo();
person2.showInfo();
```


### 4. Using the 'prototype' keyword


```sh
function Person(personName){
    this.name = personName;
    this.info = "This person is called " + this.name;
    this.showInfo = function(){
        console.log(this.info);
    };
}

Person.prototype.sayHello = function(){
    console.log(this.name + " says Hello");
};

var name = prompt("Who are you?");
person1 = new Person(name);
person1.showInfo();
person1.sayHello();

```

### 5.  Extending Built-In Objects with Prototypes

```sh
var myValue = 34.62;

Number.prototype.negate = function() {
    return -1 * this;
};
console.log(myValue.negate());
// Using the above code as an example, complete the function below to extend 
// the Number type with another method called 'half' which will return
//  half the numerical value (this time without negating its sign)
Number.prototype.half = function() {
    return 2 / this;
};
// add a further line to output the answer to the console:
console.log(myValue.half());

```
