// JavaScript Document
$(function(){
	
	//留学申请tab切换
	$('.app_nav li').mouseover(function(){
		$('.app_nav li').removeClass('active');
		$('.application .app_content').hide();
		$(this).addClass('active');
		$('.application .app_content').eq($(this).index()).show();
		});	
	
	//美国院校排名
	$('.app_schoolpm dl').hover(function(){
			$(this).addClass('selected');
			$(this).find('a').css('color','#00c38e')
		},function(){
			$(this).removeClass('selected')
			$(this).find('a').css('color','#333')
	});
	
	//美国专业排名 背景定位
	$('.major a').hover(function(){
		var bgDw = -($(this).parent().index()*50+5)
		$(this).css({"background-position":1+'px '+bgDw+'px',"color":"#00c38e"})
	},function(){
		$(this).css({"background-position":"left "+1000+"px","color":"#555"})
	})
	
	//留学活动划过效果
	$('.news_r_ul2 li').hover(function(){
		$(this).find('.introduce').stop(true,true).animate({'height':85});
	},function(){
		
		$(this).find('.introduce').stop(true,true).animate({'height':0});
	})
	
	//课程培训tab切换
	$('.class_px .class_content').eq(0).show();
	$('.class_nav li').mouseover(function(){
		$('.class_nav li').removeClass('active');
		$('.class_px .class_content').hide();
		$(this).addClass('active');
		$('.class_px .class_content').eq($(this).index()).show()
	})
	//成功案例 给每个li用jq定位
	$('.ex_success li').each(function(index, element){
		var fixWidth = $('.ex_success li:first').outerWidth()-1;		
		$(this).css('left',index*fixWidth)
    });

	/*bug未成功修复*/
	//成功案例 滑过事件
	(function(){
		var num=0;
		$('.ex_success li').hover(function(){
			num++;
			$(this).addClass('active');
			$(this).css('z-index',num)
		},function(){
			num--;
			$(this).css('z-index',num)
			$(this).removeClass('active')
		})
	}())
	
	//品牌优势滑过事件
	$('.brand li').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active')
	});
	
//行业轮播图
(function(){
	$('.news_r_ul1').append($('.news_r_ul1 li:first').clone());
	var imgWidth=$('.news_r_ul1 li:first').outerWidth()
	var timer=null;
	var num=0;
	var onoff=true;
	var len=$('.news_text p').size();
	$('.news_r_ul1').width(imgWidth*(len+1))
	var maxLeft=imgWidth*len;
	timer=setInterval(autoPlay,1000);
	function play(){
			$('.news_text p').removeClass('active');
			$('.news_text p').eq(num%len).addClass('active');
			$('.news_r_ul1').stop(true).animate({"left":-imgWidth*num},300, 'swing');
			$('.number').html(num%len+1+'/'+len);
		}
	function autoPlay(){
		if(onoff)
		{
			if(num>=$('.news_r_ul1 li').size()-1){
				num=0;
				$('.news_r_ul1').css('left',0);
			}
				num++;
		}
		else{
			
			if(num<=0){
				$('.news_r_ul1').css('left',-maxLeft);
				num=$('.news_r_ul1 li').size()-1;
			}
			num--;
		}
		play()
	};
	
	$('.newsbanner').hover(function(){
		clearInterval(timer)
		},function(){
		timer=setInterval(autoPlay,1000);
		})
		
	$('.pre').click(function(){
		onoff=false;
		autoPlay()
	})
	
	$('.next').click(function(){
		onoff=true;
		autoPlay()
	})
})();

//推荐院校轮播图
(function(){
	var imgWidth=$('.sideBar_school li:first').outerWidth();
	$('.sideBar_school .school').append($('.sideBar_school li').clone())
	var len=$('.sideBar_school li').size();
	$('.sideBar_school .school').width(imgWidth*len)
	var num=0;
	var onoff=false;
	timer=null;
	function play(){
		$('.sideBar_school .school').stop(true).animate({'left':-num*imgWidth},300, 'swing');
	}
	function autoPlay(){
		
		if(onoff){
			if(num==len/2){
				num=0;
				$('.sideBar_school .school').css('left',0)
			}
			num++;
			play();
			
		}
		else
		{
			if(num==0){
				num=len/2;
				$('.sideBar_school .school').css('left',-imgWidth*num)
			}
			num--;
			play();
		}
	}
	$('.preSide').click(function(){
		onoff=false;
		autoPlay()
	})
	$('.nextSide').click(function(){
		onoff=true;
		autoPlay()
	})
	$('.tj_sideBar').hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(autoPlay,1000)
	})
	timer=setInterval(autoPlay,1000)
})();

//课程培训轮播图
(function(){
	var num=0;
	var onoff=false;
	var timer=null;
	var showWidth = $('.class_lp dl:first').width();
	$('.class_lp').append($('.class_lp dl:first').clone());
	var len= $('.class_lp:first dl').size();
	$('.class_lp').width(showWidth*len);
	function play(){
		$('.class_lp').stop(true).animate({"left":-num*showWidth},300, 'swing')
	};
	function autoPlay(){
		if(onoff)
		{
			if(num==len-1)
			{
				num=0;
				$('.class_lp').css('left',0)
			}
			num++;
		}
		else
		{
			if(num==0)
			{
				num=len-1;
				$('.class_lp').css('left',-num*showWidth);
			}
			num--;
		}
		play();
	};
	$('.class_right').hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(autoPlay,1000);
	})
	$('.class_pre').click(function(){
		onoff=false;
		autoPlay();
	});
	$('.class_next').click(function(){
		onoff=true;
		autoPlay();
	})
	timer=setInterval(autoPlay,1000)
	
})()

//成功案例轮播
});


(function(){
	var num=0;
	var timer=null;
	var onoff=true;
	var len=$('.ex_success li').size();
	$('.ex_success ul').append($('.ex_success li').clone())
	var fixWidth=$('.ex_success li:first').width();
	var maxLeft=$('.ex_success li:first').outerWidth()*len;
	function Play(){
		$('.ex_success ul').stop(true).animate({'left':-num*fixWidth},300, 'swing');
	}
	function autoPlay(){
		if(onoff)
		{
			if(num==len)
			{
				num=0;
				$('.ex_success ul').css('left',0)
			}
			num++;
		}
		else
		{
			if(num==0)
			{
				num=len;
				$('.ex_success ul').css('left',-num*fixWidth)
			}
			num--;
		}
		Play();
	}
	$('.ex_success ul,.success_pre,.success_next').hover(function(){
		clearInterval(timer);
		},function(){
		timer=setInterval(autoPlay,2000)
		});
	$('.success_pre').click(function(){
		onoff=false;
		autoPlay();
	});
	$('.success_next').click(function(){
		onoff=true;
		autoPlay();
	})	
	timer = setInterval(autoPlay,2000)
})();























