/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    let maxNum = Math.max(...nums);
    return (maxNum > 0) ? maxNum - 1 : maxNum;
}