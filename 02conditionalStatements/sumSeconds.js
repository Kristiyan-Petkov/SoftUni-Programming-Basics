function sumseconds (input) {
    let time1 = Number (input[0])
    let time2 = Number (input[1])
    let time3 = Number (input[2])

    let totalSeconds = (time1+time2+time3)
    let min = Math.floor(totalSeconds / 60)
    let sec = totalSeconds % 60
    
    if (sec < 10) {
        console.log(`${min}:0${sec}`)
    } else {
        console.log(`${min}:${sec}`)
    }
    


}
sumseconds(["35","49","49"])