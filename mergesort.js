// function mergeSort(array) {
//     if (array.length <= 1) 
//     return array;
    
//     else{
//       const mid = Math.floor(array.length/2)
//       const leftArray = array.slice(0,mid)
//       const rightArray = array.slice(mid)
//       return  merge(mergeSort(leftArray),mergeSort(rightArray)) 
//     }  
  


//   function merge(leftArray,rightArray){
//     let sortedArray = []
//     while(leftArray.length &&rightArray.length){
//       if(leftArray[0]<=rightArray[0]){
//         sortedArray.push(leftArray.shift())
//       }else{
//         sortedArray.push(rightArray.shift())
//       }
//     }
//   return  [...sortedArray, ...leftArray, ...rightArray ]
//   }
// }
//   let array=[28,3,45,1,65,74,2,8]

// console.log(mergeSort(array));


// function mergeSort(array){
//     if(array.length<=1){
//         return array
//     }else{
//         const mid=Math.floor(array.length/2)
//         let leftArray=array.slice(0,mid)
//         let rightArray=array.slice(mid)
//         return merge(mergeSort(leftArray),mergeSort(rightArray))
//     }

//     function merge(leftArray,rightArray){
//         let sortedArray=[]
//         while(leftArray.length && rightArray.length){
//             if(leftArray[0]<=rightArray[0]){
//                 sortedArray.push(leftArray.shift())
//             }else{
//                 sortedArray.push(rightArray.shift())
//             }
//         }
//         return  [...sortedArray, ...leftArray, ...rightArray ]
//     }
// }
// let arr=[3,1,2,5,0,6]
// console.log("sorted array:"+mergeSort(arr))


// function mergeSort(array){
//     if(array.length<=1){
//         return array
//     }else{
//         let mid=Math.floor(array.length/2)
//         let leftArray=array.slice(0,mid)
//         let rightArray=array.slice(mid)
//         return merge(mergeSort(leftArray),mergeSort(rightArray))
//     }

//     function merge(leftArray,rightArray){
//         let sortedArray=[]
//         while(leftArray.length && rightArray.length){
//             if(leftArray[0]<=rightArray[0]){
//                 sortedArray.push(leftArray.shift())
//             }else{
//                 sortedArray.push(rightArray.shift())
//             }
//         }
//         return [...sortedArray,...rightArray,...leftArray]
//     }
// }

// let arr=[3,1,2,5,0,6]
// console.log("sorted array:"+mergeSort(arr))


// function mergeSort(array){
//     if(array.length<=1){
//         return array
//     }else{
//         const mid=
//     }
// }


// function mergeSort(array){
//     let len=array.length
//     if(len<=1){
//         return array
//     }else{
//         const mid=Math.floor(len/2)
//         const leftArray=array.slice(0,mid)
//         const rightArray=array.slice(mid)
//         return merge(mergeSort(leftArray),mergeSort(rightArray))
//     }

//     function merge(leftArray,rightArray){
//         const sortedArray=[]
//         while(leftArray.length && rightArray.length){
//             if(leftArray[0]<=rightArray[0]){
//                 sortedArray.push(leftArray.shift())
//             }else{
//                 sortedArray.push(rightArray.shift())
//             }
//         }
//         return [...sortedArray,...leftArray,...rightArray]
//     }
// }

// let array=[1,3,2,5,0]
// console.log(mergeSort(array))

function mergeSort(array){
    if(array.length<=1){
        return array
    }else{
        let mid=Math.floor(array.length/2)
        let leftArray=array.slice(0,mid)
        let rightArray=array.slice(mid)
        return merge(mergeSort(leftArray),mergeSort(rightArray))
    }

    function merge(leftArray,rightArray){
        let sortedArray=[]
        while(leftArray.length && rightArray.length){
            if(leftArray[0]<=rightArray[0]){
                sortedArray.push(leftArray.shift())
            }else{
                sortedArray.push(rightArray.shift())
            }
        }
        return [...sortedArray,...leftArray,...rightArray]
    }
}
let array=[2,3,1,0,5]
console.log(mergeSort(array))