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
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.element)
            this.inOrder(root.right)
        }
    }

}