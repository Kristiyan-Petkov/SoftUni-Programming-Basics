function aquarium(input) {

    let lenght = input[0]
    let width = input[1]
    let height = input[2]
    let materialsPercentage = input[3] / 100

    let volume = (lenght*width*height)/1000
    
    console.log(volume-(volume*materialsPercentage))

}
aquarium(["85","75","47","17"])