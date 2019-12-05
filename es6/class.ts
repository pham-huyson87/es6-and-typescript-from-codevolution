export {};


//let person0 = new Person();                                   // Do NOT work

class Person {                                                  // The class is NOT hoisted
    greet() {}
}

let person = new Person();

console.log(typeof Person);                                     // function
console.log(person.greet === Person.prototype.greet);           // true



employee();
function employee() {}                                          // The function is hoisted
employee();


