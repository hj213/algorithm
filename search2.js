function linearSearch(arr,x){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x) return i
    }
    return -1;
}


function binarySearch(arr,x){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end)/2);
    
    while(arr[middle] !== x && start <= end ){
        if(arr[middle] < x) {
            start = middle +1; 
        } else {
            end = middle -1;
        }
        middle = Math.floor((start + end)/2);
    }
      if(arr[middle] == x) return middle;
      else return -1
  }