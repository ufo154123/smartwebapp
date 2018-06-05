function locationReload(){
    location.reload();
}
//뒤로가기 버튼 없음
function locationReplace(){
    location.replace("http://www.google.com");
}
//뒤로가기 버튼 있음
function locationAssign(){
    location.assign("http://www.google.com");
}

function locationInformation(){
    var str = new String();

    location.hash = 'test';
    location.search = 'id=green';
    
    str = "href : " + location.href + "\n";
    str += "host : " + location.host + "\n";
    str += "host name : " + location.hostname + "\n";
    str += "path name : " + location.pathname + "\n";
    str += "protocol : " + location.protocol + "\n";
    str += "port : " + location.port + "\n";
    alert(str);
}
