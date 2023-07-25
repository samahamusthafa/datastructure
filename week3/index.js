class Node{
    constructor(element){
        this.element=element
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(element){
        const node=new Node(element)
            if(this.root===null){
                this.root=node
            }else{
                this.insertNode(this.root,node)
            }
    }
    insertNode(root,node){
        if(node.element<root.element){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,element){
        if(!root){
            return false
        }else{
            if(element===root.element){
                return true
            }else if(element<root.element){
                return this.search(root.left,element)
            }else{
                return this.search(root.right,element)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.element)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.element)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.element)
        }
    }
    levelOrder(){
        let queue=[]
        queue.push(this.root)

        while(queue.length){
            let curr=queue.shift()
            console.log(curr.element)

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.element
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.element
        }else{
            return this.max(root.right)
        }
    }
    delete(element){
        this.root=this.deleteNode(this.root,element)
    }
    deleteNode(root)

    validate(){
        return this.validateNode(this.root,-Infinity,Infinity)
    }
    validateNode(root,min,max){
       if(root===null){
        return true
       }
       if(root.element<=min || root.element>=max){
        return false
       }
       return this.validateNode(root.left,min,root.element)&&
       this.validateNode(root.right,root.element,max)
       
    }
    validate(){
        return this.validateNode(this.root,-Infinity,Infinity)
    }
    validateNode(root,min,max){
        if(root===null){
            return true
        }
        if(root.element<=min || root.element>=max){
            return false
        }
        return this.validateNode(root.left,min,root.element)&&
        this.validateNode(root.right,root.element,max)
    }

    delete(element){
        this.root=this.deleteNode(this.root,element)
    }
    deleteNode(root,element){
        if(root===null){
            return root
        }else{
            if(element<root.element){
                root.left=this.deleteNode(root.left,element)
            }else if(element>root.element){
                root.right=this.deleteNode(root.right,element)
            }else{
                if(!root.left && !root.right){
                    return null
                }
                if(!root.left){
                    return root.right
                }else if(!root.right){
                    return root.left
                }
            }
            return root
        }
    }
}

class Graph{
    constructor(){
        this.adjlist=new Map()
    }
    addVertex(vertex){
        this.adjlist.set(vertex,new Set())
    }
    addEdge(vertex1,vertex2){
        this.adjlist.get(vertex1).add(vertex2)
        this.adjlist.get(vertex2).add(vertex1)
    }
    getvertexNeighbors(vertex){
        return this.adjlist.get(vertex)
    }
    depthfirstsearchRecursive(vertex,visited=[]){
        visited.push(vertex)

        this.getvertexNeighbors(vertex).forEach(neighbor=>{

        })
    }
}


class Graph{
    constructor(){
        this.adjlist=new Map()
    }
    addVertex(vertex){
        this.adjlist.set(vertex,new Set())
    }
    addEdge(vertex1,vertex2){
        this.adjlist.get(vertex1).add(vertex2)
        this.adjlist.get(vertex2).add(vertex1)
    }
    getvertexNeighbors(vertex){
        return this.adjlist.get(vertex)
    }
    depthfirstsearchRecursive(vertex,visited=[]){
        visited.push(vertex)

        this.getvertexNeighbors(vertex).forEach(neighbor=>{
            if(!visited.includes(neighbor)){
                this.depthfirstsearchRecursive(neighbor,visited)
            }
        })
        return visited
    }

    depthfirstsearchRecursive(vertex,visited=[]){
        visited.push(vertex)

        this.getvertexNeighbors(vertex).forEach(neighbor=>{
            if(!visited.includes(neighbor)){
                this.depthfirstsearchRecursive(neighbor,visited)
            }
        })
        return visited
    }
    breadthFirstSearch(startVertex){
        const visited=new Set()
        const queue=[]

        visited.add(startVertex)
        queue.push(startVertex)

        while(queue.length>0){
            const currentVertex=queue.shift()
            console.log(currentVertex)

            const neighbors=this.adjlist.get(currentVertex)

            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    visited.push(neighbor)
                }
            }
        }
    }

    breadthFirstSearch(startVertex){
        const visited=new Set()
        const queue=[]

        visited.add(startVertex)
        queue.push(startVertex)

        while(queue.length>0){
            const currentVertex=queue.shift()
            console.log(currentVertex)
                
   
        }
    }
}

