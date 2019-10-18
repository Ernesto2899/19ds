class Fibonachi{
    constructor(){
        
        this.cost = null
        this.suc = []
        this.tab = []
    }
    value(x){
    
        this.suc[this.cost] = x
    
        this.cost +=1
   
        this.tab[this.cost]= this.cost
    
    
        return x < 2 ? x : this.value(x-1) + this.value(x-2);
    
    } 
    costo(){
       
        return this.cost
    } 
    succes(){
      
        return this.suc
    } 
    table(){
     
        return this.tab
    }
       
}