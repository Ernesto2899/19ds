class Vector {
    constructor(data) {
     
        this.data = data;
    }
    sum(vec) {

     
        return this.data.map((item, i) => item + vec[i]);
    }
    subtract(vector) {

     
        return this.data.map((item, i) => item - vec[i]);
    }
    multiply(vector) {

      return this.data.map((item, i) => item * vector[i]);
    
    }
    gGVector() {
      return this.data;
    }
}

( function useVector () {
  const x = [2, 3, 4, 5, 6, 7];
  
  const z = [3, 2, 1, 5, 8, 1];
    
  const vector = new Vector(x);
  
  console.log(`sum: ${vec.sum(z)}`);
      
  console.log(`Subtract: ${vec.subtract(z)}`);
  
  console.log(`Multipy: ${vec.multiply(z)}`);
    
  console.log(`GVector: ${vec.GVector()}`);

})()