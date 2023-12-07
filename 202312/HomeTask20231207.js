//Task1

class DayConverter{
    constructor(days){
        this.days = days;
    }

    toHours() {
        return this.days * 24;
    }

    toMinutes(){
        return this.toHours() * 60;
    }

    toSeconds(){
        return this.toMinutes() * 60;
    }
}


let daysConverter = new DayConverter(10);

console.log(daysConverter.toHours());
console.log(daysConverter.toMinutes());
console.log(daysConverter.toSeconds());


//Task2

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    getSquare() {
        return Math.PI * this.radius ** 2;
    }
}


let circle1 = new Circle(3);
let circle2 = new Circle(7);

let circleSquare1 = circle1.getSquare();
let circleSquare2 = circle2.getSquare();
let totalSquare = circleSquare1 + circleSquare2;

console.log(circleSquare1);
console.log(circleSquare2);
console.log(totalSquare);


//Task3
let pizza1 = new Circle(30);
let pizza2 = new Circle(45);

let pizzaSquare1 = pizza1.getSquare();
let pizzaSquare2 = pizza2.getSquare();

let costPerSm1 = 150 / pizzaSquare1;
let costPerSm2 = 200 / pizzaSquare2;

console.log(costPerSm1);
console.log(costPerSm2);


