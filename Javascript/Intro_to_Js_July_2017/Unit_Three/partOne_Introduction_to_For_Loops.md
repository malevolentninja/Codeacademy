# Unit Three: Part One - Introduction to For Loops

### 1. Why use for loops?
```sh
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
```
### 2. First for loop
```sh
for (var counter = 1; counter < 11; counter++) 
{
    console.log(counter);
}
```
### 3. Starting the for loop
```sh
// Change where the for loop starts.
for (var i = 5; i < 11; i = i + 1){
    console.log(i);
}
```

### 4. Ending the for loop
```sh
// Edit this for loop
for (var i = 4; i < 24; i = i + 1) {
    console.log(i);
}
```
### 5. Controlling the for loop
```sh
for (var i = 5; i < 51; i+=5)
{
    console.log(i);
}
```

### 6. How does it work?
```sh
for (var i = 8 ; i < 120; i+=12) 
{
    console.log(i);
}
```sh

### 7. Practice counting down
```sh
// Example of infinite loop. THIS WILL CRASH YOUR
// BROWSER. Don't run the code without changing it!

for (var i = 10; i >= 0; i--) {
    console.log(i);
}
```

### 8. Last practice for loop
```sh
for(var i=100; i>0; i-=5)
{
 console.log(i);
}
```

### 9. Meet arrays
```sh
// You are now declaring an array.
// Arrays are an awesome data structure!

var junk = ["Monk","Thunk",3,9];
console.log(junk)
```

### 10. Array positions
```sh
var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3])
```

### 11. Loops and arrays I
```sh
// Let's print out every element of an array using a for loop
var cities = ["Melbourne", "Amman", "Helsinki", "London", "Paris", "Berlin","Beijing", "NYC"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
```
### 12. Loops and arrays II
```sh
var names = ["Jack","Agatha", "Myrtle", "Helen", "Daniel"];
for(var i=0; i < 5;i++)
{
    console.log("I know someone called " + names[i])
}
```
### 13. Conclusion

//No code necessary
