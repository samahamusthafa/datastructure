class Queue{
    constructor(size){
        this.front=-1
        this.rear=-1
        this.array=new Array(size)
    }

    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
        this.rear++
        this.array[this.rear]=value
    }

    dq(){
        if(this.front==-1){
            return
        }
        if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return
        }

    }

    display(){
        if(this.front==-1 && this.rear==-1){
            return null
        }else{
            for(let i=this.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}

const queue = new Queue(30)
queue.nq(10)
queue.nq(20)
queue.nq(30)
queue.nq(40)
queue.nq(50)
queue.dq()
queue.display()



// class Queue{
//     constructor(size){
//         this.front=-1
//         this.rear=-1
//         this.array=new Array(size)
//     }

//     nq(value){
//         if(this.rear==-1){
//             this.front=0
//             this.rear=0
//             this.array[0]=value
//             return
//         }
//         this.rear++
//         this.array[this.rear]=value
//     }
// }


class Queue{
    constructor(size){
        this.front=-1
        this.rear=-1
        this.array=new Array(size)
    }

    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
        this.rear++
        this.array[this.rear]=value
    }

    dq(){
        if(this.front==-1){
            return
        }
        if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return
        }
    }

    display(){
        if(this.front==-1 && this.rear==-1){
            return null
        }
        else{
            for(i=this.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}

class Queue{
    constructor(size){
        this.array=Array(size)
        this.front=-1
        this.rear=-1
    }
    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
        this.rear++
        this.array[this.rear]=value
    }
    dq(){
        if(this.front==-1){
            return
        }
        if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return
        }
    }
    print(){
        if(this.front==-1 && this.rear==-1){
            return null
        }else{
            for(i=this.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}


class Queue{
    constructor(size){
        this.array=Array(size)
        this.front=-1
        this.rear=-1
    }
    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
        this.rear++
        this.array[this.rear]=value
    }
    dq(){
        if(this.front==-1){
            return
        }else if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return
        }
    }
    print(){
        if(this.rear==-1 && this.front==-1){
            return null
        }else{
            for(i=this.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}

class Queue{
    constructor(size){
        this.array=Array(size)
        this.front=-1
        this.rear=-1
    }
    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
        this.rear++
        this.array[this.rear]=value
    }
    dq(){
        if(this.front==-1){
            return 
        }else if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return 
        }
    }
    display(){
        if(this.rear==-1 && this.front==-1){
            return null
        }else{
            for(i=this.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}

class Queue{
    constructor(size){
        this.array=Array(size)
        this.front=-1
        this.rear=-1
    }
    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
            this.rear++
            this.array[this.rear]=value
    }
    dq(){
        if(this.front==-1){
            return
        }else if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return
        }

    }
    display(){
        if(this.front==-1 && this.rear==-1){
            return null
        }else{
            for(i=this.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}


class Queue{
    constructor(size){
        this.Array=Array(size)
        this.front=-1
        this.rear=-1
    }
    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
        this.rear++
        this.array[this.rear]=value
    }
    dq(){
        if(this.front==-1){
            return
        }else if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return
        }
    }
    display(){
        if(this.front==-1 && this.rear==-1){
            return null
        }else{
            for(i=this.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}

// class Queue{
//     constructor(size){
//         this.array=Array(size)
//         this.front=-1
//         this.rear=-1
//     }
//     nq(value){
//         if(this.front){
//             this.front=value
//         }else{
//             this.rear++
//             this.
//         }
//     }
// }


class Queue{
    constructor(size){
        this.array=Array(size)
        this.front=-1
        this.rear=-1
    }
    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
        this.rear++
        this.array[this.rear]=value
    }
    dq(){
        if(this.front==-1){
            return
        }else if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return
        }
    }
    display(){
        if(this.front==-1 && this.rear==-1){
            return null
        }else{
            for(i=thsi.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}

class Queue{
    constructor(size){
        this.array=Array(size)
        this.front=-1
        this.rear=-1
    }
    nq(value){
        if(this.rear==-1){
            this.front=0
            this.rear=0
            this.array[0]=value
            return
        }
        this.rear++
        this.array[this.rear]=value
    }
    dq(){
        if(this.front==-1){
            return
        }else if(this.front==this.rear){
            this.front=-1
            this.rear=-1
            return 
        }
    }
    display(){
        if(this.rear==-1 && this.rear==-1){
            return null
        }else{
            for(i=this.front;i<=this.rear;i++){
                console.log(this.array[i])
            }
        }
    }
}