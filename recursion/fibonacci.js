// function recursiveFibonacci(n){
//     if(n<2){
//         return n
//     }
//     return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(2))



function fibonacci(n){
    if(n<2){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(10))