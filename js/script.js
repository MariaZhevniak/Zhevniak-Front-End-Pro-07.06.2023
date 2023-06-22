class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	personInfo() {
		return {
			'Name': this.name,
			'Age': this.age,
		}
	}

}
const personTom = new Person('Tom', 20);
const personJohn = new Person('John', 17);




class Auto {
	constructor(brand, model, date, numberplate) {
		this.brand = brand;
		this.model = model;
		this.date = date;
		this.numberplate = numberplate;
		this.owner = null;
	}
	setOwner(owner) {
		if(owner instanceof Person && owner.age > 18) {
			this.owner = owner;
		} else {
			console.log('Your age is under 18');
			
		}
	}
	getFullInfo() {
		console.log({
			brand: this.brand,
			model: this.model,
			date: this.date,
			numberplate: this.numberplate,
			owner: this.owner? this.owner.personInfo() : 'This car has no owner',
		});
	}

}
const toyotaCar = new Auto('Toyota', 'RAV4', '2010', 'BH2038CA');
const renaultCar = new Auto('Renault', 'Megane', '2015', 'BH3056KE');

toyotaCar.setOwner(personTom);
toyotaCar.getFullInfo();

renaultCar.setOwner(personJohn);
renaultCar.getFullInfo();

//
function Persona(name, age) {
	this.name = name;
	this.age = age;

	this.personInfo = () => {
		return {
			'Name': this.name,
			'Age': this.age,
		}
	}
}

function Car(brand, model, date, numberplate) {
	this.brand = brand;
	this.model = model;
	this.date = date;
	this.numberplate = numberplate;
	this.owner = null;

	this.setOwner = (owner) => {
		if (owner instanceof Persona && owner.age > 18) {
			this.owner = owner;
		} else {
			console.log('Your age is under 18');
		}
	};

	this.getFullInfo = function() {
		console.log({
			brand: this.brand,
			model: this.model,
			date: this.date,
			numberplate: this.numberplate,
			owner: this.owner ? this.owner.personInfo() : 'This car has no owner',
		});
	};
}

const personJack = new Persona('Jack', 23);
const renaultLogan = new Car('Renault', 'Logan', '2018', 'BH1374BE');
renaultLogan.setOwner(personJack);
renaultLogan.getFullInfo();

const personLisa = new Persona('Lisa', 16);
const toyotaCorolla = new Car('Toyota','Corolla', '2019', 'BH6539KA');
toyotaCorolla.setOwner(personLisa);
toyotaCorolla.getFullInfo();