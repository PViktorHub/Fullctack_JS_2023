//Task1
class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.maxInkLevel = 100;
        if(inkLevel > this.maxInkLevel){
            throw new Error(`Початкова кількість чорнил більша за максимальну`);
        }
        this.inkLevel = inkLevel;
    }

    print(text) {
        let printedText = '';
        for (let i = 0; i < text.length; i++) {
            if(text[i] === ' ') {
                printedText += ' ';
                continue; 
            }

            if(this.inkLevel < 0.5) {
                console.log("Маркер закінчився!");
                break;
            }

            printedText += text[i];
            this.inkLevel -= 0.5; 
        }

        console.log(`Текст: %c${printedText}`, `color:${this.color}`); 
    }
}

const marker = new Marker('red', 50); 
marker.print('Привіт, це приклад використання маркера.', ); 

//Task2
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        this._radius = newRadius;
    }

    get diameter() {
        return this._radius * 2;
    }

    calculateArea() {
        return Math.PI * this._radius ** 2;
    }

    calculatePerimeter() {
        return Math.PI * this.diameter;
    }
}

const myCircle = new Circle(5); 
console.log('Радіус кола:', myCircle.radius);
console.log('Діаметр кола:', myCircle.diameter);
console.log('Площа кола:', myCircle.calculateArea());
console.log('Довжина кола:', myCircle.calculatePerimeter());

myCircle.radius = 7;
console.log('Новий радіус кола:', myCircle.radius);
console.log('Новий діаметр кола:', myCircle.diameter);
console.log('Нова площа кола:', myCircle.calculateArea());
console.log('Нова довжина кола:', myCircle.calculatePerimeter());

//Task3
class Battery {
    constructor(type, capacity, voltage, manufacturer) {
        this.type = type;
        this.capacity = capacity;
        this.voltage = voltage;
        this.manufacturer = manufacturer;
    }

    checkStatus() {
        if (this.capacity > 0) {
            console.log("Батарейка працює.");
        } else {
            console.log("Батарейка розряджена.");
        }
    }
}

class Desk {
    constructor(material, color, width, height) {
        this.material = material;
        this.color = color;
        this.width = width;
        this.height = height;
    }

    adjustHeight(newHeight) {
        this.height = newHeight;
    }
}

class Door {
    constructor(material, color, width, height) {
        this.material = material;
        this.color = color;
        this.width = width;
        this.height = height;
        this.isOpen = false;
    }

    open() {
        this.isOpen = true;
        console.log("Двері відкриті.");
    }

    close() {
        this.isOpen = false;
        console.log("Двері закриті.");
    }
}

class AirConditioner {

    constructor(brand, coolingCapacity, heatingCapacity, powerConsumption, energyEfficiency) {
        this.brand = brand;
        this.coolingCapacity = coolingCapacity;
        this.heatingCapacity = heatingCapacity;
        this.powerConsumption = powerConsumption;
        this.energyEfficiency = energyEfficiency;
        this.isOn = false;
        this.mode = "defaultMode"
        this.temperature = 20;
    }

    turnOn() {
        this.isOn = true;
        console.log("Кондиціонер увімкнено.");
    }

    turnOff() {
        this.isOn = false;
        console.log("Кондиціонер вимкнено.");
    }

    changeMode(mode) {
        this.mode = mode;
        console.log(`Режим кондиціонера змінено на ${mode}.`);
    }

    setTemperature(temperature) {
        this.temperature = temperature;
        console.log(`Температура встановлена на ${temperature} градусів.`);
    }
}

//Task4
class RefillableMarker extends Marker{
    fill(inkVolume){
        let newIncLevel = this.inkLevel + inkVolume;
        if(newIncLevel > this.maxInkLevel){
            throw new Error(`Не можна заправити кількість чорнил, більшу за максимальний рівень. Поточна кількість ${this.inkLevel}. Кількість до заправки ${inkVolume}. Максимальна кількість маркера ${this.maxInkLevel}`);
        }
        this.inkLevel += inkVolume;
        console.log(`Кількість чорнил після заправки ${this.inkLevel}.`);
    }
}


const refillableMarker = new RefillableMarker('green', 50);
refillableMarker.fill(50);
refillableMarker.print('Привіт, це приклад використання маркера.', ); 


