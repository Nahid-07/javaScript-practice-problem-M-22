// i have to write a code which will creat a sum resul of all the even numbers. user will input 2 random number that will find the even numbers.

// let begin!

let num_1 = 1;
let num_2 = 9;
let sum = 0;
function evenSum(num_1,num_2){
    for(let i = num_1; i<=num_2;i++){
        if(i%2===0){
            sum += i;
        }
    }
    return sum
}
const total = evenSum(num_1,num_2);
console.log(total);