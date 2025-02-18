const sumAll = function(min, max) {
    if(min < 0 || max < 0){
        return "ERROR"
    }
    if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR"
    }
    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    }
// If MIN is larger than MAX, we want to switch
    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
