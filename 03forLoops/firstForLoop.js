function lecture(input) {
    let start = Number (input[0]);
    let end = Number (input[1]);


    for (let numb = start; numb <= end; numb+=2) {

        
        if (numb % 2 === 0){
            console.log(numb)
        }
        

    }

}
lecture(["4","17"])