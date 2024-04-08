function one(str)
{
    let o = new Map();
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (o.has(ch)) {
            o.set(ch, o.get(ch) + 1);
        } else {
            o.set(ch, 1);
        }
    }

    let minVal = undefined;
    let numberOfDifferences = 0;
    o.forEach((value, key) => {
        if(minVal === undefined){
            minVal = value;
        }
        else{

            if(minVal > value){
                if(minVal - value === 1){
                    numberOfDifferences++;
                    minVal = value;
                }
                else{
                    return false;
                }
            }
            else if(minVal < value){
                if(value - minVal === 1){
                    numberOfDifferences++;
                }
                else{
                    return false;
                }
            }
            

            if(numberOfDifferences > 1){
                return false;
            }
        }
    });
    
    return true;
}


function removeLetterToEqv(str)
{
    let o = new Map();
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (o.has(ch)) {
            o.set(ch, o.get(ch) + 1);
        } else {
            o.set(ch, 1);
        }
    }

    
    let minVal = Math.min(...Array.from(o.values()));
    let numberOfDifferences = 0;

    let res = true;
    o.forEach((value, key) => {
        if(value - minVal == 1){
            numberOfDifferences++;
        }
        else{
            res = false;
            return;
        }

        if(numberOfDifferences > 1){
            res = false;
            return;
        }
    });
    
    return res;
}

let s ="sstu"; 
console.log(`${s}: ${removeLetterToEqv(s)}`)
;