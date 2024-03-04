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
    #owner;
    #bankAccountNumber;

    constructor(owner, bankAccountNumber, initialBalance) {
        this.#owner = owner;
        this.#balance = initialBalance;
        this.#bankAccountNumber = bankAccountNumber;
    }
    
    get owner(){
        return this.#owner;
    }

    get bankAccountNumber(){
        return this.#bankAccountNumber;
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

    transferTo(toAccount, amount){

        if(toAccount === undefined || toAccount === null){
            throw new Error("toAccount cant be undefined");
        }

        if(this.balance < amount){
            throw new Error("Insufficient funds in the account");
        }
        this.#balance -= amount;
        toAccount.#balance += amount;
    }


    get balance() {
        return this.#balance;
    }
}







//Task4

class Bank{
    #accounts;
    
    constructor(){
        this.#accounts = [];
    }
    addAccount(account){
        if(this.getAccount(account.bankAccountNumber) != undefined){
            throw new Error("Account already exists");
        }

        this.#accounts.push(account);
        console.log(this.#accounts);
    }

    removeAccount(account){

        const acc = this.getAccount(account.bankAccountNumber);
        if(acc === undefined){
            throw new Error("Account has not been found");
        }

        this.#accounts.splice(this.#accounts.findIndex(acc));
    }

    getAccount(bankAccountNumber){
        return this.#accounts.find(x => x.bankAccountNumber === bankAccountNumber);
    }


    transfer(fromAccountNumber, toAccountNumber, amount){
        const fromAcc = this.getAccount(fromAccountNumber);
        const toAcc = this.getAccount(toAccountNumber);

        if(fromAcc === undefined){
            throw new Error("From account has not been found");
        }

        if(toAcc === undefined){
            throw new Error("To account has not been found");
        }

        fromAcc.transferTo(toAcc, amount);
    }
}


const accountFrom = new BankAccount('Іван Петрович', 4565328745653287, 1000);
const accountTo = new BankAccount('Петро Іванович', 4565348745653487, 2000);
const bank = new Bank();
bank.addAccount(accountFrom);
bank.addAccount(accountTo);

const amount = 750;
console.log(`${accountFrom.owner} balance: ${accountFrom.balance}`);
console.log(`${accountTo.owner} balance: ${accountTo.balance}`);
console.log(`Transfer ${amount} from ${accountFrom} to ${accountTo}`);

bank.transfer(accountFrom.bankAccountNumber, accountTo.bankAccountNumber, amount);

console.log(`${accountFrom.owner} balance: ${accountFrom.balance}`);
console.log(`${accountTo.owner} balance: ${accountTo.balance}`);


