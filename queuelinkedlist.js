class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }


    enqueue(value){
        const node = new Node(value)
        if(!this.front){
            this.front=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }

    dequeue(){
        if(!this.front){
            console.log("empty")
        }else{
            this.front=this.front.next
            if(this.front==null){
                this.rear=null
            }
        }
    }

    print(){
        if(!this.front){
            console.log("empty")
        }else{
            let temp=this.front
            while(temp){
                console.log(temp.value)
                temp=temp.next
            }
        }
    }

    
}

const list = new Queue()
list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.enqueue(50)
list.dequeue()
list.dequeue()
list.print()


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    enqueue(value){
        const node=new Node(value)
        if(!this.front){
            this.front=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }
    dequeue(){
        if(!this.front){
            console.log("empty")
        }else{
            this.front=this.front.next
            if(this.front==null){
                this.rear=null
            }
        }
    }
    print(){
        if(!this.front){
            console.log("empty")
        }else{
            let temp=this.front
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

class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    eq(value){
        const node = new Node(value)
        if(!this.front){
            this.front=node
            this.rear=node
        }
        this.rear.next=node
        this.rear=node
    }
    dq(){
        if(!this.front){
            console.log("empty")
        }else{
            this.front=this.front.next
            if(this.front==null){
                this.rear=null
            }
        }
    }
    print(){
        if(!this.front){
            console.log("empty")
        }else{
            let temp=this.front
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

class stack{
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
            console.log("empty")
        }else{
            this.top=this.top.next
        }
    }
    print(){
        if(!this.top){
            console.log("empty")
        }else{
            let temp=this.top
            while(temp){
                console.log(temp.value)
                temp=temp.next
            }
        }
    }
}


class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    nq(value){
        const node=new Node(value)
        if(!this.front){
            this.front=node
            this.rear=node
        }
        this.rear++
        this.array[this.rear]=node
    }
    dq(){
        if(!this.front){
            return null
        }else{
            this.front=this.front.next
            if(this.front==null){
                this.rear=null
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
        this.front=null
        this.rear=null
    }

    enqueue(value){
        const 
    }
}