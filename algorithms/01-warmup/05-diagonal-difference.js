process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function getPrimaryDiagonalSum(a) {
    var pos = 0;
    var elements = [];

    for (var row = 0; row < a.length; row++) {
        elements[row] = a[row][pos];
        pos++;
    }

    return elements.reduce((a, b) => a + b);
}

function getSecondaryDiagonalSum(a) {
    var pos = 0;
    var elements = [];

    for (var row = a.length - 1; row >= 0; row--) {
        elements[pos] = a[row][pos];
        pos++;
    }

    return elements.reduce((a, b) => a + b);
}

function diagonalDifference(a) {
    return Math.abs(getPrimaryDiagonalSum(a) - getSecondaryDiagonalSum(a));
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for (a_i = 0; a_i < n; a_i++) {
        a[a_i] = readLine().split(' ');
        a[a_i] = a[a_i].map(Number);
    }
    var result = diagonalDifference(a);
    process.stdout.write("" + result + "\n");

}