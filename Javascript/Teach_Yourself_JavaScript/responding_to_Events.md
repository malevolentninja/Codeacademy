# Responding To Events

### 1. Adding Event Handlers The Simple Way
```sh
<!DOCTYPE html>
<html>
    <head>
        <title>Event Handling</title>
    </head>
    <body>
        <input type="button" id="myButton" value="Click Me" onclick="[window.alert()]" />
    </body>
</html>


```

### 2. A Better Way to add Event Handlers

```sh
<!DOCTYPE html>
<html>
    <head>
        <title>Event Handling</title>
        <script>
        function addHandler(){
            document.getElementById('myButton').onclick = function(){
             window.alert("welcome");
            }
        }
        window.onload = addHandler;
        </script>
    </head>
    <body>
        <input type="button" id="myButton" value="Click Me" />
    </body>
</html>
```

### 3.Removing an Event Handler

```sh
<!DOCTYPE html>
<html>
    <head>
        <title>Event Handling</title>
        <script>
        function addHandler(){
            document.getElementById('myButton').onclick = function(){
                if(confirm("Remove onclick event handler?")){
                    document.getElementById('myButton').onclick = null;
                }
            }
        }
        window.onload = addHandler;
        </script>
    </head>
    <body>
        <input type="button" id="myButton" value="Click Me" />
    </body>
</html>

```


### 4. Default Action


```sh
<!DOCTYPE html>
<html>
    <head>
        <title>Event Handling</title>
        <script>
        function addHandler(){
            document.getElementById('myLink').onclick = function(){
                //this.href="http://www.microsoft.com";
            }
        }
        window.onload = addHandler;
        </script>
    </head>
    <body>
        <a href="http://www.google.com" target="_blank" id="myLink">My Link</a>
    </body>
</html>
```

### 5. Preventing Default Action

```sh
<!DOCTYPE html>
<html>
    <head>
        <title>Event Handling</title>
        <script>
        function addHandler(){
            document.getElementById('myLink').onclick = function(){
                this.href="http://www.microsoft.com";
                //return false;
            }
        }
        window.onload = addHandler;
        </script>
    </head>
    <body>
        <a href="http://www.google.com" target="_blank" id="myLink">My Link</a>
    </body>
</html>
```


