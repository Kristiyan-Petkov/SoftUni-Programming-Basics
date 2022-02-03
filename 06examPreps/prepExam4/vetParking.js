function vetParking(input) {
    let days = Number (input[0]);
    let hoursDaily = Number (input[1]);
    let dailySum = 0;
    let sumTotal = 0;

    for (let d = 1; d <= days; d++){

        for (let h = 1; h <= hoursDaily; h++){
            if (d % 2 === 0 && h % 2 !== 0){
                dailySum += 2.50;
            } else if (d % 2 !== 0 && h % 2 === 0){
                dailySum += 1.25;
            } else {
                dailySum += 1;
            }
            
        }
        console.log(`Day: ${d} - ${dailySum.toFixed(2)} leva`);
        sumTotal += dailySum;
        dailySum = 0;
    }
    
    console.log(`Total: ${sumTotal.toFixed(2)} leva`);

}
vetParking(["2", "5"])