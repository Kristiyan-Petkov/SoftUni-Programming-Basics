function nestedConstruct(input) {

    let pass = input[0]

    switch (pass) {
        case "AbcD1": console.log("Hi, User!"); break;
        case "GD": console.log("Gorna Djumaya"); break;
        case "AzerTy_99": console.log("Welcome!"); break;
        case "Pass123": console.log("Hi Pass"); break;
        default: console.log("User not found!"); break;
    }

}
nestedConstruct(["AzerTy_99"])