class Factorial{
    constructor(){
       
        this.cost = null
        this.succession = []
        this.tabla = []
    }

    Value(x){
    
        this.x = x
    
        this.succession[this.cost] = x
    
        this.cost +=1
    
        this.tabla[this.cost]= this.cost
   
        return x<2 ? 1 : this.x*this.Value(X-1);
    }

    IntCost(){
        return this.cost;
   
    }

    VectorSuc(){
        return this.succession;
    
    }

    VectorTable(){
        return this.table;
   
    }
}

let A = new Factorial


A.Value(8)
A.IntCost();
A.VectorSuc();
A.VectorTable();