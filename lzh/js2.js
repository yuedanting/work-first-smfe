function move(par,son){
    var ul = document.getElementById(par);
    var lists = ul.getElementsByTagName(son);
    var positions=[];//用来存位置
    var zMinIndex = 1;//z-index的值 用于累加
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
    //事件代理
    ul.addEventListener("mouseover",function(e){
        // 检查事件源e.targe是否为Li
        if(e.target && e.target.nodeName.toUpperCase() == "LI"){
            // 真正的处理过程在这里
            console.log("ssssss")
            change(e.target);
        }
    })

    function change(obj){
        console.log("obj:"+obj)
        //点击移动
        obj.onmousedown = function(e){
            var e = e||window.event,
                disX = e.clientX - obj.offsetLeft,
                disY = e.clientY - obj.offsetTop;
            obj.style.zIndex = zMinIndex++;

            //鼠标移动
            document.onmousemove = function(e){
                var e = e||window.event;
                obj.style.left = e.clientX - disX+'px';
                obj.style.top = e.clientY - disY+'px';
            };

            //清除鼠标事件
            document.onmouseup = function(){
                document.onmousemove=null;
                document.onmouseup = null;
            };

            return false;
        }
    }

}

