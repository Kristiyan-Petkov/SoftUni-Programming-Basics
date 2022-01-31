function summerOutfits (input) {
    let temperature = Number (input[0]);
    let partOfDay = input[1];
    let outfit = 0
    let shoes = 0

    if (temperature >= 10 && temperature <= 18) {
        switch (partOfDay){
            case "Morning": outfit = "Sweatshirt"; shoes = "Sneakers";break;
            case "Afternoon":
            case "Evening": outfit = "Shirt"; shoes = "Moccasins";break;
        }
    } else if (temperature > 18 && temperature <= 24) {
        switch (partOfDay){
            case "Morning":
            case "Evening": outfit = "Shirt"; shoes = "Moccasins";break;
            case "Afternoon": outfit = "T-Shirt"; shoes = "Sandals";break;
        }
    } else if (temperature >= 25) {
        switch (partOfDay){
            case "Morning": outfit = "T-Shirt"; shoes = "Sandals";break;
            case "Afternoon": outfit = "Swim Suit"; shoes = "Barefoot";break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins";break;
        }
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfits(["16","Morning"])