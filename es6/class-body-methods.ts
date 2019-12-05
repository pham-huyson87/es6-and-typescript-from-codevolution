export {};


class Person {

    private name;

    constructor(name) {
        this.name = name;

        console.log(this.name + " Constructor");
    }

    greetPerson() {
        console.log("Hello " + this.name);
    }


    static staticMethod() {
        console.log("Static Method");
    }
}

let person = new Person("Huy");
person.greetPerson();


Person.staticMethod();