function password (input){
    let username = input[0];
    let pass = input[1];
    let index = 2;
    let entryPass = input[index];

    while (true) {
        if (pass !== entryPass){
            index++;
            entryPass = input[index];
        } else {
            console.log(`Welcome ${username}!`);
            break;
        }
    }


}
password(["Nakov","1234","Pass","1324","1234"])
