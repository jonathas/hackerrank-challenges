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

function miniMaxSum(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var minFilter = arr.filter(a => a < max);
    var maxFilter = arr.filter(a => a > min);

    var minSum = 0;
    var maxSum = 0;

    if (minFilter.length === 0 && maxFilter.length === 0) {
        arr.pop();
        minSum = maxSum = arr.reduce((a, b) => a + b);
    } else {
        minSum = minFilter.reduce((a, b) => a + b);
        maxSum = maxFilter.reduce((a, b) => a + b);
    }

    console.log(minSum + " " + maxSum);
}

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    miniMaxSum(arr);

}
