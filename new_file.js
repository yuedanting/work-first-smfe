function startMoverOne(itarget) { //目标值
			clearInterval(timer);       //清除之前动画
			var odiv = document.getElementById('odiv');
			timer = setInterval(function() {
				var speed = 0;
				if (odiv.offsetLeft > itarget) {
					speed = -3;
				} else {
					speed = 3;
				}
				if (odiv.offsetLeft == itarget) {
					clearInterval(timer);
				} else {
					odiv.style.left = odiv.offsetLeft + speed + 'px';
				}
			}, 16);
		}

function startMoverTwo(itarget) { //速度和目标值
			clearInterval(timer); //执行当前动画同时清除之前的动画
			var odiv = document.getElementById('odiv');
			timer = setInterval(function() {
				//缓冲动画的速度参数变化值
				var speed = (itarget - odiv.offsetLeft) / 10;
				//如果速度是大于0，说明是向右走，那么就向上取整,反之，向下取整
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if (odiv.offsetLeft == itarget) {
					clearInterval(timer);
				} else {
					odiv.style.left = odiv.offsetLeft + speed + 'px';
				}
			}, 16);
		}

function startmov(obj, itarget) {
				clearInterval(obj.timer); //执行动画之前清除动画
				obj.timer = setInterval(function() {
					var speed = 0;
					speed = (itarget - obj.offsetWidth) / 8;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if (obj.offsetWidth == itarget) {
						clearInterval(obj.timer);
					} else {
						obj.style.width = obj.offsetWidth + speed + 'px';
					}
				}, 30);
			}

function startMov(obj, itarget, attr, fn) { //fn回调函数
				clearInterval(obj.timer); //执行动画之前清除动画
				obj.timer = setInterval(function() {
					var icur = 0;
					if (attr == 'opacity') {
						icur = Math.round(parseFloat(getStyle(obj, attr)) * 100); //转换成整数,并且四舍五入
					} else {
						icur = parseInt(getStyle(obj, attr));
					}
					var speed = 0;
					speed = (itarget - icur) / 8;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if (icur == itarget) {
						clearInterval(obj.timer);
						if (fn) {
							fn();
						}
					} else {
						if (attr == 'opacity') {
							obj.style.filter = 'alpha(opacity:' + (icur + speed) + ')';
							obj.style.opacity = (icur + speed) / 100;
						} else {
							obj.style[attr] = icur + speed + 'px';
						}
					}
				}, 30);
			}

function getStyle(obj, attr) {
				if (obj.currentStyle) {
					return obj.currentStyle[attr];
				} else {
					return getComputedStyle(obj, false)[attr];
				}
			}