const arr = [1, 2, 3];
//Task1
Array.prototype.myPush = function(...items) {
    const len = this.length;
    for (let i = 0; i < items.length; i++) {
        this[len + i] = items[i];
    }
    return this.length;
};

console.log(arr.myPush(4, 5)); 
console.log(arr); 

//Task2
Array.prototype.myPop = function() {
    if (this.length === 0) 
        return undefined;

    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
};

console.log(arr.myPop()); 
console.log(arr); 

//Task3
Array.prototype.myShift = function() {
    if (this.length === 0) 
        return undefined;

    const firstItem = this[0];
    for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }

    delete this[this.length - 1];
    this.length--;
    return firstItem;
};

console.log(arr.myShift()); 
console.log(arr); 

//Task4
Array.prototype.myUnshift = function(...items) {
    const len = this.length;
    for (let i = len - 1; i >= 0; i--) {
        this[i + items.length] = this[i];
    }
    for (let i = 0; i < items.length; i++) {
        this[i] = items[i];
    }
    return this.length;
};

console.log(arr.myUnshift(-1, 0)); // 5
console.log(arr); // [-1, 0, 2, 3, 4]

//Task5
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } 

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left; 
}


const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); 

//Task6
function plusOne(digits) {
    const n = digits.length;
    

    digits[n - 1]++;
    
  
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] > 9) {
            digits[i] = 0;
            if (i > 0) {
                digits[i - 1]++;
            } else {
                
                digits.unshift(1);
            }
        } else {
      
            break;
        }
    }
    
    return digits;
}

// Example usage:
const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4]