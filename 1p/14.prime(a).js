let x = 10
function num (x) {
    let number = 2
    let prime = 1

   
    while (x > 0) {
        prime = 1
        
       
        for ( let i = 2; i < number; i++) {
           
           
            if (number % i === 0) {
                prime = 0
                break 
            }
        }

       
        if (prime) {
            console.log(number)
            x--
        }

        number++
    }
}

num(x)