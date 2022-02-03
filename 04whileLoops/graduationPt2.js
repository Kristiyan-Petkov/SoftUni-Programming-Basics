function graduationPt2(input) {
    let name = input[0];
    let excluded = 0;
    let sum = 0;
    let index = 0;
    let grades = 1;

    while (grades <= 12){
        index++;
        let grade = Number (input[index]);
        
        if (grade >= 4){
            sum += grade
            grades++
        } else {
            excluded++;
            break;
        }
    }

    if (excluded >= 1){
        console.log(`${name} has been excluded at ${grades} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`)
    }
}
graduationPt2(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])

