function tradeCommissions(input) {
    let city = input[0];
    let sales = Number (input[1]);
    let commissionRange = 0

    if (sales >= 0 && sales <= 500) {
        switch (city){
            case "Sofia": commissionRange = 0.05;console.log((commissionRange * sales).toFixed(2));break;
            case "Varna": commissionRange = 0.045;console.log((commissionRange * sales).toFixed(2));break;
            case "Plovdiv": commissionRange = 0.055;console.log((commissionRange * sales).toFixed(2));break;
            default:console.log("error")
        }
        
    } else if (sales > 500 && sales <= 1000){
        switch (city){
            case "Sofia": commissionRange = 0.07;console.log((commissionRange * sales).toFixed(2));break;
            case "Varna": commissionRange = 0.075;console.log((commissionRange * sales).toFixed(2));break;
            case "Plovdiv": commissionRange = 0.08;console.log((commissionRange * sales).toFixed(2));break;
            default:console.log("error")
        }
    } else if (sales > 1000 && sales <= 10000){
        switch (city){
            case "Sofia": commissionRange = 0.08;console.log((commissionRange * sales).toFixed(2));break;
            case "Varna": commissionRange = 0.10;console.log((commissionRange * sales).toFixed(2));break;
            case "Plovdiv": commissionRange = 0.12;console.log((commissionRange * sales).toFixed(2));break;
            default:console.log("error")
        }
    } else if (sales > 10000){
        switch (city){
            case "Sofia": commissionRange = 0.12;console.log((commissionRange * sales).toFixed(2));break;
            case "Varna": commissionRange = 0.13;console.log((commissionRange * sales).toFixed(2));break;
            case "Plovdiv": commissionRange = 0.145;console.log((commissionRange * sales).toFixed(2));break;
            default:console.log("error")
        }
    } else {
        console.log("error")
    }

}
tradeCommissions(["Sofia","1500"])