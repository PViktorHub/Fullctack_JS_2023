
const { calculateExpression, calculate, toFahrenheit, toHex, DNA_strand } = require ('./HomeTask5_20240105.js');

// Task1
describe('calculateExpression', () => {
    test('вираховує правильно просте виразення', () => {
        const expression = '2 + 3 * 4';
        const result = calculateExpression(expression);
        expect(result).toBe(14);
    });

    test('вираховує правильно виразення з дужками', () => {
        const expression = '(2 + 3) * 4';
        const result = calculateExpression(expression);
        expect(result).toBe(20);
    });

    test('видає повідомлення про помилку для неправильного виразу', () => {
        const expression = '2 + abc';
        const result = calculateExpression(expression);
        expect(result).toBe('abc is not defined');
    });

    test('видає повідомлення про помилку для ділення на нуль', () => {
        const expression = '5 / 0';
        const result = calculateExpression(expression);
        expect(result).toBe(Infinity);
    });
});


describe('calculate', () => {
    test('додавання', () => {
     
        const result = calculate(5, 10, '+');
        expect(result).toBe(15);
    });

    test('віднімання', () => {
        const result = calculate(10, 5, '-');
        expect(result).toBe(5);
    });

    test('множення', () => {
        const result = calculate(10, 5, '*');
        expect(result).toBe(50);
    });

    test('ділення', () => {
        const result = calculate(10, 5, '/');
        expect(result).toBe(2);
    });

    test('видає повідомлення про помилку для неправильного оператора', () => {
        const result = calculate(10, 5, 'd');
        expect(result).toBe('Unexpected identifier');
    });

    test('видає повідомлення про помилку для ділення на нуль', () => {
        const result = calculate(5, 0, '/');
        expect(result).toBe('Division by zero');
    });
});

// Task2
describe('toFahrenheit', () => {
    test('toFahrenheit', () => {
        const expression = 100;
        const result = toFahrenheit(expression);
        expect(result).toBe(212);
    });

    test('toFahrenheit', () => {
        const expression = 0;
        const result = toFahrenheit(expression);
        expect(result).toBe(32);
    });
});

// Task3
describe('toHex', () => {
    test('toHex', () => {
        const result = toHex(255, 150, 15, 10);
        expect(result).toBe("#FF960F0A");
    });

    test('toHex', () => {
        const result = toHex(200, 100, 14, 10);
        expect(result).toBe("#C8640E0A");
    });
});


// Task4
describe('DNA_strand', () => {
    test('DNA_strand', () => {
        const expression = "ATTGC";
        const result = DNA_strand(expression);
        expect(result).toBe("TAACG");
    });

    test('DNA_strand', () => {
        const expression = "GTAT";
        const result = DNA_strand(expression);
        expect(result).toBe("CATA");
    });
});

