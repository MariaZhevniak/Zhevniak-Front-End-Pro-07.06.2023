class Person {
	constructor(name, gender) {
		this.name = name;
		this.gender = gender;
	}
}

const personTom = new Person('Tom', 'male');
const personJohn = new Person('Jonh', 'male');
const personJack = new Person('Jack', 'male');
const personLisa = new Person('Lisa', 'female');

class Apartment {
	residents = [];

	addResident(resident) {
		if(resident instanceof Person) {
			this.residents.push(resident);
		}
	}

	getResidents() {
		console.log('Residents of this apartment:', this.residents);
	}
}
const apartment201 = new Apartment;
apartment201.addResident(personTom);
apartment201.addResident(personJohn);

const apartment202 = new Apartment;
apartment202.addResident(personJack);

const apartment203 = new Apartment;
apartment203.addResident(personLisa);

class House {
	constructor(maxOfApartments) {
		this.maxOfApartments = maxOfApartments;
	}
	apartments = [];

	addApartmnet(apartment) {

		if(apartment instanceof Apartment && this.apartments.length < this.maxOfApartments) {

			this.apartments.push(apartment);
		} else {

			console.log('The house is full already');
			}
		}
	
		getApartments() {
			console.log('Apartments of this house:', this.apartments);
		}
}

apartment201.getResidents();
apartment202.getResidents();
apartment203.getResidents();

const kadorrHouse = new House(3);
kadorrHouse.addApartmnet(apartment201);
kadorrHouse.addApartmnet(apartment202);
kadorrHouse.addApartmnet(apartment203);

// kadorrHouse.getApartments();

const pearlHouse = new House(2);
pearlHouse.addApartmnet(apartment201);
pearlHouse.addApartmnet(apartment202);
pearlHouse.addApartmnet(apartment203);

// pearlHouse.getApartments();