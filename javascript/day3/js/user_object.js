function student(name, grade, clas, number){
    this.name = name;
    this.grade = grade;
    this.clas = clas;
    this.number = number;
    this.toString = function(){
        return new String("이름 : " + this.name + ", 학년 : " + this.grade + ", 반 : " + this.clas + ", 번호 : " + this.number);
    };
}

var std1 = new student('김정은', 1, 3, 4);
console.log(std1.toString());


var std2 = new student('김정금', 1, 2, 5);
console.log(std2.toString());

std2.sayHello = function(){
    return "Hello~";
}
console.log(std2.sayHello());

student.prototype.sayHi = function(){
    return "Hi";
}
console.log(std2.sayHi());
var ts = std2.toString();
var subts = ts.split(', ');

var res = new Array();

for(var i in subts){
    var tmp = subts[i].split(' : ');
    res.push(tmp[0]);
}
console.log(res.join(' and '));

var res2 = new Array();
res2.push(std2.name);
res2.push(std2.grade);
res2.push(std2.clas);
res2.push(std2.number);
console.log(res2.join(" and "));

// 이름 : 임꺽정, 학년 : 1, 반 : 1, 번호 : 1 
// subts '이름 : 임꺽정' '학년 : 1' '반 : 1' '번호 : 1'