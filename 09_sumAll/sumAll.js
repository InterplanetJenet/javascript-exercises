const sumAll = function(min, max) {
    if (!Number.isInteger (min) || !Number.isInteger (max)) return 'ERROR';//the! means NOT
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max) {//if the first number is larger than the second
    const temp = min; //creates a constant variable to temporarily hold the larger #
    min = max; //moves the value of max to the newly empty min container
    max = temp; //moves the value in the temp container into the max container 
    }
    //now the swap is complete and the min container holds the smallest number
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

    return sum;}

// Do not edit below this line
module.exports = sumAll;
