function worldRecord (input) {
    let worldRecord = Number (input[0]);
    let distance = Number (input[1]);
    let speedMperS = Number (input[2]);
    let friction = (Math.floor(distance / 15)) * 12.5;
    let swimmerTime = (distance * speedMperS) + friction;
    let slower = (swimmerTime - worldRecord);
    
    if (swimmerTime >= worldRecord) {
        console.log(`No, he failed! He was ${((swimmerTime-worldRecord).toFixed(2))} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${((distance*speedMperS)+friction).toFixed(2)} seconds.`);
    }

}
worldRecord(["55555.67","3017","5.03"])