function yardGreening(input) {

let initialPrice = input[0] * 7.61
let discount = initialPrice * 0.18
let finalPrice = initialPrice - discount

console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`)

}
yardGreening([500])