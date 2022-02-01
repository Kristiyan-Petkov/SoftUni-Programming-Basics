function numbersFromText (input) {

    let sum = 0;
    let text = input[0]
    let inputL = text.length;

    

    for (let index = 0; index < inputL; index++) {    
        let currentNumber = Number (text[index]);
        sum += currentNumber;
    }
    console.log(`The sum of the digits is:${sum}`)
}
numbersFromText(["12345"])