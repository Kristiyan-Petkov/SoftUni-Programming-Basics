function trekking(input) {
    let index = 0
    let groups = Number(input[index]);
    index++
    let musala = 0
    let montBlanc = 0
    let kilimandjaro = 0
    let k2 = 0
    let everest = 0
    let totalPeople = 0

    for (let i = 0; i < groups; i++) {
        totalPeople += Number(input[index]);
        let people = Number(input[index]);
        if (people <= 5) {
            musala += people
        } else if (people > 5 && people <= 12) {
            montBlanc += people
        } else if (people > 12 && people <= 25) {
            kilimandjaro += people
        } else if (people > 25 && people <= 40) {
            k2 += people
        } else if (people > 40) {
            everest += people
        }
        index++
    }

    console.log(`${((musala / totalPeople)*100).toFixed(2)}%`);
    console.log(`${((montBlanc / totalPeople)*100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / totalPeople)*100).toFixed(2)}%`);
    console.log(`${((k2 / totalPeople)*100).toFixed(2)}%`);
    console.log(`${((everest / totalPeople)*100).toFixed(2)}%`);

}
trekking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])