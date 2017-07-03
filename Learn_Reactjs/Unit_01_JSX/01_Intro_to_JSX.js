1. 
No Code. 

2. Hello World 

var h1 = <h1>Hello world</h1>;

3. 
No Code. 

4. 
No Code. 

5. 
<p>Hello world</p>

6. 

var myArticle = <article></article>;

7. Attributes in JSX


var p1 = <p id="large">foo</p>;
var p2 = <p id="small">bar</p>

8. Nested JSX


var myDiv = (
  <div>
   	<h1>
     	Hello world
    </h1>
  </div>
);

9. JSX Outer Elements


  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
   </div>
);

10. Rendering JSX

var React = require('react');
var ReactDOM = require('react-dom');

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

11. ReactDOM render I

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

12. ReactDOM render II

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

/* INDEX HTML

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>

*/

13. Passing a Variable to ReactDOM.render()

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
myList = <ul>
    <li> Learn React	</li>
    <li> Become a Developer</li>
  </ul>
  
  ReactDOM.render(
  myList, 
  document.getElementById('app')
);

14. Virtual DOM
No code. 

15. JSX Recap

No code. 
