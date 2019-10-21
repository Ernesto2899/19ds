class Fibonachi {
    constructor(n) {
        this.n = n;
    }
    Value(n= this.n ) {
        return n < 2 ? n : this.Value(n - 1) + this.Value(n - 2);
    }
    Cost( n = this.n ) {
        let cont = 0;
        function value(n){
            if(n < 2){
                cont++;
            } else {
                cont++;
                return value(n-1) + value(n-2);
            }
        }
        value(n);
        return cont;
    }
    Sucesion() {
        let sucesion = [];
        for (let i = 1; i <= this.n; i++) {
            sucesion.push(this.Value(i));
        }
        return sucesion;
    }
    Table() {
        console.log("Number-Cost-Value ");
        for(let i = 0; i <= this.n; i++){
            console.log("X(" + i + ") - " + this.Cost(i) + " - " + this.Value(i));
        }
    }
}

let Fibo = new Fibonachi(8);
console.log(Fibo.Value());
console.log(Fibo.Sucesion()); 
console.log(Fibo.Cost());
console.log(Fibo.Table());
