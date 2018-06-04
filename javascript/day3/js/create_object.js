
var obj1 = {'kiti' : 100};
printobj(obj1);

obj1['kate'] = 90;
printobj(obj1);

obj1.jj = 80;
printobj(obj1);

var obj2 = new Object();
obj2['kiti'] = 90;
obj2.kate = 40;
printobj(obj2);
console.log("obj1 type : "+ typeof obj1);
console.log("obj2 type : " + typeof obj2);

delete(obj2.kate);
printobj(obj2);

var std = {
    name : "North", 
    age : 25,
    sayHello : function(){
        return "이름 : " + this.name + ", 나이 : " + this.age;
    }
};

console.log(std.sayHello());
std.sayHi = function(country){
    return this.sayHello() + ", country : " + country;
};
console.log(std.sayHi('Busan'));
