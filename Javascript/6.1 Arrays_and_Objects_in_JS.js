1. You know This!
list = [1, 2, 3, "toast", "cheese", "tomatoes"]

2. Access by offset
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages[2]);

3. Array properties

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages.length);

4. Iterating over an array

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}


5. Heterogeneous Arrays

var myArray = [2, false, "time"];

6. Arrays of arrays 

var newArray = [[1,2,3],["i", "love", "cake"], [3,4,5]]

7. Jagged Arrays 
var jagged = [[1,2,3,4],["red", "green", "blue"]]

8. Mid-Lesson breath 
// Nothing to write. 

9. Nouns and Verbs together

var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

10. Object syntax 

var me = {
    name: 'Malevolentninja',
    age: 22
};

11. Creating a new object 
var me = new Object();
me.name = "Malevolentninja";
me.age = 22;

12. Practice makes perfect 

var object1 = new Object();
object1.color = 'red';
var object2 = new Object();
object2.price = 45;
var object3 = new Object();
object3.size = 'massive';

13. Review 
// Nothing to write. 

14. Heteregeneous arrays 

var myObj = {
    color: 'red',
    size: 45
};   

var myArray = [4, true, "time", myObj] 

15. Multidimensional arrays 

var newArray = {
    color: 'red',
    size: 45
};
    
var newArray = [[4, true], [myObj]]

16. Editing an existing object 

var myObject = {
  name: 'Diamond',
  type: 'Most excellent',
  interests: ['swimming','coding']  
};

17. Creating your own objects 

 var myOwnObject = {
    properties: ['small','spider','black'],
    creature: 'black widow',
    size: 12,
    bool: true
    
};
