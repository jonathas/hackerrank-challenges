/*
 * Create the function factorial here
 */
function factorial(num) {
    if (num === 1) return num;

    var result = 1;
    for (var i = num; i >= 1; i--) {
        result *= i;
    } 

    return result;
}