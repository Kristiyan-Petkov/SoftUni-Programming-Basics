function balls(input) {
    let numberOfBalls = Number(input[0]);
    let index = 1;
    let currentPositionBall = input[index];
    let redBallPoints = 0;
    let orangeBallPoints = 0;
    let yellowBallPoints = 0;
    let whiteBallPoints = 0;
    let blackBallsCount = 0;
    let otherColorsCount = 0;
    let totalPoints = 0;


    for (i = 1; i <= numberOfBalls; i++) {
        switch (currentPositionBall) {
            case "red":
                redBallPoints++;
                totalPoints += 5;
                break;
            case "orange":
                orangeBallPoints++;
                totalPoints += 10;
                break;
            case "yellow":
                yellowBallPoints++;
                totalPoints += 15;
                break;
            case "white":
                whiteBallPoints++;
                totalPoints += 20;
                break;
            case "black":
                blackBallsCount++;
                totalPoints = totalPoints / 2;
                break;
            default:
                otherColorsCount++;
                break;
        }
        index++;
        currentPositionBall = input[index];
    }

    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${redBallPoints}`);
    console.log(`Orange balls: ${orangeBallPoints}`);
    console.log(`Yellow balls: ${yellowBallPoints}`);
    console.log(`White balls: ${whiteBallPoints}`);
    console.log(`Other colors picked: ${otherColorsCount}`);
    console.log(`Divides from black balls: ${blackBallsCount}`);


}
balls(["3",
    "white",
    "black",
    "pink"])
