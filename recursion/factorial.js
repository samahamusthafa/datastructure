function recursiveFactorial(n){
    if(n===0){
        return 1
    }
    return n*recursiveFactorial(n-1)
}
console.log(recursiveFactorial(2))

//big-o = o(n)

function factorial(n){
    if(n===0){
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(2))