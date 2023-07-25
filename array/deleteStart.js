let arr = [2,4,5,6,8]
// arr.shift()
// console.log(arr)
for(i=0;i<arr.length;i++){
    arr[i]=arr[i+1]
}
console.log(arr)


let array = [1,2,3,4]
for(i=0;i<=array.length-1;i++){
    array[i]=array[i+1]
}
array.length = array.length-1
console.log(array)