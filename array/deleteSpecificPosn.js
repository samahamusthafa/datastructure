// let arr = [1,2,4,5]
// let value = 4
// let posn = 3

// for(i=posn-1;i<=arr.length-1;i++){
//     arr[i]=arr[i+1]
    
// }
// arr.length = arr.length-1
// console.log(arr)

// let array = [1,2,3,4,5]
// newArray=array.slice(1,3)
// console.log(newArray)


let array = [1,2,3,4,5,6]
let pos = 3
for(i=pos-1;i<=array.length-1;i++){
    array[i]=array[i+1]
}
array.length = array.length-1
console.log(array)
