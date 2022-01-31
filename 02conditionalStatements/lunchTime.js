function lunchTime (input) {
    let series = input[0]
    let episodeLenght = Number (input[1])
    let breakLenght = Number (input[2])
    let lunch = breakLenght/8
    let rest = breakLenght/4
    let availableTime = breakLenght - lunch - rest
    let timeLeft = availableTime - episodeLenght
    let timeNeeded = episodeLenght - availableTime

    if (timeLeft >= 0) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }


}
lunchTime(["Clarkson's Farm","60","96"])