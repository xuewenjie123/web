/**
 * Created by ibm on 2017/6/22.
 */
// 导航划过效果
$(function(){
    $('.offcn_navC li').mouseover(function(){
        $('.offcn_navC a').removeClass('active');
        $(this).find('a').addClass('active');
    });
    var nHeight=$('.offcn_nav').offset().top;
    var currentId = '';//存储到达楼层的id属性值
    $(window).scroll(function(){
        if($(window).scrollTop()>=nHeight)
        {
            $('.offcn_nav').addClass('fixed');
        }
        else
        {
            $('.offcn_nav').removeClass('fixed');
        };
        $('.item').each(function(){
            var scrolltop = $(window).scrollTop();
            var itemTop = $(this).offset().top;
            if( scrolltop > itemTop - 100 )//3F 2380
            {
                currentId = '#'+$(this).attr('id');
            };

        });
        $('#menu a').removeClass('active');
        $('#menu').find('li').find('[href='+ currentId +']').addClass('active');
    });


    //导航滚动


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
        $('.offcn_float').hide();
        $('.offcn_slideR').show();
        $('.offcn_slideR').find('p').text('专业指导')
    });

    $('.offcn_slideR').click(function () {
        $('.offcn_slideR').hide();
        $('.offcn_float').show();
        $('.offcn_slideR').find('p').text('备考指导')

    });
    //地区 使用事件委托
    $('.zg_place').delegate('li','mouseover',function(){
        $(this).css({'background':'#2e5ea8','color':'#fff'});
        $('.zg_info_c .address').text($(this).text());
    });
    $('.zg_place').delegate('li','mouseout',function(){
        $(this).css({'background':'#fff','color':'#333'})
    });
    // $('.zg_place li').hover(functio(){
    //     $(this).css({'background':'#2e5ea8','color':'#fff'})
    //     $('.zg_info_c .address').text($(this).text())
    // },function(){
    //     $(this).css({'background':'#fff','color':'#333'})
    // })
// 弹窗
        setTimeout(function () {
            $('.popup').css('display','block')
        },5000);
       var tab = {};
        tab.timer = null;
        tab.timer =  setInterval(function(){
            $('.popup').css('display','block')
        },25000);
        $('#btn,#btn1').click(function () {
            $('.popup').hide();
            clearInterval(tab.timer);
            tab.timer= setInterval(function () {
                $('.popup').show();
            },25000);
        });


})
