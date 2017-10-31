
# Unit Four: Part Two - Dragon Slayer


1.1 What you will be building

```sh
var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}
```

1.2 Declare Variables 
```sh
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
```

1.3 The 'While' Loop

```sh
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying) {
    
    slaying = false;    
}
```


1.4 The First If Statement

```sh
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying) {
    if(youHit === 1) {
        console.log("You have hit the Dragon!")
    }
    else {
        console.log("The Dragon has slain you!")
    }
    slaying = false;    
}

```


1.5 The Second IF statement

```sh
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying) {
    if(youHit === 1) {
        console.log("You have hit the Dragon!")
        totalDamage += damageThisRound;
        
        if(totalDamage >= 4) {
           console.log("You have slain the Dragon!"); 
        }
    }
    else {
        console.log("The Dragon has slain you!")
    }
    slaying = false;    
}

```


1.6 Well Done

```sh
var slaying = true;
var youHit = Math.floor(Math.random() * 10);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 4;

while(slaying) {
    if(youHit === 1) {
        console.log("You have hit the Dragon!")
        totalDamage += damageThisRound;
        
        if(totalDamage >= 4) {
           console.log("You have slain the Dragon! You have won!");
           slaying = false;
        }
        else {
           youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("The Dragon has slain you!")
    }
    slaying = false;    
}

```
