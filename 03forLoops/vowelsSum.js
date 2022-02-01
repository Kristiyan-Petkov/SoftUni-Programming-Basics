function vowelsSum (input) {
    let word = input[0];
    let wordLength = word.length
    let sum = 0;

    for (let character = 0; character < wordLength; character++){
       switch (word[character]){
           case "a": sum+=1;break;
           case "e": sum+=2;break;
           case "i": sum+=3;break;
           case "o": sum+=4;break;
           case "u": sum+=5;break;
       } 
    }   
    console.log(sum)
}
vowelsSum(["Hello"])