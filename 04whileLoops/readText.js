function readText (input){
    let index = 0;

    while (true){
        let string = input[index]
        index++
        if (string === "Stop"){
            break;
        }
        console.log(string);
    }

}
readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"])