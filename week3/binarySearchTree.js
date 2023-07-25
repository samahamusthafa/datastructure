class Node {
    constructor(element) {
        this.element = element
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(element) {
        const node = new Node(element)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.element < root.element) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, element) {
        if (!root) {
            return false
        } else {
            if (root.element === element) {
                return true
            } else if (element < root.element) {
                return this.search(root.left, element)
            } else {
                return this.search(root.right, element)
            }
        }
    }

    //traversal
    preOrder(root) {
        if (root) {
            console.log(root.element);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.element);
            this.inOrder(root.right);
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.element);
        }
    }

    // pre-order, in-order, and post-order traversals are depth-first search (DFS) methods that visit nodes recursively,
    //while level-order traversal is a breadth-first search (BFS) method that visits nodes level by level using a queue. 
    // These different traversal techniques provide different ways to explore and process the nodes of a binary tree.

    levelOrder() {  //The levelOrder method visits the nodes of a binary tree level by level, from top to bottom and from left to right.
        let queue = []  //It uses a queue to keep track of the nodes to visit.
        queue.push(this.root)  // It starts by enqueueing the root node (queue.push(this.root)).

        while (queue.length) {
            //   The method then enters a loop where it dequeues a node from the queue (let curr = queue.shift()),
            let curr = queue.shift()

            console.log(curr.element);  // prints its value (console.log(curr.value)),

            if (curr.left) {               //and enqueues its left and right children if they exist (queue.push(curr.left)
                queue.push(curr.left)
            }
            if (curr.right) {              //and queue.push(curr.right)).
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.element
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.element
        } else {
            return this.max(root.right)
        }
    }

    //delete
    delete(element) {
        this.root = this.deleteNode(this.root, element)
    }

    deleteNode(root, element) {
        if (root === null) {
            return root
        } else {
            if (element < root.element) {
                root.left = this.deleteNode(root.left, element)
            } else if (element > root.element) {

                root.right = this.deleteNode(root.right, element)
            } else {
                // case 1 root has no children
                if (!root.right && !root.left) {
                    return null
                }
                // case 2 root has one child
                if (!root.left) {
                    return root.right
                } else if (!root.right) {
                    return root.left
                }
                // case 3 root has 2 childrenConsolas
                root.element = this.min(root.right);
                root.right = this.deleteNode(root.right, root.value)
            }
            return root;
        }
    }

    isBST(root) {
        if (root === null) {
            return true
        }
        if (root.left !== null && root.left.value > root.value) {
            return false
        }
        if (root.right !== null && root.right.value < root.value) {
            return false
        }
        if (!this.isBST(root.left) || !this.isBST(root.right)) {
            return false
        }
        return true
    }


    validate() {
        return this.validateNode(this.root, -Infinity, Infinity)
    }
    validateNode(root, min, max) {
        if (root === null) {
            return true
        }
        if (root.element <= min || root.element >= max) {
            return false
        }

        return this.validateNode(root.left, min, root.element) &&
            this.validateNode(root.right, root.element, max)
    }

}

const bst = new BinarySearchTree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


console.log(bst.validate());

console.log(bst.search(bst.root, 80));


console.log("Inorder traversal:");
bst.inOrder(bst.root)
console.log("Preorder traversal:");
bst.preOrder(bst.root)
console.log("Postorder traversal:");
bst.postOrder(bst.root)




bst.levelOrder()




// class Node {
//     constructor(element) {
//         this.element = element
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(element) {
//         const node = new Node(element)
//         if (this.root === null) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }
//     insertNode(root, node) {
//         if (node.element < root.element) {
//             if (root.left === null) {
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }

//     search(root, element) {
//         if (!root) {
//             return false
//         } else {
//             if (root.element === element) {
//                 return true
//             } else if (element < root.element) {
//                 return this.search(root.left, element)
//             } else {
//                 return this.search(root.right, element)
//             }
//         }
//     }
//     preOrder(root) {
//         if (root) {
//             console.log(root.element)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.element)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.element)
//         }
//     }
//     levelOrder() {
//         let queue = []
//         queue.push(this.root)

//         while (queue.length) {
//             let curr = queue.shift()
//             console.log(curr.element)

