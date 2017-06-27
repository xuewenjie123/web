/**
 * Created by ibm on 2017/6/24.
 */
setTimeout(function () {
    $('.ball').show()
},5000)
var tab={};
tab.timer = null;
$('.ball_an,.ball_sh').click(function () {
    $('.ball').hide()
    tab.timer =  setTimeout(function(){
        $('.ball').show()
        clearTimeout(tab.timer);
    },25000)
})
// tab切换
    $('.series_class').eq(0).show();
    $('.r_citys_p strong').click(function(){
        $('.r_citys_p strong').removeClass('active');
        $(this).addClass('active');
        $('.series_class').hide();
        $('.series_class').eq($(this).index()).show();
    })
    $('.sc_pd ').each(function(){
        $(this).find('.sc_table').eq(0).show();
    })
    $('.series_class li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parents('.sc_title').siblings('.sc_pd ').find('.sc_table').hide();
        $(this).parents('.sc_title').siblings('.sc_pd ').find('.sc_table').eq( $(this).index() ).show();
    });
// 图片淡入淡出轮播
    $(".newListTabItem li").first().addClass("newActive").find("a").stop().animate({paddingTop:'20px'});
    $(".newFocusList li").first().show();
    $(".newListTabItem li").each(function(d) {
        $(this).hover(function(){
            $('.offcn_special').hide();
            $('.offcn_special').eq(d).show();
            $(".newListTabItem li").removeClass("newActive").find("a").stop().animate({paddingTop:'10px'});
            $(this).addClass("newActive").find("a").stop().animate({paddingTop:'20px'});
            $(".newFocusList li:eq("+d+")").stop().fadeIn().siblings().hide();
        });
    });

$(".tea_list li").mouseover(function () {
    $(this).children('.shade').children('i').remove()
    $(this).removeClass('bef_over')
    $(this).addClass('aft_over')
    $(this).css('margin-left','-8px')
    $(this).children('div').eq(0).css({'margin-bottom':'6px'})
    $(this).children('div').eq(1).css({'margin-left':'2px'})
    $(this).children('div').eq(0).children('img').css({'src':'images/lyj_teapic2.jpg','width':'236px','height':'242px'})
    $(this).children('div').eq(0).css({'width':'237px','height':'240px'})
})
$(".tea_list li").mouseout(function () {
    $(this).children('.shade').append('<i>&nbsp</i>');
    $(this).removeClass('aft_over')
    $(".tea_list li").addClass('bef_over')
    $(this).children('div').eq(0).css({'margin-bottom':'0px'})
    $(this).children('div').eq(1).css({'margin-left':'0px'})
    $(this).children('div').eq(0).children('img').css({'width':'218px','height':'214px'})
    $(this).children('div').eq(0).css({'width':'218px','height':'214px'})
})
$(".select_list1 li").mouseover(function () {
    $(".select_list1 li div").css({'background-color':'#ffe347','color':'#f2331f'})
    $(this).children('div').css({'background-color':'#fff','color':'#333'})
})
$('.offcn_Address').eq(0).show();
$('.offcn_regioncity li').click(function () {
    $('.offcn_regioncity li').removeClass('active');
    $(this).addClass('active');
    $('.offcn_Address div').hide();
    $('.offcn_Address div').eq($(this).index()).show();

})

$('.return_top').click(function(){
        $("html,body").animate({scrollTop:0}, 500);
})
jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",vis:4,mouseOverStop:false});

