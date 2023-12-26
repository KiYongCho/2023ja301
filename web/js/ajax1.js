let btn = document.getElementById("btn");
btn.onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/asset/plaintext.txt", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            document.getElementById("greeting").innerHTML
                = xhr.responseText;
        }
    }
}

let btn2 = document.getElementById("btn2");
btn2.onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/asset/csv.csv", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        const respArray = xhr.responseText.split(",");
        if (xhr.readyState==4 && xhr.status==200) {
            document.getElementById("greeting").innerHTML
                = respArray[0];
        }
    }
}

let btn3 = document.getElementById("btn3");
btn3.onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5500/asset/json.json", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            const jsonObj = JSON.parse(xhr.responseText);
            document.getElementById("greeting").innerHTML
                = jsonObj.student1.sname;
        }
    }
}

let btn4 = document.getElementById("btn4");
btn4.onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://koreanjson.com/users/1", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            let jsonObj = JSON.parse(xhr.responseText);
            document.getElementById("greeting").innerHTML
                = jsonObj.name;
        }
    }
}

let btn5 = document.getElementById("btn5");
btn5.onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.dbpia.co.kr/v2/search/search.xml", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            let xmlObj = xhr.responseXML;
            let rootEle = xmlObj.documentElement;
            let errEle = rootEle.getElementsByTagName("error")[0];
            let codeEle = errEle.getElementsByTagName("Code")[0];
            document.getElementById("greeting").innerHTML
                = codeEle.firstChild.nodeValue;
        }
    }
}


