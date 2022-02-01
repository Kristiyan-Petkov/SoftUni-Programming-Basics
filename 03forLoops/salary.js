function salaryPenalty(input) {
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);
    let penalty = 0

    for (let i = 2; i <= (tabsCount+1); i++) {
        let tab = input[i];
        switch (tab) {
            case "Facebook": penalty += 150; break;
            case "Instagram": penalty += 100; break;
            case "Reddit": penalty += 50; break;
        }
    }

    if (penalty >= salary) {
        console.log("You have lost your salary.")
    } else {
        console.log((salary - penalty).toFixed(0))
    }

}
salaryPenalty(["10","10750","Facebook","Instagram","Instagram","Facebook","Reddit","Facebook","Facebook","Facebook"])