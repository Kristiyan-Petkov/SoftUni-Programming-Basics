function easterEggsBattle(input) {
    let eggsNumPlayer1 = Number(input[0]);
    let eggsNumPlayer2 = Number(input[1]);
    let index = 2;
    let currentInputPosition = input[index];
    while (currentInputPosition !== "End of battle") {
        
        switch (currentInputPosition) {
            case "one":
                eggsNumPlayer2--;
                break;
            case "two":
                eggsNumPlayer1--;
                break;
        }
        if (eggsNumPlayer1 === 0){
            console.log(`Player one is out of eggs. Player two has ${eggsNumPlayer2} eggs left.`);
            break;
        } else if (eggsNumPlayer2 === 0){
            console.log(`Player two is out of eggs. Player one has ${eggsNumPlayer1} eggs left.`);
            break;
        }
        index++;
        currentInputPosition = input[index];
    }

    if (currentInputPosition === "End of battle"){
        console.log(`Player one has ${eggsNumPlayer1} eggs left.`);
        console.log(`Player two has ${eggsNumPlayer2} eggs left.`);
    }


}
// easterEggsBattle(["5",
//     "4",
//     "one",
//     "two",
//     "one",
//     "two",
//     "two",
//     "End of battle",
// ])

easterEggsBattle(["2",
"6",
"one",
"two",
"two"])
