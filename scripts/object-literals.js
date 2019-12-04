var createPerson = function (firstName, lastName, age) {
    var _a;
    var fullNname = firstName + " " + lastName;
    var nickname = "nick name";
    return _a = {
            firstName: firstName,
            lastName: lastName,
            fullNname: fullNname,
            isSenior: function () {
                return age > 60;
            }
        },
        _a[nickname] = "Super coder",
        _a;
};
var newPerson = createPerson("Huy", "Pham", 32);
console.log(newPerson.firstName);
console.log(newPerson.lastName);
console.log(newPerson.fullNname);
console.log(newPerson.isSenior());
console.log(newPerson);
