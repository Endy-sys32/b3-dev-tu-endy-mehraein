var a = parseInt();
var b = parseInt();

const assert = require("assert");
const carre = (a) => a * a;
const racine = (a) => Math.sqrt(a);
const puissance = (a, b) => Math.pow(a,b);

describe("test BDD", function() {
    it("should return the carre of numbers", function() {
        let testCarreNumbers = [
            {a: 2, expected: 4},
            {a: -2, expected: 4},
            {a: -3, expected: 9},
            {a: 0, expected: 0},
            {a: 10, expected: 100},
        ];

        for (let testCase of testCarreNumbers) {
            let result = carre(testCase.a);
            if (result === testCase.expected) {
                console.log("Test passed Carre");
            } else {
                console.log("Test failed Carre");
            }
        }
    });

    it("should return the racine of numbers", function() {
        let testRacineNumbers = [
            {a: 2, expected: 1.4142135623730951},
            {a: 3, expected: 1.7320508075688772},
            {a: 0, expected: 0},
            {a: 10, expected: 3.1622776601683795},
        ];

        for (let testCase of testRacineNumbers) {
            let result = racine(testCase.a, testCase.a);
            if (result === testCase.expected) {
                console.log("Test passed Racine");
            } else {
                console.log("Test failed Racine");
            }
        }
    });

    it("should return the puissance of two numbers", function() {
        let testPuissanceNumbers = [
            {a: 2, b: 3, expected: 8},
            {a: -2, b: 3, expected: -8},
            {a: 10, b: 3, expected: 1000},
            {a: 2, b: 0, expected: 1},

        ];

        for (let testCase of testPuissanceNumbers) {
            let result = puissance(testCase.a, testCase.b);
            if (result === testCase.expected) {
                console.log("Test passed Puissance");
            } else {
                console.log("Test failed Puissance");
            }
        }
    });
});