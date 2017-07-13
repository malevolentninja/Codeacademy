1. You have already been introduced

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);

2. The Client/Server Relationship 

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
                  
3. No REST for the Wicked 
// REST = REpresentation State Transfer //
// You (the client) make an HTTP request. What sends the response?

// A: The Internet
// B: The World Wide Web
// C: The server
// D: The waiter

var answer = 'C'

4. A RESTful API
// Example from API - format JSON //

// {
//   "myBlog": {
//     "pageViews": "4720",
//     "subscribers": "1711",
//     "numberOfPosts": "37",
//     "mostRecentPost": "2013-01-04",
//   }
// }

5. Makring a Request 
// xhr variable = XML HTTP Request //
// console.log xhr.status and xhr.statusText to send through request //

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
// Add your code below!
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);

// Answer 200 OK //

6. The Four Verbs 
/*  HTTP core methods
GET: retrieves information from the specified source (you just saw this one!)
POST: sends new information to the specified source.
PUT: updates existing information of the specified source.
DELETE: removes existing information from the specified source. */ 

// no code to write. //


