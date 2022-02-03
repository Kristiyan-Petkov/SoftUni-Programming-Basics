function maxNumber(input) {
    let firstInput = Number (input[0]);
    index = 1
    let max = Number.MIN_SAFE_INTEGER;

    while (firstInput !== "Stop"){
        let num = Number(firstInput);
        if (num > max){
            max = num;
        }
        firstInput = input[index];
        index++
    }

    console.log(max);

}
maxNumber(["-10", "20", "-30", "Stop"])
