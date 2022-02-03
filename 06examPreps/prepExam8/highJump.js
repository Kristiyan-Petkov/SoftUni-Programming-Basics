function highJump (input){
    let target = Number (input[0]);
    let currentHeightTarget = target - 30;
    let jumpsDone = 0;
    let failsCount = 0;
    for (let i = 1; i < input.length - 1; i++){
        let currentJump = Number (input[i]);
        jumpsDone++;
        if (currentJump > target){
            console.log(`Tihomir succeeded, he jumped over ${target}cm after ${jumpsDone} jumps.`);
            return;
        } else if (currentJump > currentHeightTarget) {
            currentHeightTarget += 5;
            failsCount = 0;
        } else if (currentJump <= currentHeightTarget){
            failsCount++;
            if (failsCount === 3){
                console.log(`Tihomir failed at ${currentHeightTarget}cm after ${jumpsDone} jumps.`);
                return;
            }
        }
    }
}
highJump(["231",
"210",
"212",
"213",
"228",
"229",
"230",
"235"])
