function foodDelivery(input) {
    let chickenMenu = Number (input[0])
    let fishMenu = Number (input[1])
    let vegetarianMenu = Number (input[2]) 
    
    let menusCost = chickenMenu*10.35 + fishMenu*12.4 + vegetarianMenu*8.15
    let dessert = menusCost*0.2

    console.log(menusCost+dessert+2.5)
}
foodDelivery(["9","2","6"])