function trekkingMania(input) {
    let groupsNumber = Number(input[0]);
    let totalClimbers = 0;
    let climbingMoussala = 0;
    let climbingMontBlanc = 0;
    let climbingKilimandjaro = 0;
    let climbingK2 = 0;
    let climbingEverest = 0;

    for (i = 1; i <= groupsNumber; i++) {
        let currentGroup = Number(input[i]);
        if (currentGroup < 6) {
            totalClimbers += currentGroup;
            climbingMoussala += currentGroup;
        } else if (currentGroup >= 6 && currentGroup <= 12) {
            totalClimbers += currentGroup;
            climbingMontBlanc += currentGroup;
        } else if (currentGroup >= 13 && currentGroup <= 25) {
            totalClimbers += currentGroup;
            climbingKilimandjaro += currentGroup;
        } else if (currentGroup >= 26 && currentGroup <= 40) {
            totalClimbers += currentGroup;
            climbingK2 += currentGroup;
        } else if (currentGroup > 40) {
            totalClimbers += currentGroup;
            climbingEverest += currentGroup;
        }
    }
    console.log(`${((climbingMoussala / totalClimbers)*100).toFixed(2)}%`);
    console.log(`${((climbingMontBlanc / totalClimbers)*100).toFixed(2)}%`);
    console.log(`${((climbingKilimandjaro / totalClimbers)*100).toFixed(2)}%`);
    console.log(`${((climbingK2 / totalClimbers)*100).toFixed(2)}%`);
    console.log(`${((climbingEverest / totalClimbers)*100).toFixed(2)}%`);
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
