function sumNumbers (input){
    let target = Number (input[0]);
    let index = 1;
    let sum = 0;
    while (sum < target){
        sum += Number (input[index]);
        if (sum >= target){
            console.log(sum);
            break;
        }
        index++
    }

    if (sum < target){
        console.log(sum);
    }
}
sumNumbers(["20","1","2","3","4","5","6"])
