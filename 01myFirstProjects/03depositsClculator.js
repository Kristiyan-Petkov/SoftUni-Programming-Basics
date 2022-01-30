function depositCalculator (input) {

    let depositAmount = Number (input[0]);
    let term = Number (input[1]);
    let annualInterestRate = Number(input[2]);
    let yearInterestRate = depositAmount * (annualInterestRate / 100);
    let monthInterestRate = yearInterestRate / 12

    let sum = depositAmount + (monthInterestRate * term)

    console.log(sum)

}
depositCalculator(["200","3","5.7"])