function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

function isArmstrong(number) {
    let originalNumber = number;
    let sum = 0;
    while (number > 0) {
        let digit = number % 10;
        sum += Math.pow(digit, 3);
        number = Math.floor(number / 10);
    }
    return sum === originalNumber;
}

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

function findFactors(number) {
    const factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

const inputNumber = 135;

console.log("Number is :", inputNumber )
console.log("Sum of digits:", sumOfDigits(inputNumber));
console.log("Is Armstrong number:", isArmstrong(inputNumber));
console.log("Is Prime number:", isPrime(inputNumber));
console.log("Factors:", findFactors(inputNumber));
