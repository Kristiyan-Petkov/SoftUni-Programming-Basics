function filmRatings(input) {
    let moviesNumber = Number(input[0]);
    let sumOfRatings = Number(input[2]);
    let bestMovieName = input[1];
    let bestMovieRating = Number(input[2]);
    let index = 3;
    let currentInputPosition = input[index];
    let currentMovieName = input[1];
    let worstMovieName = input[1];
    let worstMovieRating = Number(input[2]);
    
    for (let i = (moviesNumber-1); i > 0; i--) {

        currentMovieName = input[index++];
        currentInputPosition = Number(input[index]);
        sumOfRatings += currentInputPosition;

        if (currentInputPosition > bestMovieRating) {
            bestMovieName = currentMovieName;
            bestMovieRating = currentInputPosition;
        } else if (worstMovieRating > currentInputPosition) {
            worstMovieName = currentMovieName;
            worstMovieRating = currentInputPosition;
        }
        index++;
    }

    console.log(`${bestMovieName} is with highest rating: ${bestMovieRating.toFixed(1)}`);
    console.log(`${worstMovieName} is with lowest rating: ${worstMovieRating.toFixed(1)}`);
    console.log(`Average rating: ${(sumOfRatings / moviesNumber).toFixed(1)}`);

}
filmRatings(["5","A Star is Born","7.8","Creed 2","7.3","Mary Poppins","7.2","Vice","7.2",
"Captain Marvel","7.1"])