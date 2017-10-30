# DOM Objects and Built-In Objects

### 1. Using the confirm() dialogue
```sh
var answer = confirm("Are we having fun yet?");

console.log("You said: " + answer);
```

### 2. Using the prompt() dialogue

```sh
var answer = prompt("What is your full name?", "John Doe");

console.log("Hello there, " + answer);

```

### 3. The navigator Object

```sh
console.log("You are using " + navigator.appName);
console.log("On system: " + navigator.platform);
console.log("Browser Version: " + navigator.appVersion);
console.log("Cookies Enabled?: " + navigator.cookieEnabled);

/* System returns:
You are using Netscape
On system: MacIntel
Browser Version: 5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36
Cookies Enabled?: true

*/

```


### 4. Working with Dates and Times

```sh
var mydate = new Date(2015, 6, 21)
console.log("You created a new Date object with date part: " + mydate.toDateString());
console.log("and with time part: " + mydate.toTimeString());
/* System returns:

You created a new Date object with date part: Tue Jul 21 2015
and with time part: 00:00:00 GMT+0100 (BST)
*/
```

### 5. The Match object

```sh
// create a random number from 0 to 20
var myValue = 20 * Math.random();
console.log("Random number: " + myValue);
// Use the Math object to do some processing
console.log("The integer below is " + Math.floor(myValue));
console.log("The integer above is " + Math.ceil(myValue));
console.log("The closest integer is " + Math.round(myValue));

/* System Returns: 

Random number: 19.22257865138608
The integer below is 19
The integer above is 20
The closest integer is 19
*/

```
