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

function printStep(size, total) {
    var steps = "#".repeat(size);

    var spacing = total - size;
    spaces = " ".repeat(spacing);

    console.log(spaces + steps);
}

function staircase(n) {
    for (var pos = 1; pos <= n; pos++) {
        printStep(pos, n);
    }
}

function main() {
    var n = parseInt(readLine());
    staircase(n);

}
