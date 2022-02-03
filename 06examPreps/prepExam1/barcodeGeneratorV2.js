function barcodeGeneratorV2(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let toPrint = ``;

    let startDigit1 = Math.floor((start / 1000) % 10) ;
    let startDigit2 = Math.floor((start / 100) % 10) ;
    let startDigit3 = Math.floor((start / 10) % 10) ;
    let startDigit4 = Math.floor(start % 10 );

    let endDigit1 = Math.floor((end / 1000) % 10) ;
    let endDigit2 = Math.floor((end / 100) % 10) ;
    let endDigit3 = Math.floor((end / 10) % 10) ;
    let endDigit4 = Math.floor(end % 10 );

    

    for (let a = startDigit1; a <= endDigit1; a++) {
        if (a % 2 !== 0){
            for (let b = startDigit2; b <= endDigit2; b++){
                if (b % 2 !== 0){
                    for (let c = startDigit3; c <= endDigit3; c++){
                        if (c % 2 !== 0){
                            for (let d = startDigit4; d <= endDigit4; d++){
                                if (d % 2 !== 0){
                                    toPrint += `${a}${b}${c}${d} `
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(toPrint);

}
barcodeGeneratorV2(["2435", "6789"])