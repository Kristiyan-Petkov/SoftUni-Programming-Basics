function gymnastics(input) {
    let country = input[0];
    let discipline = input[1];
    let difficultyScore = 0;
    let artisticScore = 0;

    switch (country) {
        case "Russia":
            if (discipline === "ribbon"){
                difficultyScore = 9.1;
                artisticScore = 9.4;
            } else if (discipline === "hoop"){
                difficultyScore = 9.3;
                artisticScore = 9.8;
            } else {
                difficultyScore = 9.6;
                artisticScore = 9.0;
            }
            break;
        case "Bulgaria":
            if (discipline === "ribbon"){
                difficultyScore = 9.6;
                artisticScore = 9.4;
            } else if (discipline === "hoop"){
                difficultyScore = 9.55;
                artisticScore = 9.75;
            } else {
                difficultyScore = 9.5;
                artisticScore = 9.4;
            }
            break;
        case "Italy":
            if (discipline === "ribbon"){
                difficultyScore = 9.2;
                artisticScore = 9.5;
            } else if (discipline === "hoop"){
                difficultyScore = 9.45;
                artisticScore = 9.35;
            } else {
                difficultyScore = 9.7;
                artisticScore = 9.15;
            }
            break;
    }

    let differenceToMaxScore = 20 - (difficultyScore + artisticScore);

    console.log(`The team of ${country} get ${(difficultyScore + artisticScore).toFixed(3)} on ${discipline}.`);
    console.log(`${((differenceToMaxScore/20)*100).toFixed(2)}%`);

}
gymnastics(["Bulgaria", "ribbon"])