function showOrHide(tit,content){
    var title = getElementsByClassName(document,tit)
    var cont = getElementsByClassName(document,content)
    var is_show = false;

    for(var i= 0; i<title.length; i++){
        //is_show = bindEvent(title[i],"click",change(is_show))
        // �����Ǽ��������󶨡����κ��ܲ���

        title[i].onclick = function(){
            is_show = change(this,is_show)
        }
    }
}

function change(event,isShow){
    if(isShow){
        getNextElement(event).style.display = "block"
        return false;
    }else{
        getNextElement(event).style.display = "none";
        return true;
    }
}