// let arr = [1,2,3]
// let newValue = 5
// console.log(arr.length)
// for(i=arr.length-1;i>=0;i--){
//     arr[i+1]=arr[i]
// }
// arr[0]=newValue
// console.log(arr)
// arr.unshift(10)
// console.log(arr)

let array = [1,2,3,4]
let value = 5
for(i=array.length-1;i>=0;i--){
    array[i+1]=array[i]
}
array[0]=value
console.log(array)