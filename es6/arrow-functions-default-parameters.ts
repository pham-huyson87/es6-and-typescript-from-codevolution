

const percentBonus = () => 0.1;
const getVal = (value=10, bonus=value*percentBonus()) => {
    console.log(value + bonus);
};


getVal();
getVal(20);
getVal(20, 30);
getVal(undefined, 30);
