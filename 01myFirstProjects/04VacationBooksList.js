function vacationBooksList(input) {

    let allPages = input[0]
    let capacity = input[1]
    let days = input[2]
    let totalReadTime = allPages/capacity
    let hoursDaily = totalReadTime/days
    
    console.log(hoursDaily)
    
    }
    vacationBooksList([800,5,40])