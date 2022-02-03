function trainTheTrainers (input) {
    
    let evaluationsPerSubject = Number (input[0]);
    let index = 1;
    let current = input[index];
    let prezNote = 0;
    let totalNote = 0;
    let prezCount = 0;
    let prezType = ``;


    while (current !== "Finish"){
        prezType += `${current = input[index++]} - `;
        for (i = 0; i < evaluationsPerSubject; i++){
            let num = Number(input[index]);
            prezNote += num;
            current = input[index];
            index++;
        }
        prezType += `${(prezNote/evaluationsPerSubject).toFixed(2)}.`;
        console.log(prezType)
        prezCount++
        totalNote += prezNote/evaluationsPerSubject;
        prezNote = 0;
        prezType = ``;
        current = input[index];
    }
    console.log(`Student's final assessment is ${(totalNote/prezCount).toFixed(2)}.`)
}
trainTheTrainers(["2",
"While-Loop","6.00","5.50",
"For-Loop","5.84","5.66",
"Finish"])
