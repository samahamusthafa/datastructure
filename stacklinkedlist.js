// class node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null
//     }
//     push(value){
//         const node =new Node(value)
//         if(!this.top){
//             this.top=node
//         }else{
//             node.next=this.top
//             this.top=node
//         }
//     }

//     pop(){
//         if(!this.top){
//             console.log("unflow stack")
//         }else{
//             this.top=this.top.next
//         }
//     }

//     print(){
//         if(!this.top){
//             console.log("unflow stack")
//         }else{
//             let temp=this.top
//             while(temp){
//                 console.log(temp.value)
//                 temp=temp.next
//             }
//         }
//     }
// }

// const list = new stack()
// list.push(10)
// list.push(20)
// list.push(30)
// list.push(40)
// list.push(50)
// list.pop()
// list.print()



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }

// }

// class Stack{
//     constructor(){
//         this.top=null
//     }
//     push(value){
//         const node=new Node(value)
//         if(!this.top){
//            this.top=node
//         }else{
//             node.next=this.top
//             this.top=node
//         }
//     }

//     pop(){
//         if(!this.top){
//             console.log("unflow stack")
//         }else{
//             this.top=this.top.next
//         }
//     }

//     print(){
//         if(!this.top){
//             console.log("unflow stack")
//         }else{
//             let temp=this.top
//             while(temp){
//                console.log(temp.value)
//                temp=temp.next
//             }
//         }
//     }
// }


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
    }
    push(value){
        const node=new Node(value)
        if(!this.top){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
    }

    pop(){
        if(!this.top){
            console.log("unflow stack")
        }else{
            this.top=this.top.next
        }
    }

    print(){
        if(!this.top){
            console.log("unflow stack")
        }else{
            let temp=this.top
            while(temp){
                console.log(temp.value)
                temp=temp.next
            }
        }
    }
}

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
    }
    push(value){
        const node=new Node(value)
        if(!this.top){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
    }
    pop(){
        if(!this.top){
            console.log("unflow stack")
        }else{
            this.top=this.top.next
        }
    }
    print(){
        if(!this.top){
            console.log("unflow stack")
        }else{
            let temp=this.top
            while(temp){
                console.log(temp.value)
                temp=temp.next
            }
        }
    }
}


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
    }
    push(value){
        const node=new Node(value)
        if(!this.top){
            this.top=node
        }
        node.next=this.top
        this.top=node
    }
    pop(){
        if(!this.top){
            console.log("unflow stack")
        }else{
          this.top=this.top.next  
        }
    }
    print(){
        if(!this.top){
            console.log("unflow stack")
        }else{
            let temp=this.head
            while(temp){
                console.log(temp.value)
                temp=temp.next
            }
        }
    }
}


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top=null
    }
    push(value){
        const node=new Node(value)
        if(!this.top){
            node=this.top
        }
        node.next=this.top
        this.top=node
    }
    pop(){
        if(!this.top){
            console.log("unflow stack")
        }else{
        this.top=this.top.next
        }
    }
}

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
    }
    push(value){
        const node=new Node(value)
        if(!this.top){
            this.top=node
        }
        node.next=this.top
        this.top=node
    }
    pop(){
        if(!this.top){
            console.log("unflow stack")
        }else{
            this.top=this.top.next
        }
    }
    print(){
        if(!this.top){
            console.log("unflow stack")
        }else{
            let temp=this.top
            while(temp){
                console.log(temp.value)
                temp=temp.next
            }
        }
    }
}

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
    }
    push(value){
        const node=new Node(value)
        if(!this.top){
           this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
    }
    pop(){
        if(!this.top){
            return null
        }else{
            this.top=this.top.next
        }
    }
    print(){
        if(!this.top){

        }
    }
}