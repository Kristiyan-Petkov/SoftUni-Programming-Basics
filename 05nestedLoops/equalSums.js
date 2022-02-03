function equalSums (input) {
    let min = Number (input[0]);
    let max = Number (input[1]);
    let current = min;
    let toPrint = ``;

    for (i = min; i <= max; i++){
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < 6; j++){
            let currentDigit = Number (currentNum.charAt(j));
            if (j % 2 === 0){
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum){
            toPrint += `${i} `;
        }
    }

    console.log(toPrint);
    
}
equalSums(["123454", "124000"])
