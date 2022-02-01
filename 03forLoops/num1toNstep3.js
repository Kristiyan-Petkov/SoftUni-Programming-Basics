function oneToN (input) {
    let num = Number (input[0]);
    
    for (let currentNum = 1; currentNum <= num; currentNum+=3){
        console.log(currentNum)
    }

}
oneToN(["10"])