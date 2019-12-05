//export {};


class Person {
    constructor() {
        console.log("Person constructor");
    }

    getId() {
        return 10;
    }
}


class Employee extends Person {
    constructor(name) {
        super();                                        // Mandatory
        console.log(name + " Employee constructor");
    }

    getId() {
        return super.getId() + 20;
    }
}


let e = new Employee("Huy");

console.log(e.getId());                                 // 30