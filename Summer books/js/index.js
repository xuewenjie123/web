/**
 * Created by ibm on 2017/6/23.
 */
$(function(){
    $('.way_nav li').click(function(){
        $('.c_way_m').hide();
        $('.way_nav li').removeClass('active');
        $('.c_way_m').eq($(this).index()).show();
        $(this).addClass('active');
    })
    // 显示遮罩层
    function showMask(){
        $("#mask").css({"height":$(document).height(),"width":$(document).width()}).show();
    };
    //隐藏遮罩层
    function hideMask(){
        $("#mask,.book_list,.add_info,.w_code,.qq_code").hide();
    };
    function alertM(obj1,obj2){
        obj1.click(function(){
            showMask();
            obj2.show().css('zIndex','1002');
        })
    };
        alertM($('.try_read'),$('.book_list'));
        alertM($('.add_wx'),$('.w_code'));
        alertM($('.add_zx'),$('.qq_code'));
    // $('.add_wx').click(function(){
    //     showMask();
    //     $('.w_code').show().css('zIndex','1002');
    // })
    // $('.add_zx').click(function(){
    //     showMask();
    //     $('.qq_code').show().css('zIndex','1002');
    // })
    $('.off_btn1,.off_btn2,.off_btn3,.off_btn4').click(function(){
        hideMask();
    })

    //$("#Province option).remove();
   // $("#city").append("<option value='Value'>Text</option>");

    // 切换图片
    var tab = {};
    tab.num = 0;
    tab.ImgData = ['./images/mark1.png','./images/mark2.png','./images/mark3.png'];
    $('.prev_btn').click(function(){
        tab.num--;
        if(tab.num<=0){
           tab.num= tab.ImgData.length
        }
        $('.books img').attr("src",tab.ImgData[tab.num%tab.ImgData.length]);

    });
    $('.next_btn').click(function(){
        tab.num++;
        $('.books img').attr("src",tab.ImgData[tab.num%tab.ImgData.length]);
    });
    // 定时转换图片
    tab.timer =setInterval(getTime,1000)
    function getTime(){
        var oTime = new Date();
        var iTime = new Date('2017','06','01','00','00','00');
        //测试ok 因为new Date中的月份是0到11 所以7月1号应该写成6月1号
        // var iTime = new Date('2017','05','22','00','00','00')
        var nTime = iTime-oTime;
        console.log(nTime);
        if(nTime>0){
            return;
        };
            $('#outdate').hide();
            $('#fin_date').show();
            clearInterval(tab.timer)
     }

    $('#btn_take').click(function(){
            if( $(':text').val()==""){
                showMask();
                $('.add_info').show().css('zIndex','1002');
            }
        })
})