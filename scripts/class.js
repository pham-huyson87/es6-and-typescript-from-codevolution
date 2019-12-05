"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let person0 = new Person();                                   // Do NOT work
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var person = new Person();
console.log(typeof Person); // function
console.log(person.greet === Person.prototype.greet); // true
employee();
function employee() { } // The function is hoisted
employee();
