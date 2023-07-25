// function insertionSort(array){
//     let len=array.length

//     for(i=1;i<len;i++){
//         let temp=array[i]
//         let j=i-1


//         while(j>=0 && array[j]>temp){
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1]=temp
//     }
//     return array
// }

// let array=[1,4,2,6,7]
// console.log("original array:"+array)
// console.log("sorted array:"+insertionSort(array))


// function insertionSort(array){
//     let len=array.length

//     for(let i=1;i<len;i++){
//         let temp=array[i]
//         let j=i-1

//         while(j>=0 && array[j]>temp){
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1]=temp
//     }
//     return array
// }


// function insertionSort(array){
//     let len=array.length

//     for(let i=1;i<=len;i++){
//        let temp=a[i]
//        let j=i-1

//        while(j>=0 && a[j]>temp){
//         array[j+1]=array[j]
//         j--
//        }
//        array[j+1]=temp
//     }

//     return array


// }


// function insertionSort(array){
//     let len = array.length

//     for(i=1;i<len;i++){
//         let temp=array[i]
//         let j=i-1

//         while(j>=0 && array[j]>temp){
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1]=temp
//     }
//     return array
// }

// let a=[2,1,4,3,5,6,0]
// console.log("original array:"+a)
// console.log("sorted array:"+insertionSort(a))


// function insertionSort(array){
//     let len=array.length


//     for(i=1;i<len;i++){
//         let temp=a[i]
//         let j=i-1

//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
// }

// function insertionSort(array){
//     let len=array.length

//     for(i=1;i<len;i++){
//         let temp=array[i]
//         let j=i-1

//         while(j>=0 && array[j]>temp){
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1]=temp
//     }
//     return array
// }

// let arr=[1,4,2,6,0]
// console.log(insertionSort(arr))

function insertionSort(array){
    let len=array.length

    for(i=1;i<len;i++){
        let temp=array[i]
        let j=i-1

        while(j>=0 && array[j]>temp){
            array[j+1]=array[j]
            j--
        }
        array[j+1]=temp
    }
    return array
}
let arr=[1,4,2,0,5]
console.log(insertionSort(arr))