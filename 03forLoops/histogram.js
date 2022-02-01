function histogram(input) {
    let numbersCount = Number(input[0]);
    let p1count = 0;
    let p2count = 0;
    let p3count = 0;
    let p4count = 0;
    let p5count = 0;

    for (let i = 1; i <= numbersCount; i++) {
        let num = Number (input[i]);
        
        if (num < 200) {
            p1count++
        } else if (num >= 200 && num < 400) {
            p2count++
        } else if (num >= 400 && num < 600) {
            p3count++
        } else if (num >= 600 && num < 800) {
            p4count++
        } else if (num >= 800 && num < 1001) {
            p5count++
        }
    }


    console.log(`${((p1count / numbersCount) * 100).toFixed(2)}%`)
    console.log(`${((p2count / numbersCount) * 100).toFixed(2)}%`)
    console.log(`${((p3count / numbersCount) * 100).toFixed(2)}%`)
    console.log(`${((p4count / numbersCount) * 100).toFixed(2)}%`)
    console.log(`${((p5count / numbersCount) * 100).toFixed(2)}%`)

}
histogram(["3", "1", "2", "999"])