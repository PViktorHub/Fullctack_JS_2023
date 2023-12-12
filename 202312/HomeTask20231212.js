//Task 1

class Cylinder{
    constructor(radius, hight){
        this.radius = radius;
        this.hight = radius;

    }

    getVolume()
    {
        return Math.PI * this.radius ** 2 * this.hight;
    }
}

const maxRadius = 100; //sm
const maxHeight = 100; //sm
let radius = Math.random() * maxRadius;
let height = Math.random() * maxHeight;

let cylinder = new Cylinder(radius, maxHeight);
console.log(`Cylinder: radius = ${radius} sm, height = ${height} sm, volume = ${cylinder.getVolume()} square sm`);

//Task 2
const daysInWeek = 7;
let randomDaynumber = Math.floor(Math.random() * daysInWeek) + 1;

class DaySelector
{
    constructor(day){
        
        if(day < 1 || day > daysInWeek) 
        {
            throw new Error("Day must be between 1 and 7");
        }   

        this.day = day;
    }

    getWeekDay()
    {
        switch(this.day )
        {
            case 1:
                return "Sunday";

            case 2:
                return "Monday";

            case 3:
                return "Tuesday";

            case 4:
                return "Wednesday";

            case 5:
                return "Thursday";

            case 6:
                return "Friday";

            case 7:
                return "Saturday";

            default:
                throw new Error("Day must be between 1 and 7");
        }
    }
}

let selector = new DaySelector(randomDaynumber);
console.log(`Day number: ${randomDaynumber}, week day: ${selector.getWeekDay()}`);

// Task 3
const maxPinValue = 9999;
const charCount = 4;
let randomPin = Math.round(Math.random() * maxPinValue);

let pinCode = randomPin.toString().padStart(charCount, '0');

console.log(`Generated pin code: ${pinCode}`);
