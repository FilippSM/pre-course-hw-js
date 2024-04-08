const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
 
for(let i = 0; i < numbers.length; i++){
    let innerArrayLength = numbers[i].length;
    
    for(let j = 0; j < innerArrayLength; j++) {
        if (numbers[i][j] % 2 !== 0) {
            delete numbers[i][j];
        }
    }
}

console.log(numbers);