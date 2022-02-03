function minNumber(input) {
    let firstInput = Number(input[0]);
    index = 1
    let min = Number.MAX_SAFE_INTEGER;

    while (firstInput !== "Stop") {
        let num = Number(firstInput);
        if (num < min) {
            min = num;
        }
        firstInput = input[index];
        index++
    }

    console.log(min);

}
minNumber(["100", "99", "80", "70", "Stop"])
