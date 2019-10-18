class Cards {
    printC(num){
        let MCard = []

        if (num <= 13) {
            MCard[0] = 0
       
        } else if (num <= 26) {
            MCard[0] = 1
       
        } else if (num <= 39) {
            MCard[0] = 2
       
        } else {
            MCard[0] = 3
        }

        switch (num % 13) {
           
                 case 0:
                MCard[1] = 13
                break
            
                case 1:
                MCard[1] = 1
                break
           
                case 2:
                MCard[1] = 2
                break
            
                case 3:
                MCard[1] = 3
                break
           
                case 4:
                MCard[1] = 4
                break
            
                case 5:
                MCard[1] = 5
                break
           
                case 6:
                MCard[1] = 6
                break
           
                case 7:
                MCard[1] = 7
                break
            
                case 8:
                MCard[1] = 8
                break
           
                case 9:
                MCard[1] = 9
                break
            
                case 10:
                MCard[1] = 10
                break
            
                case 11:
                MCard[1] = 11
                break
           
                case 12:
                MCard[1] = 12

            break
        }

        return MCard

    }

    PrintNum(x, z){
        
        let MCard = 0
       
        if (x == 0) {
           
            MCard = z
       
        } else if (x == 1){
            
            MCard = z + 13
        
        } else if (x == 2){
           
            MCard = z + 26
       
        } else if (x == 3){
           
            MCard = z + 39
        
        } else MCard = "-Error-"

        return MCard
    }
}  

( function useCard() {
    c1 = new Cards
    
    console.log(c1.printC(29))
    console.log(c1.PrintNum(2,3))
})()