function estimatedArrival (input) {
    let examHour = Number (input[0]);
    let examMin = Number (input[1]);
    let arrivalHour = Number (input[2]);
    let arrivalMin = Number (input[3]);
    let difference = ((arrivalHour*60)+arrivalMin) - ((examHour*60)+examMin)
    
    let diffMM = Math.abs(difference % 60)
    let diffHH = Math.floor(Math.abs(difference / 60))
    let diffMinPositive = Math.abs(diffMM)
    let diffHourPositive = Math.abs(diffHH)

    if (difference > 0){
        console.log("Late");
    } else if (difference <= 0 && difference > -31){
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (difference > -10 && difference < 0){
        console.log(`${diffMinPositive} minutes before the start`)
    } else if (difference > -60 && difference < -10){
        console.log(`${diffMinPositive} minutes before the start`)
    } else if (difference <= -60 && diffMM < 10){
        console.log(`${diffHourPositive}:0${diffMinPositive} hours before the start`)
    } else if (difference <= -60 && diffMM >= 10){
        console.log(`${diffHourPositive}:${diffMinPositive} hours before the start`)
    } else if (difference > 0 && difference < 60){
        console.log(`${diffMM} minutes after the start`)
    } else if (difference >= 60 && diffMM < 10){
        console.log(`${diffHourPositive}:0${diffMinPositive} hours after the start`)
    } else if (difference >= 60 && diffMM >= 10){
        console.log(`${diffHourPositive}:${diffMinPositive} hours after the start`)
    }



}
estimatedArrival(["11","30","8","12"])