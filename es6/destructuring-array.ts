export {};

const employee = ["Huy", "Pham", "male"];



const [firstname, lastname, gender="Male"] = employee;

console.log(firstname);
console.log(lastname);
console.log(gender);



const [, , onlyGender] = employee;

console.log(onlyGender);



const [fname, ...restElements] = employee;

console.log(restElements);