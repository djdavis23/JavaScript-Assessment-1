//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
me.name = "Don Davis";
me.age = 48;
me["hair color"] = "blond";

console.log(`Objects assessment #1: ${me.name} ${me.age} ${me['hair color']} `);

//2. Iterate over the object to console.log the propery or key names. 
let props = "";
let keys = Object.keys(me);
for (let index = 0; index < keys.length; index++) {
	const element = keys[index];
	props += (element + " ");
}
console.log("Objects assessment #2:  " + props);

