// function linearSearch(arr,target){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i;
//         }
       
//     }
//     return -1;
// }

// console.log(linearSearch([1,2,3],2))

//big-o = o(n)

// function linearSearch(arr,target){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch([1,2,3],4))


function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}
console.log(linearSearch([1,3,5],4))