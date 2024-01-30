//문자열1과 애너그램된 문자열2가 동일한지 비교

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    
    let fqct1 = {};
    let fqct2 = {};
    
    for(const char of str1){
        fqct1[char] = (fqct1[char] || 0) + 1;
    }
    for(const char of str2){
        fqct2[char] = (fqct2[char] || 0) + 1;
    }
    for(const key in fqct1){
        if(!(key in fqct2)){
            return false
        }
        if(fqct2[key] !== fqct1[key]){
            return false
            
        }
    }
  return true
}


validAnagram('aaz', 'zza')