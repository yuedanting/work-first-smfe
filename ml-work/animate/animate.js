function animateMove(window,obj,speed,size){
        var box = document.getElementById(obj),
        	boxwidth = document.getElementById(obj).offsetWidth,
        	speed = 1,
  			timer = null,
  			alpha=100,
			mLeft = mRight = mTop = mBottom = false,
			heightBig = heightSmall = widthBig = widthSmall = false;

	    setInterval(function ()
			{
				if (mLeft){
					box.style.left = box.offsetLeft - size + "px";
				}
				else if (mRight){
					box.style.left = box.offsetLeft + size + "px";
				}
				else if (mTop){
					box.style.top = box.offsetTop - size + "px";
				}
				else if(mBottom){
					box.style.top = box.offsetTop + size + "px";
				}
				if(heightBig){
					var boxheight = box.offsetHeight;
					if(boxheight >= 1000){
						return false;
					}
					else{
						box.style.height = boxheight + 10 + "px";
					}
				}
				else if(heightSmall){
					var boxheight = box.offsetHeight;
					if(boxheight <= 500){
						return false;
					}
					else{
						box.style.height = boxheight - 10 + "px";
					}
				}
				else if(widthBig){
					var boxwidth = box.offsetWidth;
					if(boxwidth >= 1000){
						return false;
					}
					else{
						box.style.width = boxwidth + 10 + "px";					
					}
				}
				else if(widthSmall){
					var boxwidth = box.offsetWidth;
					if(boxwidth <= 500){
						return false;
					}
					else{
						box.style.width = boxwidth - 10 + "px";						
					}
				}
				limit();
				key();
			},speed); 

	    var key = function(colorArry){
	    	document.onkeydown = function (event){
				var event = event || window.event;
				switch (event.keyCode){
					case 37:
						mLeft = true;
						break;
					case 38:
						mTop = true;
						break;
					case 39:
						mRight = true;
						break;
					case 40:
						mBottom = true;
						break;
					case 49:
						box.style.backgroundColor = "red";
						break;
					case 50:
						box.style.backgroundColor = "green";
						break;
					case 51:
						box.style.backgroundColor = "orange";
						break;
					case 52:
						box.style.backgroundColor = "blue";
						break;
					case 81:
						heightBig = true;
						break;
					case 87:
						heightSmall = true;
						break;
					case 69:
						widthBig = true;
						break;
					case 82:
						widthSmall = true;
						break;
					case 53:
						colorChange(100);
						break;
					case 54:
						colorChange(30);
						break;
					case 55:
						boxHidden();
						break;
				}
				return false;
			}
			document.onkeyup = function (event){
				switch ((event || window.event).keyCode){
				case 37:
					mLeft = false;
					break;
				case 38:
					mTop = false;
					break;
				case 39:
					mRight = false;
					break;
				case 40:
					mBottom = false;
					break;
				case 81:
					heightBig = false;
					break;
				case 87:
					heightSmall = false;
					break;
				case 69:
					widthBig = false;
					break;
				case 82:
					widthSmall = false;
					break;
				}
			};
	    }

	    var colorDeep = function(){
	    	var alpha = 100;
	    	timer = setInterval(function(){
			        box.style.filter = 'alpha(opacity='+alpha+')';
			        box.style.opacity = alpha/100;
		    },30);
		    if (box.style.filter == 'alpha(opacity='+ 100 +')' || box.style.opacity == 1) {
		    	clearInterval(timer);
		    }
	    }

	    var colorChange = function(target){
		    clearInterval(timer);
		    timer = setInterval(function(){
		      if(target > alpha){
		        speed = 2;
		      }else{
		        speed = -2;
		      }
		      
		      if(alpha == target){
		        clearInterval(timer);
		      }
		      else{
		        alpha = alpha + speed;
		        box.style.filter = 'alpha(opacity='+alpha+')';
		        box.style.opacity = alpha/100;
		      }
		    },30)
	    }

	    var boxHidden = function(){
  	    		var dHeight = box.offsetHeight,
	    			dWidth = box.offsetWidth,
	    			wcut = 10*(+dWidth / +dHeight),
	    			hcut = 10; 


				var proces = function(width,height){

						width = +width-wcut>0?+width-wcut:0; 
						height = +height-hcut>0?+width-hcut:0; 
						
						if(width !== 0 || height !== 0){
							box.style.width = width+'px'; 
							box.style.height = height+'px';

							setTimeout(function(){proces(width,height);},20);
						}					
					}
				if (dWidth != 0 || dHeight != 0) {
					setInterval(proces(dWidth,dHeight),30);
				}
	    }	

	    var limit = function(){
			var doc = [document.documentElement.clientWidth, document.documentElement.clientHeight]
			box.offsetLeft <=0 && (box.style.left = 0);
			box.offsetTop <=0 && (box.style.top = 0);
			doc[0] - box.offsetLeft - box.offsetWidth <= 0 && (box.style.left = doc[0] - box.offsetWidth + "px");
			doc[1] - box.offsetTop - box.offsetHeight <= 0 && (box.style.top = doc[1] - box.offsetHeight + "px")
		}
}

		