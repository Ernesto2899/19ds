class Fibonachi {
    constructor(num) {
      this.num = num
    }
  
    Value(num = this.num) {
      function value(num) {
        return num < 2 ? num : value(num - 1) + value(num - 2);
      }
      return value(num);
    }
  
    Cost(num = this.num) {
      let cont = 0;
  
      function value(num) {

        if (num < 2) {
          cont++;

          return num;

        } else {
          cont++;

          return value(num - 1) + value(num - 2);

        }
      }
      value(num);
      return cont;
    }
  
  
    Succesion() {

      for (let i = 1; i <= this.num; i++) {

        console.log("Fibonachi IS " + i + " is: " + this.Value(i) + "\n");
      }
    }
  
    Table() {

      console.log("Number == Cost == Value")

      for (let i = 0; i <= this.num; i++) {

        console.log('X(' + i + ') ------ ' + this.Cost(i) + ' ------ ' + this.Value(i));
      }
    }
} 

(function usefibonacci(){

X = new Fibonachi(6);
console.log(X.Value());
console.log(X.Succesion());
console.log(X.Cost());
console.log(X.Table());
})()
