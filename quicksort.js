// function quickSort(array){
//     if(array.length<=1){
//         return array
//     }
//     let pivot=array[0]
//     let left=[]
//     let right=[]


//     for(i=1;i<array.length;i++){
//         if(array[i]<pivot){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
//     return quickSort(left).concat(pivot,quickSort(right))
// }
// let arr=[5,3,8,2,1,4]
// console.log("original array:"+arr)
// console.log("sorted array:"+quickSort(arr))



// function quickSort(array){
//     let len=array.length
//     if(len<=1){
//         return array
//     }

//     let pivot = array[0]
//     let left = []
//     let right = []

//     for(i=1;i<len;i++){
//         if(array[i]<pivot){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
//     return quickSort(left).concat(pivot,quickSort(right))
// }

// let arr=[5,3,8,2,1,4]
// console.log("original array:"+arr)
// console.log("sorted array:"+quickSort(arr))


// function quickSort(array){
//     let len=array.length
//     if(len<=1){
//         return array
//     }


//     let pivot=array[0]
//     let left=[]
//     let right=[]

//     for(i=1;i<len;i++){
//         if(array[i]<pivot){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
//     return quickSort(left).concat(pivot,quickSort(right))
// }


function quickSort(array){
    if(array.length<=1){
        return array
    }

    let pivot=array[0]
    let leftArray=[]
    let rightArray=[]

    for(i=1;i<array.length;i++){
        if(array[i]<pivot){
            leftArray.push(array[i])
        }else{
            rightArray.push(array[i])
        }
    }
    return quickSort(leftArray).concat(pivot,quickSort(rightArray))
}

let arr=[2,1,3,6,5,0]
console.log(quickSort(arr))