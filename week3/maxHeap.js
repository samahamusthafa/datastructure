class MaxHeap{
        constructor(){
            this.list = [null]
        }
    
        insert(value){
            const len = this.list.length
            this.list.push(value)
            if(len === 1){
                return value
            }
            this.heapifyup();   //the heapifyUp method is called to adjust the heap and maintain the heap property.
            return this.list[1]  //the method returns the root element of the heap.
        }
    
        remove(){
            if(this.list.length === 1) return null;
            if(this.list.length === 2) return this.list.pop() //it removes and returns that element using the pop method.
    
            const preRoot = this.list[1]
            this.list[1] = this.list.pop()   // The last element of the list is moved to the root position, overwriting the previous root.
             this.heapfyDown();   // The heapifyDown method is then called to adjust the heap and maintain the heap property.
          return preRoot;
    
      }
    
      build(values){
    
          if(typeof values === 'number') values = [values];  // It takes a values parameter, which can be either a single number or an array of numbers.
                                                             // If values is a single number, it is converted into an array.
          values.forEach((value)=> this.insert(value))
    
      }
    
      heapifyup(){
          let i = this.list.length-1;
          const val = this.list[i];
    
          while(!this.isRoot(i) && this.getParentNode(i)< val){
              [this.list[this.getParentIndex(i)],this.list[i]] = [val,this.getParentNode(i)]
              i = this.getParentIndex(i)
          }
      }
    
      heapfyDown(){
          if(this.list.length<3)  return;
            
          let i = 1;
    
          const currentVal = this.list[1]
          let leftVal = this.getLeftNode(i)
          let rightVal = this.getRightNode(i)
    
          while(leftVal !== undefined && (currentVal < leftVal || currentVal < rightVal)){
              if(currentVal < leftVal && (rightVal === undefined || leftVal > rightVal)){
                  [this.list[this.getLeftIndex(i)],this.list[i]] = [currentVal ,leftVal];
                    i = this.getLeftIndex(i)
                }else{
                    [this.list[this.getRightIndex(i)],this.list[i]] = [currentVal,rightVal];
                    i = this.getRightIndex(i)
                }
                leftVal = this.getLeftNode(i);
                rightVal = this.getRightNode(i)
            }
        }
    
        isRoot(index){
            return index === 1
        }
        getLeftIndex(index){
            return 2 * index 
        }
        getLeftNode(index){
            return this.list[this.getLeftIndex(index)]
        }
        getRightIndex(index){
            return 2 * index + 1
        }
        getRightNode(index){
            return this.list[this.getRightIndex(index)]
        }
        getParentIndex(index){
            return Math.floor(index/2)
        }
        getParentNode(index){
            return this.list[this.getParentIndex(index)]
        }
    }
    
    const a = [10,8,9,4,5,6,7,1,2,3]
    const heap = new MaxHeap()
    heap.build(a)
    console.log(heap.insert(15));
    console.log(heap.list);
    console.log(heap.remove());
    
    
    function maxheapsort(arr){
        let sorted = []
        const heap = new MaxHeap()
        for(let i = 0;i<arr.length;i++){
            heap.insert(arr[i])
        }
        for(let i =0;i<arr.length; i++){
            sorted.push(heap.remove())
        }
        return sorted;
    }
    console.log(maxheapsort([8,5,4,6,3,1,7]));