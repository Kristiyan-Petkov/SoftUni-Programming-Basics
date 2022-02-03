function speedClimb (input){
    let recodTime = Number (input[0]);
    let distance = Number (input[1]);
    let speed = Number (input[2]);
    let delay = Math.floor(distance/50) * 30;

    let contendantTime = (distance*speed) + delay;

    if (contendantTime >= recodTime){
        console.log(`No! He was ${(contendantTime - recodTime).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${contendantTime.toFixed(2)} seconds.`);
    }

}
speedClimb(["5554.36","1340","3.23"])