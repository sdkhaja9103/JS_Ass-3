// Task 1: Simple Calculator
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}

function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const result = calculator(num1, num2, operator);
    document.getElementById('calcResult').textContent = `Result: ${result}`;
}

// Task 2: Sum of Even Numbers
function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

function calculateEvenSum() {
    const inputArray = document.getElementById('numbersArray').value.split(',').map(Number);
    const result = sumOfEvenNumbers(inputArray);
    document.getElementById('evenSumResult').textContent = `Sum of Even Numbers: ${result}`;
}

// Task 3: Object Manipulation
const Person = {
    firstName: 'Khaja',
    lastName: 'Syed',
    age: 21,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    incrementAge() {
        this.age++;
    }
};

function showPersonInfo() {
    const fullName = Person.getFullName();
    const age = Person.age;
    document.getElementById('personInfo').textContent = `Name: ${fullName}, Age: ${age}`;
}

function incrementPersonAge() {
    Person.incrementAge();
    showPersonInfo();
}
