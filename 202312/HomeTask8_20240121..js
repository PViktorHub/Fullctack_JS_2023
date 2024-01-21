//Task1
function  myAt(str, index) {

    if(str === null || str == undefined || str.length < index - 1)
        return undefined;

    return str[index];
}


const str = "wesdvweewggre";
const index = 8;

console.log(`Symbol of '${str}' at ${index} = ${myAt(str, index)}`)


//Task2
function  concat() {

    let res = "";
    const argsArray = [...arguments];
    argsArray.forEach(arg => res += arg);
    return res;
}


const str1 = "Don't call us. ";
const str2 = "We'll call ";
const str3 = "you.";

console.log(`Concat result = ${concat(str1, str2, str3)}`)

//Task3
function  repeat(str, number) {

    let res = '';
    for(let i = 0; i < number; i++){
        res += str;
    }

    return res;
}

const strForepeat = "LevelUp";
const number = 5;

console.log(`Repeat of ${strForepeat} ${number} times = ${repeat(strForepeat, number)}`)

//Task4
function  getShortest() {

    let shortestStr = undefined;
    const argsArray = [...arguments];
    argsArray.forEach(arg => 
        {
            if(shortestStr === undefined || arg.length < shortestStr.length)
                shortestStr = arg;
        });

    return shortestStr;
}

console.log(`The shortest string = ${getShortest(str1, str2, str3)}`)
//Task5

function  isPangram(str) {

    if(str === null || str === undefined || str === '')
        return false;

    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[i].toLowerCase())
            return false;
    }

    return true;
}

let pangramStr = "dfghjjhgfd";
let notPangramStr = "dfghJjhgfd";

console.log(`Is ${pangramStr} pangram string = ${isPangram(pangramStr)}`)
console.log(`Is ${notPangramStr} pangram string = ${isPangram(notPangramStr)}`)


//Task6
function  isPalindrome(str) {

    if(str === null || str === undefined || str === '')
        return false;

    let startIndex = 0;
    let endIndex = str.length - 1;
    while(startIndex < endIndex){
        if(str[startIndex--] !== str[endIndex--])
            return false;
    }

    return true;
}

let pallindromeStr = "dfghjjhgfd";
let notPallindromeStr = "dfghmjhgfd";

console.log(`Is ${pallindromeStr} palindrome string = ${isPalindrome(pallindromeStr)}`)
console.log(`Is ${notPallindromeStr} palindrome string = ${isPalindrome(notPallindromeStr)}`)
