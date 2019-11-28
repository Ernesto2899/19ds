class Graph {

    constructor(x) {
      this.rows = x;
      this.columnas = x;
      this.data = this.init();

    }
  
    init() {

      let init = [];
  
      for (let i = 0; i < this.rows; i++) {
        init[i] = new Array(this.rows);
  
        for (let j = 0; j < this.columnas; j++) {
          init[i][j] = 0;

        }
      }
      return init;

    }
  
    isDirected() {

      let Dire = [];
      
      for (let i = 0; i < this.rows; i++) {
        
        Dire[i] = new Array(this.rows);
  
        for (let j = 0; j < this.columnas; j++) {
          Dire[i][j] = 0;

        }
      }
      return Dire;

    }
  







    printGraph() {

      return this.data;

    }
  
    Vertex() {

      this.rows++;
      this.columnas++;
      this.data.length++;
  
      for (let i = 0; i < this.data.length - 1; i++) {
        this.data[i].length++;

      }

      for (let i = this.data.length - 1; i < this.data.length; i++) {
        this.data[i] = new Array(this.data.length - 1);
  
        for (let j = 0; j < this.data.length; j++) {
          this.data[i][j] = 0;
          this.data[j][i] = 0;

        }
      }
    }
  
    Bordes(v1, v2, boolean) {

      this.data[v1][v2]++;
      if (boolean == true) {
        this.data[v2][v1]++;

      }
    }
  
    Completo() {

      let temp = 0;
      for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (this.data[i][i] != 0) {
            return false;
          } else if (this.data[i][j] == 1) {
            temp++;

          }
        }
      }
      if (temp == this.data.length * this.data.length - this.data.length) {
        return true;
      } else {
        return false;

      }
    }
  
    Multigrafo() {

      let temp = 0;
      for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (this.data[i][i] != 0 || this.data[i][j] > 1) {
            temp++;


          }
        }
      }

      if (temp != 0) {
        return true;
      } else {
        return false;

      }
    }
  
    Subgrafo(n) {

      if (this.rows > n.rows || this.columnas > n.rows) {
        return false;
      }

      let temp = 0;
      for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (this.data[i][j] <= g.data[i][j]) {
            temp++;

          }
        }
      }

      if (temp == this.data.length * this.data.length) {
        return true;
      } else {
        return false;


      }
    }
  }
  grafo2 = new Graph(2);
  grafo3 = new Graph(3);
  grafo4 = new Graph(4);
  
  grafo2.Bordes(1, 1, true);
  grafo3.Bordes(2, 0, true);
  grafo3.Bordes(1, 0, true);
  grafo3.Bordes(2, 1, true);
  grafo4.Bordes(1, 2, true);
  grafo4.Bordes(0, 0);

  console.log(' Crear Grafo');
  grafo1 = new Graph(5);
  console.log(grafo1.printGraph());
  console.log(' ');
  
  console.log('Vertex');
  grafo1.Vertex();
  console.log(grafo1.printGraph());
  console.log(' ');
  
  console.log('Bordes');
  grafo1.Bordes(1, 0, true);
  grafo1.Bordes(2, 0, true);
  console.log(grafo1.printGraph());
  console.log(' ');
  
  console.log('Compelto ');
  console.log(grafo1.printGraph());
  console.log(grafo1.Completo());
  console.log(' ');
  
  
  console.log('Multigrafo ');
  console.log(grafo1.printGraph());
  console.log(grafo1.Multigrafo());
  console.log(' ');
  
  console.log('Subgrafo ');
  console.log('grafo 1');
  console.log(grafo1.printGraph());
  console.log('grafo 2');
  console.log(grafo2.printGraph());
  console.log(grafo1.Subgrafo(grafo2));
  console.log(' ');
  
 