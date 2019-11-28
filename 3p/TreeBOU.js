class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class TreeBOU {

  constructor() {
      this.root = null;
  }

  insertar(data) {

      let newNode = new Node(data);
      if (this.root === null) {

          this.root = newNode;

      }
      let current = this.root;
      while (true) {

          if (data === current.data) return;
          if (data < current.data) {
              if (current.left === null) {
                  current.left = newNode;
              }
              current = current.left;

          } else {
              if (current.right === null) {
                  current.right = newNode;

              }
              current = current.right;
          }
      }
  }

  deleteNode(key) {

      return !(this.remove(this.root, key) === false);
  }

  remove(root, key) {
      if (root === null) {
         
      }
      if (key < root.data) {

          root.left = this.remove(root.left, key);
          return root;
      } else if (key > root.data) {

          root.right = this.remove(root.right, key);
          return root;

      } else {
          

          if (root.left === null && root.right === null) {
              root = null;
              return root;

          }
          
          if (root.left === null) return root.right;

          if (root.right === null) return root.left;

         
          let currNode = root.right;
          while (currNode.left !== null) {

              currNode = currNode.left;
          }
          root.data = currNode.data;

         
          root.right = this.remove(root.right, currNode.data);

          return root;
      }
  }
  preOrder(node = this.root) {

      if (node.data !== null) {
          console.log(node.data);
      }

      if (node.left !== null) {
          this.preOrder(node.left);
      }

      if (node.right !== null) {
          this.preOrder(node.right);
      }
  }

  BFS(){

      let node = this.root;
      const queue = [node];
      const finalData = [ ]
  
      while(queue.length){
        node= queue.shift()

        if(node.left) queue.push(node.left)

        if(node.right) queue.push(node.right)
        finalData.push(node.data)

      }
      return finalData;
   }

}

let x = new TreeBOU();
x.insertar(9);

x.insertar(13);

x.insertar(32);
x.insertar(34);
x.insertar(36);
x.insertar(7);
x.insertar(8);
x.insertar(98);
x.insertar(17);
x.insertar(21);
x.insertar(22);

console.log(x.preOrder());
console.log(x.BFS());
x.deleteNode(13);
console.log(x);