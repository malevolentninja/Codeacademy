# Different Types of Data

### 1. Numbers
```sh
var val1 = 5 / 3;
var val2 = 4.76523;
var val3 = "horse";

console.log(val1 + " is of type: " + typeof val1);
console.log(val2 + " is of type: " + typeof val2);
console.log(val3 + " is of type: " + typeof val3);
```

### 2. NaN(Not a Number) Data Type

```sh
var val1 = "horse" + 1.5;
console.log("val1 is of type: " + typeof val1);
console.log("The value of val1 is: " + val1);
```

### 3. parseFloat() and parseInt()

```sh
var myString = "101.500 Dalmations";
console.log("Integer value returned: " + parseInt(myString, 10));
console.log("Floating point value returned: " + parseFloat(myString));

/* System returns:
Integer value returned: 101
Floating point value returned: 101.5

*/

```


### 4. Boolean Data

```sh
var answer = window.confirm("Is it true what they say?");
console.log("You say it's " + answer);
console.log("But I think it's " + !answer);

```

### 5. Escape sequences

```sh
var message = "WARNING:\tError detected in input data";
window.alert(message);

```

### 6. Arrays

```sh
var days = ['Mon', 'Tues', 'Wed', 'Thurs', "Fri", "Sat", "Sun"];
console.log("Number of array elements: " + days.length);

```
