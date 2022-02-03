function cinemaTickets(input){
    let movieTitle = input[0];
    let capacity = Number (input[1]);
    let index = 2;
    let currentPosition = input[index];
    let counter = 0;
    let kid = 0;
    let student = 0;
    let standard = 0;
    let totalTickets = 0;



    while (currentPosition !== "Finish"){
        if (counter >= capacity){
            console.log(`${movieTitle} - ${((counter/capacity)*100).toFixed(2)}% full.`)
                    index++;
                    currentPosition = input[index];
                    index++;
                    capacity = Number (input[index]);
                    counter = 0;
                    break;
        } else {
            switch (currentPosition){
                case "kid": 
                    kid++;
                    counter++;
                    index++;
                    totalTickets++;
                    currentPosition = input[index];
                    break;
                case "student": 
                    student++;
                    counter++;
                    index++;
                    totalTickets++;
                    currentPosition = input[index];
                    break;
                case "standard": 
                    standard++;
                    counter++;
                    index++;
                    totalTickets++;
                    currentPosition = input[index];
                    break;
                case "End":  
                    console.log(`${movieTitle} - ${((counter/capacity)*100).toFixed(2)}% full.`)
                    index++;
                    movieTitle = input[index];
                    index++;
                    capacity = Number (input[index]);
                    index++;
                    currentPosition = input[index];
                    counter = 0;
            }
            
        }
        if (counter >= capacity){
            console.log(`${movieTitle} - ${((counter/capacity)*100).toFixed(2)}% full.`)
                    index++;
                    currentPosition = input[index];
                    index++;
                    capacity = Number (input[index]);
                    counter = 0;
                    break;
        }
    
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((student/totalTickets)*100).toFixed(2)}% student tickets.`);
    console.log(`${((standard/totalTickets)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid/totalTickets)*100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard","Finish"])
