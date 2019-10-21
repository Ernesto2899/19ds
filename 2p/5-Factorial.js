class Factorial {
    constructor(n) {
        this.n = n;
    }
    Value(n= this.n ) {

        function value(n) {

            if (n <= 1) {

               return 1;

            } else {

                return n * value(n - 1);
            }
        }
        return value(n);
    }
    Cost( n = this.n ) {

        let cont = 0;

        function value(n) {

            if (n <= 1) {

                cont++;
            } else {

                cont++;

                return n * value(n - 1);
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

        for (let i = 1; i <= this.n; i++) {

            console.log("X(" + i + ") - " + this.Cost(i) + " - " + this.Value(i));
        }
    }
}
let Fact = new Factorial(7);

console.log(Fact.Value());
console.log(Fact.Sucesion());
console.log(Fact.Cost());
console.log(Fact.Table());
