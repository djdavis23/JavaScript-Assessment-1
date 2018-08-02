//1. What is the lenth of the following contacts array?

var contacts = [];

console.log("Arrays assessment #1:  " + contacts.length);


//2. Add the following people to the contacts array.

var jake = {
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
};
var matt = {
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
};

var tony = {
	name: 'Mark Ohnsman',
	email: 'mark@boisecodeworks.com',
	title: 'instructor'
};
var andrew = {
	name: 'Darryl Kilzer',
	email: 'darryl@boisecodeworks.com',
	title: 'instructor'
};
var tom = {
	name: 'Tom Day',
	email: 'tom@boisecodeworks.com',
	title: 'instructor'
};

contacts.push(jake);
contacts.push(matt);
contacts.push(tony);
contacts.push(andrew);
contacts.push(tom);

let contactList = "";

for (let i = 0; i < contacts.length; i++) {
	const element = contacts[i];
	contactList += (element.name + " ");
}

console.log("Arrays assessment #2:  " + contactList);

//3. Woops after adding all of those people to the same contacts list you realized you need a list just the instructors. Create a new variable named instructors populate it using contacts array. 

let instructors = contacts.filter(contact => contact.title == 'instructor');
let instructorList = "";
for (let index = 0; index < instructors.length; index++) {
	const element = instructors[index];
	instructorList += (element.name + " ");
}


console.log("Arrays assessment #3:  " + instructorList);



