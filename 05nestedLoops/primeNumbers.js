function primeNumbers(input) {
    let index = 0;
    let current = input[index];
    index++;
    let allPrime = 0;
    let allNotPrime = 0;

    while (current !== "stop") {
        let num = Number(current);

        if (num < 0) {
            console.log("Number is negative.");
            current = input[index];
            index++
            continue;
        }
        if (num === 1) {
            allPrime += num;
            current = input[index];
            index++
            continue;
        }
        let isPrime = true;
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            allPrime += num;
        } else {
            allNotPrime += num;
        }
        current = input[index];
        index++
    }

    console.log(`Sum of all prime numbers is: ${allPrime}`);
    console.log(`Sum of all non prime numbers is: ${allNotPrime}`);
}
primeNumbers(["3", "9", "0", "7", "19", "4", "stop"])









