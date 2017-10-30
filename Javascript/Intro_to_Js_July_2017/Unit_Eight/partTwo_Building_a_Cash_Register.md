# Unit Eight: Part Two - Building a Cash Register

### 1.1 Shut the Shop

```sh
//Create the object called cashRegister 
//and initialize its total property
var cashRegister = {
total: 0,
}
//Using dot notation change the total property
cashRegister.total = 2.99;
```

### 1.2 Manually add it up?

```sh
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);


//Show the total bill
console.log('Your bill is '+cashRegister.total);
```

### 1.3 Short-Term Memory

```sh
var cashRegister = {
    total: 0,
    add: function(itemCost) {
        this.total += itemCost;
    },
    
    
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;  
        case "milk": 
            this.add(1.23); 
            break;
        case "magazine": 
            this.add(4.99); 
            break;
        case "chocolate": 
            this.add(0.45); 
            break;
        
        
        }
        return true;
    }
};
cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");

console.log('Your bill is '+cashRegister.total);
```

### 1.4 I have to scan it more than once?

```sh
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item,num) {
        switch (item) {
        case "eggs": this.add(0.98*num); break;
        case "milk": this.add(1.23*num); break;
        case "magazine": this.add(4.99*num); break;
        case "chocolate": this.add(0.45*num); break;
        }
    }
};

cashRegister.scan("eggs",4);
cashRegister.scan("milk",4);
cashRegister.scan("magazine",4);
cashRegister.scan("chocolate",4);
//Show the total bill
console.log('Your bill is '+cashRegister.total);
```


### 1.5 Bleep Bleep

```sh
var cashRegister = {
    total:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function() {
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0; 
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

cashRegister.voidLastTransaction(); 
cashRegister.scan("chocolate", 3);


//Show the total bill
console.log('Your bill is '+cashRegister.total);
```

### 1.6 Over the Moon

```sh
function StaffMember(name,discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
}


var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("John",20);
```

### 1.7 You Deserved it!

```sh
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("John",20);


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    applyStaffDiscount: function(employee) {
        this.total -= this.total*employee.discountPercent/100;
    }
    
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
cashRegister.applyStaffDiscount(me);


// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
```
