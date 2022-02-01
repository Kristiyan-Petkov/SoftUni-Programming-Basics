function stringInputToForLoop(input){
    let text = input[0];
    let inputLenght = text.length;
   
    for (let index = 0; index < inputLenght; index++){
        console.log(index)
        console.log(text[index])
    }
    console.log(text)
    console.log(inputLenght)


}
stringInputToForLoop(["hello"])