function createText(tag, value){
        if(!print){
            //프린트 태그 생성    
            var e = document.createElement(tag);
            //생성된 태그에 속성을 추가, 아이디 = 텍스트
            e.setAttribute('id','text');
            var t = document.createTextNode(value);
            e.appendChild(t);
            document.body.appendChild(e);
            print = true;
            document.getElementById('btn1').value = '삭제';
        }

        else{
            //삭제할 태그를 검색
            var e = document.getElementById('text');
            //삭제
            document.body.removeChild(e);
            //프린트를 false로 설정하여 다시 생성할 수 있게 함.
            print = false;
            document.getElementById('btn1').value = '생성';
        }
}

var print = false;
