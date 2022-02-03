function changeBureau(input) {
    let bitcoin = Number (input[0]);
    let yuan = Number (input[1]);
    let commission = Number (input[2]);

    let bitcoinToBGN = bitcoin * 1168;
    let yuanToBGN = (yuan * 0.15) * 1.76;
    let preTotal = (bitcoinToBGN + yuanToBGN) / 1.95 ;
    let finalComission = (commission/100) * preTotal;

    console.log((preTotal - finalComission).toFixed(2))


}
changeBureau(["1",
"5",
"5"])


