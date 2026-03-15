
window.addEventListener('load', function() {
  console.log('the webpage has loaded');
})


var person =  new Object();

person['firstName'] = 'John';
person['lastName'] = 'Doe';


var firstNameP = ('firstName');

console.log(person[firstNameP]);
console.log(person);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "111 Main St";
person.address.city = " New York";
person.address.state = "NY";
person.address.zip = "10001";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);

var object = { firstname: 'tony', lastname: 'stark'   };
console.log(object);

person = new Object();
person.firstName = 'John';
person.lastName = 'Doe';

cubicBezier(0.1, 0.7,0.9,0.5)

