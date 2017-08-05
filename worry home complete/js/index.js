/**
 * Created by Administrator on 2017/7/10.
 */
var oDiv = document.getElementById('ban_div');
var oUl = document.getElementById('lunbo_ul');
var aLi = oUl.getElementsByTagName('li');
var imgWidth=aLi[0].offsetWidth;
var timer=null;
var num=0;
var len=aLi.length-1;
var onOff=true;
var maxLeft=imgWidth*len;
var oNext = document.getElementById('next_btn');
var oPrev = document.getElementById('prev_btn');
var oIcon = document.getElementById('click_icons').getElementsByTagName('a');
oIcon[num].style.backgroundColor='#d04114';
timer=setInterval(autoPlay,3000);
function play(){
     sMove(oUl,{"left":-imgWidth*num});
    }
function iconGennal(i){
    oIcon[i].style.backgroundColor='#ccc';
}
function iconActive(i){
    oIcon[i].style.backgroundColor='#d04114';
}

function autoPlay() {

      if(onOff){
        if (num == len) {
            oUl.style.left=0;
            num=0;
        }
        num++;
        play();
      }else {
        if (num == 0) {
            oUl.style.left=-maxLeft+'px';
            num=len;
        }
        num--;
        play();
      }
      for(var i=0;i<oIcon.length;i++){
        iconGennal(i)
      }
      iconActive(num%3);
    }
  oNext.onclick= function(){
    onOff=true;
    autoPlay();
  }
  oPrev.onclick= function(){
    onOff=false;
    autoPlay();
  }
  for(var i=0;i<oIcon.length;i++){
    oIcon[i].index=i;
    oIcon[i].onclick=function(){
      for(var j=0;j<oIcon.length;j++){
        iconGennal(j)
      }
      num=this.index;
      play();
      iconActive(num%3);
    }
  }
oDiv.onmouseover = function(){
    clearInterval(timer);
};
oDiv.onmouseout = function(){
   timer=setInterval(autoPlay,3000);
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

            // console.log( cur );
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


    },20);

};

// JQ写
// $(function(){
//     var imgWidth=$('.banner_ul li:first').outerWidth()
//     var timer=null;
//     var num=0;
//     var len=$('.banner_ul li').size()-1;
//     var maxLeft=imgWidth*len;
//     timer=setInterval(autoPlay,4000);
//     function play(){
//         $('.banner_ul').animate({"left":-imgWidth*num},500);
//     }
//     function autoPlay() {
//             if (num == len) {
//                 $('.banner_ul').css('left',0);
//                 num=0;
//             }
//             num++;
//             play()
//     }
// })
