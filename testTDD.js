var a = parseInt();
var b = parseInt();

const assert = require("assert");
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const percentage = (a, b) => (a / b) * 100;
const carre = (a) => a * a;




// Test TDD et BDD des additions
describe("test TDD", function() {
    it("should return the sum of two numbers", function() {
        assert.equal(add(2, 3), 5);
        assert.equal(add(-2, 3), 1);
        assert.equal(add(2.5, 3.5), 6);
    });

    it("should return the soustraction of two numbers", function() {
        assert.equal(subtract(2, 3), -1);
        assert.equal(subtract(-2, 3), -5);
        assert.equal(subtract(2.5, 3.5), -1);
    });

    it("should return the multiplication of two numbers", function() {
        assert.equal(multiply(2, 3), 6);
        assert.equal(multiply(-2, 3), -6);
        assert.equal(multiply(2.5, 3.5), 8.75);
    });

    it("should return the divide of two numbers", function() {
        assert.equal(divide(2, 3), 0.6666666666666666);
        assert.equal(divide(-2, 3), -0.6666666666666666);
        assert.equal(divide(2.5, 3.5), 0.7142857142857143);
    });

    it("should return the percentage of numbers", function() {
        assert.equal(percentage(2, 3), 66.66666666666666);
        assert.equal(percentage(-2, 3), -66.66666666666666);
        assert.equal(percentage(2.5, 3.5), 71.42857142857143);
    });

    it("should return the carre of numbers", function() {
        assert.equal(carre(5, 5), 25);
        assert.equal(carre(-6, -6), 36);
        assert.equal(carre(2.5, 2.5), 6.25);
    });

    it("should return the racine of numbers", function() {
        assert.equal(Math.sqrt(5), 2.23606797749979);
        assert.equal(Math.sqrt(-6), NaN);
        assert.equal(Math.sqrt(0), 0);
    });

    it("should return the puissance of numbers", function() {
        assert.strictEqual(Math.pow(2, 3), 8);
        assert.strictEqual(Math.pow(4, 2), 16);
        assert.strictEqual(Math.pow(5, 1), 5);
    });

});
