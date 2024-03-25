const calc = (a, b, op) => {

    if (a === undefined || b === undefined || op === undefined) {
        throw new Error('Недостатньо аргументів');
    }

    /*if (arguments.length !== 3) {
        throw new Error('Недостатньо аргументів');
    }*/

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Неправильний тип аргументів');
    }

    if (a === Infinity || b === Infinity) {
        throw new Error('Операції з безкінечністю не можливі');
    }

   
    switch(op){
        case '+': return a + b;
        case '-': return a - b;
        case '/': {
            if (b === 0) {
                throw new Error('Ділення на нуль');
            }
            return a / b;
        }
        case '*': return a * b;
        default: throw new Error('Недійсна операція');
    }
};

try {
}
catch(error){
    console.log(error);
}

// Позитивний кейс
try {
    console.log(calc(5, 3, '+')); // 8
} catch (error) {
    console.log(error.message);
}

// Кейс: Недостатньо аргументів
try {
    console.log(calc(5, 3)); 
} catch (error) {
    console.log(error.message);
}

// Кейс: Неправильний тип аргументів
try {
    console.log(calc(5, 'hello', '+')); 
} catch (error) {
    console.log(error.message);
}

// Кейс: Операції з безкінечністю не можливі
try {
    console.log(calc(Infinity, 3, '+')); 
} catch (error) {
    console.log(error.message);
}

// Кейс: Ділення на нуль
try {
    console.log(calc(5, 0, '/')); 
} catch (error) {
    console.log(error.message);
}

// Кейс: Недійсна операція
try {
    console.log(calc(5, 3, '%')); 
} catch (error) {
    console.log(error.message);
}