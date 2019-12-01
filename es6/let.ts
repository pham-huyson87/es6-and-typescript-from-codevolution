

function greetPerson(name) {

    /*
    var greet;
    */
    
    if (name === "Huy") {
        greet = "Hello Huy";
    } else {
        greet = "Hi there"
    }

    var greet;      //  var is hoisted
    //let greet;        let is NOT hoisted

    console.log(greet);
}

greetPerson("Huy");


var a = 1;
var b = 2;

if (true) {
    var a = 10;
    let b = 20;

    console.log(a);     // 10
    console.log(b);     // 20
}

console.log(a);         // 10
console.log(b);         // 2