// function reverseString(str){
//     let stack=[]
//     let reverseString=[]

//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }

//     while(stack.length>0){
//         reverseString.push(stack.pop())
//     }
//     return reverseString.join('')
// }
// let string="Samaha"
// console.log(reverseString(string))

function reverseString(str){
    let stack1=[]
    let stack2=[]

    for(i=0;i<str.length;i++){
        stack1.push(str[i])
    }

    while(stack1.length>0){
        stack2.push(stack1.pop())
    }
    return stack2.join('')

}

let str="samaha"
console.log(reverseString(str))


function reverseString(string){
    let stack1=[]
    let stack2=[]

    for(i=0;i<string.length;i++){
        stack1.push(string[i])
    }

    while(stack1.length>0){
        stack2.push(stack1.pop())
    }
    return stack2.join('')
}


function reverseString(string){
    let stack1=[]
    let stack2=[]

    for(let i=0;i<string.length;i++){
        stack1.push(string[i])
    }
    while(stack1.length>0){
        stack2.push(stack1.pop())
    }
    return stack2.join('')
}