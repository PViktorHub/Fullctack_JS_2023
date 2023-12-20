//Task1
const digitNumber = 10;
let maxBorder = 10 ** digitNumber;

const number = Math.floor(Math.random() * (maxBorder - maxBorder/10)) + maxBorder/10;

let reversedNumber = 0;
let tempNumber = number;

while (tempNumber > 0) {
    reversedNumber = reversedNumber * 10 + tempNumber % 10;
    tempNumber = Math.floor(tempNumber / 10);
}

console.log(`Згенероване число: ${number}`);
console.log(`Задом наперед: ${reversedNumber}`);

//Task2
const minDistance = 10;
const maxDistance = 300;
const minTime = 1;
const maxTime = 10;

let distance = Math.floor(Math.random() * (maxDistance - minDistance)) + minDistance;
let time = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
let speed = distance/time;

console.log(`Distance: ${distance} km`);
console.log(`Time: ${time} hour(s)`);
console.log(`Speed: ${speed} km/h`);

//Task3
{
    function generateRandomPhoneNumber() {
        const operatorCodes = ['50', '66', '67', '68', '96', '97', '98', '99'];
        const operatorCode = operatorCodes[Math.floor(Math.random() * operatorCodes.length)];
    
        const number = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
        const formattednumber = `${number.slice(0, 3)}-${number.slice(3, 5)}-${number.slice(5)}`;
    
        const phoneNumber = `+38 (0${operatorCode}) ${formattednumber}`;
        
        return phoneNumber;
    }
    
    const randomPhoneNumber = generateRandomPhoneNumber();
    console.log(randomPhoneNumber);
}

//Task4
{
    function getRainbowColor() {
        const randomNumber = Math.floor(Math.random() * 7) + 1;

        let color;
        switch (randomNumber) {
            case 1:
                color = "Red";
                break;
            case 2:
                color = "Orange";
                break;
            case 3:
                color = "Yellow";
                break;
            case 4:
                color = "Green";
                break;
            case 5:
                color = "Blue";
                break;
            case 6:
                color = "Indigo";
                break;
            case 7:
                color = "Violet";
                break;
        }
        return color;
    }
    
    console.log(getRainbowColor());
}

//Task5
{
    function generateRandomNumber(min, max) {
        return 
    }
    
    function printMultiplicationTable(multiplier, maxNumber) {
        console.log(`Табличка множення для числа ${multiplier}:`);
        for (let i = 1; i <= maxNumber; i++) {
            console.log(`${i} * ${multiplier} = ${i * multiplier}`);
        }
    }
    
    const multiplierMin = 1;
    const multiplierMax = 20;
    const maxNumber = 10;
    const multiplier = Math.floor(Math.random() * (multiplierMax - multiplierMin + 1)) + multiplierMin;

    printMultiplicationTable(multiplier, maxNumber);
}

//Task6
{
    function printTriangles(rows) {
        console.log('Трикутник:');
        for (let i = 1; i <= rows; i++) {
            let output = '';
            for (let j = 1; j <= i; j++) {
                output += '*';
            }
            console.log(output);
        }
    
        console.log('\nЗворотній трикутник:');
        for (let i = rows; i >= 1; i--) {
            let output = '';
            for (let j = 1; j <= i; j++) {
                output += '*';
            }
            console.log(output);
        }
    }
    
    printTriangles(5);
}