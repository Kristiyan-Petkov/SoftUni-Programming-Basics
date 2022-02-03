function skeleton(input){
    let controlMins = Number (input[0]);
    let controlSecs = Number (input[1]);
    let trackLength = Number (input[2]);
    let timeFor100m = Number (input[3]);

    let controlTimeInSecs = controlMins*60 + controlSecs;
    let racerTime = (trackLength/100)*timeFor100m - (trackLength/120)*2.5;

    if (racerTime <= controlTimeInSecs){
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${racerTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(racerTime - controlTimeInSecs).toFixed(3)} second slower.`);
    }


}
skeleton(["2",
"12",
"1200",
"10"])
