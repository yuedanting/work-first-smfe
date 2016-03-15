function startMove(obj, attr, iTarget){

    obj.timer = setInterval(function (){//获取返回值以调用clearInterval结束

        var iCur = 0;//现在状态容器

        //获取当前状态
        if(attr === 'opacity'){
            iCur = parseInt( parseFloat( getStyle(obj, attr))*100);
        }
        else{
            iCur = parseInt(getStyle(obj, attr));
        }

        //获取速度
        var iSpeed=(iTarget - iCur) / 8;
        iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);//ispeed取正整数

        //变化
        if(iCur >= iTarget){
            clearInterval(obj.timer);console.log(iCur+","+iTarget)
        }
        else{
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity:'+(iCur+iSpeed)+')';
                obj.style.opacity = (iCur + iSpeed)/100;
                //console.log(iCur+","+iTarget)//有问题
            }
            else{
                obj.style[attr] = iCur+iSpeed+'px';
            }
        }
    }, 30);

}