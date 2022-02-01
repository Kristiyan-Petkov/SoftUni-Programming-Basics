function histogram (input) {
    let year = Number (input[0]);
    let randomYear = Number (input[1]);

    for (let leapYear = year; leapYear <= randomYear; leapYear+=4){
        console.log(leapYear)
    }

}
histogram(["1908","1919"])