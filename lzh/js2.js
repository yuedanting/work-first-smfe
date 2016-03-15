function move(par,son){
    var ul = document.getElementById(par);
    var lists = ul.getElementsByTagName(son);
    var positions=[];//������λ��
    var zMinIndex = 1;//z-index��ֵ �����ۼ�
    var i=0;

    for(i=0;i<lists.length;i++){
        positions.push({
            "left":lists[i].offsetLeft,
            "top":lists[i].offsetTop
        });
    }
    for(i=0;i<lists.length;i++){
        lists[i].style.left = positions[i].left+'px';
        lists[i].style.top = positions[i].top+'px';
        lists[i].style.position = "absolute";
        lists[i].style.margin =10+'px';
        lists[i].index = i;
    }
    //�¼�����
    ul.addEventListener("mouseover",function(e){
        // ����¼�Դe.targe�Ƿ�ΪLi
        if(e.target && e.target.nodeName.toUpperCase() == "LI"){
            // �����Ĵ������������
            console.log("ssssss")
            change(e.target);
        }
    })

    function change(obj){
        console.log("obj:"+obj)
        //����ƶ�
        obj.onmousedown = function(e){
            var e = e||window.event,
                disX = e.clientX - obj.offsetLeft,
                disY = e.clientY - obj.offsetTop;
            obj.style.zIndex = zMinIndex++;

            //����ƶ�
            document.onmousemove = function(e){
                var e = e||window.event;
                obj.style.left = e.clientX - disX+'px';
                obj.style.top = e.clientY - disY+'px';
            };

            //�������¼�
            document.onmouseup = function(){
                document.onmousemove=null;
                document.onmouseup = null;
            };

            return false;
        }
    }

}

