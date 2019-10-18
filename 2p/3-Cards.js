class Card {
    printCard(num){
        let myCard = []

        if (num <= 13) {
            myCard[0] = 0
        } else if (num <= 26) {
            myCard[0] = 1
        } else if (num <= 39) {
            myCard[0] = 2
        } else {
            myCard[0] = 3
        }

        switch (num % 13) {
            case 0:
                myCard[1] = 13
                break
            case 1:
                myCard[1] = 1
                break
            case 2:
                myCard[1] = 2
                break
            case 3:
                myCard[1] = 3
                break
            case 4:
                myCard[1] = 4
                break
            case 5:
                myCard[1] = 5
                break
            case 6:
                myCard[1] = 6
                break
            case 7:
                myCard[1] = 7
                break
            case 8:
                myCard[1] = 8
                break
            case 9:
                myCard[1] = 9
                break
            case 10:
                myCard[1] = 10
                break
            case 11:
                myCard[1] = 11
                break
            case 12:
                myCard[1] = 12
            break
        }

        return myCard

    }

    printNumber(k, n){
        let myCard = 0
        if (k == 0) {
            myCard = n
        } else if (k == 1){
            myCard = n + 13
        } else if (k == 2){
            myCard = n + 26
        } else if (k == 3){
            myCard = n + 39
        } else myCard = "-Error-"

        return myCard
    }

    onePair(){

        function factorial(n) {
            return n <= 1 ? 1 : n * factorial(n - 1);
        }
               
        let primer= (factorial(13) / (factorial(13-1)*(factorial(1))));
      
        let seg= (factorial(4) / (factorial(4-2)*(factorial(2))))
   
        let tercer= (factorial(12) / (factorial(12-3)*(factorial(3))))
     
        let cuartoFir=(factorial(4) / (factorial(4-1)*(factorial(1))))
        let cuatro= Math.pow(cuartoFir,3);

        let num_posibles=(factorial(52) / (factorial(52-5)*(factorial(5))))
        let operacion= primer*seg*tercer*cuatro;
        let prob=operacion/num_posibles;
       

        return ((prob.toFixed(4))*100)+"%";
    }
}


( function useCard() {
    c1 = new Card
    console.log(c1.printCard(29))
    console.log(c1.printNumber(2,3))
    console.log(c1.onePair())
})()
