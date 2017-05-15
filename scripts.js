

function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.marka + 'kolor to ' + this.color + ', a cena to ' + this.cena + '.');
}

var iPhone6S = new Telefon('Apple', 2250, 'srebrny');
var onePlusOne = new Telefon('OnePlus One', 1300, 'złoty');
var galaxyS6 = new Telefon('Samsung', 2000, 'biały');

iPhone6S.printInfo();
onePlusOne.printInfo();
galaxyS6.printInfo();