const displayColor = (message, ...colors) => {          // Use of "rest" operator here

    for (let i in colors) {
        console.log(colors[i]);
    }
};


const msg = "List of Colors"
const colorAraray = ['Orange', 'Yellow', 'Indigo'];


displayColor(msg, ...colorAraray);                     // Use of "spread" operator here