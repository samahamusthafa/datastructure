// function sum(n){
//     let result = 0
//     for(i=1;i<=n;i++){
//         result+=i
//     }
//     return result
// }
// console.log(sum(3))

// function summ(n){
//     if(n<=0){
//         return 0
//     }else{
//         return n+summ(n-1)
//     }
// }
// console.log(summ(3))


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
    // addNode(value){
    //     const node = new Node(value)
    //     if(!this.head){
    //         this.head=node
    //     }else{
    //         this.tail.next=node
    //     }
    //     this.tail=node
    // }

//     addBefore(value,pos){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }
//         else if(this.head.value==pos){
//             node.next=this.head
//             this.head=node
//         }else{
//             let temp = this.head
//             while(temp){
//                 if(temp.next.value==pos){
//                     node.next=temp.next
//                     temp.next=node
//                     return
//                 }
//                 temp=temp.next
//             }
//         }
//     }
//     print(){
//        if(!this.head){
//         console.log("list is empty")
//        }else{
//         let temp = this.head
//         while(temp){
//             if(temp){
//                 console.log(temp.value)
//                 temp=temp.next
//             }
//         }
//        }
//     }

// }
// const list = new linkedlist()
// list.addBefore(10,1)
// list.addBefore(20,2)
// list.addBefore(30,3)
// list.print()


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addNode(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//            this.tail.next=node
//         }
//         this.tail=node
//     }
//     print(){
//         if(!this.head){
//             console.log("list is empty")
//         }else{
//             let temp = this.head
//             while(temp){
//                 if(temp){
//                     console.log(temp.value)
//                     temp=temp.next
//                 }
//             }
//         }
//     }
// }
// const list = new linkedlist()
// list.addNode(1)
// list.addNode(2)
// list.addNode(3)
// list.print()


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     addNode(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             this.tail.next=node
//         }
//         this.tail=node
//     }
//     addBefore(value,pos){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else if(this.head.value==pos){
//             node.next=this.head
//             this.head=node
//         }else{
//             let temp = this.head
//             while(temp){
//                 if(temp.next.value==pos){
//                     node.next=temp.next
//                     temp.next=node
//                     return
//                 }
//                 temp=temp.next
//             }
//         }
//     }

//     addAfter(value,pos){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             let temp = this.head
//             while(temp){
//                 if(temp.value==pos){
//                     node.next=temp.next
//                     temp.next=node
//                     return
//                 }
//                 temp=temp.next
//             }
//         }
//     }
//     addLast(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
       
//     }
//     deleteFirst(value){
//         if(!this.head){
//             return null
//         }else{
//             this.head=this.head.next
//         }
//     }
//     deletePos(value,pos){
//         if(!this.head){
//             return null
//         }else if(this.head.value==pos){
//             this.head=this.head.next
//         }else{
//             let temp = this.head
//             while(temp){
//                 if(temp.next.value==pos){
//                     temp.next=temp.next.next

//                 }
//                 temp=temp.next
//             }
//         }
//     }
//     print(){
//         if(!this.head){
//             console.log("list is empty")
//         }else{
//             let temp = this.head
//             while(temp){
//                 if(temp){
//                     console.log(temp.value)
//                     temp=temp.next
//                 }
//             }
//         }
//     }
// }
// const list = new linkedlist()
// list.addNode(1)
// list.addNode(2)
// list.addNode(3)
// list.addBefore(5,1)
// list.print()

// class Node{
//     constructor(value){
//         this.value=value
//         this.next = null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addNode(value){
//         const node = new Node(value)
//         if(!this.head){
//            this.head=node
//         }else{
//             this.tail.next = node
//         }
//        this.tail=node
//     }
//     print(){
//         if(!this.head){
//             console.log("list is empty")
//         }else{
//             let temp=this.head
//             while(temp){
//                 if(temp){
//                     console.log(temp.value)
//                     temp=temp.next
//                 }
//             }
//         }
//     }
// }


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     addNode(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             this.tail.next=node
//         }
//         this.tail=node
//     }

//     reverselinked(){
   
//         let temp = this.head
//         while(temp){
//             array.push(temp.value)
//             temp=temp.next
//         }
//         for(i=array.length-1;i>=0;i--){
//             console.log(array[i])
//         }
//     }
//     print(){
//         if(!this.head){
//             console.log("list is empty")
//         }else{
//           let temp = this.head

//         }
//     }
// }

// const list = new linkedlist()
// list.addNode(1)
// list.addNode(2)
// list.addNode(3)
// list.reverselinked()

// let num=10
// let str = ""+num

// console.log(str)
// console.log(typeof(str))

// let a=10
// let string=`${a}`
// console.log(string)
// console.log(typeof(string))


function mergeSort(array){
    if(array.length<=1){
        return array
    }else{
        let mid=Math.floor(array.length/2)
        let leftArray=array.slice(0,mid)
        let rightArray=array.slice(mid)
        return merge(mergeSort(leftArray),mergeSort(rightArray))
    }

    function merge(leftArray,rightArray){
        let sortedArray=[]
        while(leftArray.length && rightArray.length){
            if(leftArray[0]<=rightArray[0]){
                sortedArray.push(leftArray.shift())
            }else{
                sortedArray.push(rightArray.shift())
            }

        }
        return [...sortedArray,...leftArray,...rightArray]

    }
}
let array=[1,3,2,0,5]
console.log(mergeSort(array))