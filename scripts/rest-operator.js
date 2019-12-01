var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors); // colors is a Array
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of Colors";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');
