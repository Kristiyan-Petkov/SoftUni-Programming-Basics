function multilicationTable (input) {
    let number = Number (input[0]);

    for (let table = 1; table <= 10; table++){
        console.log(`${table} * ${number} = ${table*number}`)
    }

}
multilicationTable(["5"])