export {};


const employee = {
    firstname: "Huy",
    lastname: "Pham",
    gender: "Male"
};



let {firstname, lastname, gender} = employee;

console.log(firstname);
console.log(lastname);
console.log(gender);



let {firstname: f, lastname: l, gender: g} = employee;

console.log(f);
console.log(l);
console.log(g);
