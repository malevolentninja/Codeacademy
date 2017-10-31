# JavaScript and Cookies


### 1. Escaping and Unescaping
```sh
var str = "Here's a (short) piece of text.";

console.log(str + '<br />' + escape(str));
```

### 2. The document.cookie property

```sh
console.log(document.cookie);
```

### 3. Writing a Cookie

```sh
var myName = prompt("What's your name?");
document.cookie = "user=" + escape(myName);
console.log(document.cookie);
```


### 4. Reading Cookies


```sh
var cookies = document.cookie.split(';');
for(var i = 0; i < cookies.length; i++){
    console.log(unescape(cookies[i]));
}
```

### 5.  Deleting Cookies

```sh
function del_cookie(name){
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
del_cookie('user');

// The following code to display cookie values is from Exercise 4:
var cookies = document.cookie.split(';');
for(var i = 0; i < cookies.length; i++){
    console.log(unescape(cookies[i]));
}
```

### 6. 


