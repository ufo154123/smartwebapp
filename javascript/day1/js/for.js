var arr = [100, 200, 300];
var sum = 0;
for(items in arr){
    sum += arr[items];
}
console.log(arr.join("+") + "=" + sum);
var arr2 = {A:10, B:20, C:30};
for(items in arr2){
    console.log("key :" + items + ", value : " + arr2[items] );
}

var num1 = 12;
var num2 = 6;
var gcd = 0;

for(i=1; i<=num1; i++){
    if(num1 % i == 0 && num2 % i == 0 ){
        gcd = i;
    }
}
console.log(gcd);

var num3 = 15;
var num4 = 10;
var a = 0;

for(i=1; i<=num4; i++){
    if((i*num3) % num4 == 0){
        a = (i*num3)
        break;
    }
}
console.log(a);

for(i=0; i<6; i++){
    console.log('*');
}