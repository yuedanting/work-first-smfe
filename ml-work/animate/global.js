//根据ID返回dom元素 
var $ = function(id){return document.getElementById(id);} 
//返回dom元素的当前某css值 
var getCss = function(obj,name){ 
//ie 
	if(obj.currentStyle) { 
	return obj.currentStyle[name]; 
	} 
//ff 
	else { 
		var style = document.defaultView.getComputedStyle(obj,null); 
		return style[name]; 
	} 
} 