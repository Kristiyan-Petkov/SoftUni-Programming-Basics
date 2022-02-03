function cinemaTickets(input) {
    let index = 0;
    let inputLine = input[index++];
    let standard = 0;
    let student = 0;
    let kid = 0;
    let allTickets = 0;
    let currentTickets = 0;

    while (inputLine !== "Finish") {
        let movie = inputLine;
        let capacity = Number(input[index++]);
        let ticketType = input[index++];
        
        while (ticketType !== "End") {
            switch (ticketType) {
                case "standard": standard++; break;
                case "student": student++; break;
                case "kid": kid++; break;
            }
            allTickets++;
            currentTickets++;
            if (currentTickets === capacity) {
                break;
            }
            ticketType = input[index++];
            
        }
        
        let percentageFull = (currentTickets / (capacity)) * 100;
        console.log(`${movie} - ${percentageFull.toFixed(2)}% full.`)
        inputLine = input[index++];
        currentTickets = 0;
        
        

    }
    
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${((student/allTickets)*100).toFixed(2)}% student tickets.`);
    console.log(`${((standard/allTickets)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid/allTickets)*100).toFixed(2)}% kids tickets.`);

}
cinemaTickets([
    "The Matrix", "20",
    "student", "standard", "kid", "kid", "student", "student", "standard", "student",
    "End",
    "The Green Mile", "17",
    "student", "standard", "standard", "student", "standard", "student",
    "End",
    "Amadeus", "3", "standard", "standard", "standard",
    "Finish"])