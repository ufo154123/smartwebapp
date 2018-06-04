function Lotto(){
    this.number = new Array();
    this.lotteryNumber = new Array();
    this.rank = -1;
    
    this.generateNumber = function(){
        //로또 번호 6개 생성(1~45), 중복 X, 
        this.number = this.createArrayNumber(1, 45, 6);
       
    };

    this.generateLotteryNumber = function(){
        //로또 추첨번호 7개 생성(1~45), 중복 X, 앞 6개는 일반번호 마지막 1개는 보너스 번호
        this.lotteryNumber = this.createArrayNumber(1, 45, 7);
    }

    this.checkRank = function(){
        //로또 번호와 추첨번호와 비교하여 몇등인지 확인
        var count = this.getCount(this.number, this.lotteryNumber);
        if(count == 6){
            this.rank = 1;
        }
        else if(count == 5 && this.contatis(this.number, this.lotteryNumber[this.lotteryNumber1.length-1]) == true){
            this.rank = 2;
        }
        else if(count == 5){
            this.rank = 3;
        }
        else if(count == 4){
            this.rank = 4;
        }
        else if(count == 3){
            this.rank = 5;
        }
        else{
            this.rank = -1;
        }
    }

    this.contatis = function(arr, num){
        for(var i in arr){
            if(arr[i] == num)
            return true;
        }
        return false;
    }
    this.getCount = function(arr1, arr2){
        var count = 0;
        var min = arr1.length > arr2.length ? arr2.length : arr1.length;
        for(var i =0; i<min; i++){
            if(this.contatis(arr1, arr2[i]) == true)
            count++;
        }
        return count;
    }

    this.randomInt = function(min, max){
        if(min > max){
            var tmp = min;
            min = max;
            max = tmp;
        }
        return parseInt(Math.random() * (max-min+1) + min);
    }

    this.createArrayNumber = function(min, max, count){
        var res = new Array();
        while(res.length < count){
            var i = 0;
            var tmp = this.randomInt(min, max);
            while(i < res.length){
                if(res[i] == tmp)
                break;
                i++;
            }
            if(i == res.length)
                res.push(tmp);
        }
        return res;
    }
}
var lotto1 = new Lotto();
lotto1.generateNumber();
lotto1.generateLotteryNumber();
console.log(lotto1.number);
console.log(lotto1.lotteryNumber);

lotto1.checkRank();
switch(lotto1.rank){
    case 1: 
    console.log("1등"); break;
    case 2: 
    console.log("2등"); break;
    case 3: 
    console.log("3등"); break;
    case 4: 
    console.log("4등"); break;
    case 5: 
    console.log("5등"); break;
    default :
    console.log("꽝")
}
var rank = this.rank;