//             if (curr.left) {
//                 queue.push(curr.left)
//             } else {
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.element
//         } else {
//             return this.min(root.left)
//         }
//     }
//     max(root) {
//         if (!root.right) {
//             return root.element
//         } else {
//             return this.max(root.right)
//         }
//     }
// }


// class Node {
//     constructor(element) {
//         this.element = element
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(element) {
//         const node = new Node(element)
//         if (this.root === null) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }
//     insertNode(root, node) {
//         if (node.element < root.element) {
//             if (root.left === null) {
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }
//     search(root, element) {
//         if (!root) {
//             return false
//         } else {
//             if (element === root.element) {
//                 return true
//             } else if (element < root.element) {
//                 return this.search(root.left, element)
//             } else {
//                 return this.search(root.right, element)
//             }
//         }
//     }
// }


// class Node {
//     constructor(element) {
//         this.element = element
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(element) {
//         const node = new Node(element)
//         if (!this.root) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }
//     insertNode(root, node) {
//         if (node.element < root.element) {
//             if (this.left === null) {
//                 this.left = node
//             } else {
//                 this.insertNode(this.left, node)
//             }
//         } else {
//             if (this.right === null) {
//                 this.right = node
//             } else {
//                 this.insertNode(this.right, node)
//             }
//         }
//     }
//     search(root, element) {
//         if (!this.root) {
//             return false
//         } else {
//             if (element === root.element) {
//                 return true
//             } else if (element < root.element) {
//                 return this.search(this.left,)
//             }
//         }
//     }
// }


// class Node {
//     constructor(element) {
//         this.element = element
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(element) {
//         const node = new Node(element)
//         if (!this.root) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }
// }

// class Node {
//     constructor(element) {
//         this.element = element
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(element) {
//         const node = new Node(element)
//         if (this.root === null) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }
//     insertNode(root, node) {
//         if (node.element < root.element) {
//             if (root.left === null) {
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }
//     search(root, element) {
//         if (!root) {
//             return false
//         } else {
//             if (root.element === element) {
//                 return true
//             } else if (element < root.element) {
//                 return this.search(root.left, element)
//             } else {
//                 return this.search(root.right, element)
//             }
//         }
//     }
//     preOrder(root) {
//         if (root) {
//             console.log(root.element)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.element)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.element)
//         }
//     }
//     levelOrder() {
//         let queue = []
//         queue.push(this.root)

//         while (queue.length) {
//             let curr = queue.shift()
//             console.log(curr.element)

//             if (curr.left) {
//                 queue.push(curr.left)
//             }
//             if (curr.right) {
//                 queue.push(curr.right)
//             }
//         }
//     }
//     min(root) {
//         if (!root.left) {
//             return root.element
//         } else {
//             return this.min(root.left)
//         }
//     }
//     max(root) {
//         if (!root.right) {
//             return root.element
//         } else {
//             return this.max(root.right)
//         }
//     }
// }


// class Node{
//     constructor(element){
//         this.element=element
//         this.left=null
//         this.right=null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(element){
//         const node=new Node(element)
//         if(this.root===null){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.element<root.element){
//             if(root.left===null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
            
//                 if(root.right===null){
//                     root.right=node
//                 }else{
//                     this.insertNode(root.right,node)
//                 }
            
//         }
//     }
//     search(root,element){
//         if(!root){
//             return false
//         }else{
//             if(element===root.element){
//                 return true
//             }else if(element<root.element){
//                 return this.search(root.left,element)
//             }else{
//                 return this.search(root.right,element)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.element)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.element)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             this.inOrder(root.right)
//             console.log(root.element)
//         }
//     }
//     levelOrder(){
//         let queue=[]
//         queue.push(this.root)

//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.element)

//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.element
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.element
//         }else{
//             return this.max(root.right)
//         }
//     }
//     delete(element){
//         this.root=this.deleteNode(this.root,element)
//     }
//     deleteNode(root,element){
//         if(root===null){
//             return root
//         }else{
//             if(element<root.element){
//                 root.left=this.deleteNode(root.left,element)
//             }else if(element>root.element){
//                 root.right=this.deleteNode(root.right,element)
//             }else{
//                 if(!root.left && !root.right){
//                     return null
//                 }else if(!root.left){
//                     return root.right
//                 }else if(!root.right){
//                     return root.left
//                 }else{

//                 }
//             }

//         }   
//     }
// }