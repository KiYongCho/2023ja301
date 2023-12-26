window.onload = function() {

    $.post("http://127.0.0.1:5500/xml/books.xml");

    // Javascript 통신 객체 생성
    var xhr = new XMLHttpRequest();
    // 통신 초기화 (http method, url, 비동기여부)
    xhr.open("GET", "http://127.0.0.1:5500/xml/books.xml", false);
    // 요청 전송
    xhr.send();
    // xml 응답을 저장
    var xmlResp = xhr.responseXML;
    var rootEle = xmlResp.documentElement;
    var childCnt = rootEle.childNodes.length;
    for (var i=0; i<childCnt; i++) {
        var eachObj = rootEle.childNodes[i];
        if (eachObj.nodeType==1) {
         var eachObjLeng = eachObj.childNodes.length; 
         for (var j=0; j<eachObjLeng; j++) {
            if (eachObj.childNodes[j].nodeType==1) {
                console.log
                (eachObj.childNodes[j].nodeName);
                console.log
                (eachObj.childNodes[j].childNodes[0].nodeValue);
            }
         }
        }
    }
}