function renovationV2 (input){
    let wallHeight = Number (input[0]);
    let wallWidth = Number (input[1]);
    let percentageNotToPaint = Number (input[2]);
    let surfaceToPaint = Math.ceil(4*((wallHeight * wallWidth) * ((100 - percentageNotToPaint)/100)));
    let paintUsed = 0;
    let index = 3;
    let currentPosition = input[index++];
    let inputLenght = input.lenght;

    while (currentPosition !== "Tired!"){
        paintUsed += Number (currentPosition);
        if (paintUsed > surfaceToPaint){
            console.log(`All walls are painted and you have ${paintUsed - surfaceToPaint} l paint left!`);
            break;
        } else if (index === inputLenght){
            break;
        }
        currentPosition = input[index++]
    }

    if (paintUsed < surfaceToPaint){
        console.log(`${surfaceToPaint - paintUsed} quadratic m left.`);
    } else if (paintUsed === surfaceToPaint){
        console.log(`All walls are painted! Great job, Rumba!`);
    }

}
renovationV2(["3","5","10",
"44","10","4",
"Tired!"])