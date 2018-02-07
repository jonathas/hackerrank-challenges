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

function solve(aList, bList){
    var alice = 0;
    var bob = 0;
    
    for (var i = 0;i<aList.length;i++) {
        if (aList[i] !== bList[i]) {
            Math.max(aList[i], bList[i]) === aList[i] ? alice++ : bob++;
        }
    }
    return [alice, bob];
}

function main() {
    var a0_temp = readLine().split(' ');
    var aList = [parseInt(a0_temp[0]), parseInt(a0_temp[1]), parseInt(a0_temp[2])];
    var b0_temp = readLine().split(' ');
    var bList = [parseInt(b0_temp[0]), parseInt(b0_temp[1]), parseInt(b0_temp[2])];
    var result = solve(aList, bList);
    console.log(result.join(" "));
}
