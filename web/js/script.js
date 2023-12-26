var newTextEle;

window.onload = function() {
    var newDivEle = document.createElement('DIV');
    var newPEle = document.createElement('P');
    newTextEle = document.createTextNode('Hello DOM!');
    newPEle.appendChild(newTextEle);
    newDivEle.appendChild(newPEle);
    document.getElementsByTagName('BODY')[0]
      .appendChild(newDivEle); 
}

function changeText(txt) {
    newTextEle.nodeValue = txt;
}  

function removeDiv(pid) {
    var child = document.getElementById(pid);
    var parent = child.parentNode;
    parent.removeChild(child);
}

