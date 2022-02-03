function moving(input) {
    
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);
    let totalVolume = width * length * heigth;
   
    let index = 3;
    let boxesVolume = 0;
    let command = input[index];

    while (command !== "Done") {
        boxesVolume += Number(command);
        index++
        if (boxesVolume > totalVolume) {
            break;
        }
        command = input[index];
    }

    if (boxesVolume > totalVolume) {
        console.log(`No more free space! You need ${boxesVolume - totalVolume} Cubic meters more.`);
    } else {
        console.log(`${totalVolume - boxesVolume} Cubic meters left.`);
    }

}
moving(["10","10","2","202","6"])