function sequence2k1 (input){
    let target = Number (input[0]);
    let start = 1

    
    while (start <= target){
        console.log(start);
        start = (start*2)+1
    }

}
sequence2k1(["17"])