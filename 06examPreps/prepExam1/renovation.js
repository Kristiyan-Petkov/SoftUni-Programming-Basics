function renovation (input){
        let wallHeight = Number (input[0]);
        let wallWidth = Number (input[1]);
        let percentageNotToPaint = Number (input[2]);
        let surfaceToPaint = Math.ceil(4*((wallHeight * wallWidth) * ((100 - percentageNotToPaint)/100)));
        let paintUsed = 0;
        let index = 3;
        let currentPosition = input[index++];

    while (currentPosition !== "Tired!"){
        paintUsed += Number (currentPosition);
        if (paintUsed > surfaceToPaint){
            console.log(`All walls are painted and you have ${paintUsed - surfaceToPaint} l paint left!`);
            break;
        } else if (paintUsed === surfaceToPaint){
            console.log(`All walls are painted! Great job, Rumba!`);
            break;
        }
        currentPosition = input[index++]
    }

    if (paintUsed < surfaceToPaint){
        console.log(`${surfaceToPaint - paintUsed} quadratic m left.`);
    }

}
renovation(["3","5","10",
"44","10","4",
"Tired!"])


