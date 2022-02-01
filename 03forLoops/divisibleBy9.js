function divisibleBy9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0

    for (let number = num1; number <= num2; number++) {
        if (number % 9 === 0) {
            sum += number;
        }
    }
    console.log(`The sum: ${sum}`)

    for (let number = num1; number <= num2; number++){
        if (number % 9 === 0) {
            console.log(number);
        }
    }
}
divisibleBy9(["100", "200"])