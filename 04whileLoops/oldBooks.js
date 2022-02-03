function oldBooks(input) {
    let targetBook = input[0];
    index = 1;
    let entry = input[index];
    let checkedBooks = 0
    let entries = input.length - 1
    let found = 0;

    while (checkedBooks < entries) {
        if (entry === targetBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            found++
            break;
        } else if (entry === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${checkedBooks} books.`);
            found++
            break;
        }
        checkedBooks++
        index++
        entry = input[index];
    }

    if (found < 1) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks - 2} books.`);
    }
}
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])
