// write a code that user will input a number and outpu will be a multiplication table;

function multiplicationTable(number){
    for(let i=1;i<=10;i++){
        let multy = number * i;
        console.log(number + " X " + i+  " = " + multy)
    }
}
const x = multiplicationTable(3);
console.log(x);