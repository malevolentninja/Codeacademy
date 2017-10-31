# Dealing with the DOM

### 1. The childNodes Property

index.html
```sh
<!DOCTYPE html>
<html>
    <head>
        <title>Dealing with the DOM</title>
        <script src="dom.js"></script>
    </head>
    <body>
        <div id="mainHeading">
            <h1>Garden Tools</h1>
        </div>
        <div id="content">
        <ul id="gardenTools">
            <li>Spade</li>
            <li>Lawnmower</li>
            <li>Leaf Rake</li>
            <li>Shears</li>
            <li> Fork</li>
        </ul>
        </div>
        <input id="btn" type="button"value="Count Tools" />
    </body>
</html>
```
dom.js
```sh

function countItems() {
    var ulElement = document.getElementById('gardenTools');
    var count = 0;
    for(var i=0; i < ulElement.childNodes.length; i++){
        if(ulElement.childNodes[i].nodeType == 1) count++;
    }
    alert(count + " tools are listed.");
}
window.onload = function() {
    document.getElementById('btn').onclick = countItems;
};
```


### 2. Creating Element Nodes

index.html
```sh
<!DOCTYPE html>
<html>
    <head>
        <title>Dealing with the DOM</title>
        <script src="dom.js"></script>
    </head>
    <body>
        <div id="mainHeading">
            <h1>Garden Tools</h1>
        </div>
        <div id="content">
            <ul id="gardenTools">
                <li>Spade</li>
                <li>Lawnmower</li>
                <li>Leaf Rake</li>
                <li>Shears</li>
            </ul>
        </div>
        <input id="btn" type="button"value="Count Tools" />
    </body>
</html>
```

```sh
function countItems() {
    var ulElement = document.getElementById('gardenTools');
    var count = 0;
    for(var i=0; i < ulElement.childNodes.length; i++){
        if(ulElement.childNodes[i].nodeType == 1) count++;
    }
    alert(count + " tools are listed.");
    
    // generate and locate a horizontal line
    var line = document.createElement('hr');
    document.getElementById('content').appendChild(line);
}
window.onload = function() {
    document.getElementById('btn').onclick = countItems;
};

```


### 3. Creating Text Nodes

index.html
```sh
<!DOCTYPE html>
<html>
    <head>
        <title>Dealing with the DOM</title>
        <script src="dom.js"></script>
    </head>
    <body>
        <div id="mainHeading">
            <h1>Garden Tools</h1>
        </div>
        <div id="content">
            <ul id="gardenTools">
                <li>Spade</li>
                <li>Lawnmower</li>
                <li>Leaf Rake</li>
                <li>Shears</li>
            </ul>
        </div>
        <p> Food</p>
        
        
        <input id="btn" type="button"value="Count Tools" />
    </body>
</html>

```


dom.js
```sh
function countItems() {
    var ulElement = document.getElementById('gardenTools');
    var count = 0;
    for(var i=0; i < ulElement.childNodes.length; i++){
        if(ulElement.childNodes[i].nodeType == 1) count++;
    }
    alert(count + " tools are listed.");
    
    // generate a paragraph
    var para = document.createElement('p');
    //generate a new text node
    var newText = document.createTextNode("The list displays " + count + " tools.");
    // append the text node to the new paragraph
    para.appendChild(newText);
    // locate the paragraph in the DOM
    document.getElementById('content').appendChild(para);
}
window.onload = function() {
    document.getElementById('btn').onclick = countItems;
};
```


### 4. Reading Attribute Values


```sh
function countItems() {
    var ulElement = document.getElementById('gardenTools');
    var count = 0;
    for(var i=0; i < ulElement.childNodes.length; i++){
        if(ulElement.childNodes[i].nodeType == 1) count++;
    }
    alert(count + " tools are listed in element " + ulElement.getAttribute('title'));
}
window.onload = function() {
    document.getElementById('btn').onclick = countItems;
};
```

### 5. Setting Element Attributes

```sh
function countItems() {
    var ulElement = document.getElementById('gardenTools');
    var count = 0;
    for(var i=0; i < ulElement.childNodes.length; i++){
        if(ulElement.childNodes[i].nodeType == 1) count++;
    }
    alert(count + " tools are listed.");
    ulElement.setAttribute('style', 'background-color: #abc');
    
}
window.onload = function() {
    document.getElementById('btn').onclick = countItems;
};
```


