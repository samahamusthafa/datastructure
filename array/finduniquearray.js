// let array = [1,2,3,4,2,3,5]
// resultArr=[]
// for(let i=0;i<array.length;i++){
//     flag=false
//     for(j=i+1;j<array.length;j++){
//         if(array[i]===array[j]){
//             flag=true
//             break;
//         }

//     }
//     if(!flag){
//         resultArr.push(array[i])
//     }
// }
// console.log(resultArr)

let array = [1,2,1,3,4,5,2]
let newArray = []

for(let i=0;i<array.length;i++){
    let flag = false
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            flag=true
            break;
        }
    }
    if(!flag){
        newArray.push(array[i])
    }


}
console.log(newArray)