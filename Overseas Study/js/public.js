// JavaScript Document
$(function(){
	//微信、qq、微博划过效果
	$('.header_r li').hover(function(){
		$(this).find('div').show()
		$('.header_r li').removeClass('active');
		$(this).addClass('active');
	},function(){
		$(this).find('div').hide()
		$('.header_r li').removeClass('active');
	})
	
	//搜索框焦点事件
	$('.logo_text').focus(function(){
		
		if($(this).val()=='请输入关键词')
		{
			$(this).val('')
		}	
		$(this).parent().parent().addClass('activeText')
	})
	$('.logo_text').blur(function(){
		$(this).parent().parent().removeClass('activeText')
		if( $(this).val() == '' )
			{
				$(this).val('请输入关键词')
			};
	})
	
});