class Calendar{

    todayPlus(day, num) {
    
        if (day == 1 || day == "Monday") {
            num = num+1;
        } else if (day == 2 || day == "Tuesday"   ) {
            num = num + 2;
        } else if (day == 3 || day == "Wednesday") {
            num = num + 3;
        } else if (day == 4 || day == "Thursday"   ) {
            num = num + 4;
        } else if (day == 5 || day == "Friday"  ) {
            num = num + 5;
        } else if (day == 6 || day == "Saturday"   ) {
            num = num + 6;
        } else if (day == 7 || day == "Sunday"  ) {
            num = num ;
        }
    
        switch (num % 7) {
            case 0:
                this.num = "Sunday";
                break;
            case 1:
                this.num = "Monday";
                break
            case 2:
                this.num = "Tuesday";
                break
            case 3:
                this.num = "Wednesday";
                break
            case 4:
                this.num = "Thursday";
                break;
            case 5:
                this.num = "Friday";
                break;
            case 6:
                this.num = "Saturday";
                break;
        }
        return this.num;
    }
    
    leapYear(year){
        return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
    }
    
    friday13(year){
        let count = 0;
    for (let month=0; month<12; month++) {
        let d = new Date(year,month,13);
        if(d.getDay() == 5){
          count++;
       }
    }
    return count;   
    }

    firstDay(x){
        let a;
        a=(x+Math.floor((x-1)/4)-Math.floor((x-1)/100)+Math.floor((x-1)/400))%7;
        return a;
        }
    printCalendar(month, anio) {
            let days = 0;
            let cont = 1;
            let BegMon = 0;
            let calendar = new Array(5);
            for (let i = 0; i < 5; i++) {
                calendar[i] = new Array(7);
                for (let j = 0; j < 7; j++) {
                    calendar[i][j] = 0;
                }
            }
            let a = this.firstDay(anio);
            if (this.leapYear(anio)) {
                if (month == 2) {
                    days = 29;
                    BegMon = (x + 31) % 7;
                }
            } else {
                switch (month) {
                    case 1:
                        days = 31;
                        BegMon = a;
                        break;
                    case 2:
                        days = 28;
                        BegMon = (a+ 31) % 7;
                        break;
                    case 3:
                        days = 31;
                        BegMon = (a + 59) % 7;
                        break;
                    case 4:
                        days = 30;
                        BegMon = (a + 90) % 7;
                        break;
                    case 5:
                        days = 31;
                        BegMon = (a + 120) % 7;
                        break;
                    case 6:
                        days = 30;
                        BegMon = (a + 151) % 7;
                        break;
                    case 7:
                        days = 31;
                        BegMon = (a + 181) % 7;
                        break;
                    case 8:
                        days = 31;
                        BegMon = (a + 212) % 7;
                        break;
                    case 9:
                        days = 30;
                        BegMon = (a + 243) % 7;
                        break;
                    case 10:
                        days = 31;
                        BegMon = (a + 273) % 7;
                        break;
                    case 11:
                        days = 30; 
                        BegMon = (a + 304) % 7;
                        break;
                    case 12:
                        days = 31;
                        BegMon = (a + 334) % 7;
                        break;
                    default:
                        days = "Error"
                        break;
                }
            }
    
            for (let i = 0; i < 5; i++) {
                if (i == 0) {
                    for (let j = BegMon; j < 7; j++) {
                        calendar[i][j] = cont;
                        cont++
                    }
                } else {
                    for (let j = 0; j < 7; j++) {
                        if (cont <= days) {
                            calendar[i][j] = cont;
                            cont++;
                        }
                    }
                }
    
            }
            return calendar;
        }
    }

( function useCalendar() {
    ME = new Calendar
    console.log(ME.todayPlus(2, 9))
    console.log(ME.leapYear(2019))
    console.log(ME.friday13(2019))
    console.log(ME.firstDay(2019))
    console.log(ME.printCalendar(4,2019));
})()