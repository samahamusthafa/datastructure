class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      this.adjList.set(vertex,new Set());//it adds key and value to the map (key is vertex and value is its adjacencies)
    }
  
     addEdge(vertex1, vertex2) {
       this.adjList.get(vertex1).add(vertex2);
       this.adjList.get(vertex2).add(vertex1);
     }
  
  
      breadthFirstSearch(startVertex) {
       const visited = new Set(); // Keep track of visited vertices
       const queue = []; // Queue for BFS traversal
  
      visited.add(startVertex);
      queue.push(startVertex);
  
       while (queue.length > 0) {
         const currentVertex = queue.shift();
         console.log(currentVertex);
  
         const neighbors = this.adjList.get(currentVertex);

         for (const neighbor of neighbors) {
           if (!visited.has(neighbor)) {
             visited.add(neighbor);
             queue.push(neighbor);
           }
         }
       }
       return Array.from(visited); 
     }
   }
  
   // Usage example:
   const graph = new Graph();
   graph.addVertex("A");
   graph.addVertex("B");
   graph.addVertex("C");
   graph.addVertex("D");
   graph.addVertex("E");
  
   graph.addEdge("A", "B");
   graph.addEdge("A", "C");
   graph.addEdge("B", "D");
   graph.addEdge("C", "E");
  
   graph.breadthFirstSearch("A");

   breadthFirstSearch(startVertex){
    
    const visited=new Set()
    const queue=[]

    visited.add(startVertex)
    queue.push(startVertex)

    while(queue.length>0){
        const currentVertex=queue.shift()
        console.log(currentVertex)

        const neighbors=this.adjList.get(currentVertex)

        for(const neighbor of neighbors){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }


    }


   }