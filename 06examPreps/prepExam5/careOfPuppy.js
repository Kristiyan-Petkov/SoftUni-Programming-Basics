function careOfPuppy(input){
    let foodBoughtKg = Number (input[0]);
    let index = 1;
    let currentDogServing = input[index];
    let ateByDog = 0;

    while (currentDogServing !== "Adopted"){
        ateByDog += Number (currentDogServing);
        index++;
        currentDogServing = input[index];
    }

    if (ateByDog <= foodBoughtKg*1000){
        console.log(`Food is enough! Leftovers: ${(foodBoughtKg*1000)-ateByDog} grams.`);
    } else {
        console.log(`Food is not enough. You need ${ateByDog - (foodBoughtKg*1000)} grams more.`);
    }

}
careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])
