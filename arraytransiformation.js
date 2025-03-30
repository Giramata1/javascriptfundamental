//a.Write a function that doubles every number in an array.
function double(arr){
    return arr.map(number => number*2);
}
console.log(double([2,10,20]));

//b. Write a function that filters out even numbers from an array.
function filterEven(arr){
    return arr.filter(number => number%2 ===0);
}

console.log(filterEven([3,10]));

//c.Write a function that calculates the sum of all numbers in an array.

function sum(arr){
    return arr.reduce((num, number) => num + number, 0);
}

console.log(sum([3,10]));


//d.Write a function that calculates the average of all numbers in an array.

function average(arr){
    return sum(arr)/arr.length;
}

console.log(average([3,10]));

//e.Write a function that returns the largest number in an array

function largest(arr){
    return Math.max(...arr);
}

console.log(largest([3,10]));

//f. write a function that returns the largest number in an array
function smallest(arr){
    return Math.min(...arr);
}
console.log(smallest([4,2]));

//g. Write a function that removes duplicate values from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([3,3,1,2,2]));

//h.Write a function that returns the index of a given value in an array    

function findIndex(arr, value) {
    return arr.indexOf(value);
}

console.log(findIndex([3,1,,2], 3));

