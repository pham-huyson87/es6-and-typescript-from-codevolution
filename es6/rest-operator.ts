
const displayColors = function(message, ...colors) {

    console.log(message);
    console.log(colors);                // colors is a Array
    console.log(arguments.length);


    for (let i in colors) {
        console.log(colors[i]);
    }
}


const message = "List of Colors";

displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');