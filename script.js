let numberArray = [1,2,4,5,6]
console.log(`Before inserting: ${numberArray}`)
let index = 2; // you can take index from user
let element = 3; // you can also take element as input from user

numberArray.splice(index,0,element);
console.log(`After insertion: ${numberArray}`);