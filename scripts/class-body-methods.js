"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Person.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    Person.staticMethod = function () {
        console.log("Static Method");
    };
    return Person;
}());
var person = new Person("Huy");
person.greetPerson();
Person.staticMethod();
