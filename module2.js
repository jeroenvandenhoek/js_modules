export function sayHello(name) {
	console.log("hello " + name);
};
export class Person {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
		this.init();
	}
	init(){
		console.log(`${this.firstName} ${this.lastName}`);
	}
};


function hoy(){
	console.log("hoy");
}

