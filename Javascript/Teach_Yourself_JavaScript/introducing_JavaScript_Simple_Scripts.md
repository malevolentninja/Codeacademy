# Introducing JavaScript Simple Scripts

### 1. Using window.alert()
```sh
window.alert("My first alert pop-up box");
```

### 2. Using document.write()

```sh
document.write("Welcome to the page!");
```

### 3. Hello World in JavaScript

```sh
window.alert("Hello World");
```


### 4. Commenting your code

```sh
// this is a single line comment.

/*
This is a multi-line comment
It can span several lines
*/

// This comment is worth one single line

/*
This comment can span for as many lines
as I wish to. 

*/
```

### 5. Variables

```sh
var productName = "Chocolate Bar";
var productPrice = 5.00;
console.log("The price of the " + productName + " is $" + productPrice);
```

### 6. Operators

```sh
var netPrice = 25.95;
var productQuantity = 3;
var taxRate = 15; // rate in percent

var subTotal = netPrice * productQuantity;

var tax = subTotal * taxRate / 100;

// complete the following line, by adding variable 'tax' to variable 'subTotal'
// don't forget to end your line with a semicolon
var Total = tax + subTotal;

console.log('The invoice total is $' + Total);
```
