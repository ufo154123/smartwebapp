function checkNavigator(){
    var str = new String();
    str += "appCodeName : " + navigator.appCodeName + "\n";
    str += "appName : " + navigator.appName + "\n";
    str += "appVersion : " + navigator.appVersion + "\n";
    str += "cookieEnabled : " + navigator.cookieEnabled + "\n";
    str += "online : " + navigator.onLine + "\n";
    str += "platform : " + navigator.platform + "\n";
    str += "userAgent : " + navigator.userAgent + "\n";
    str += "geoLocation : " + navigator.geolocation + "\n";
    str += "language : " + navigator.language + "\n";
    str += "product : " + navigator.product + "\n";
    alert(str);
}