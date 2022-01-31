function plus15min (input) {
    let hours = Number (input[0])
    let mins = Number (input[1])
    
    let futureMins = (hours*60) + mins + 15
    let futureHour = Math.floor(futureMins / 60)
    let futureMin = futureMins - (futureHour * 60)
    
    let hourOver24 = futureHour - 24

    if (futureMins >= (24*60)) {
            if (futureMin >= 10) {
            console.log(`${hourOver24}:${futureMin}`)
            } else {
            console.log(`${hourOver24}:0${futureMin}`)
            }
    }
    else if (futureMin >= 10) {
        console.log(`${futureHour}:${futureMin}`)  
    } else {
        console.log(`${futureHour}:0${futureMin}`)
    }
    


}
plus15min(["1","46"])