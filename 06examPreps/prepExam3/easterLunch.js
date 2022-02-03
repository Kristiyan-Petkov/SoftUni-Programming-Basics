function easterLunch(input) {
    let briocheNum = Number (input[0]);
    let eggCartonsNum = Number (input[1]);
    let cookiesNum = Number (input[2]);
    let foodPaint = eggCartonsNum * 12 * 0.15;

    let total = (briocheNum * 3.2) + (eggCartonsNum * 4.35) + (cookiesNum * 5.4) + foodPaint;
    console.log(total.toFixed(2));

}
easterLunch(["2",
"3",
"2"])


