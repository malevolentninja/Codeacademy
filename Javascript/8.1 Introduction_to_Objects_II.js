//1. An Objective Review 

var james = {
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

var gabby = new Person("student",true);


//2. Fun with Functions

function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function(){
        console.log ("Hello!");
        return;
    };

}

var user = new Person("Codecademy Student",false);
user.speak();

//3. Literally Speaking 

var james = {
    job: "programmer",
    married: false,
    speak: function() {
        console.Log("Hello, I am feeling great");
        console.Log("Hello, I am feeling okay");
    }
};
james.speak("great");
james.speak("just okay");

//4. Can I see Your References?
    
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a "+this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();

//5. Who's in Your Bracket?

//6. I.D., Please

//7. Know Thyself

// 8. Dressed to Impress

//9. Getting IN-timate

//10. List ALL the properties

//
