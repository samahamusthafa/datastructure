// function bubbleSort(array){
//     let len=array.length
//     let swapped


//     for(i=0;i<len-1;i++){
//         swapped=false
//         for(j=0;j<len-i-1;j++){
//             if(array[j]>array[j+1]){
//                 let temp=array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//                 swapped=true
//             }
//         }
//         if(!swapped){
//             break;
//         }
//     }
//     return array;
// }

// let array=[5,3,8,2,1,4]
// console.log("original array:"+array)
// console.log("sorted array:"+bubbleSort(array))


// function bubbleSort(array){
//     let len=array.length
//     let swapped


//     for(i=0;i<len-1;i++){
//         swapped=false
//         for(j=0;j<len-i-1;j++){
//             if(array[j]>array[j+1]){
//                 let temp=array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//                 swapped=true
//             }
            
            
//         }
//         if(!swapped){
//             break;
//         }
//     }
//     return array
// }

// let array=[1,5,6,3,7]
// console.log("original array:"+array)
// console.log("sorted array:"+bubbleSort(array))






// function bubbleSort(array){
//     let len=array.length
//     let swapped

//     for(i=0;i<len-1;i++){
//         swapped=false
//         for(j=0;j<len-i-1;j++){
//             if(array[j]>array[j+1]){
//                 let temp=array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//                 swapped=true
//             }
//         }
//         if(!swapped){
//             break
//         }
//     }
//     return array
// }

// let array=[1,2,3,6,0]
// console.log(bubbleSort(array))

function bubbleSort(array){
    let len=array.length
    let swapped

    for(i=0;i<len-1;i++){
        swapped=false
        for(j=0;j<len-i-1;j++){
            if(array[j]>array[j+1]){
                let temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
                swapped=true
            }
        }
        if(!swapped){
            break;
        }
    }
    return array
}
let arr=[2,1,3,0,4,5,6]
console.log(bubbleSort(arr))
