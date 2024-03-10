//Task1
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}

const person1 = new Person('John', 25, 'New York');
const person2 = new Person('Alice', 30, 'Los Angeles');

person1.displayInfo();
person2.displayInfo();

//Task2

class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const circle = new Circle('red', 5);
const rectangle = new Rectangle('blue', 4, 6);

console.log("Circle:");
console.log("Color:", circle.color);
console.log("Radius:", circle.radius);
console.log("Area:", circle.calculateArea());

console.log("\nRectangle:");
console.log("Color:", rectangle.color);
console.log("Width:", rectangle.width);
console.log("Height:", rectangle.height);
console.log("Area:", rectangle.calculateArea());

//Task3
class BankAccount {
    #balance;
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount} into ${this.owner}'s account.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.owner}'s account.`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}


const account = new BankAccount("John Doe", 1000);

account.deposit(500); 
account.withdraw(200); 
account.withdraw(1500); 
account.deposit(-100); 
account.withdraw(800); 
account.withdraw(200); 
console.log("Current balance:", account.getBalance()); 

//Task4

class PasswordGenerator {
    generatePassword(length) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    generateSecurePassword(length, specialCharCount = 4) {
        const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        let password = '';

        for (let i = 0; i < specialCharCount; i++) {
            const randomIndex = Math.floor(Math.random() * specialChars.length);
            password += specialChars[randomIndex];
        }

        for (let i = specialCharCount; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        password = password.split('').sort(() => Math.random() - 0.5).join('');

        return password;
    }
}

class PasswordManager {
    constructor() {
        this.passwords = {};
    }

    addPassword(id, password) {
        this.passwords[id] = password;
    }

    getPassword(id) {
        return this.passwords[id];
    }
}

const passwordGenerator = new PasswordGenerator();
const passwordManager = new PasswordManager();

const password1 = passwordGenerator.generatePassword(8);
const password2 = passwordGenerator.generateSecurePassword(12);
const password3 = passwordGenerator.generatePassword(10);

passwordManager.addPassword('site1', password1);
passwordManager.addPassword('site2', password2);
passwordManager.addPassword('site3', password3);

let sitePassword = passwordManager.getPassword('site1');
console.log(`Password for site1: ${sitePassword}`);

sitePassword = passwordManager.getPassword('site2');
console.log(`Password for site2: ${sitePassword}`);

sitePassword = passwordManager.getPassword('site3');
console.log(`Password for site3: ${sitePassword}`);
