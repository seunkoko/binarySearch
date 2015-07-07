//binary search as i know it (to search a position)

function binary_search(search, arr){
    var right = arr.length;
    var left = 1;
    var mid;
    
    while(left <= right){
        mid = Math.floor((right + left) / 2);
        
        if(search < mid){
            right = mid - 1;
        }else if(search > mid){
            left = mid + 1;
        }else{
            console.log(search + " has been found at position " + mid)
            break;
        }
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];
binary_search(2, arr);
