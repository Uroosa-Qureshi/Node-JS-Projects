"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = void 0;
function divide(num1, num2) {
    if (num2 == 0) {
        throw new Error("Can't divide by zero");
    }
    return num1 / num2;
}
exports.divide = divide;
