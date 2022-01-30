function basketballEquipment(input) {

    let subscription = Number (input[0])
    let sneakers = subscription * 0.6
    let equipe = sneakers * 0.8
    let ball = equipe * 0.25
    let accessories = ball * 0.2

    console.log(subscription+sneakers+equipe+ball+accessories)


}
basketballEquipment(["550"])