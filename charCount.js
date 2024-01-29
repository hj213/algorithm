// function chars(str){
//     let result = {};

//     for(let i = 0; i <str.length; i++){
//         let character = str[i];
//         if(result[character] > 0 ){
//             result[character] ++;
//         } else {
//             result[character] = 1;
//         }
//     }
//     return result;
// }

// console.log(char("mynameisyunhyojung"));

// function charCount(str){
//     let result={};
//     for(var char of str){
//         char = char.toLowerCase();
//         if(/[a-z0-9]/.test(char)){
//             if(result[char] > 0){
//                 result[char]++;
//             } else{
//                 result[char] = 1;
//             }
//         } 
        
//     }
//     return result
// }

//-> 정규화 사용
function charCount(str){
    let result={};
    for(var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            result[char] = ++result[char]|| 1;
        } 
        
    }
    return result
}


console.log(charCount("Myname is yunhyojung!"));