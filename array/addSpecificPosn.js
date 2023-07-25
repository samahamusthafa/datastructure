// let arr = [1,2,3,4]
// let newValue = 0
// let posn = 3
// for(i=arr.length-1;i>=posn-1;i--){
//     arr[i+1]=arr[i]
// }
// arr[posn-1]=newValue
// console.log(arr)

// slicedArr=arr.slice(1,3)
// console.log(slicedArr)

// splicedArr=arr.splice(1,2,'a',4)
// console.log(splicedArr)
// console.log(arr)

let array = [1,2,3,4]
let value = 5
let pos = 3

for(i=array.length-1;i>=pos-1;i--){
    array[i+1]=array[i]
}
array[pos-1]=value
console.log(array)
