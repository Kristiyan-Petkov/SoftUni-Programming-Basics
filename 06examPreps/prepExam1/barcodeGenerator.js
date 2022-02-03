function barcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let toPrint = ``;
    let ongoing = start;
    let startString = input.toString(ongoing);
    let toNum1 = Number(startString[0]);
    let toNum2 = Number(startString[1]);
    let toNum3 = Number(startString[2]);
    let toNum4 = Number(startString[3]);
    

    for (let i = start; i < end; i++) {

        if (toNum1 % 2 !== 0 && toNum2 % 2 !== 0 && toNum3 % 2 !== 0 && toNum4 % 2 !== 0) {
            toPrint += `${toNum1}${toNum2}${toNum3}${toNum4} `;
        }
        
        startString = toString(i);
        console.log(startString);
        toNum1 = Number(startString[0]);
        toNum2 = Number(startString[1]);
        toNum3 = Number(startString[2]);
        toNum4 = Number(startString[3]);
    }

    console.log(toPrint);

}
barcodeGenerator(["2435", "6789"])
