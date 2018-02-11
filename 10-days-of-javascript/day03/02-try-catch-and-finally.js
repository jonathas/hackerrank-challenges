/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let listOfStrings = s.split('');
        s = listOfStrings.reverse().join('');
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log(s);
    }
}