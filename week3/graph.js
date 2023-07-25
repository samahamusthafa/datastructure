class Graph {
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]  = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    hasEdge( vertex1 , vertex2 ) {
       return( 
         this.adjecencyList[vertex1].has(vertex2) &&
        this.adjecencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return
        }
        for(let adjacecvertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjacecvertex)
        }
        delete this.adjecencyList[vertex]
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log( vertex + '->' + [...this.adjecencyList[vertex]]);

        }
    }
}
const graph1 = new Graph()

graph1.addVertex('A')
graph1.addVertex('B')
graph1.addVertex('C')

graph1.addEdge('A','B')
graph1.addEdge('B','C')
graph1.addEdge('A','C')
// graph.removeEdge('A','B')

graph1.display()

console.log(graph1.hasEdge('A','B'));
graph1.removeVertex('A')
graph1.display()


// class Graph{
//     constructor(){
//         this.adjecencyList={}
//     }
//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex]=new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjecencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjecencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjecencyList[vertex1].add(vertex2)
//         this.adjecencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjecencyList[vertex1].has(vertex2) &&
//             this.adjecencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjecencyList[vertex1].delete(vertex2)
//         this.adjecencyList[vertex2].delete(vertex1)

//     }
//     removeVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             return
//         }
//         for(let adjacecvertex of this.adjecencyList[vertex]){
//             this.removeEdge(vertex,adjacecvertex)
//         }
//         delete this.adjecencyList[vertex]
//     }
//     display(){
//         for(let vertex in this.adjecencyList){
//             console.log(vertex+"-->"+[...this.adjecencyList[vertex]])
//         }
//     }
// }


class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjecencyList[vertex1].has(vertex2)&&
            this.adjecencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return
        }
        for(let adjacecvertex of this.adjecencyList[vertex]){
            delete this.removeEdge(vertex,adjacecvertex)
        }
        delete this.adjecencyList[vertex]
    }
}