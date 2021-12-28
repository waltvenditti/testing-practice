import { expect } from '@jest/globals';
import { capStr, revStr, calcObject, caesarCipher, analyzeArray } from './index.js';

test ('capitalizes first letter in string', () => {
    expect(capStr('tester')).toBe('Tester');
});

test ('reverses an input string', () => {
    expect(revStr('tester')).toBe('retset');
});

test ('adds two numbers', () => {
    expect(calcObject.add(3, 4)).toBe(7);
});
test ('subtracts two numbers', () => {
    expect(calcObject.subtract(8, 3)).toBe(5);
});
test ('multiplies two numbers', () => {
    expect(calcObject.multiply(4, 2)).toBe(8);
});
test ('divides two numbers', () => {
    expect(calcObject.divide(10, 5)).toBe(2);
});

test ('caesar cipher', () => {
    expect(caesarCipher('defend the east', 1)).toBe('efgfoe uif fbtu');
});
test ('caesar cipher with wrapping letters', () => {
    expect(caesarCipher('zany.. ZANY!?', 2)).toBe('bcpa.. BCPA!?');
});

test ('analyzes array and returns info', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    const result = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    expect(object).toStrictEqual(result);
});