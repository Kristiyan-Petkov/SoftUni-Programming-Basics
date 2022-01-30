function repainting(input) {

    let nylonSurface = (Number (input[0]))+2
    let paintLitres = (Number (input[1]))*1.1
    let dissolvantLitres = Number (input[2])
    let hoursWorkforce = Number (input[3])

    let nylonPrice = 1.5
    let paintPrice = 14.5
    let dissolvantPrice = 5
    let extrabags = 0.4

    let totalMaterials = (nylonPrice*nylonSurface) + (paintPrice*paintLitres) + (dissolvantPrice*dissolvantLitres) + extrabags
    let totalWorkforce = hoursWorkforce*(totalMaterials*0.3)

    console.log(totalMaterials+totalWorkforce)

}
repainting(["10","11","4","8"])