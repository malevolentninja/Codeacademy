1. If/Else

var isEven = function(number) {
if (number % 2 === 0){
return(true);
}

else{
return(false);
}
};

isEven(3);

2. If / Else of / Else

var isEven = function(number) {
if (number % 2 === 0){
return(true);
}

else if (isNaN(number)) {
return(" This is not a number!");
} 
else{
return(false);
}
};

isEven(3);

3. For or While

// Write your loop below!

var count = 2
 while (count < 10) {
    console.log("while again!");
    count++;
}

4. Sneak Preview: the switch statement

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

5. Adding to an existing switch 

var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red'solor!");
    break;
  case 'blue':
    console.log("That'site color, too!");
    break;
  case 'yellow':
    console.log("It like yellow");
    break;
  default:
    console.log("It think that's a primary color!");
}

6. Practice with Switch 

var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
     default:
    console.log("We don't have this one");
  
}

7. More Practice with Switch 

var answer = prompt("Which is your favorite city?");

switch(answer) {
  case 'London':
    console.log("Where the Queen lives?");
    break;
  case 'Paris':
    console.log("Joie de vivre");
    break;
  case 'Milan':
    console.log("Fashonista?");
    break;
  default:
    console.log("Oops in this list!");
}

8. All on your own 

// Write your code below!

var flower = prompt("Which flower do you love?");

switch(flower) {
    case 'Rose':
        console.log(" Signature flower");
        break;
    case 'Bluebells':
        console.log("Dusty bluebells");
        break;
    case 'Sunflower':
        console.log(" Sun bringers.");
        break;
    default:
        console.log("Never heard of this one.");
}


9. Mid Lesson Breather 
// Nothing to write


10. Overview 

// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true ;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

11. And 
// Declare your variables here!
var hungry = true;
var foodHere = true;

var eat = function() {
   if ( hungry && foodHere ) {
        return true;
    }
    else { 
        return false;
    }
};


12. Or
// Declare your variables here!
var bored = true;
var tired = false; 

var nap = function() {
 if ( bored || tired ) {
        return true;
    }
    else {
        return false;
    }
};


13. Not

// Declare your variables here!
var programming = !true;


var happy = function() {
if (programming === false) {
        return true;
    }
    else {
        return false;
    }
};

14. Review 

//Nothing to write
