class Node {
    constructor (value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail = null

    }

    addnode(value){
        const node = new Node(value)

        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
        }
        this.tail = node
    }
    

    addBefore(value,pos){
        const node = new Node (value)
        if(!this.head){
            this.head = node
        }else if(this.head.value == pos){
                node.next = this.head
                this.head = node
        }else{
            let temp = this.head
            while(temp){
                if(temp.next.value == pos){
                    node.next = temp.next
                    temp.next = node
                    return 
                }
                temp = temp.next
            }
        }
    }


    addAfter(value,pos){
        const node = new Node(value)

        if(!this.head){
            this.head = node
        }else{
            let temp = this.head
            while(temp){
                if(temp.value==pos){
                    node.next = temp.next
                    temp.next = node
                    return
                }
                temp = temp.next
            }
        }
    }

    addLast(value){

        const node = new Node(value)

        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
            
        }
        this.tail = node

    }

    deleteFirst(){
        if(!this.head){
            return null 
        }else{
            this.head = this.head.next
        }
    }

     deletepos(pos){
        if(!this.head){
            return null     
        }
        else if(this.head.value==pos){
            this.head=this.head.next
        }
        else{
            let temp=this.head
            while(temp){
                if(temp.next.value==pos){
                    temp.next=temp.next.next
                 }
                 temp=temp.next
             }
         }
    }

    deleteLast(){
        if(!this.head){
            return null
        }else{
            let temp = this.head
            while(temp.next.next){
               temp = temp.next
            }
            temp.next = null
            this.tail = temp
            
        }
    }

    
    removeduplicate(){
        let temp = this.head
        while(temp){
            let check = temp
            while(check.next){
                if(check.next.value == temp.value){
                    check.next = check.next.next
                }else{
                    check = check.next
                }
            }
            temp = temp.next
        }
    }
    updatevalue(oldvalue,newvalue){
        let temp = this.head

        while(temp){
            if(temp.value == oldvalue){
               temp.value = newvalue
                break;
            }
            temp=temp.next
        }
    }

    
    reverselinked(){
        let array = []
        let temp = this.head
        while(temp){
            array.push(temp.value)
            temp = temp.next
        }
        for(let i=array.length-1;i>=0;i--){
            console.log(array[i]);
        }
    }
    search(value){
        let temp = this.head
        while(temp){
            if(temp.data===value){
                return true
            }
            temp = temp.next
        }
        return false
    }

    
    print (){
        if(!this.head){
            console.log("list is Empty");
        }else{
            let temp = this.head
             while(temp){
                if(temp){
                    console.log(temp.value);
                    temp = temp.next
                }
             }
        }
        
    }

}

const list = new linkedlist()
console.log(linkedlist.search(10))
list.addnode(10)
list.addnode(20)
list.addnode(30)
list.addBefore(15,20)
list.addAfter(25,20)
list.deleteFirst()
list.deletepos(30)
list.deleteLast()
list.print()



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

//     addnode(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             this.tail.next=node
//         }
//         this.tail=node
//     }
// }


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }
    addnode(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            this.tail.next=node
        }
        this.tail=node
    }
    addBefore(value,pos){
        const node=new Node(value)
        if(!this.head){
            this.head=node
        }else if(this.head.value==pos){
            node.next=this.head
            this.head=node
        }else{
            let temp=this.head
            while(temp){
                if(temp.next.value==pos){
                    node.next=temp.next
                    temp.next=node
                    return
                }
                temp=temp.next
            }
            
        }
    }
    addAfter(value,pos){
        const node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            let temp=this.head
            while(temp){
                if(temp.value==pos){
                    node.next=temp.next
                    temp.next=node
                    return
                }
                temp=temp.next
            }
        }
    }
    addLast(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            this.tail.next=node
        }
        this.tail=node
    }
    deleteFirst(){
        if(!this.head){
            return null
        }else{
            this.head=this.head.next
        }
    }
    deletepos(pos){
        if(!this.head){
            return null
        }else if(this.head.value==pos){
            this.head=this.head.next
        }else{
            let temp=this.head
            while(temp){
                if(temp.next.value==pos){
                    temp.next=temp.next.next
                }
                temp=temp.next
            }
        }
    }
    deleteLast(){
        if(!this.head){
            return null
        }else{
            let temp=this.head
            while(temp.next.next){
                temp=temp.next
            }
            temp.next=null
            this.tail=temp
        }
    }
    
}
