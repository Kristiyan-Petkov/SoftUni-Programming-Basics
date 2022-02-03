function highJumpV2(inputArr) {
    let target = Number(inputArr[0]);
    let startHeigth = target - 30;
    let failCount = 0;
    let jumpsCount = 0;
    let success = false;

    for (let i = 1; i < inputArr.length; i++) {
        let currentJump = Number(inputArr[i]);
        jumpsCount++;
        if (currentJump > startHeigth) {
            if (startHeigth >= target){
                console.log(`Tihomir succeeded, he jumped over ${startHeigth}cm after ${jumpsCount} jumps.`);
                success = true;
                break;
            }
            startHeigth += 5;
            failCount = 0;
        } else {
            failCount++;
        }
        if (failCount == 3){
            console.log(`Tihomir failed at ${startHeigth}cm after ${jumpsCount} jumps.`);
            break;
        }
    }
    if (!success && failCount != 3){
        console.log(`Tihomir failed at ${startHeigth}cm after ${jumpsCount} jumps.`);
    }
}
highJumpV2(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])
