$(function(){
	var portfolioindex_url = 'https://cl0cktree.github.io/jsonframe';
	// var portfolioindex_url = 'http://clocktree.dothome.co.kr/portfolioindex';
    var scall1 = $('#main-scroll1-con').children('.scrollall-con-box').each(Array).length;
	var scall2 = $('#main-scroll2-con').children('.scrollall-con-box').each(Array).length;
	var scall3 = $('#main-scroll3-con').children('.scrollall-con-box').each(Array).length;
	var scib1;
	var scib2;
	var scib3;
	/*header를 구성하는 요소들을 json에서 data로 받아와서 자동으로 구성*/
	function header_creat(){
		if($('body').find('.header')){
			var headerNum=0;
			var jsonHeader_data=portfolioindex_url+'/data/header_data.json';
			$('.header').append('<nav class="section1-article1-nav" id="section1-article1-nav1"><div class="article1-nav1-toplogo" id="article1-nav1-toplogo1"><h1><a href="'+portfolioindex_url+'/index.html"><img src="'+portfolioindex_url+'/images/logo2.png" alt="mainlogo - 클릭시 메인페이지로 이동"></a></h1></div><div class="article1-nav1-topmenuwrap" id="article1-nav1-topmenuwrap1"><ul class="article1-nav1-topmenu" id="article1-nav1-topmenu1"></ul></div><div class="top-icon" id="phon-icon"><h2><span>HP icon - 모바일 기기에서 터치시 전화 연결</span></h2></div><div class="top-icon" id="menu-icon" tabindex="0"><h2><input type="checkbox" id="menu-icon-click" name="menu-icon-click"><label for="menu-icon-click"><span class="menu-icon-menubar">홈페이지 하단에 링크 가능한 메뉴바 표시</span></label></h2></div></nav>');
			$.getJSON(jsonHeader_data, function(data){
				$.each(data, function(I, item){
					headerNum++;
					$('.article1-nav1-topmenu').append('<li class="nav1-topmenu1-list" data-nav-section="'+item.nav_section+'" data-nav-kinds="'+item.nav_kinds+'" id="nav1-topmenu1-list'+headerNum+'"><a href="'+portfolioindex_url+item.nav_url+'"><span class="topmenu1-list-span" id="topmenu1-list-span'+headerNum+'">'+item.nav_title+'<span class="list-span-leftborder"></span><span class="list-span-rightborder"></span></span></a></li>')
				});
				if (location.href==portfolioindex_url+'/sub/sub1.html')
				{
					$('#slide-wrap').css({'display':'none'})
					$('#slide-wrap-i').css({'display':'block'})
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				}else if (location.href==portfolioindex_url+'/sub/sub2.html')
				{
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				}else if (location.href==portfolioindex_url+'/sub/sub3.html')
				{
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				}else if (location.href==portfolioindex_url+'/sub/sub4.html')
				{
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				}else if (location.href==portfolioindex_url+'/sub/sub5.html')
				{
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				}else if ((location.href==portfolioindex_url+'/index.html')||(location.href==portfolioindex_url+'/')||(location.href==portfolioindex_url+''))
				{
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#landing-contents-title, #landing-contents-buttonwrap').stop().animate({'text-indent':'0'},500)
				}
			});
			for (scib1=1;scib1<=scall1 ;scib1++ )
			{
				var ibheight1 = $('#con-box1-imgborder'+scib1+'img').height();
				$('#con-box1-imgborder'+scib1).css({'height':ibheight1,'line-height':ibheight1});

			}
			for (scib2=1;scib2<=scall2 ;scib2++ )
			{
				var ibheight2 = $('#con-box2-imgborder'+scib2+'img').height();
				$('#con-box2-imgborder'+scib2).css({'height':ibheight2,'line-height':ibheight2});

			}
			for (scib3=1;scib3<=scall3 ;scib3++ )
			{
				var ibheight3 = $('#con-box3-imgborder'+scib3+'img').height();
				$('#con-box3-imgborder'+scib3).css({'height':ibheight3,'line-height':ibheight3});

			}

			if ($('#article1-nav1-topmenu1').css('display')=='block')
			{
				$('.body-all-header').stop().animate({'height':'150px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}else{
				$('.body-all-header').stop().animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}
		};
	};
	/*------------------------------------------------------------*/
	$('body').ready(function(){
		function header_start(){
			header_creat();
		};
		header_start();
	})
	/*------------------------------------------------------------------*/

//==========================================================
	return false;
});
