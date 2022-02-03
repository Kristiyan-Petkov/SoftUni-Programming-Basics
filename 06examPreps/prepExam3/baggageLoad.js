function baggageLoad (input){
    let loadCapacity = Number (input[0]);
    let index = 1;
    let currentInputPosition = input[index];
    let suitcaseVolume = 0;
    let currentLoad = 0;
    let suitcasesNumTotal = 0;

    while (currentInputPosition !== "End"){
        suitcaseVolume = Number (currentInputPosition);
        if ((suitcasesNumTotal+1) % 3 === 0){
            suitcaseVolume = suitcaseVolume * 1.1;
        }
        if (suitcaseVolume > (loadCapacity - currentLoad)){
            console.log(`No more space!`);
            break;
        }
        currentLoad += suitcaseVolume;
        suitcasesNumTotal++;
        index++;
        currentInputPosition = input[index];
        suitcaseVolume = 0;

    }

    if (currentInputPosition === "End"){
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${suitcasesNumTotal} suitcases loaded.`);

}
baggageLoad(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])


