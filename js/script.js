function Phone(brand, price, color, memory, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.memory = memory;
	this.system = system;
}
Phone.prototype.printInfo = function() {
	document.write("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " it has " + this.memory + " and was released with system " + this.system + ".<br>");

}

var iPhone6S = new Phone("Apple iPhone 6S", 1750, "silver", "2GB", "iOS 9");
var onePlusOne = new Phone("OnePlus One", 1400, "black", "3GB", "Android 4.4 KitKat");
var galaxyS6 = new Phone("Samsung Galaxy S6", 800, "gray", "3GB", "Android 5.0 Lollipop");

iPhone6S.printInfo();
onePlusOne.printInfo();
galaxyS6.printInfo();
