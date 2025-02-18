const leapYears = function(year) {
    // A year is a leap year if
    //1. It is divisible by 4 and it is not diviisble by 100 unless it is also divibible 

    if(year % 4 === 0){
        if(year % 100 === 0){ // Check if it is a century year
            if(year % 400 ===0){ // Check if it is also divisible by 400
                // It is leap year
                return true
            }else{
                return false
            }
        }
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
