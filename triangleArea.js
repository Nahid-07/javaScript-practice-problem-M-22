function area(side1,side2,side3){
    let perimeter = (side1 + side2 + side3)/2;
    let area = Math.sqrt(perimeter*(perimeter-side1)*(perimeter-side2)*(perimeter-side3));
    return area;
}
let side1 = 5;
let side2 = 8;
let side3 = 7;
const sqrt = area(side1,side2,side3);
console.log(parseFloat(sqrt.toFixed(2)));