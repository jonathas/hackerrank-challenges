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

function plusMinus(arr) {
    var arrSize = arr.length;
    var positives = arr.filter(pos => pos > 0);
    var negatives = arr.filter(neg => neg < 0);
    var zeros = arr.filter(zero => zero === 0);

    console.log(positives.length / arrSize);
    console.log(negatives.length / arrSize);
    console.log(zeros.length / arrSize);
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    plusMinus(arr);

}
