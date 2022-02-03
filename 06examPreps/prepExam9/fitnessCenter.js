function fitnessCenter(input) {
    let peopleNum = Number(input[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    for (let i = 1; i < input.length; i++){
        let currentArrayPosition = input[i];
        switch(currentArrayPosition){
            case "Back": back++; break;
            case "Chest": chest++; break;
            case "Legs": legs++; break;
            case "Abs": abs++; break;
            case "Protein shake": proteinShake++; break;
            case "Protein bar": proteinBar++; break;
        }
    }

    let training = ((back + chest + legs + abs) / peopleNum) * 100;
    let buying = ((proteinShake + proteinBar) / peopleNum) * 100;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${training.toFixed(2)}% - work out`);
    console.log(`${buying.toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
