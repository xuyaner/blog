	 function getStyle(obj,attr){
		if(obj.currentStyle){//IE浏览器 
			return obj.currentStyle[attr];
		}else{//火狐浏览器
			return getComputedStyle(obj,false)[attr];
		}
	}

     function startMove(obj,json,fn){  //学会使用json
		
	    // 1 取值
		 var flag=true;
		 clearInterval(obj.timer);
		 obj.timer=setInterval(function(){
		   for(var attr in json){
			 var iCur;
			 if(attr=="opacity"){
	        iCur=Math.round(parseFloat(getStyle(obj,attr))*100);	//取整 保证透明度不会随意跳动	 
	        }else{
	        iCur=parseInt(getStyle(obj,attr));
			 }
		// 2 判断速度
		var speed=(json[attr]-iCur)/8;
	 speed=speed>0?Math.ceil(speed):Math.floor(speed);
	   // 3 检测判断
			 if(iCur!=json[attr]){
				 flag=false;
			 }
			 if(attr=="opacity")
			  {
		      obj.style.filter='alpha:('+(iCur+speed)+')';
		      obj.style.opacity=(iCur+speed)/100;
			  }else
			  {
			   obj.style[attr]=iCur+speed+"px";
			  }
			   
			 if(flag)
			 {
			clearInterval(obj.timer); 
		     if(fn){
			    fn();
			       }
			  }
		   }
			 },30);
		
	
	 }// JavaScript Document