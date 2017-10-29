// Control Flow 

// 1. Introduction to control Flow 
// No code to write


//2. if/else Statement

var harryPotterFan = true;
if (harryPotterFan) {
  console.log('Mischief managed.');
}
 else { 
  console.log('I lead a muggle\'s life.');
  
};

//3. Comparison Operators 

var hungerLevel = 5;
if (hungerLevel > 7){
  console.log('Time to eat!');
}
else {
  console.log('Let\s eat later');
};

var hungerLevel = 10;
if (hungerLevel > 7){
  console.log('Time to eat!');
}
else {
  console.log('Let\s eat later');
};

//4. Comparisons Operators II

var moonPhase = 'full';
if (moonPhase === 'full'){
  console.log('Howwwwlll!!');
}
else {
  console.log('I swear I am not a werewolf...');
};

//5. Else If Statements 

var moonPhase = 'solar eclipse';
if (moonPhase === 'full'){
  console.log('Howwwwlll!!');
}
else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
}
else if (moonPhase === 'mostly new')
{
  console.log('Back on two feet');
} 

else  {
  console.log('Invalid moon phase');
};


//6. Logical Operators 

/* First part used && , needs both things to be true

var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' && foggyNight){
  console.log('Howwwwlll!!');
}
else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
}
else if (moonPhase === 'mostly new')
{
  console.log('Back on two feet');
} 

else  {
  console.log('Invalid moon phase');
};



*/

// uses || operator , needs only one thing true

var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' || foggyNight){
  console.log('Howwwwlll!!');
}
else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
}
else if (moonPhase === 'mostly new')
{
  console.log('Back on two feet');
} 

else  {
  console.log('Invalid moon phase');
};




//7. Switch Statements 

var moonPhase = 'full';


switch (moonPhase) {
  case 'full':
  console.log('Howwwwlll!!');
    break;

case 'mostly full':
  console.log('Arms and legs are getting hairier');
break;

  case 'mostly new':
  console.log('Back on two feet');
break;
    // below code to run if no case is true
  default: 
    console.log('Invalide moon phase');
    break;
};


//8. Review Control Flow

//no code to write. 
