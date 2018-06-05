//id를 이용해 요소를 검색해서 스타일을 수정하는 예제.
var h1 = document.getElementById('hid');
h1.style.color = 'blue';
h1.style.fontSize = '20px';
h1.style.fontWeight = '100';

//클래스를 이용해 요소를 검색해서 스타일을 수정하는 예제.

function fontColorBlue(){
    var h2 = document.getElementsByClassName('hclass');
    h2[0].style.color = 'blue';
}

//클래스 이름이 hclass인 요소를 찾아서 폰트사이즈를 변경. 아이디는 #으로! > 클래스인지 아이디인지 구분할 필요 없어서 편함
//all을 쓰면 배열로 저장.
var h3 = document.querySelector('.hclass');
h3.style.fontSize = '100px';

document.write('hello world');
document.write('hello world');

//dom 트리 구조를 이해하면 전체적인 흐름을 이해할 수 있음.
//h1 태그 생성 : header
var header = document.createElement('h1');
//텍스트 노드 생성
var text = document.createTextNode('생성');
//텍스트 노드를 h1 태그에 붙임
header.appendChild(text);
//h1 태그를 바디 태그에 붙임
document.body.appendChild(header);

