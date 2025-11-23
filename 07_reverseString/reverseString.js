const reverseString = function(word){

let string = "";
string = word;
    if (word === null || word === undefined || word === ''){
        return '';
    }
    else {
    for (let i=0; i < word.length; i++) {
        return word.split('').reverse().join('');
}
}
}

// Do not edit below this line
module.exports = reverseString;
