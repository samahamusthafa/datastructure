// function fibonacci(n){
//     let a = [0,1]

//     for(let i=0;i<n-2;i++){
//         a[i+2]=a[i]+a[i+1]
//     }
//     return a
// }
// console.log(fibonacci(7))
function fibonacci(n){
    let a = [0,1]

    for(i=0;i<n-2;i++){
        a[i+2]=a[i]+a[i+1]
    }
    return a
}
console.log(fibonacci(5))