class QueuewithStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null

        }
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    display(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }else{
            for(let i=0;i<this.stack2.length;i++){
                console.log(this.stack2[i])
            }
        }
    }
}

const queue = new stackwithQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue()
queue.display()



class QueuewithStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
        
    }
    print(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }else{
            for(let i=0;i<this.stack2.length;i++){
                console.log(this.stack2[i])
            }
        }
    }
}


class QueuewithStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }
        if(this.stack2.length==0){
            while(this.stack1.length>0){
               this.stack2.push(this.stack1.pop()) 
            }
        }
        return this.stack2.pop()
    }
    print(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }else{
            for(let i=0;i<this.stack2.length;i++){
                console.log(this.stack2[i])
            }
        }
    }
}

class QueuewithStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    print(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }else{
            for(let i=0;i<this.stack2.length;i++){
                console.log(this.stack2[i])
            }
        }
    }
}

class QueuewithStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    

    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        stack2.push(stack1.pop())
    }
}


class QueuewithStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    nq(element){
        this.stack1.push(element)
    }
    dq(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    print(){

    }
}


class QueuewithStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    nq(element){
        this.stack1.push(element)
    }

   
}


class QueuewithStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }else{
            if(this.stack2.length==0){
                while(this.stack1.length>0){
                    this.stack2.push(this.stack1.pop())
                }
            }
            return this.stack2.pop()
        }
    }
}