export function capStr(string) {
    const newString = string[0].toUpperCase() + string.slice(1);
    return newString;
}

export function revStr(string) {
    let newStr = '';
    for (let i = string.length -1; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr;
}


function calcAdd(a, b) {
    return a + b;
}
function calcSubtract(a, b) {
    return a - b;
}
function calcMultiply(a, b) {
    return a * b;
}
function calcDivide(a, b) {
    return a / b;
}

export const calcObject = { 
    add: calcAdd,
    subtract: calcSubtract,
    multiply: calcMultiply,
    divide: calcDivide
}

function shiftChar(char, shift) {
    if (char >= 97 && char <= 122) {
        if (char + shift <= 122) {
            return char + shift;
        } else {
            return (char + shift - 26);
        }
    }
    if (char >= 65 && char <= 90) {
        if (char + shift <= 90) {
            return char + shift;
        } else {
            return (char + shift - 26);
        }
    }
}

export function caesarCipher(string, shift) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        let val = string[i].charCodeAt();
        if ((val >= 97 && val <= 122) || (val >= 65 && val <= 90)) {
            newString += String.fromCharCode(shiftChar(val, shift));
        } else {
            newString += String.fromCharCode(val);
        }
    }
    return newString;
}


function getAvg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    return sum/array.length;
}

function getMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) min = array[i];
    }
    return min;
}

function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }
    return max;
}

export function analyzeArray(array) {
    const object = {
        average: getAvg(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length
    }
    return object;
}