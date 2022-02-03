function oscars(input) {
    let hallRent = Number(input[0]);
    let statuettes = hallRent * 0.7;
    let catering = statuettes * 0.85;
    let sound = catering / 2;

    console.log((hallRent+statuettes+catering+sound).toFixed(2));

}
oscars(["3500"])