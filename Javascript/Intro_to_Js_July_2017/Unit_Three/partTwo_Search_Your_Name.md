# Unit Three: Part Two - Search Text for your name 


### 1.1 What you'll be building

```sh
text = "Hey hai hella yus , yaddah , yippee ki yay Olivia\ blah blah blah apples blah apples and candy but also Olivia\  garlic and cauliflower along with a few spices make a greate meal blah blah Olivia";

var myName = "Olivia";
var hits = [];

// Look for O
for (var i=0; i < text.length; i++){
    if(text[i] === "O") {
     // If we find it, add characters up to 
     // the length of my name to the array
for(var j = i; j <(myName.length + i); j++){
hits.push(text[j]);
    }
}
}

if(hits.length === 0){
    console.log("Your name wasn't found!");
} else {
    consoloe.log(hits);
}


```

### 1.2 Declare your variables
```sh
var text = "Lorem ipsum dolor sit amet, John consectetur adipiscing elit. Praesent quis dictum nulla. Nullam condimentum lacinia turpis a semper.";

var myName = "Julie";
var hits = [];
```
### 1.3 Your First "For" Loop
```sh
var text = "Lorem ipsum dolor sit amet, John consectetur adipiscing elit. Praesent quis dictum nulla. Nullam condimentum lacinia turpis a semper.";
var myName = "Julie";
var hits = [];
 
for(var i =0;i <= text.length; i++)
{
}
```
### 1.4 Your "If" statement
```sh
var text = "Lorem ipsum dolor sit amet, John consectetur adipiscing elit. Praesent quis dictum nulla. Nullam condimentum lacinia turpis a semper.";
var myName = "Julie";
var hits = [];
 
for(var i =0;i <= text.length; i++)
{
    if(text[i] === "J")
    {
            
    }
}
```
### 1.5 Your Second "For" Loop
```sh
var text = "Stewart containing some text for Stewart written and developed by Stewart";
 
var myName = "Stewart";
 
var hits = [];
 
/* assign the value of 0 to i and continue to the loop while i is less than the length of the variable 'text', and add 1 to i after executing the code block  */
for (i = 0; i < text.length + 1; i++) {
    /* if the array value of the 'text' variable is equal to the 0 point of the myName variable */
    if(text[i] === myName[0]) {
        /* then assign the value of i to j and continue the loop while j is less than the length of the myName variable plus the value of i */
        for(var j = i; j < (myName.length + i); j++) {
            /* if the array value of the variable 'text' is equal to the array value of j minus i for the 'myName' variable, push the value of j on to the hits array */
            if(text[j] === myName[j-i]) {
                hits.push(text[j]);   
            }
        }
    }
}
 
if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}

```
### 1.6 Log It!
```sh

var text = "Stewart containing some text for Stewart written and developed by Stewart";
 
var myName = "Stewart";
 
var hits = [];
 
/* assign the value of 0 to i and continue to the loop while i is less than the length of the variable 'text', and add 1 to i after executing the code block  */
for (i = 0; i < text.length + 1; i++) {
    /* if the array value of the 'text' variable is equal to the 0 point of the myName variable */
    if(text[i] === myName[0]) {
        /* then assign the value of i to j and continue the loop while j is less than the length of the myName variable plus the value of i */
        for(var j = i; j < (myName.length + i); j++) {
            /* if the array value of the variable 'text' is equal to the array value of j minus i for the 'myName' variable, push the value of j on to the hits array */
            if(text[j] === myName[j-i]) {
                hits.push(text[j]);   
            }
        }
    }
}
 
if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}

```
### 1.7 Victory! 
```sh

var myName = "Stewart";
 
var hits = [];
 
/* assign the value of 0 to i and continue to the loop while i is less than the length of the variable 'text', and add 1 to i after executing the code block  */
for (i = 0; i < text.length + 1; i++) {
    /* if the array value of the 'text' variable is equal to the 0 point of the myName variable */
    if(text[i] === myName[0]) {
        /* then assign the value of i to j and continue the loop while j is less than the length of the myName variable plus the value of i */
        for(var j = i; j < (myName.length + i); j++) {
            /* if the array value of the variable 'text' is equal to the array value of j minus i for the 'myName' variable, push the value of j on to the hits array */
            if(text[j] === myName[j-i]) {
                hits.push(text[j]);   
            }
        }
    }
}
 
if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}

```
