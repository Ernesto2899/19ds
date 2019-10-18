class Matrix {
    constructor(row, columns) {
      this.row = row;
      this.columns = columns;
      this.data = this.int();
    }
  
    int() {
     
        const tem = [];
  
      for (let i = 0; i < this.row; i++) {
        tem[i] = new Array(this.columns);
  
        for (let j = 0; j < this.columns; j++) {
          tem[i][j] = 0;
        }
      }
  
      return tem;

    }
  
    intRandom() {

      for (let i = 0; i < this.row; i++) {

        this.data[i] = new Array(this.columns);
  
        for (let j = 0; j < this.columns; j++) {

          this.data[i][j] = (Math.round (Math.random () * 10));

        }
      }
  
      return this.data;
    }
  
    GRow(x) {
      
  
      return this.data[x];
    }
  
    getColumn(a) {

      const tem = [];
  
      
  
      for (let i = 0; i < this.row; i++) {

        tem.push(this.data[i][a]);

      }
  
      return tem;
    }
  
    isSquared() {

      if (this.columns === this.row) {

        return true;

      }
  
      return false;
    }
  
    isSymmetric() {

      this.isSquared();
  
      for (let i = 0; i < this.row; i++) {

        for (let x = 0; x < this.columns; x++) {

          if (this.data[i][x] != this.data[x][i]) {

            return false;
          }
        }
      }
  
      return true;
    }
  
    isIdentity() {

      this.isSymmetric();
  
      for (let i = 0; i < this.row; i++) {

        if (this.data[i][i] !== 1) {

          return false;
        }
      }
  
      return true;
    }
  
    GMatrix() {

      return this.data;
    }
  }

  (function useMatrix(){

    ME = new Matrix(4,4)

    console.log(ME.int())
    console.log(ME.intRandom())
    console.log(ME.isSquared())
    console.log(ME.isSymmetric())
    console.log(ME.isIdentity())

  })()