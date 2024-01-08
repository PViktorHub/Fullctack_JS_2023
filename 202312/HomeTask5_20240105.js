//Task1
{
    function calculateExpression(expression) {
        try {
            const result = eval(expression);
            return result;
        } catch (error) {
            return `${error.message}`;
        }
    }

    const inputExpression = "2*3+(6**2-1)";
    const result = calculateExpression(inputExpression);

    console.log(`Результат вычисления: ${result}`);
}

{
    function calculate(a, b, o) {
        let res;
        switch(o)
        {
            case '+':
                res = a + b;
                break;

            case '-':
                res = a - b;
                break;

            case '*':
                res = a * b;
                break;

            case '/':
            case ':':
                if(b === 0){
                    res = 'Division by zero';
                }
                else{
                    res = a / b;
                }

                break;

            case '^':
            case '**':
                res = a ** b;
                break;

            default:
                return 'Unexpected identifier';
        }
        return res;
    }

    const result = calculate(10, 5, '^');

    console.log(`Результат вычисления: ${result}`);
}

//Task2
{
    function toFahrenheit(val)
    {
        return  val * (9/5) + 32;
    }

    const result = toFahrenheit(100);

    console.log(`Fahrenheit: ${result}`);
}

//Task3
{
    function toHex(a, r, g, b){
        return `#${a.toString(16).padStart(2, "0").toUpperCase()}${r.toString(16).padStart(2, "0").toUpperCase()}${g.toString(16).padStart(2, "0").toUpperCase()}${b.toString(16).padStart(2, "0").toUpperCase()}`
    }

    const result = toHex(200, 100, 14, 10);

    console.log(`HEX: ${result}`);
}

{
    function toHexAdvanced(a, r, g, b){
        if(arguments.length === 0){
            return null;
        }

        let res = "#";
        for (let i = 0; i < arguments.length; i++) {
            res += arguments[i].toString(16).padStart(2, "0").toUpperCase();
        }

        return res;
    }

    const result = toHexAdvanced(255, 150, 15, 10);

    console.log(`HEX: ${result}`);
}


//Task4
{
    function DNA_strand(dna) {
        const complementPairs = {
          'A': 'T',
          'T': 'A',
          'C': 'G',
          'G': 'C'
        };
      
        const complementaryStrand = [...dna].map(char => complementPairs[char]).join('');
      
        return complementaryStrand;
      }
      

      console.log(DNA_strand("ATTGC")); 
      console.log(DNA_strand("GTAT")); 
}

module.exports = { calculateExpression, calculate, toFahrenheit, toHex, DNA_strand };