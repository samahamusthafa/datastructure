// class Stack{
//     constructor(size){
//         this.array=Array(size)
//         this.top=-1

//     }
//     push(element){
//         this.top++
//         this.array[this.top]=element
//     }
//     deleteMiddle() {
//         if (this.top === -1) {
//           // Stack is empty
//           return;
//         }
    
//         let mid = Math.floor(this.top / 2);
//         for (let i = mid; i < this.top; i++) {
//           this.array[i] = this.array[i + 1];
//         }
//         this.top--;
//       }
//     print(){
//         if(!this.top){
//             return null
//         }else{
//             for(let i=0;i<=this.top;i++){
//                 console.log(this.array[i])
//             }
//         }
//     }
// }
// const list =new Stack(50)
// list.push(10)
// list.push(20)
// list.push(30)

// list.deleteMiddle()
// list.print()

    



// class Stack{
//     constructor(size){
//         this.array=Array(size)
//         this.top=-1
//     }
//     push(element){
//         this.top++
//         this.array[this.top]=element
//     }
//     deleteMiddle(){
//         if(this.top==-1){
//             return
//         }else{
//             let mid=Math.floor(this.top/2)
//             for(let i=mid;i<=this.top;i++){
//                 this.array[i]=this.array[i+1]
//             }
//             this.top--
//         }
//     }
//     print(){
//         if(this.top==-1){
//             return null
//         }else{
//             for(let i=0;i<=this.top;i++){
//                 console.log(this.array[i])
//             }
//         }
//     }
// }
// const list =new Stack(50)
//  list.push(10)
//  list.push(20)
//  list.push(30)

//  list.deleteMiddle()
//  list.print()


//  deleteMiddle(){
//     if(this.top==-1){
//         return
//     }else{
//         let mid=Math.floor(this.top/2)
//     for(i=mid;i<=this.top;i++){
//         this.array[i]=this.array[i+1]
//     }
//     this.top--

//     }
    
//  }


 class Stack{
    constructor(size){
        this.array=Array(size)
        this.top=-1
    }
    push(element){
        this.top++
        this.array[this.top]=element
    }
    deleteMiddle(){
        let mid=Math.floor(this.top/2)
        for(let i=mid;i<=this.top;i++){
            this.array[i]=this.array[i+1]
        }
        this.top--
    }
    print(){
        if(this.top==-1){
            return null
        }else{
            for(let i=0;i<=this.top;i++){
                console.log(this.array[i])
            }
        }
    }
 }
 const stack=new Stack(10)
 stack.push(10)
 stack.push(20)
 stack.push(30)
 stack.deleteMiddle()
 stack.print()