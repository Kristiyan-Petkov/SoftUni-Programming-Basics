function walking(input) {
    let goal = 10000;
    let steps = 0;
    index = 0;
    let entry = input[index]

    while (steps < goal){
        if (entry === "Going home"){
            steps += Number (input[index+1]);
            break;
        }
        steps += Number (input[index]);
        index++;
        entry = input[index];
    }

    if (steps >= goal){
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - steps} more steps to reach goal.`)
    }

}
walking(["1500", "300", "2500", "3000", "Going home", "200"])
