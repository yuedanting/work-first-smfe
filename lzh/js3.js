function startMove(obj, attr, iTarget){

    obj.timer = setInterval(function (){//��ȡ����ֵ�Ե���clearInterval����

        var iCur = 0;//����״̬����

        //��ȡ��ǰ״̬
        if(attr === 'opacity'){
            iCur = parseInt( parseFloat( getStyle(obj, attr))*100);
        }
        else{
            iCur = parseInt(getStyle(obj, attr));
        }

        //��ȡ�ٶ�
        var iSpeed=(iTarget - iCur) / 8;
        iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);//ispeedȡ������

        //�仯
        if(iCur >= iTarget){
            clearInterval(obj.timer);console.log(iCur+","+iTarget)
        }
        else{
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity:'+(iCur+iSpeed)+')';
                obj.style.opacity = (iCur + iSpeed)/100;
                //console.log(iCur+","+iTarget)//������
            }
            else{
                obj.style[attr] = iCur+iSpeed+'px';
            }
        }
    }, 30);

}