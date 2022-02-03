function combinations(input) {

    let result = Number(input[0]);
    let combinations = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let ongoingResult = a + b + c;

    for (a = 0; a <= result; a++) {
        for (b = 0; b <= result; b++) {
            for (c = 0; c <= result; c++) {
                if ((a + b + c) === result) {
                    combinations++
                }
            }
        }
    }
    console.log(combinations);
}
combinations(["25"])