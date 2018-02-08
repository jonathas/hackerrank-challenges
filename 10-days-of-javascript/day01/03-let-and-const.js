// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
// Print the area of the circle:
// Print the perimeter of the circle:

const PI = Math.PI;

function calculateArea(radius) {
    return PI * Math.pow(radius, 2);
}

function calculatePerimeter(radius) {
    return 2 * PI * radius;
}

// radius
let r = Number(readLine());

process.stdout.write("" + calculateArea(r) + "\n" + calculatePerimeter(r) + "\n");
