var myWindow;
function openWindow(){
    //윈도우를 하나 연다 = 윈도우 객체를 하나 생성한다.
    myWindow = window.open("http://127.0.0.1:5500/day4/html/test.html","MyWindow","width=400, height=200, toolbar=yes, location=yes, menubar=yes, scrollbar=yes, left=500, top=300");
};
function closeWindow(){
    //마이 윈도우에 저장된 윈도우 객체가 있으면 받음
    if(myWindow)
        myWindow.close();
}
function blurWindow(){
    if(myWindow){
        myWindow.blur();
    }
}
function focusWindow(){
    if(myWindow){
        myWindow.focus();
    }
}
function checkWindow(){
    //한번도 열린 적이 없음
    if(!myWindow){
        alert('한번도 열린적 없음');
    }
    else{
        if(myWindow.closed)
            alert('닫혀있음');
        else
            alert('열려있음');
    }
}
function moveByWindow(){
    myWindow.moveBy(50,50);
}
function moveToWindow(){
    myWindow.moveTo(50,50);
}
function resizeByWindow(){
    myWindow.resizeBy(500,500);
}
function resizeToWindow(){
    myWindow.resizeTo(500,500);
}