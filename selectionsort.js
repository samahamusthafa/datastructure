// function selectionSort(array){
//     var len=array.length

//     for(let i=0;i<len-1;i++){
//         let minIndex=i
//         for(j=i+1;j<len;j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j
//             }

//         }
//         let temp=array[i]
//         array[i]=array[minIndex]
//         array[minIndex]=temp
//     }
//     return array
// }

// var arr=[5,3,8,2,1,4]
// console.log("original array:"+arr)
// console.log("sorted array:"+selectionSort(arr))


// function selectionSort(array){
//     let len=array.length

//     for(i=0;i<len-1;i++){
//         let minIndex=i
//         for(j=i+1;j<len;j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j
//             }
//         }
//         let temp=array[i]
//         array[i]=array[minIndex]
//         array[minIndex]=temp
//     }
//     return array
// }


// function selectionSort(array){
//     let len=array.length

//     for(i=0;i<len-1;i++){
//         let minIndex=i
//         for(j=i+1;j<len;j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j
//             }
//         }
//         let temp=array[i]
//         array[i]=array[minIndex]
//         array[minIndex]=temp
//     }
//     return array
// }

// let arr=[3,2,1,4,5]
// console.log("original array:"+arr)
// console.log("sorted array:"+selectionSort(arr))



// function selectionSort(array){
//     let len=array.length

//     for(i=0;i<len-1;i++){
//         let minIndex=i
//         for(j=i+1;j<len;j++){
//             if(array[j]<array[minIndex]){
//                minIndex=j
//             }
//         }
//         let temp=array[i]
//         array[i]=array[minIndex]
//         array[minIndex]=temp
//     }
// }


// function selectionSort(array){
//     let len=array.length

//     for(i=)
// }


// function selectionSort(array){
//     let len=array.length

//     for(let i=0;i<len-1;i++){
//         let minIndex=i
//         for(j=i+1;j<len;j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j
//             }
//         }
//         let temp=array[i]
//         array[i]=array[minIndex]
//         array[minIndex]=temp
//     }
//     return array
// }

// let array=[1,2,3,4,0,6]
// console.log(selectionSort(array))


function selectionSort(array){
    let len=array.length

    for(i=0;i<len-1;i++){
        let minIndex=i
        for(j=i+1;j<len;j++){
            if(array[j]<array[minIndex]){
                minIndex=j
            }
        }
        let temp=array[i]
        array[i]=array[minIndex]
        array[minIndex]=temp
    }
    return array
}
let arr=[2,0,1,5,7,6]
console.log(selectionSort(arr))