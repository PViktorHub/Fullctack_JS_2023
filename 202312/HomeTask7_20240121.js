//Task1
function SumTo(n){
    return n*(1 + n)/2;
}

function SumToRecursive(n){
    if(n == 1)
        return 1;

    return n + SumToRecursive(n - 1);
}

function SumToCycly(n){
    let result = 0;
    let rest = n;
    while(rest > 0){
        result+= rest;
        rest--;
    }
    return result;
}

let n = 100;
console.log(`Formula: Sum from 1 to ${n} = ${SumTo(n)}`)
console.log(`Recursion: Sum from 1 to ${n} = ${SumToRecursive(n)}`)
console.log(`Cycle: Sum from 1 to ${n} = ${SumToCycly(n)}`)


//Task2
n = 50;
//O(n)
function  fib(n){

    if(n <= 1)
        return n;

    let prev = 0;
    let current = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    
    return current;
}

//O(log n)
function matrixMultiply(a, b) {
    return [
      [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
      [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
    ];
  }
  
  function matrixPower(matrix, n) {
    if (n === 1) {
      return matrix;
    }
  
    if (n % 2 === 0) {
      const halfPower = matrixPower(matrix, n / 2);
      return matrixMultiply(halfPower, halfPower);
    } else {
      const halfPower = matrixPower(matrix, (n - 1) / 2);
      const result = matrixMultiply(halfPower, halfPower);
      return matrixMultiply(result, matrix);
    }
  }
  
  function fibonacciFast(n) {
    const baseMatrix = [[1, 1], [1, 0]];
    const resultMatrix = matrixPower(baseMatrix, n - 1);
    return resultMatrix[0][0];
  }


console.log(`Fibonacci ${n}th = ${fib(n)}`)
console.log(`Fibonacci fast ${n}th = ${fibonacciFast(n)}`)
//Task3
function min(a, b) {

    return a < b ? a : b;
  }

const a = 10;
const b = 15;
console.log(`Min from ${a} and ${b} = ${min(a, b)}`)


//Task4

function pow(x, d) {

    return x ** d;
}

function powRecursive(x, d) {

    return d == 1 ? x : x * powRecursive(x, --d);
}

function powCycle(x, d) {

    let res = 1;
    for(let i = 0; i < d; i++){
        res = res * x;
    }
    return res;
}

const x = 6;
const d = 3;
console.log(`Pow formula ${x}^${d} = ${pow(x, d)}`)
console.log(`Pow recursive ${x}^${d} = ${powRecursive(x, d)}`)
console.log(`Pow cycle ${x}^${d} = ${powCycle(x, d)}`)
