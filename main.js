import * as greet from '/module2.js';
import Person from '/module3.js';
import webassembly from '/wasm_in_js_modules/pkg/wasm_in_js_modules.js';

const wasm = webassembly().then((resolved)=>{
	resolved.greet("Jeroen");
	resolved.run();
	//greet.sayHello("Jeroen");
	//const Jeroen = new greet.Person("Jeroen", "van den Hoek");
	//const JJ = new Person("JJ", "van den Hoek");
});

