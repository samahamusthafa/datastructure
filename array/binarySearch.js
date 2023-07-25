// function binarySearch(arr,target){
//     let leftIndex=0
//     let rightIndex=arr.length-1

//     while(leftIndex<=rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(target===arr[middleIndex]){
//             return middleIndex
//         }
//         if(target<arr[middleIndex]){
//             rightIndex =middleIndex-1
//         }else{
//             leftIndex = middleIndex+1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([3,4,5,6,7],7))

//big-o = o(logn)


// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1
//     while(leftIndex<=rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(target==arr[middleIndex]){
//             return middleIndex
//         }
//         else if(target<arr[middleIndex]){
//             rightIndex=middleIndex-1
//         }else{
//             leftIndex=middleIndex+1
//         }

//     }
//     return -1
// }
// console.log(binarySearch([1,2,3,4,5,6],3))
function binarySearch(arr,target){
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target==arr[middleIndex]){
            return middleIndex
        }else if(target<arr[middleIndex]){
            rightIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4],4))


function recursiveBinarySearch(arr,target){
     return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
}
let middleIndex=Math.floor((leftIndex+rightIndex)/2)
if(target==arr[middleIndex]){
    return middleIndex
}
else if(target<arr[middleIndex]){
    return search(arr,target,0,middleIndex-1)
}else{
    
}