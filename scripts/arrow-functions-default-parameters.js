var percentBonus = function () { return 0.1; };
var getVal = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentBonus(); }
    console.log(value + bonus);
};
getVal();
getVal(20);
getVal(20, 30);
getVal(undefined, 30);
