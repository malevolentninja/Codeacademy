# Unit Four: Part One - Introduction to While Loops in Javascript

### 1. While we are at it
```sh
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
    console.log("Heads! Flipping again...");
    var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
```

### 2. While syntax
```sh
var understand = true;

while(understand === true){
    console.log("I'm learning while loops!");
    understand = false;
}
```

### 3. A fellow of infinite loops
```sh
understand = true;

while(understand){
    console.log("I'm learning while loops!");
    understand = false;
}
```

### 4. Brevity is the soul of programming
```sh
var bool = true;
while(bool){
    console.log("Less is more!");
    bool = false;
}
```
### 5. Practice makes perfect
```sh
var loop = function(){
var count = 0;
    while(count < 3){
        console.log("I'm looping!");
        count++
    }
};
loop();
```

### 6. Solo flight
```sh
//Remember to make your condition true outside the loop!
var a = true;
var soloLoop = function(){
while (a) {
console.log ("Looped once!");
a = false;
};

};

soloLoop();
```

### 7. Mid-lesson Breather

//No code necessary


### 8. When to 'while' and when to 'for'
```sh
var count = 3;

while(count < 15) {
    count++;
    console.log("This is a for loop and the count is...");
    console.log("The count is " + count);
}
for(;count < 10;) {
   count++;
   console.log("This is a for loop and the count is...");
   console.log("The count is " + count);
}
```

### 9. The 'do'/'while' loop
```sh
var loopCondition = false;

do {
    console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");    
} while (loopCondition);
```
### 10. To learn it, you gotta 'do' it
```sh
var count = 1;
var getToDaChoppa = function(){
do{
  console.log("Welcome to 'Nam");
  count++;
} while(count<2);
};

getToDaChoppa();
```

### 11. Review
```sh
var count = 1;
for(var count = 1; count<2;count++) {
    console.log("Hello, world!")
}
do{
    console.log("Hello, world!")
    count++;
} while(count<2);
```
