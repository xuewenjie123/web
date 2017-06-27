
var nLeftBg;
var nWidthBg;
var nLeft;
var nWidth;
$(function () {
    //    nav点击
    nLeftBg = $(".zn-nav .activebg").offset().left;
    nWidthBg = parseInt($(".zn-nav .activebg").css('width'))/2;
    $(".zn-nav ul li a").click(function () {
        nLeft = $(this).parent().offset().left
        nWidth = parseInt($(this).parent().css('width'))/2;
        $(".zn-nav .activebg").css('left',nLeft-nLeftBg+(nWidthBg-nWidth));
    });

    $(document).scroll(function () {
        //    nav固定
        if($(document).scrollTop()>501){
            $('.zn-nav-wrapper').css('position','fixed').css('top','0').css('z-index','6');
        }else {
            $('.zn-nav-wrapper').css('position','relative').css('z-index','1')
        }
        //滑动到指定位置nav变色
        var nLeft;
        if($(document).scrollTop()<1230){
            nLeft = $('.zn-nav .first').offset().left;
            nWidth = parseInt($('.zn-nav .first').css('width'))/2;
        }else if($(document).scrollTop()>1230 && $(document).scrollTop()<2040){
            nLeft = $('.zn-nav .second').offset().left;
            nWidth = parseInt($('.zn-nav .second').css('width'))/2;
        }else if($(document).scrollTop()>2040 && $(document).scrollTop()<2840){
            nLeft = $('.zn-nav .third').offset().left;
            nWidth = parseInt($('.zn-nav .third').css('width'))/2;
        }else if($(document).scrollTop()>2840 && $(document).scrollTop()<3440){
            nLeft = $('.zn-nav .forth').offset().left;
            nWidth = parseInt($('.zn-nav .forth').css('width'))/2;
        }else if($(document).scrollTop()>4440){
            nLeft = $('.zn-nav .last').offset().left;
            nWidth = parseInt($('.zn-nav .last').css('width'))/2;
        }

        $(".zn-nav .activebg").css('left',nLeft-nLeftBg+(nWidthBg-nWidth));
    })
})

//    弹窗
$(function () {
    //5s弹窗首次出现
    setTimeout(function() {
        
        $('.zn-pop-up').css('display','block')
    },5000);

    //点击按钮关闭
    $('.zn-pop-up .close').click(function () {
        $('.zn-pop-up').css('display','none')
        //关闭后25s再显示
        var timer = setTimeout(function () {
            $('.zn-pop-up').css('display','block')
            clearTimeout(timer);
        },25000)
    });
    $('.zn-pop-up .button a.last').click(function () {
        $('.zn-pop-up').css('display','none')
        //关闭后25s再显示
        var timer = setTimeout(function () {
            $('.zn-pop-up').css('display','block')
            clearTimeout(timer);
        },25000)
    });
})




$(document).ready(function(){
    $('.first').click(function(){$('html,body').animate({scrollTop:$('#zn-part1').offset().top}, 800);})
    $('.second').click(function(){$('html,body').animate({scrollTop:$('#zn-part2').offset().top}, 800);});
    $('.third').click(function(){$('html,body').animate({scrollTop:$('#menu3').offset().top}, 800);});
    $('.forth').click(function(){$('html,body').animate({scrollTop:$('#zn-part5').offset().top}, 800);})
    $('.last').click(function(){$('html,body').animate({scrollTop:$('#gj-footerBj').offset().top}, 800);});
})



$(function(){

    $(".lyj_c4_class .lyj_c4_b").children(".lyj_c4_cont").hide();
    $(".lyj_c4_class .lyj_c4_b").eq(0).children(".lyj_c4_cont").show();

    $(".lyj_c4_main ul li").click(function () {
        $(".lyj_c4_main ul li .lyj_box").css('display','none');
        $(this).children(".lyj_box").css('display','block');
        $(this).find(".lyj_c4_b").removeClass('active');
        $(this).find(".lyj_c4_b").eq(0).addClass('active');
        $(this).find(".lyj_c4_b").children(".lyj_c4_cont").hide();
        $(this).find(".lyj_c4_b").eq(0).children(".lyj_c4_cont").show();
        $('.lyj_c4_m div').removeClass('jiao')
        $(this).children('div').eq(0).addClass('jiao');
        return false;
    })

    $(".lyj_c4_main .lyj_c4_m .lyj_c4_class .lyj_c4_b").click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active')
        $(this).siblings().children(".lyj_c4_cont").hide();
        $(this).children(".lyj_c4_cont").show();
        return false;
    })
})


    // tab切换
    $('.c3_content').eq(0).show();
    $('.series_ul li').click(function(){
        $('.series_ul li').removeClass('active');
        $(this).addClass('active');
        $('.c3_content').hide();
        $('.c3_content').eq($(this).index()).show();
    })
    $('.c3_content').each(function(index,element){
        $('.c3_content').eq(index).find('.box_content').hide();
        $('.c3_content').eq(index).find('.box_content').eq(0).show();
        $('.c3_content').eq(index).find('ul li').click(function(){
            $('.c3_content').eq(index).find('ul li').removeClass('active');
            $(this).addClass('active');
            $('.c3_content').eq(index).find('.box_content').hide();
            $('.c3_content').eq(index).find('.box_content').eq($(this).index()).show();
        })
    });

    $('.offcn_floatUl li').click(function () {
        $('.offcn_floatUl a').removeClass('active');
        $(this).find('a').addClass('active');
    })

    $('#offcn_floatbtn').click(function () {
        $('.offcn_slideR').hide();
        $('.offcn_float').show();
        $('.offcn_slideR').find('p').text('专业指导')
    });

    $('.offcn_slideR').click(function () {
        $('.offcn_slideR').hide();
        $('.offcn_float').show();
        $('.offcn_slideR').find('p').text('备考指导')

    });
    
	

var day = new Date();
var year = day.getFullYear();
document.getElementById('year').innerHTML=year;


$(function(){

          $(".gj-footer1 a").click(function(){
               $(".gj-footer1 a").removeClass("gj-footer1_a_hover");

               $(this).addClass("gj-footer1_a_hover");
			     $(".gj-footer2_city").css("display","none")
               $(".gj-footer2 .gj-footer2_city").eq($(this).index()).css("display","block");
              
          })
     })
$(function(){
    $('#footer a').mouseover(function(){
        var sValue=$(this).html();
        $('.gj-footer-p span').text(sValue);
    })
    $('.gj-nav span').click(function(){
        $('.gj-nav').hide();
        $('.gj-aside').show();
    })
    $('.gj-aside').click(function(){
        $('.gj-nav').show();
        $('.gj-aside').hide();
    })
})