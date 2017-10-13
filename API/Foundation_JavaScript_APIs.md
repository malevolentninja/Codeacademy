## 1. You have already been introduced


```sh
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
```

## 2. The Client/Server Relationship 

			 //////////
			  //Server//
			   //////////
                      //    //////////       \\
                    //      //////////         \\
                  //            ||               \\
                //       //     ||     \\          \\
       //////////       //      ||      \\          //////////
       //Client//      //       ||       \\         //Client//
       //////////     //        ||        \\        //////////
                  ////////// ////////// //////////
                  //Client// //Client//	//Client//
                  ////////// ////////// //////////
                  
## 3. No REST for the Wicked 

REST = REpresentation State Transfer 
You (the client) make an HTTP request. 

What sends the response?

A: The Internet
B: The World Wide Web
C: The server
D: The waiter

var answer = 'C'

## 4. A RESTful API
Example from API - format JSON 


```sh
 {
   "myBlog": {
     "pageViews": "4720",
     "subscribers": "1711",
     "numberOfPosts": "37",
     "mostRecentPost": "2013-01-04",
   }
 }
```

## 5. Makring a Request 
 ```sh xhr variable = XML HTTP Request ```
 console.log xhr.status and xhr.statusText to send through request 

 ```sh 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
// Add your code below!
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);
```
 
Answer 200 OK

## 6. The Four Verbs 

HTTP core methods
GET: retrieves information from the specified source (you just saw this one!)
POST: sends new information to the specified source.
PUT: updates existing information of the specified source.
DELETE: removes existing information from the specified source. 

	 no code to write. 

## 7. Anatomy of a Request
 ```sh
 POST /codecademy/learn-http HTTP/1.1
 Host: www.codecademy.com
 Content-Type: text/html; charset=UTF-8
```
 
Name = Eric & Age = 26

## 8. EndPoints
What are the four commonly used HTTP methods ("verbs")?

A: FIND, SEND, UPDATE, REMOVEB: CREATE, READ, UPDATE, DELETE
C: GET, SEND, PUT, DELETE
D: GET, POST, PUT, DELETE

var answer = 'D'

## 9. Authentication & API Keys

```sh
// Example API key 
var apiKey = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9";
```

## 10. HTTP Status Codes

```sh
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/doesnt_exist", false);
xhr.send();
// Add your code below!
console.log(xhr.status);
// Answer: 404
```

## 11. Anatomy of a Response 

HTTP response structure: 
A response line, which includes the three-digit HTTP status code;
A header, which includes further information about the server and its response;
The body, which contains the text of the response.

```sh
 HTTP/1.1 200 OK
 Content-Type: text/xml; charset=UTF-8

 <?xml version="1.0" encoding="utf-8"?>
 <string xmlns="https://www.codecademy.com/">Accepted</string>
```

## 12. Parsing XML

// XML =  Xtensible Markup Language
```sh
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
```

## 13. Parsing JSON
// JSON = Java Script Object Notation
```sh
var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);
```

## 14. XML or JSON?
// to know the type of data an API will send is via documentation!
// code
	
## 15. REST Constraints and Requirements
```sh
// 1. HTTP is a protocol that connects clients and ______.
var answer1 = 'Server'

// 2. The four HTTP methods are GET, POST, ___, and DELETE.
var answer2 = 'PUT'

// 3. A ___ error means the server goofed up. (200, 300, 400, or 500)
var answer3 = 404
```

## 16. Requests

```sh
xhr = new XMLHttpRequest();
xhr.open("GET","https://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
```


## 17. Authentication and API Keys

What's an API key?

A: An alphanumeric string used to identify you to an API
B: An OAuth token
C: An All-Purpose Internet key
D: The tool used to unlock an API gate

var answer = 'A'

## 18. XML and JSON

 What data format is shown below? 
	 
```sh
 {
   "Cartoon Foxes": {
     {
       "Name": "Fox Tall",
       "Job": "Bein' tall"
     },
     {
       "Name": "Fox Small",
       "Job": "Bein' small"/     }
   }
 }
```
var answer = 'JSON'

## 19. You Did It! 
// basics of HTTP and REST complete
