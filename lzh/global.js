//$
function $(id){
    return document.getElementById(id);
}

//非行间样式
function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj, false)[attr];
    }
}

//getElementsByClassName
function getElementsByClassName(node,classname){
    if (node.getElementsByClassName) {
        return node.getElementsByClassName(classname);
    } else {
        var results = new Array();
        var elems = node.getElementsByTagName('*');
        for (var i = 0; i<elems.length;i++){
            if(elems[i].className.indexOf(classname) != -1){
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}

//getElementsByName
function getElementsByName(tag,eltname){
    var elts=document.getElementsByTagName(tag);
    var count=0;
    var elements=[];
    for(var i=0;i<elts.length;i++){
        if(elts[i].getAttribute("name")==eltname){
            elements[count++]=elts[i];
        }
    }
    return elements;
}

//getNextElement
function getNextElement(node){
    var NextElementNode = node.nextSibling;
    while(NextElementNode.nodeValue != null){
        NextElementNode = NextElementNode.nextSibling
    }
    return NextElementNode;
}

//addClassName
function addClassName(node,addName){
    var classN = node.className;
    node.className = (classN === "") ? addName : classN + " " + addName;
}


//特征检测 //不知道哪里错了。。
function bindEvent(obj,event,fun) {
    obj.addEventListener ? obj.addEventListener(event, fun, false) : obj.attachEvent("on" + event, fun);
    console.log("ss")
}