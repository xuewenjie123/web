// JavaScript Document
function to2(num)//保留几位小数
{
    //1112.5855  1112.58
    var str = ''+num;
    var newStr = str.substring(0,str.indexOf('.')+3);

    console.log( newStr );
    return newStr;
}

var c = to2( 112.3355 );//112.33

console.log( c );


//设置cookies
function setCookie( name,value,iDay )
{
	var oTime = new Date;
	
	oTime.setDate( oTime.getDate() + iDay );
	
	document.cookie = name + '='+ value +';expires='+oTime;
	
};

setCookie( 'User2','花花',3 );

//删除cookies
function removeCookie( iName )
{
	setCookie( iName,'adf',-1 )
};

removeCookie( 'User2' );

//获取cookies
function getCookie( iName )
{
	//console.log( document.cookie );//userName=优就业; User=小明; User2=花花
	var arr = document.cookie.split( '; ' );
	//为cookie进行第一次字符串分割
	//[ "userName=优就业", "User=小明", "User2=花花" ]
	//console.log( arr );
	for(var i=0;i<arr.length;i++)
	{
		var arr2 = arr[i].split('=');
		//console.log( arr2 );
		/*
			[ "userName", "优就业" ]
			[ "User", "小明" ]
			[ "User2", "花花" ]
		*/
		if( arr2[0] == iName )
		{
			return arr2[1];
		}
	};
	return '';
};

function getStyle( obj,attr )
{
	
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
	
};


//所有属性都到达目标位置，才清除定时器
function sMove(obj,json,endFn)
{
	
	console.log( json );
	clearInterval( obj.timer );
		
	//{"width":300,"height":300}
	obj.timer = setInterval( function(){
		
		var isStop = true;//如果所有属性都到达目标位置，则为true。
		
		for( var attr in json )
		{
			if( attr == 'opacity' )
			{
				var cur = Math.round(parseFloat(getStyle( obj,'opacity' ))*100);
			}
			else
			{
				var cur = parseInt(getStyle(obj,attr));
			};
			
			console.log( cur );
			var speed = (json[attr]-cur)/10;
			
			speed = speed > 0 ? Math.ceil(speed) : Math.floor( speed );
			
			if( cur!=json[attr] )//如果为真，则代表相应的属性值没有到达目标位置
			{
				isStop = false;
			};
			
			cur += speed;
			if( attr == 'opacity' )
			{
				obj.style.opacity = cur/100;
				obj.style.filter = 'alpha(opacity:'+ cur +')';
			}
			else
			{
				obj.style[attr] = cur + 'px';
			};
		};
		
		if(isStop)
		{
			clearInterval( obj.timer );
			endFn && endFn();
		};
		
		
	},30 );
	
};

//绑定事件封装
function bind(obj,ev,fn)
{
	if(obj.addEventListener)
	{
		//alert(111);
		obj.addEventListener(ev,fn,true);
	}
	else
	{
		//alert(222);
		obj.attachEvent('on'+ev,function(){
			
			fn.call(obj);
			
		});
	};
};


//添加class类名
function addClassName(obj,aClassName)
{
	/*
	1：如果所选元素className为空，则直接添加aClassName
	2：如果所选元素className不为空，
		1）如果所选元素上没有aClassName，则添加
		2）如果所选元素上有aClassName，则不添加*/
		
	if(obj.className == '')
	{
		obj.className = aClassName;
	}
	else
	{
		var newClassName = obj.className.split(' ');
		var indexOfNum = _indexOf(newClassName,aClassName);
		if(indexOfNum == -1)
		{
			obj.className += ' ' + aClassName
		};
		
	};
	
};

function _indexOf( newClassName,aClassName )//在数组里面查找有无相同的元素
{
	for(var i=0;i<newClassName.length;i++)
	{
		if(newClassName[i]==aClassName)
		{
			return i;
		};
	};
	return -1;
};



//删除class名
function removeClassName(obj,aClassName)
{
	
	/*
		1:如果为空，什么也不做
		2：如果不为空。
	*/
	
	if(obj.className!='')
	{
		var newClassName = obj.className.split(' ');
		
		var indexOfNum = _indexOf( newClassName,aClassName )
				
		if(indexOfNum!=-1)
		{
			newClassName.splice( indexOfNum,1 );
			obj.className = newClassName.join(' ');
		};
		
	};
	
};


function _indexOf( newClassName,aClassName )//在数组里面查找有无相同的元素
{
	for(var i=0;i<newClassName.length;i++)
	{
		if(newClassName[i]==aClassName)
		{
			return i;
		};
	};
	return -1;
};

//获取元素
function getElement(name,tagClassName)
{
	if( arguments.length == 1 )
	{
		if( name.substring(0,1) == '#' )
		{
			console.log( '#' );
			return document.getElementById( name.substring(1) );
		}
	}
	else if( arguments.length == 2 )
	{
		
		if( arguments[1].substring(0,1) == '.' )
		{
			var newClassName = tagClassName.substring(1);
			var aEles = [];
			
			var aEle = name.getElementsByTagName('*');
			
			for(var i=0;i<aEle.length;i++)
			{
				//[li1,li1,li2]
				var sClassName = aEle[i].className.split(' ');//把每一个元素上的className以空格的形式分割成一个数组 ， 然后判断数组里面有没有和aClassName相同的。如果有，则把当前的这个元素追加到aEles数组。
				//console.log( sClassName  );
				
				//[li1,li1,li2]
				for(var j=0;j<sClassName.length;j++)
				{
					if(sClassName[j] == newClassName)
					{
						aEles.push( aEle[i] );
						break;
					};
				};
				
			};
			
			
			return aEles;
		}
		else
		{
			return document.getElementById( name.substring(1) ).getElementsByTagName( tagClassName );
		};
	};
};


function byClass(oParent,aClassName)
{
	
	var newClassName = aClassName.substring(1);
	var aEles = [];
	
	var aEle = oParent.getElementsByTagName('*');
	
	for(var i=0;i<aEle.length;i++)
	{
		//[li1,li1,li2]
		var sClassName = aEle[i].className.split(' ');//把每一个元素上的className以空格的形式分割成一个数组 ， 然后判断数组里面有没有和aClassName相同的。如果有，则把当前的这个元素追加到aEles数组。
		//console.log( sClassName  );
		
		//[li1,li1,li2]
		for(var j=0;j<sClassName.length;j++)
		{
			if(sClassName[j] == newClassName)
			{
				aEles.push( aEle[i] );
				break;
			};
		};
		
	};
	
	
	return aEles;
	
};

function ajax(method,url,data,success) {
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    };
    if (method == 'get' && data) {
        url += '?' + data;
    }
    xhr.open(method, url, true);
    if (method == 'get') {
        xhr.send();
    } else {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 200) {
            if (xhr.status == 200) {
                // var data=JSON.parse(xhr.responseText);
                success && success(xhr.responseText)
            } else {
                alert(xhr.responseText)
            }
        }
    }
}

