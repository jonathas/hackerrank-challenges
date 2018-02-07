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

function timeConversion(s) {
    var hour = Number(s.substr(0, 2));
    var resultHour = s.substr(0, 2);
    if (s.substr(-2, 2) === "PM" && hour < 12) {
        resultHour = 12 + hour;
    }
    if (s.substr(-2, 2) === "AM" && hour === 12) {
        resultHour = "00";
    }
    return `${resultHour}:${s.substr(3, 5)}`;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
