export default class Person {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
		this.init();
	}
	init(){
		console.log(`${this.firstName} ${this.lastName}`);
	}
};


