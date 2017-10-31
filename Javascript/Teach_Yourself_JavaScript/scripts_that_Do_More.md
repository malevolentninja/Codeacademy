# Scripts that Do More

### 1. The if() statement
```sh
var age = prompt("How old are you?");
var message = "";
if(isNaN(age)) message = "Please enter a numeric value";
if(age < 18) message = "So young!";
if(age >= 18) message = "You're an adult!";
console.log(message);
```

### 2. The if() statement using 'else'

```sh
var age = prompt("How old are you?");
var message = "";
if(age < 18) {
    message = "So young!";
} else {
    message = "You're an adult!";
}

console.log(message);
```

### 3. Testing for equality

```sh
var days = prompt("How many days of the week are there?");
var message = "";
if(days == 7) {
    message = "That's right, there are 7 days.";
} else {
    message = days + " days? Are you sure?";
}

console.log(message);

```


### 4. The while() loop

```sh
var count = 0;
while(count < 10) {
    console.log("The value of count is: " + count);
    count++;
}
```

### 5. The for() loop

```sh
var sum = 0;
for(var count = 0; count < 20; count++) {
    sum = sum + count;
}
console.log(sum);
```


