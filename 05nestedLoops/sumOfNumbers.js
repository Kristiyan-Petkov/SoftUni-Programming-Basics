function sumOfNumbers(input) {
    let bottom = Number(input[0]);
    let top = Number(input[1]);
    let target = Number(input[2]);
    let comboCount = 0;
    let hit = 0;

    for (i = bottom; i <= top; i++) {
        for (j = bottom; j <= top; j++) {
            if (i + j === target) {
                comboCount++;
                console.log(`Combination N:${comboCount} (${i} + ${j} = ${target})`);
                hit++;
                return;
            } else {
                comboCount++;
            }
        }
    }
    if (hit < 1) {
        console.log(`${comboCount} combinations - neither equals ${target}`);
    }
}
sumOfNumbers(["1", "10", "5"])
