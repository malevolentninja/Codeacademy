# Using Functions

### 1. Arguments
```sh
function cube(x) {
    console.log(x * x * x);
}
cube(5);
// edit the above line to pass a different numeric value to the function.
```

### 2. Using multiple Arguments

```sh
function getArea(w, h) {
    console.log("Area is equal to " + w*h);
}

// write your code statement here:
function getArea(w, h){
   alert(3.5 * 6);
}

```

### 3. returning values from functions

```sh
function cube(x) {
    return x * x * x;
}
var result = cube(10);
// edit the argument in the above line to try passing other values 
// to the cube() function
console.log(result);
```


### 4. Functions can call Other Functions

```sh
function cube(x) {
    return x*x*x;
}

function sphereVolume(radius) {
    return cube(radius) * 3.14159 * 4 / 3;
}

var radius = 35;
console.log("For radius = " + radius + ", sphere volume is " + sphereVolume(radius));
```

### 5. A Function to Convert Celsius to Fahrenheit

```sh
function tempConvert(temp) {
    return (1.8 * temp) + 32;
}
var tempC = 100;
var tempF = tempConvert(tempC);
// edit the above line to convert different temperatures
console.log(tempC + " degrees Celsius equates to " + tempF + " degrees Fahrenheit.");
```
