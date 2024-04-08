const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
 
for(let i = 0; i < numbers.length; i++){
    const numbersx = numbers[i];
    const isOdd = (num) => num % 2 === 0;
    const odd = numbersx.filter(isOdd);

    numbers[i] = (odd); // => [1, 3, 5, 7, 9] */
}

console.log(numbers);