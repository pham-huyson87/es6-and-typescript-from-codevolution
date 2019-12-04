

const createPerson = (firstName, lastName, age) => {

    const fullNname = firstName + " " + lastName;
    const nickname = "nick name";

    return {
        firstName,
        lastName,
        fullNname,
        isSenior() {
            return age > 60;
        }
        [nickname]: "Super coder"
    };
};



const newPerson = createPerson("Huy", "Pham", 32);

console.log(newPerson.firstName);
console.log(newPerson.lastName);
console.log(newPerson.fullNname);
console.log(newPerson.isSenior());

console.log(newPerson);
