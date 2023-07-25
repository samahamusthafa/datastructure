// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// function convert(array){ 
//     if(!array || array.length===0){
//         return null 
//     }
//     let head = new Node(array[0])
//     let temp = head
//     for(let i=1;i<array.length;i++){
//         temp.next = new Node(array[i])
//         temp = temp.next
//     }
//     return head
// }
// let convertedlinkedlist = convert([1,2,3,4,5,6])
// console.log(convertedlinkedlist)


class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}

function convert(array){
    if(!array || array.length==0){
        return null
    }
    let head = new Node(array[0])
    let temp = head
    for(i=1;i<array.length;i++){
        temp.next = new Node(array[i])
        temp = temp.next
    }
    return head
}

let convertedlinkedlist = convert([1,2,3,4,5,6])
console.log(convertedlinkedlist)