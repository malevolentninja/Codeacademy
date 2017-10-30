
# Unit Two: Part Two - Rock, Paper , Scissors



### 1.1 The Game

//no code

### 1.2 User choice

```sh
var userChoice = prompt("Choose: Rock, Paper or Scissors");
```

### 1.3 Computer Choice: Part One

```sh
var computer Choice = Math.random();
console.log(computerChoice);
```

### 1.4 Computer Choice: Part Two
```sh
if(computerChoice <= 0.33){
    computerChoice = "rock";
} else if(computerChoice <= 0.66){
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

console.log("Computer has chosen: " + computerChoice);
```

## Compare Function:

### 2.1 Both Choices the same
```sh

var compare = function(choice1, choice2){
    if(choice1 === choice2){
      return "the result is a tie!";
    }
}
```

### 2.2 What if choice 1 is Rock?


```sh
var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";
        }
    }
}

```

### 2.3 Choice 1 is Paper


```sh
var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        } else
        {
            return "paper wins";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    }
}
```

### 2.4 Choice 1 is Scissors

```sh
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
 computerChoice = "rock";
} else if(computerChoice <= 0.67) {
 computerChoice = "paper";
} else {
 computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

compare(userChoice, computerChoice);

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";
        }
    }
    else if(choice1 === "paper")
    {
        if(choice2 === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";
        }
    }
}

```


### 2.9 Next Steps

```sh
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
 computerChoice = "rock";
} else if(computerChoice <= 0.67) {
 computerChoice = "paper";
} else {
 computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

compare(userChoice, computerChoice);

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";
        }
    }
    else if(choice1 === "paper")
    {
        if(choice2 === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";
        }
    }
}
```
