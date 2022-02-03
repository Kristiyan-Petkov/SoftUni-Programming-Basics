function examPreparation(input) {
    let poorGradesLimit = Number(input[0]);
    let index = 1
    let examProblem = input[index]
    let examScore = Number(input[index + 1]);
    let fails = 0
    let problemsCount = 0
    let lastProblemDone = input[index]
    let allExams = ((Number(input.length)) - 1) / 2
    let sumScores = 0

    while (examProblem !== "Enough") {
        if (fails < poorGradesLimit) {

            sumScores += Number (input[index + 1])
            if (examScore <= 4) {
                fails++
            }
            lastProblemDone = input[index];
            index += 2;
            problemsCount++;
            examProblem = input[index];
            examScore = Number(input[index + 1]);
        } else if (fails >= poorGradesLimit) {
            console.log(`You need a break, ${fails} poor grades.`)
            return;
        }
    }

    if (allExams > problemsCount) {
        console.log(`Average score: ${(sumScores / problemsCount).toFixed(2)}`)
        console.log(`Number of problems: ${problemsCount}`)
        console.log(`Last problem: ${lastProblemDone}`)
    }

}
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])

