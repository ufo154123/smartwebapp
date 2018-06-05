//코드 줄이기전 !
function AllColorBlue(){
    var allTitle = document.getElementsByClassName('h');
    for(var i=0; i<allTitle.length; i++)
    allTitle[i].style.color = 'blue';

}
function AllColorRed(){
    var allTitle = document.getElementsByClassName('h');
    for(var i=0; i<allTitle.length; i++)
    allTitle[i].style.color = 'red';
    
}
function AllColorGreen(){
    var allTitle = document.getElementsByClassName('h');
    for(var i=0; i<allTitle.length; i++)
    allTitle[i].style.color = 'green';
    
}
function AllColorBlack(){
    var allTitle = document.getElementsByClassName('h');
    for(var i=0; i<allTitle.length; i++)
    allTitle[i].style.color = 'black';
    
}

//코드 줄인 후!
function setColorById(id, color){
    document.getElementById(id).style.color = color;
}

function setColorByClassName(className, color){
    var allTitle = document.getElementsByClassName(className);
    for(var i=0; i<allTitle.length; i++)
    allTitle[i].style.color = color;
}

function setBtnByclassName(className){
    var buttons = document.getElementsByClassName(className);
    for(var i=0; i<buttons.length; i++){
        buttons[i].style.border = 'none';
        buttons[i].style.fontWeight = '700';
        buttons[i].style.color = 'white';
    }
}

function setBtnColorByClassName(className, color){
    var buttons = document.getElementsByClassName(className);
    for(var i=0; i<buttons.length; i++)
    buttons[i].style.backgroundColor = color;
}

setBtnByclassName('btn');

setBtnColorByClassName('red','red');
setBtnColorByClassName('green','green');
setBtnColorByClassName('black','black');
setBtnColorByClassName('blue','blue');

