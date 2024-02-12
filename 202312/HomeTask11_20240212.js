const numbers = [1, 3, 4, 5, 6, 7, 8, 9];

//Task1
Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };

  console.log(numbers.myFind(num => num%2 === 0)); 

//Task2
Array.prototype.myFindIndex = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i;
      }
    }
    return -1;
  };

  console.log(numbers.myFindIndex(num => num > 3));

//Task3
Array.prototype.myFindLast = function(callback) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };

  console.log(numbers.myFindLast(num => num < 5));

//Task4
Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };

  console.log(numbers.myEvery(num => num > 0));
  console.log(numbers.myEvery(num => num > 2));

//Task5

function indicesOfWordsContainingCharacter(words, x) {
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes(x)) {
        result.push(i);
      }
    }
    
    return result;
  }
  

  const words = ["apple", "banana", "orange", "kiwi", "grape"];
  const x = "a";
  
  console.log(indicesOfWordsContainingCharacter(words, x)); 