class Graph{
    constructor(){
        this.adjlist=new Map()
    }
    addVertex(vertex){
        this.adjlist.set(vertex,new Set())
    }
    addEdge(vertex1,vertex2){
        this.adjlist.get(vertex1).add(vertex2)
        this.adjlist.get(vertex2).add(vertex1)
    }
    getvertexNeighbors(vertex){
        return this.adjlist.get(vertex)
    }
    depthfirstsearchRecursive(vertex,visited=[]){
        visited.push(vertex)

        this.getvertexNeighbors(vertex).forEach(neighbor=>{
            if(!visited.includes(neighbor)){
                this.depthfirstsearchRecursive(neighbor,visited)
            }
        })
    }

    depthfirstsearchRecursive(vertex,visited=[]){
        visited.push(vertex)

        this.getvertexNeighbors(vertex).forEach(neighbor=>{
            if(!visited.includes(neighbor)){
                this.depthfirstsearchRecursive(neighbor,visited)
            }
        })
        return visited
    }
    breadthFirstSearch(startVertex){
        const visited=new Set()
        const queue=[]

        visited.add(startVertex)
        queue.push(startVertex)

        while(queue.length>0){
            let currentVertex=queue.shift()
            console.log(currentVertex)

            const neighbors=this.adjlist.get(currentVertex)

            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
        return Array.from(visited)
    }

    depthfirstsearchRecursive(vertex,visited=[]){
        visited.push(vertex)

        this.getvertexNeighbors(vertex).forEach(neighbor=>{
            if(!visited.includes(neighbor)){
                this.depthfirstsearchRecursive(neighbor,visited)
            }
        })
        return visited
    }
    breadthFirstSearch(startVertex){
        const visited=new Set()
        const queue=[]

        visited.add(startVertex)
        queue.push(startVertex)

        while(queue.length>0){
            const currentVertex=queue.shift()
            console.log(currentVertex)

            const neighbors=this.adjlist.get(currentVertex)

            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
        return Array.from(visited)
    }
}


validate(){
    return this.validateNode(this.root,-Infinity,Infinity)
}
validateNode(root,min,max){
    if(root===null){
        return true
    }
    if(root.element<=min || root.element>=max){
        return false
    }
    return this.validateNode(root.left,min,root.element)&& 
    this.validateNode(root.right,root.element,max)

}

class Node{
    constructor(element){
        this.element=element
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(element){
        const node=new Node(element)
        if(this.root===null){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.element<root.element){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,element){
        if(!root){
            return false
        }else{
            if(element===root.element){
                return true
            }else if(element<root.element){
                return this.search(root.left,element)
            }else{
                return this.search(root.right,element)
            }
        }
    }
    delete(element){
        this.deleteNode(this.root,element)
    }
    deleteNode(root,element){
        if(root===null){
            return root
        }else{
            if(element<root.element){
                this.deleteNode(root.left,element)
            }
        }
    }

    validate(){
        return this.validateNode(this.root,-Infinity,Infinity)
    }
    validateNode(root,min,max){
        if(root===null){
            return 
        }
    }

    validate(){
        return this.validateNode(this.root,-Infinity,Infinity)
    }
    validateNode(root,min,max){
        if(root===null){
            return true
        }
        if(root.element>=min && root.element<=max){
            return false
        }
        return this.validateNode(root.left,min,root.element)&&
        this.validateNode(root.right,root.element,max)
    }
}


class Node{
    constructor(element){
        this.element=element
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(element){
        const node=new Node(element)
        if(this.root===null){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.element<root.element){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,element){
        if(!root){
            return false
        }else{
            if(element===root.element){
                return true
            }else if(element<root.element){
                return this.search(root.left,element)
            }else{
                return this.search(root.right,element)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.element)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.element)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.element)
        }
    }
    levelOrder(){
        const queue=[]
        queue.push(this.root)

        while(queue.length>0){
            const curr=queue.shift()
            console.log(curr.element)

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.element
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.element
        }else{
            return this.max(root.right)
        }
    }

    delete(element){
        this.deleteNode(this.root,element)
    }
    deleteNode(root,element){
        if(root===null){
            return root
        }else{
            if(element<root.element){
                this.deleteNode(root.left,element)
            }else if(element>root.element){
                this.deleteNode(root.right,node)
            }else{
                if()
            }

        }
      
        
    }

    validate(){
        return this.validateNode(this.root,-Infinity,Infinity)
    }
    validateNode(root,min,max){
        if(root===null){
            return true
        }
        if(root.element<=min || root.element>=max){
            return false
        }
    }
}
const bst=new BinarySearchTree()


class MaxHeap{
    constructor(){
        this.list=[null]
    }
    insert(value){
        const len=this.list.length
        this.list.push(value)
        if(len===1){
            return value
        }
        this.heapifyup()
        return this.list[1]
    }

}
class MaxHeap{
    constructor(){
        this.list=[null]
    }
    insert(value){
        const len=this.list.length
        this.list.push(value)
        if(len===1){
            return value
        }
        this.heapifyup()
        return this.list[1]
    }
}

class MaxHeap{
    constructor(){
        this.list=[null]
    }
    insert(value){
        const len=this.list.length
        this.list.push(value)

        if(len===1){
            return value
        }
        this.heapifyup()
        return this.list[1]
    }
    remove(){
        if(this.list.length===1)return null
        if(this.list.length===2)return this.list.pop()

        const preRoot=this.list[1]
        this.list[1]=this.list.pop()
        this.heapifydown()
        return preRoot()
    }
    heapifyup(){
        let i=this.list.length-1
        const val=this.list[i]

        while(!this.isRoot(i) && this.getParentNode(i)<val){
            [this.list[this.getParentIndex],this.list[i]]=[val,this.getParentNode(i)]
            i=this.getParentIndex(i)
        }
    }
    heapifydown(){
        if(this.list.length<3){
            let i=1
            const currentVal=this.list[1]
            const leftVal=this.getLeftNode(i)
            const rightVal=this.getRightNode(i)

            while()
        }
    }
}

class MaxHeap{
    constructor(){
        this.list=[null]
    }
    insert(value){
        const len=this.list.length
        this.list.push(value)

        if(len===1){
            return value
        }
        this.heapifyup()
        return this.list[1]
    }
    remove(){
        if(this.list.length===1)return null
        if(this.list.length===2)return this.list.pop()

        const preRoot=this.list[1]
        this.list[1]=this.list.pop()
        this.heapifydown()
        return preRoot
    }
}

class MaxHeap{
    constructor(){
        this.list=[null]
    }
    insert(value){
        const len=this.list.length
        this.list.push(value)

        if(len===1){
            return value
        }
        this.heapifyup()
        return this.list[1]
    }
    remove(){
        if(this.list.length===1)return null
        if(this.list.length===2)return this.list.pop()

        const preRoot=this.list[1]
        this.list[1]=this.list.pop()
        this.heapifydown()
        return preRoot
    }
    heapifyup(){
        let i=this.list.length-1
        const val=this.list[i]

        while(!this.IsRoot(i) && this.getParentNode(i)<val){
            [this.list[this.getParentIndex(i)],this.list[i]]=[val,this.getParentNode(i)]
            i=this.getParentIndex(i)
        }
    }

    heapifyup(){
        let i=this.list.length-1
        const val=this.list[i]

        while(!this.isRoot(i) && this.getParentNode(i)<val){
            [this.list[this.getParentIndex(i)],this.list[i]]=[val,this.getParentNode(i)]
            i=this.getParentIndex(i)
        }
    }

}

class MaxHeap{
    constructor(){
        this.list=[null]
    }
    insert(value){
        const len=this.list.length-1
        this.list.push(value)
        if(len===1){
            return value
        }
        this.heapifyup()
        return this.list[1]
    }
    remove(){
        if(this.list.length===1)return null
        if(this.list.length===2)return this.list.pop()

        const preRoot=this.list[1]
        this.list[1]=this.list.pop()
        this.heapifydown()
        return preRoot
    }
    heapifyup(){
        const i=this.list.length-1
        const val=this.list[i]

        if(!this.isRoot(i) && this.getParentNode(i)<val){
            [this.list[this.getParentIndex(i)],this.list[i]]=[val,this.getParentNode(i)]
            i=this.getParentIndex(i)
        }
    }
    heapifydown(){
        if(this.list.length<3)return 
        let i=1

        const currentVal=this.list[1]
        const leftVal=this.getLeftNode(i)
        const rightVal=this.getRightNode(i)

        
        
    }
}