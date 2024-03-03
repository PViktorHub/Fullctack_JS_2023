//Task1

class Person {
    #_name;
    #_age;
    #_city;

    constructor(name, age, city) {
        this._name = name;
        this._age = age;
        this._city = city;
    }

    get name() {
         return this._name
        }

    get age() {
        return this._age
        }

    get city() {
        return this._city
        }

    displayInfo() {
        console.log(`Ім'я: ${this._name}, Вік: ${this._age}, Місто: ${this._city}`);
    }
}

const person1 = new Person('Анна', 25, 'Київ');
const person2 = new Person('Іван', 30, 'Львів');

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

const circle = new Circle('синій', 5);
console.log('Коло:');
console.log('Колір:', circle.color);
console.log('Радіус:', circle.radius);
console.log('Площа:', circle.calculateArea());

const rectangle = new Rectangle('зелений', 4, 6);
console.log('Прямокутник:');
console.log('Колір:', rectangle.color);
console.log('Ширина:', rectangle.width);
console.log('Висота:', rectangle.height);
console.log('Площа:', rectangle.calculateArea());

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
            console.log(`Депозит ${amount} грн. виконано. Новий баланс: ${this.#balance} грн.`);
        } else {
            console.log('Сума депозиту повинна бути більше 0.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Зняття ${amount} грн. виконано. Новий баланс: ${this.#balance} грн.`);
        } else {
            console.log('Недостатньо коштів на рахунку або сума зняття введена некоректно.');
        }
    }

    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount('Іван Петрович', 1000);

account.deposit(500);
account.withdraw(200);
account.deposit(1000);
account.withdraw(1500);

//Task4