/* Christmas Presents - Review of Objects *\


function Present(gift, size, color, owner, descriptions)
{
	this.size = size;
	this.color = color;
	var gift = gift;
	this.owner = owner;
	this.descriptions = descriptions;
	this.describePresent = function()
	{
		return "This is a "+this.size+", "+this.color+" present for "+this.owner+". "+this.descriptions;
	};
	this.openPresent = function()
	{
		var owner2 = prompt("Who are you?");
		if(this.owner===owner2)
		{
			return "You get a "+gift+".";
		}
		else
		{
			return "Wrong person!";
		}
	};
}
var pres1 = new Present('TV', 'big', 'black', 'Bort', "What might be inside?");
var pres2 = new Present('Ball', 'small', 'blue', 'Bert', "What could it be?");
console.log(pres1.openPresent());
console.log(pres2.openPresent());
console.log(pres1.describePresent());
console.log(pres2.describePresent());
