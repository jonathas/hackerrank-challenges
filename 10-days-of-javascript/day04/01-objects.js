/*
 * Complete the Rectangle function
 */

function Rectangle(a, b) {
    function getPermiter(a, b) {
        return 2 * (a + b);
    }

    function getArea(a, b) {
        return a * b;
    }

    this.length = a;
    this.width = b;
    this.perimeter = getPermiter(a, b);
    this.area = getArea(a, b);
}