function traveling (input){
    let destination = input[0];
    let targetBudget = Number (input[1]);
    let positions = input.length - 2;
    let currentBudget = 0;
    let counter = 0;
    let index = 2
    let currentPosition = input[index];

    while (counter <= positions){
        if (currentPosition === "End"){
            return;
        } else if (targetBudget <= currentBudget){
            console.log(`Going to ${destination}!`)
            destination = input[index];
            index++
            targetBudget = Number (input[index]);
            index++
            currentBudget = 0;
            counter++
        } else if (targetBudget > currentBudget){
            currentBudget += Number (input[index]);
            index++
            counter++
        } else {
            counter++
        }
        
    }

}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
