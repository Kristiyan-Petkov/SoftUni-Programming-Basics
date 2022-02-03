function tennisEquipment(input){
    let tennisRacketPrice = Number (input[0]);
    let tennisRacketsNum = Number (input[1]);
    let tennisShoesPairs = Number (input[2]);
    let racketsTotalPrice = tennisRacketPrice * tennisRacketsNum;
    let shoesTotalPrice = tennisShoesPairs * (tennisRacketPrice / 6);
    let other = (racketsTotalPrice + shoesTotalPrice) * 0.2;
    let sponsorsShare = (racketsTotalPrice + shoesTotalPrice + other) * 0.875;
    let playerShare = (racketsTotalPrice + shoesTotalPrice + other) * 0.125;


    console.log(`Price to be paid by Djokovic ${Math.floor(playerShare)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsShare)}`);
}
tennisEquipment(["850",
"4",
"2"])
