var str = new String();
function checkScreen(){
    str = "availheight : " + screen.availHeight + "\n";
    str += "availwidth : " + screen.availWidth + "\n";
    str += "width : " + screen.width + "\n";
    str += "height : " + screen.height + "\n";
    str += "pixelDepth : " + screen.pixelDepth + "\n";
    str += "colorDepth : " + screen.colorDepth + "\n";
    alert(str);
}