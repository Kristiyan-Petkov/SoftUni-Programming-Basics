function seriesCalculator(input){
    let seriesName = input[0];
    let numSeasons = Number (input[1]);
    let numEpisodes = Number (input[2]);
    let episodeLength = Number (input[3]);
    let initialTimeWithAds = numSeasons * numEpisodes*(episodeLength*1.2);
    let extraTime = numSeasons * 10
    let totalTime = initialTimeWithAds + extraTime

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalTime)} minutes.`);
}
seriesCalculator(["Lucifer",
"3",
"18",
"55"])