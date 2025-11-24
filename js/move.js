$(function(){
	// var portfolioindex_url = 'https://cl0cktree.github.io/jsonframe';
	// var portfolioindex_url = 'http://clocktree.dothome.co.kr/portfoliomain';
	// var portfolioindex_url = 'http://clocktree.kr';
	// var portfolioindex_url = 'http://www.clocktree.kr/portfoliomain'
	var portfolioindex_url;
	var jsonCover_data;
	var jsonHeader_data;
	var jsonFrame_data;
	var body_tag = document.body;
	var $body = $('body');
	var scroll_framespeed = 1000/60;
	var cal_year = 2025;
	var nav_num;
	var nav_num_start;
	var contents_head;
	var contents_title;
	var work_years;
	var class_add;
	var frame_year;
	var $layer_sel;
	var wearther_out;
	var weather_now;
	var name_header=document.querySelector('.header');
	var name_footer=document.getElementsByTagName('footer');
	var footer_contaner=document.querySelector('footer .body-footer-contaner');
	var this_url = this.location.href.split('//')[1];
	var split_url = this.location.href.split('/').reverse()[0];

	function select_url(){
		if((this_url=='www.clocktree.co.kr/')||(this_url=='www.clocktree.co.kr/index.html')||(this_url=='www.clocktree.co.kr/sub/sub1.html')||(this_url=='www.clocktree.co.kr/sub/sub2.html')||(this_url=='www.clocktree.co.kr/sub/sub3.html')||(this_url=='www.clocktree.co.kr/sub/sub4.html')||(this_url=='www.clocktree.co.kr/sub/sub5.html')){
			portfolioindex_url = 'https://www.clocktree.co.kr'
			console.log('type_1 = '+portfolioindex_url);
		}else if((this_url=='clocktree.co.kr/')||(this_url=='clocktree.co.kr/index.html')||(this_url=='clocktree.co.kr/sub/sub1.html')||(this_url=='clocktree.co.kr/sub/sub2.html')||(this_url=='clocktree.co.kr/sub/sub3.html')||(this_url=='clocktree.co.kr/sub/sub4.html')||(this_url=='clocktree.co.kr/sub/sub5.html')){
			portfolioindex_url = 'https://clocktree.co.kr'
			console.log('type_2 = '+portfolioindex_url);
		}else if((this_url=='clocktreedomain.dothome.co.kr/')||(this_url=='clocktreedomain.dothome.co.kr/index.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub1.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub2.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub3.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub4.html')||(this_url=='clocktreedomain.dothome.co.kr/sub/sub5.html')){
			portfolioindex_url = 'http://clocktreedomain.dothome.co.kr'
			console.log('type_3 = '+portfolioindex_url);
		}else if((this_url=='clocktree.kr/')||(this_url=='clocktree.kr/index.html')||(this_url=='clocktree.kr/sub/sub1.html')||(this_url=='clocktree.kr/sub/sub2.html')||(this_url=='clocktree.kr/sub/sub3.html')||(this_url=='clocktree.kr/sub/sub4.html')||(this_url=='clocktree.kr/sub/sub5.html')){
			portfolioindex_url = 'http://clocktree.kr'
			console.log('type_4 = '+portfolioindex_url);
		}else if((this_url=='www.clocktree.kr/')||(this_url=='www.clocktree.kr/index.html')||(this_url=='www.clocktree.kr/sub/sub1.html')||(this_url=='www.clocktree.kr/sub/sub2.html')||(this_url=='www.clocktree.kr/sub/sub3.html')||(this_url=='www.clocktree.kr/sub/sub4.html')||(this_url=='www.clocktree.kr/sub/sub5.html')){
			portfolioindex_url = 'http://www.clocktree.kr'
			console.log('type_5 = '+portfolioindex_url);
		}else if((this_url=='www.clocktree.kr/portfoliomain/')||(this_url=='www.clocktree.kr/portfoliomain/index.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub1.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub2.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub3.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub4.html')||(this_url=='www.clocktree.kr/portfoliomain/sub/sub5.html')){
			portfolioindex_url = 'http://www.clocktree.kr/portfoliomain'
			console.log('type_6 = '+portfolioindex_url);
		}else if((this_url=='clocktree.dothome.co.kr/portfoliomain/')||(this_url=='clocktree.dothome.co.kr/portfoliomain/index.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub1.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub2.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub3.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub4.html')||(this_url=='clocktree.dothome.co.kr/portfoliomain/sub/sub5.html')){
			portfolioindex_url = 'http://clocktree.dothome.co.kr/portfoliomain'
			console.log('type_7 = '+portfolioindex_url);
		}else if((this_url=='cl0cktree.github.io/jsonframe/')||(this_url=='cl0cktree.github.io/jsonframe/index.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub1.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub2.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub3.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub4.html')||(this_url=='cl0cktree.github.io/jsonframe/sub/sub5.html')){
			portfolioindex_url = 'https://cl0cktree.github.io/jsonframe'
			console.log('type_8 = '+portfolioindex_url);
		}else if((this_url=='cl0cktree.github.io/clocktree.n-e.kr/')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/index.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub1.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub2.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub3.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub4.html')||(this_url=='cl0cktree.github.io/clocktree.n-e.kr/sub/sub5.html')){
			portfolioindex_url = 'https://cl0cktree.github.io/clocktree.n-e.kr'
			console.log('type_9 = '+portfolioindex_url);
		}else if((this_url=='www.clocktree.n-e.kr/')||(this_url=='www.clocktree.n-e.kr/index.html')||(this_url=='www.clocktree.n-e.kr/sub/sub1.html')||(this_url=='www.clocktree.n-e.kr/sub/sub2.html')||(this_url=='www.clocktree.n-e.kr/sub/sub3.html')||(this_url=='www.clocktree.n-e.kr/sub/sub4.html')||(this_url=='www.clocktree.n-e.kr/sub/sub5.html')){
			portfolioindex_url = 'https://www.clocktree.n-e.kr'
			console.log('type_10 = '+portfolioindex_url);
		}else if((this_url=='cl0cktree.github.io/clocktree.co.kr/')||(this_url=='cl0cktree.github.io/clocktree.co.kr/index.html')||(this_url=='cl0cktree.github.io/clocktree.co.kr/sub/sub1.html')||(this_url=='cl0cktree.github.io/clocktree.co.kr/sub/sub2.html')||(this_url=='cl0cktree.github.io/clocktree.co.kr/sub/sub3.html')||(this_url=='cl0cktree.github.io/clocktree.co.kr/sub/sub4.html')||(this_url=='cl0cktree.github.io/clocktree.co.kr/sub/sub5.html')){
			portfolioindex_url = 'https://cl0cktree.github.io/clocktree.co.kr'
			console.log('type_11 = '+portfolioindex_url);
		}else if((this_url=='http://www.clocktree.co.kr/')||(this_url=='http://www.clocktree.co.kr/index.html')||(this_url=='http://www.clocktree.co.kr/sub/sub1.html')||(this_url=='http://www.clocktree.co.kr/sub/sub2.html')||(this_url=='http://www.clocktree.co.kr/sub/sub3.html')||(this_url=='http://www.clocktree.co.kr/sub/sub4.html')||(this_url=='http://www.clocktree.co.kr/sub/sub5.html')){
			portfolioindex_url = 'http://www.clocktree.co.kr'
			console.log('type_12 = '+portfolioindex_url);
		};
		jsonCover_data=portfolioindex_url+'/data/cover_data.json';
		jsonHeader_data=portfolioindex_url+'/data/header_data.json';
		jsonFrame_data=portfolioindex_url+'/data/frame_data.json';
		console.log('-- this pass = '+portfolioindex_url+' --');
	}
	select_url();

	/*loader 제어*/
	$(document).ready(function(){
		select_url();
		$('.body-filter-preloader').load(portfolioindex_url+'/cover/cover.html .filter-preloader-loadingbox',function(){
			$('.body-filter-preloader').hide();
			var msheight = $('.slide img').height();
			$('#slide-wrap').css({'height':msheight});
			var agent = navigator.userAgent.toLowerCase();
			if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1) || (agent.indexOf("safari") >-1))
			{
				if ((agent.indexOf("safari") >-1)||(navigator.userAgent.search( "trident" )>-1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
				{
					bubble_background2();
				}else{
					bubble_background1();
				}
			}else{
				bubble_background2();
			}

			// var weather_now = document.querySelector('.weather_now');
			// if(weather_now==true){
			// 	weather_starter();
			// }else{
			// 	setTimeout(function(){
			// 		var weather_now = document.querySelector('.weather_now');
			// 		weather_starter();
			// 		}
			// 	,800);
			// };
			// function weather_starter(){
			// 	if((weather_now.innerHTML=='Clear')&&((weather_now.innerHTML!==null)||(weather_now.innerHTML!==''))){
			// 		console.log('weathe = '+wearther_out);
			// 		weather_canvas();
			// 	};
			// };
		});
		var footerIcon= $('.ul-li-img1').width();
		// $('.ul-li-img1').css({'height':footerIcon});
	});
	/*footer 자동 구성*/
	function footer_creat(){
		if(footer_contaner){
			$.getJSON(jsonCover_data, function(data){
				$('.body-footer-contaner').prepend('<div id="body-footer-add1" class="body-footer-add"><address></address></div>')
				$.each(data, function(I, item){
					if(item.cover_kinds=='footer'){
						$('.body-footer-contaner').find('address').append(item.cover_name+' <span class="footer-add-num">'+item.cover_phone+'</span><br>'+item.cover_address+'<br><a href="mailto:'+item.cover_email+'" tabindex="0">'+item.cover_email+'</a><br><span class="Copyright">'+item.cover_Copyright+'</span><br>')
					}
				});
			});
		};
	};
	/*-----------*/
	/*header를 구성하는 요소들을 json에서 data로 받아와서 자동으로 구성*/
	function header_creat(){
		if((name_header)&&(footer_contaner)){
			// var nav_append=document.innerHtml('<nav class="section1-article1-nav" id="section1-article1-nav1"><div class="article1-nav1-topmenuwrap" id="article1-nav1-topmenuwrap1"><ul class="article1-nav1-topmenu" id="article1-nav1-topmenu1"></ul></div><div class="top-icon" id="phon-icon"><h2><span>HP icon - 모바일 기기에서 터치시 전화 연결</span></h2></div><div class="top-icon" id="menu-icon" tabindex="0"><h2><input type="checkbox" id="menu-icon-click" name="menu-icon-click"><label for="menu-icon-click"><span class="menu-icon-menubar">홈페이지 하단에 링크 가능한 메뉴바 표시</span></label></h2></div></nav>');
			name_header.innerHTML='<nav class="section1-article1-nav" id="section1-article1-nav1"><div class="article1-nav1-toplogo" id="article1-nav1-toplogo1"></div><div class="article1-nav1-topmenuwrap" id="article1-nav1-topmenuwrap1"><ul class="article1-nav1-topmenu" id="article1-nav1-topmenu1"></ul></div><div class="top-icon" id="phon-icon"><h2><span>HP icon - 모바일 기기에서 터치시 전화 연결</span></h2></div><div class="top-icon" id="menu-icon" tabindex="0"><h2><input type="checkbox" id="menu-icon-click" name="menu-icon-click"><label for="menu-icon-click"><span class="menu-icon-menubar">홈페이지 하단에 링크 가능한 메뉴바 표시</span></label></h2></div></nav>';
			footer_contaner.innerHTML='<div class="nav1-side-menu"><div class="side-menu-listwrap"><ul class="menu-list-ul"></ul></div></div><div class="top-btn">Top</div>';
			var headerNum=0;
			var nav1_toplogo=document.querySelector('.article1-nav1-toplogo');
			$.getJSON(jsonCover_data, function(data){
				$.each(data, function(I, item){
					if(item.cover_kinds=='header'){
						nav1_toplogo.innerHTML='<h1><a href="'+portfolioindex_url+item.cover_url+'" tabindex="0"><img src="'+portfolioindex_url+item.cover_img+'" alt="'+item.cover_alt+'"></a></h1>';
					};
				});
				if ($('#article1-nav1-topmenu1').css('display')=='block')
				{
					$('.body-all-header').stop().animate({'height':'150px'},100)
					$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
				}else{
					$('.body-all-header').stop().animate({'height':'100px'},100)
					$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
				}
			});
			$.getJSON(jsonHeader_data, function(data){
				$.each(data, function(I, item){
					headerNum++;
					$('.article1-nav1-topmenu').append('<li class="nav1-topmenu1-list" data-nav-section="'+item.nav_section+'" data-nav-kinds="'+item.nav_kinds+'" id="nav1-topmenu1-list'+headerNum+'"><a href="'+portfolioindex_url+item.nav_url+'" tabindex="0" aria-hidden=""><span class="topmenu1-list-span" id="topmenu1-list-span'+headerNum+'"  aria-hidden="">'+item.nav_title+'<span class="list-span-leftborder" aria-hidden=""></span><span class="list-span-rightborder" aria-hidden=""></span></span></a></li>')
					$('.menu-list-ul').append('<li class="list-ul-li"><a href="'+portfolioindex_url+item.nav_url+'" id="list-ul-li'+headerNum+'" class="ul-li-img1" tabindex="0" aria-hidden="" aria-label="'+item.nav_alt+'"><span aria-hidden="">'+item.nav_alt+'</span></a></li>')
				});
				if($('#article1-nav1-topmenu1').css('display')=='block'){
					$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').attr('aria-hidden','false');
					$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').children('span').attr('aria-hidden','false');
					$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').attr('aria-hidden','true');
					$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').children('span').attr('aria-hidden','true');
				}else{
					$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').attr('aria-hidden','true');
					$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').children('span').attr('aria-hidden','true');
					$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').attr('aria-hidden','false');
					$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').children('span').attr('aria-hidden','false');
				}
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				if (location.href==portfolioindex_url+'/sub/sub1.html')
				{
					nav_num_start=1;
				}else if (location.href==portfolioindex_url+'/sub/sub2.html')
				{
					nav_num_start=2;
				}else if (location.href==portfolioindex_url+'/sub/sub3.html')
				{
					nav_num_start=3;
				}else if (location.href==portfolioindex_url+'/sub/sub4.html')
				{
					nav_num_start=4;
				}else if (location.href==portfolioindex_url+'/sub/sub5.html')
				{
					nav_num_start=5;
				}else if ((location.href==portfolioindex_url+'/index.html')||(location.href==portfolioindex_url+'/')||(location.href==portfolioindex_url+''))
				{
					nav_num_start=0;
					$('#landing-contents-title, #landing-contents-buttonwrap').stop().animate({'text-indent':'0'},500);
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'});
					$body.css({'overflow-y':'hidden'});
					landing_contents();
				}
				nav_start();
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

		};
	};
	/*------------------------------------------------------------*/
	/*각 페이지 링크를 load 시킬 때 각 페이지에 맞는 title 을 지정하기 위한 함수*/
	function title_changer(){
		var title_text;
		if ((split_url=='index.html')||(split_url=='')){
			title_text = 'main';
		}else if (split_url=='sub1.html'){
			title_text = 'introduce';
		}else if (split_url=='sub2.html'){
			title_text = 'web&app';
		}else if (split_url=='sub3.html'){
			title_text = 'movie';
		}else if (split_url=='sub4.html'){
			title_text = 'flash';
		}else if (split_url=='sub5.html'){
			title_text = '2D&Editing';
		}
		document.title = 'Welcome to Portfolio Site - '+title_text;
	}
	/*---------------------------------------------------------------------*/
	/*--nav 시작 시 동작 함수--*/
	function nav_start(){
		if(nav_num_start!==1){
			$('#slide-wrap').css({'display':'block'})
			$('#slide-wrap-i').css({'display':'none'})
		}else{
			$('#slide-wrap').css({'display':'none'})
			$('#slide-wrap-i').css({'display':'block'})
		}
		if(nav_num_start!==0){
			$('#topmenu1-list-span'+nav_num_start).css({'border-bottom':'3px solid #bbb'})
			$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
			$('#topmenu1-list-span'+nav_num_start).children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			$('#list-ul-li'+nav_num_start).css({'border':'3px solid #999'})
		}
	}
	/*--nav click시 동작 함수--*/
	function nav_move(){
		var agent = navigator.userAgent.toLowerCase();
		if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
		{
			if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
			{
				$('.body-filter-preloader').show();
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
				$('#topmenu1-list-span'+nav_num).css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span'+nav_num).children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li'+nav_num).css({'border':'3px solid #999'})
				if(nav_num!==1){
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
				}else{
					$('#slide-wrap').css({'display':'none'})
					$('#slide-wrap-i').css({'display':'block'})
				}
				title_changer();

				var topbtnm
				if ($('.body-all-header').css('height')=='50px')
				{
					topbtnm = 50;
				}else if ($('.body-all-header').css('height')=='100px')
				{
					topbtnm = 100;
				}else if ($('.body-all-header').css('height')=='150px')
				{
					topbtnm = 150;
				}
				$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
				$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff','color':'#fff'})
				$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
				$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

				$('.body-filter-preloader').hide();
				history.pushState(null,null,portfolioindex_url+'/sub/sub'+nav_num+'.html');
			}else{
				location.href=portfolioindex_url+'/sub/sub'+nav_num+'.html'

			}

		}else{
			$('.body-filter-preloader').show();
			$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
			$('#topmenu1-list-span'+nav_num).css({'border-bottom':'3px solid #bbb'})
			$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
			$('#topmenu1-list-span'+nav_num).children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			$('.ul-li-img1').css({'border':'0px solid #999'})
			$('#list-ul-li'+nav_num).css({'border':'3px solid #999'})
			if(nav_num!==1){
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else{
				$('#slide-wrap').css({'display':'none'})
				$('#slide-wrap-i').css({'display':'block'})
			}
			title_changer();

			var topbtnm
			if ($('.body-all-header').css('height')=='50px')
			{
				topbtnm = 50;
			}else if ($('.body-all-header').css('height')=='100px')
			{
				topbtnm = 100;
			}else if ($('.body-all-header').css('height')=='150px')
			{
				topbtnm = 150;
			}
			$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
			$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff','color':'#fff'})
			$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
			$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

			$('.body-filter-preloader').hide();
			history.pushState(null,null,portfolioindex_url+'/sub/sub'+nav_num+'.html');
		}

	}
	/*------------------------*/

	/*커버소환*/
	var scall1 = $('#main-scroll1-con').children('.scrollall-con-box').each(Array).length;
	var scall2 = $('#main-scroll2-con').children('.scrollall-con-box').each(Array).length;
	var scall3 = $('#main-scroll3-con').children('.scrollall-con-box').each(Array).length;
	var scib1;
	var scib2;
	var scib3;

	$body.ready(function(){
		/*ie9에서 탑메뉴 이동 후 동작*/
		function cover_start(){
			footer_creat();
			header_creat();
			if ((split_url=='index.html')||(split_url=='')){
				mainSommon();
			}else if (split_url=='sub1.html'){
				introSommon();
			}else if (split_url=='sub2.html'){
				webSommon();
			}else if (split_url=='sub3.html'){
				movieSommon();
			}else if (split_url=='sub4.html'){
				flashSommon();
			}else if (split_url=='sub5.html'){
				imageSommon();
			}
			$('.section-heading').html(contents_head);
		};
		cover_start();
	})
	/*------------------------------------------------------------------*/
	/*전체창 리사이즈시 반응형 동작 빈틈보강*/
	$(window).resize(function(){
		var footerIcon= $('.ul-li-img1').width();
		// $('.ul-li-img1').css({'height':footerIcon});

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

		if ($('#article1-nav1-topmenu1').css('display')=='none')
		{
			$('.body-all-header').stop().animate({'height':'100px'},100)
			$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').attr('aria-hidden','true');
			$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').children('span').attr('aria-hidden','true');
			$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').attr('aria-hidden','false');
			$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').children('span').attr('aria-hidden','false');
			if($('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').focus()){
				$('#menu-icon input[type=checkbox]').prop('checked',true);
				$('.nav1-side-menu').animate({'right':'0'},100);
				$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').focus();
			};
			console.log('-- down 480 -- in = '+$('.body-all-header').css('width'));
			return false;
		}else{
			$('.body-footer-add').animate({'margin-left':'0px'},100)
			$('.nav1-side-menu').animate({'right':'-100%'},100)
			$('.body-all-header').stop().animate({'height':'50px'},100)
			$('.article1-nav1-toplogo').stop().animate({'height':'0px'},100)
			$('#menu-icon input[type=checkbox]').prop('checked',false)
			$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').attr('aria-hidden','false');
			$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').children('span').attr('aria-hidden','false');
			$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').attr('aria-hidden','true');
			$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').children('span').attr('aria-hidden','true');
			if($('footer').find('.menu-list-ul').children('.list-ul-li').children('a').focus()){
				$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').focus();
			};
			console.log('-- up 480 -- out = '+$('.body-all-header').css('width'));
			return false;
		}
		// if ($('#article1-nav1-topmenu1').css('display')!=='none')
		// {
		// 	$('.body-footer-add').animate({'margin-left':'0px'},100)
		// 	$('.nav1-side-menu').animate({'right':'-100%'},100)
		// 	$('.body-all-header').stop().animate({'height':'50px'},100)
		// 	$('.article1-nav1-toplogo').stop().animate({'height':'0px'},100)
		// 	$('#menu-icon input[type=checkbox]').prop('checked',false)
		// 	$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').attr('aria-hidden','false');
		// 	$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').children('span').attr('aria-hidden','false');
		// 	$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').attr('aria-hidden','true');
		// 	$('footer').find('.menu-list-ul').children('.list-ul-li').children('a').children('span').attr('aria-hidden','true');
		// 	if($('footer').find('.menu-list-ul').children('.list-ul-li').children('a').focus()){
		// 		$('#article1-nav1-topmenu1').find('.nav1-topmenu1-list').children('a').focus();
		// 	};
		// 	console.log('-- #article1-nav1-topmenu1 -- display = '+$('#article1-nav1-topmenu1').css('display'));
		// 	return false;
		// }

	})
	/*----------------------------------------------------------------*/
	/*header 부분 동작부*/
	$('.body-all-header').on('mouseover mouseleave touchstart',function(event){
		if (event.type=='mouseover')
		{
			if ($('#article1-nav1-topmenu1').css('display')=='block')
			{
				$('.body-all-header').stop().animate({'height':'150px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}else{
				$('.body-all-header').stop().animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}
		}else if (event.type=='mouseleave')
		{
			if ($('#article1-nav1-topmenu1').css('display')=='block')
			{
				$('.body-all-header').stop().animate({'height':'50px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'0px'},100)
			}else{
				$('.body-all-header').stop().animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}
		}
		else if(event.type=='touchstart'){
			if ($('#article1-nav1-topmenu1').css('display')=='block')
			{
				$('.body-all-header').stop().animate({'height':'150px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}else{
				$('.body-all-header').stop().animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}
		}
	})


	$('.body-section-all').on('click','.article1-nav1-toplogo',function(){
		$(document).on('click history','.article1-nav1-toplogo a',function(event){
			event.preventDefault();
		})
		var agent = navigator.userAgent.toLowerCase();

		$('img').each(function(){
			var imgWidth = this.naturalWidth;
		})
		var msheight = $('.slide img').height();
		$('.slideshow').css({'height':msheight});

		$('.topmenu1-list-span').css({'border':'0px'})

		if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
		{
			if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" )>-1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
			{
				$('.body-filter-preloader').show();
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				mainSommon();

				var topbtnm
				if ($('.body-all-header').css('height')=='50px')
				{
					topbtnm = 50;
				}else if ($('.body-all-header').css('height')=='100px')
				{
					topbtnm = 100;
				}else if ($('.body-all-header').css('height')=='150px')
				{
					topbtnm = 150;
				}
				$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
				$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff','color':'#fff'})
				$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
				$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

				$('.body-filter-preloader').hide();
				history.pushState(null,null,portfolioindex_url+'/index.html');
				title_changer();
			}else{
				location.href=portfolioindex_url+'/index.html'
			}

		}else{
			$('.body-filter-preloader').show();
			$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
			$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
			$('.ul-li-img1').css({'border':'0px solid #999'})
			$('#slide-wrap').css({'display':'block'})
			$('#slide-wrap-i').css({'display':'none'})
			mainSommon();

			var topbtnm
			if ($('.body-all-header').css('height')=='50px')
			{
				topbtnm = 50;
			}else if ($('.body-all-header').css('height')=='100px')
			{
				topbtnm = 100;
			}else if ($('.body-all-header').css('height')=='150px')
			{
				topbtnm = 150;
			}
			$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
			$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff','color':'#fff'})
			$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
			$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

			$('.body-filter-preloader').hide();
			history.pushState(null,null,portfolioindex_url+'/index.html');
			title_changer();
		}
	})
	$('.body-section-all').on('click','#phon-icon',function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='tel:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='tel:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})
	$('.body-section-all').on('click keypress','#menu-icon input[type=checkbox]',function(){
		if ($('.nav1-side-menu').css('right')!=='0px')
		{
			//$('.body-footer-add').animate({'margin-left':'-100%'},100)//footer와 연동하여 밀리는 부분으로 필요시 사용.
			$('.nav1-side-menu').animate({'right':'0px'},100)
			$('.top-btn').stop().animate({'bottom':'90px'},100)
			$('.index-btn-wrap').stop().animate({'bottom':'144px'},100)
		}else{
			//$('.body-footer-add').animate({'margin-left':'0px'},100)
			$('.nav1-side-menu').animate({'right':'-100%'},100)
			if($(window).height()+$(window).scrollTop()>=$(document).height())//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll 위치) -> top 기준이기 때문에 탑메뉴의 height가 늘어나면 연산을 다시해서 재실행 되는 문제가 있음.
			{
				$('.top-btn').stop().animate({'bottom':'90px'},100)
			}else{
				$('.top-btn').stop().animate({'bottom':'50px'},100)
			}
			if($(window).height()+$(window).scrollTop()>=$(document).height())//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll 위치) -> top 기준이기 때문에 탑메뉴의 height가 늘어나면 연산을 다시해서 재실행 되는 문제가 있음.
			{
				$('.index-btn-wrap').stop().animate({'bottom':'144px'},100)
			}else{
				$('.index-btn-wrap').stop().animate({'bottom':'104px'},100)
			}
		}
	})
	$('.body-section-all').on('mouseover mouseleave click','.topmenu1-list-span',function(event){

		if (event.type=='mouseover')
		{
			if ($(this).children('span').css('bottom')=='-3px')
				{
					$(this).children('.list-span-leftborder, .list-span-rightborder').css({'border-bottom':'3px solid #000'})
					$(this).children('.list-span-leftborder, .list-span-rightborder').stop().animate({'width':'50%'},100)


				}else{
					$(this).children('.list-span-leftborder, .list-span-rightborder').stop().animate({'width':'50%'},100)
					$(this).children('.list-span-leftborder, .list-span-rightborder').css({'border-bottom':'3px solid #4e3b29'})
				}
		}else if (event.type=='mouseleave')
		{
			if ($(this).children('span').css('bottom')=='-3px')
				{
					$(this).children('.list-span-leftborder, .list-span-rightborder').css({'border-bottom':'3px solid #000'})
					$(this).children('.list-span-leftborder, .list-span-rightborder').stop().animate({'width':'0%'},100)


				}else{
					$(this).children('.list-span-leftborder, .list-span-rightborder').stop().animate({'width':'0%'},100)
					$(this).children('.list-span-leftborder, .list-span-rightborder').css({'border-bottom':'3px solid #4e3b29'})
				}
		}else if (event.type=='click')
		{
			$(document).on('click history','.nav1-topmenu1-list a',function(event){
				event.preventDefault();//a tag 동작제어 - 바로 링크되지 못하도록 방지
			})
			if (this==document.getElementById('topmenu1-list-span1'))
			{
				nav_num = 1;
				introSommon();
			}else if (this==document.getElementById('topmenu1-list-span2'))
			{
				nav_num = 2;
				webSommon();
			}else if (this==document.getElementById('topmenu1-list-span3'))
			{
				nav_num = 3;
				movieSommon();
			}else if (this==document.getElementById('topmenu1-list-span4'))
			{
				nav_num = 4;
				flashSommon();
			}else if (this==document.getElementById('topmenu1-list-span5'))
			{
				nav_num = 5;
				imageSommon();
			}
			title_changer();
			nav_move();
		}
	})
	/*--------------------------------------------------------*/
	/*footer 소환동작 기종체크 후 문자보내기*/
	$('footer').on('click','.footer-add-num',function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='sms:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='sms:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})
	/*--------------------------------------------------------*/
	/*햄버거 메뉴 클릭시 bottom:0에 앱형태 ui의 네비 생성 및 네비동작*/
	$('footer').on('click mouseover mouseleave','a',function(event){
		var agent = navigator.userAgent.toLowerCase();
		$(document).on('click history','.list-ul-li a',function(event){
			event.preventDefault();//a tag 동작제어 - 바로 링크되지 못하도록 방지
		})
		if (event.type=='mouseover')
		{
			//$(this).animate({'width':'65%','margin':'17.5%','margin-top':'12px'},50)
			$('.ul-li-img1').css({'border-radius':'12px'})
			$(this).stop().css({'border-radius':'25px'})
		}else if (event.type=='mouseleave')
		{
			//$(this).animate({'width':'80%','margin':'10%','margin-top':'10px'},50)
			$(this).stop().css({'border-radius':'12px'})
		}else if (event.type=='click')
		{
			if (this==document.getElementById('list-ul-li1'))
			{
				nav_num = 1;
				introSommon();
			}else if (this==document.getElementById('list-ul-li2'))
			{
				nav_num = 2;
				webSommon();
			}else if (this==document.getElementById('list-ul-li3'))
			{
				nav_num = 3;
				movieSommon();
			}else if (this==document.getElementById('list-ul-li4'))
			{
				nav_num = 4;
				flashSommon();
			}else if (this==document.getElementById('list-ul-li5'))
			{
				nav_num = 5;
				imageSommon();
			}
			title_changer();
			nav_move();
		}
	})
	/*------------------------------------------------------------------*/

	/*------------- 포트폴리오 데이타 소환 후 HTML 구성 ------------------*/
	/** 페이지 구조 생성자 */
	function box_maker(){
		work_years=0;
		var print_year=2015;
		var start_year;
		var this_year=cal_year;
		$('.article-summon-wrap').html('');
		$('.index-btn-wrap').html('');
		for (start_year=2016;start_year<=this_year;start_year++){
			work_years++;
			print_year++;
			$('.article-summon-wrap').append('<div class="article-main-scrollall" id="article-main-scroll'+work_years+'" data-index="'+work_years+'"><div class="main-scrollall-head" id="main-scroll'+work_years+'-head"><h3></h3></div></div>')
			if($('#article-main-scroll'+work_years).find('h3')){
				$('#article-main-scroll'+work_years).find('h3').append(print_year);
				$('#article-main-scroll'+work_years).append('<div id="main-scroll'+work_years+'-con" class="main-scrollall-con"></div>');
			}
			// if($('.article-main-scrollall').find('#main-scroll'+work_years+'-con')){
				// $('#main-scroll'+work_years+'-con').append('<div class="move-wrap'+work_years+'"></div>');
			// }

			if($('.article-main-scrollall').find('#main-scroll'+work_years+'-con')){
				$('#main-scroll'+work_years+'-con').append('<div class="move-wrap move-wrap'+work_years+'"><div class="scrollall-con-box box-all-empty" id="scroll'+work_years+'-con-box0" aria-haspopup="true" role="button" tabindex="0" data-empty="true"><div id="con-box'+work_years+'-imgborder0" class="con-box-imgborder">\
					<img src="https://cl0cktree.github.io/jsonframe/images/project/mistery3.gif" alt="내용없음"></div><div id="con-box'+work_years+'-caption0" class="con-box-caption"><span>내용없음</span></div></div></div>');
			}

			$('.index-btn-wrap').append('<div class="index-btn-all" id="index-btn-num'+work_years+'" data-btn="'+work_years+'">'+work_years+'</div>');
		}
	};
	/** 메인 구조 구성 */
	function mainSommon(){
		contents_head='메인페이지 콘텐츠 묶음';
		box_maker();
		$.getJSON(jsonFrame_data, function(data){
			$.each(data, function(I, item){
				frame_year=item.data_years;
				function contents_box(){
					$('.move-wrap'+work_years).append('<div class="scrollall-con-box" id="scroll'+work_years+'-con-box'+item.years_num+'" aria-haspopup="true" role="button" tabindex="0"><div id="con-box'+work_years+'-imgborder'+item.years_num+'" class="con-box-imgborder">\
					<img src="'+item.data_img+'" alt="'+item.data_alt+'"></div><div id="con-box'+work_years+'-caption'+item.years_num+'" class="con-box-caption"><span>'+item.data_title+'</span></div></div>');
					
					$('.move-wrap'+work_years).find('.box-all-empty').attr('data-empty','true').remove();
				};
				// function empty_box(){
					// $('.move-wrap'+work_years).append('<div class="scrollall-con-box box-all-empty" id="scroll'+work_years+'-con-box0" aria-haspopup="true" role="button" tabindex="0" data-empty="true"><div id="con-box'+work_years+'-imgborder0" class="con-box-imgborder">\
					// <img src="https://cl0cktree.github.io/jsonframe/images/project/mistery3.gif" alt="내용없음"></div><div id="con-box'+work_years+'-caption0" class="con-box-caption"><span>내용없음</span></div></div>');
				// };

				if (item.data_section=='portfolio'){
					work_years=0;
					var start_year;
					var this_year=cal_year;

					for (start_year=2016;start_year<=this_year;start_year++){
						work_years++;
						if(frame_year==start_year){
							contents_box();
						}
					};

					// if((frame_year=='2016')&&(item.years_num!=='0')){
					// 	work_years=1;
					// 	contents_box();
					// }else if((frame_year=='2017')&&(item.years_num!=='0')){
					// 	work_years=2;
					// 	contents_box();
					// }else if((frame_year=='2018')&&(item.years_num!=='0')){
					// 	work_years=3;
					// 	contents_box();
					// }else if((frame_year=='2019')&&(item.years_num!=='0')){
					// 	work_years=4;
					// 	contents_box();
					// }else if((frame_year=='2020')&&(item.years_num!=='0')){
					// 	work_years=5;
					// 	contents_box();
					// }else if((frame_year=='2021')&&(item.years_num!=='0')){
					// 	work_years=6;
					// 	contents_box();
					// }else if((frame_year=='2022')&&(item.years_num!=='0')){
					// 	work_years=7;
					// 	contents_box();
					// }else if((frame_year=='2023')&&(item.years_num!=='0')){
					// 	work_years=8;
					// 	contents_box();
					// }else if((frame_year=='2024')&&(item.years_num!=='0')){
					// 	work_years=9;
					// 	contents_box();
					// }else if((frame_year=='2025')&&(item.years_num!=='0')){
					// 	work_years=10;
					// 	contents_box();
					// }
				};

				// if($('.main-scrollall-con').find('.scrollall-con-box').length<=0){
					// work_years=0;
					// var start_year;
					// var this_year=cal_year;
				// 
					// for (start_year=2016;start_year<=this_year;start_year++){
						// work_years++;
						// empty_box();
					// };
				// };

			});
		});
		$('.section-heading').html(contents_head);
		$('.main-welcolme-summon').html('<h2>환영합니다.</h2>');
		return false;
	};
	/** 인트로 페이지 구성 */
	function introSommon(){
		contents_head='소개페이지 콘텐츠 묶음';
		$('.article-summon-wrap').html('');
		$('.section-heading').html(contents_head);
		$('.main-welcolme-summon').html('<h2>숙련도&소개</h2>');
		$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub1.html .article-main-scrollall')
		$('.scr-index-box').load(portfolioindex_url+'/sub/sub1.html .index-btn-wrap')
		return false;
	};
	/** 웹 및 앱 작업 페이지 구성 */
	function webSommon(){
		contents_head='웹작업페이지 콘텐츠 묶음';
		box_maker();
		$.getJSON(jsonFrame_data, function(data){
			$.each(data, function(I, item){
				frame_year=item.data_years;
				function contents_box(){
					$('.move-wrap'+work_years).append('<div class="scrollall-con-box" id="scroll'+work_years+'-con-box'+item.years_num+'" aria-haspopup="true" role="button" tabindex="0"><div id="con-box'+work_years+'-imgborder'+item.years_num+'" class="con-box-imgborder">\
					<img src="'+item.data_img+'" alt="'+item.data_alt+'"></div><div id="con-box'+work_years+'-caption'+item.years_num+'" class="con-box-caption"><span>'+item.data_title+'</span></div></div>');
					$('.move-wrap'+work_years).find('.box-all-empty').attr('data-empty','true').remove();
				};
				// function empty_box(){
					// $('.move-wrap'+work_years).append('<div class="scrollall-con-box box-all-empty" id="scroll'+work_years+'-con-box0" aria-haspopup="true" role="button" tabindex="0" data-empty="true"><div id="con-box'+work_years+'-imgborder0" class="con-box-imgborder">\
					// <img src="https://cl0cktree.github.io/jsonframe/images/project/mistery3.gif" alt="내용없음"></div><div id="con-box'+work_years+'-caption0" class="con-box-caption"><span>내용없음</span></div></div>');
				// };

				if(item.data_kinds=='web'){
					work_years=0;
					var start_year;
					var this_year=cal_year;

					for (start_year=2016;start_year<=this_year;start_year++){
						work_years++;
						if(frame_year==start_year){
							contents_box();
						}
					};
					// if(frame_year=='2016'){
						// work_years=1;
						// contents_box();
					// }else if(frame_year=='2017'){
						// work_years=2;
						// contents_box();
					// }else if(frame_year=='2018'){
						// work_years=3;
						// contents_box();
					// }else if(frame_year=='2019'){
						// work_years=4;
						// contents_box();
					// }else if(frame_year=='2020'){
						// work_years=5;
						// contents_box();
					// }else if(frame_year=='2021'){
						// work_years=6;
						// contents_box();
					// }else if(frame_year=='2022'){
						// work_years=7;
						// contents_box();
					// }else if(frame_year=='2023'){
						// work_years=8;
						// contents_box();
					// }else if(frame_year=='2024'){
						// work_years=9;
						// contents_box();
					// }else if(frame_year=='2025'){
						// work_years=10;
						// contents_box();
					// }
				};
				// if($('.main-scrollall-con').find('.scrollall-con-box').length<=0){
					// work_years=0;
					// var start_year;
					// var this_year=cal_year;
				// 
					// for (start_year=2016;start_year<=this_year;start_year++){
						// work_years++;
						// empty_box();
					// };
				// };
			});
		});
		$('.section-heading').html(contents_head);
		$('.main-welcolme-summon').html('<h2>웹&앱 퍼블리싱</h2>');
		return false;
	};
	/** 동영상 작업 페이지 구성 */
	function movieSommon(){
		contents_head='동영상작업페이지 콘텐츠 묶음';
		box_maker();
		$.getJSON(jsonFrame_data, function(data){
			$.each(data, function(I, item){
				frame_year=item.data_years;
				function contents_box(){
					$('.move-wrap'+work_years).append('<div class="scrollall-con-box" id="scroll'+work_years+'-con-box'+item.years_num+'" aria-haspopup="true" role="button" tabindex="0"><div id="con-box'+work_years+'-imgborder'+item.years_num+'" class="con-box-imgborder">\
					<img src="'+item.data_img+'" alt="'+item.data_alt+'"></div><div id="con-box'+work_years+'-caption'+item.years_num+'" class="con-box-caption"><span>'+item.data_title+'</span></div></div>');
					
					$('.move-wrap'+work_years).find('.box-all-empty').attr('data-empty','true').remove();
				};
				// function empty_box(){
					// $('.move-wrap'+work_years).append('<div class="scrollall-con-box box-all-empty" id="scroll'+work_years+'-con-box0" aria-haspopup="true" role="button" tabindex="0" data-empty="true"><div id="con-box'+work_years+'-imgborder0" class="con-box-imgborder">\
					// <img src="https://cl0cktree.github.io/jsonframe/images/project/mistery3.gif" alt="내용없음"></div><div id="con-box'+work_years+'-caption0" class="con-box-caption"><span>내용없음</span></div></div>');
				// };

				if(item.data_kinds=='movie'){
					work_years=0;
					var start_year;
					var this_year=cal_year;

					for (start_year=2016;start_year<=this_year;start_year++){
						work_years++;
						if(frame_year==start_year){
							contents_box();
						}
					};
					// if(frame_year=='2016'){
						// work_years=1;
						// contents_box();
					// }else if(frame_year=='2017'){
						// work_years=2;
						// contents_box();
					// }else if(frame_year=='2018'){
						// work_years=3;
						// contents_box();
					// }else if(frame_year=='2019'){
						// work_years=4;
						// contents_box();
					// }else if(frame_year=='2020'){
						// work_years=5;
						// contents_box();
					// }else if(frame_year=='2021'){
						// work_years=6;
						// contents_box();
					// }else if(frame_year=='2022'){
						// work_years=7;
						// contents_box();
					// }else if(frame_year=='2023'){
						// work_years=8;
						// contents_box();
					// }else if(frame_year=='2024'){
						// work_years=9;
						// contents_box();
					// }else if(frame_year=='2025'){
						// work_years=10;
						// contents_box();
					// }
				};
				// if($('.main-scrollall-con').find('.scrollall-con-box').length<=0){
					// work_years=0;
					// var start_year;
					// var this_year=cal_year;
				// 
					// for (start_year=2016;start_year<=this_year;start_year++){
						// work_years++;
						// empty_box();
					// };
				// };
			});
		});
		$('.section-heading').html(contents_head);
		$('.main-welcolme-summon').html('<h2>동영상 편집작업</h2>');
		return false;
	};
	/** 플래시 페이지 구성 */
	function flashSommon(){
		contents_head='플래시작업페이지 콘텐츠 묶음';
		box_maker();
		$.getJSON(jsonFrame_data, function(data){
			$.each(data, function(I, item){
				frame_year=item.data_years;
				function contents_box(){
					$('.move-wrap'+work_years).append('<div class="scrollall-con-box" id="scroll'+work_years+'-con-box'+item.years_num+'" aria-haspopup="true" role="button" tabindex="0"><div id="con-box'+work_years+'-imgborder'+item.years_num+'" class="con-box-imgborder">\
					<img src="'+item.data_img+'" alt="'+item.data_alt+'"></div><div id="con-box'+work_years+'-caption'+item.years_num+'" class="con-box-caption"><span>'+item.data_title+'</span></div></div>');
					
					$('.move-wrap'+work_years).find('.box-all-empty').attr('data-empty','true').remove();
				};
				// function empty_box(){
					// $('.move-wrap'+work_years).append('<div class="scrollall-con-box box-all-empty" id="scroll'+work_years+'-con-box0" aria-haspopup="true" role="button" tabindex="0" data-empty="true"><div id="con-box'+work_years+'-imgborder0" class="con-box-imgborder">\
					// <img src="https://cl0cktree.github.io/jsonframe/images/project/mistery3.gif" alt="내용없음"></div><div id="con-box'+work_years+'-caption0" class="con-box-caption"><span>내용없음</span></div></div>');
				// };

				if(item.data_kinds=='flash'){
					work_years=0;
					var start_year;
					var this_year=cal_year;

					for (start_year=2016;start_year<=this_year;start_year++){
						work_years++;
						if(frame_year==start_year){
							contents_box();
						}
					};
					// if(frame_year=='2016'){
						// work_years=1;
						// contents_box();
					// }else if(frame_year=='2017'){
						// work_years=2;
						// contents_box();
					// }else if(frame_year=='2018'){
						// work_years=3;
						// contents_box();
					// }else if(frame_year=='2019'){
						// work_years=4;
						// contents_box();
					// }else if(frame_year=='2020'){
						// work_years=5;
						// contents_box();
					// }else if(frame_year=='2021'){
						// work_years=6;
						// contents_box();
					// }else if(frame_year=='2022'){
						// work_years=7;
						// contents_box();
					// }else if(frame_year=='2023'){
						// work_years=8;
						// contents_box();
					// }else if(frame_year=='2024'){
						// work_years=9;
						// contents_box();
					// }else if(frame_year=='2025'){
						// work_years=10;
						// contents_box();
					// }
				};
				// if($('.main-scrollall-con').find('.scrollall-con-box').length<=0){
					// work_years=0;
					// var start_year;
					// var this_year=cal_year;
				// 
					// for (start_year=2016;start_year<=this_year;start_year++){
						// work_years++;
						// empty_box();
					// };
				// };
			});
		});
		$('.section-heading').html(contents_head);
		$('.main-welcolme-summon').html('<h2>플래시</h2>');
		return false;
	};
	/** 이미지 작업 페이지 구성 */
	function imageSommon(){
		contents_head='랜더링및편집작업페이지 콘텐츠 묶음';
		box_maker();
		$.getJSON(jsonFrame_data, function(data){
			$.each(data, function(I, item){
				frame_year=item.data_years;
				function contents_box(){
					$('.move-wrap'+work_years).append('<div class="scrollall-con-box" id="scroll'+work_years+'-con-box'+item.years_num+'" aria-haspopup="true" role="button" tabindex="0"><div id="con-box'+work_years+'-imgborder'+item.years_num+'" class="con-box-imgborder">\
					<img src="'+item.data_img+'" alt="'+item.data_alt+'"></div><div id="con-box'+work_years+'-caption'+item.years_num+'" class="con-box-caption"><span>'+item.data_title+'</span></div></div>');
					
					$('.move-wrap'+work_years).find('.box-all-empty').attr('data-empty','true').remove();
				};
				// function empty_box(){
					// $('.move-wrap'+work_years).append('<div class="scrollall-con-box box-all-empty" id="scroll'+work_years+'-con-box0" aria-haspopup="true" role="button" tabindex="0" data-empty="true"><div id="con-box'+work_years+'-imgborder0" class="con-box-imgborder">\
					// <img src="https://cl0cktree.github.io/jsonframe/images/project/mistery3.gif" alt="내용없음"></div><div id="con-box'+work_years+'-caption0" class="con-box-caption"><span>내용없음</span></div></div>');
				// };

				if(item.data_kinds=='image'){
					work_years=0;
					var start_year;
					var this_year=cal_year;

					for (start_year=2016;start_year<=this_year;start_year++){
						work_years++;
						if(frame_year==start_year){
							contents_box();
						}
					};
					// if(frame_year=='2016'){
						// work_years=1;
						// contents_box();
					// }else if(frame_year=='2017'){
						// work_years=2;
						// contents_box();
					// }else if(frame_year=='2018'){
						// work_years=3;
						// contents_box();
					// }else if(frame_year=='2019'){
						// work_years=4;
						// contents_box();
					// }else if(frame_year=='2020'){
						// work_years=5;
						// contents_box();
					// }else if(frame_year=='2021'){
						// work_years=6;
						// contents_box();
					// }else if(frame_year=='2022'){
						// work_years=7;
						// contents_box();
					// }else if(frame_year=='2023'){
						// work_years=8;
						// contents_box();
					// }else if(frame_year=='2024'){
						// work_years=9;
						// contents_box();
					// }else if(frame_year=='2025'){
						// work_years=10;
						// contents_box();
					// }
				};
				// if($('.main-scrollall-con').find('.scrollall-con-box').length<=0){
					// work_years=0;
					// var start_year;
					// var this_year=cal_year;
				// 
					// for (start_year=2016;start_year<=this_year;start_year++){
						// work_years++;
						// empty_box();
					// };
				// };
			});
		});
		$('.section-heading').html(contents_head);
		$('.main-welcolme-summon').html('<h2>2D랜더링&편집작업</h2>');
		return false;
	};
	/*------------------------------------------------------------------*/
	/*-모달로그 창 위 컨텐츠의 포커스 요소만 순회하는 함수+esc키 눌렀을 때 모달로그 닫히기+낮은 단계의 레이어 선택 요소에 포커스 유지-*/
	function conbox_contents(){ // 높은 단계의 모달로그 컨텐츠의 포커스 요소만 순회 함수 + esc 키 눌렀을 시 닫히기
		if(document.getElementById('all-filter-conbox')){
			var conbox_contentswrap = document.getElementById('all-filter-conbox');
			var filter_conbox_contentswrap = document.getElementById('filter-conbox-contentswrap');

			$('.body-section-content, header, footer').find('[tabindex]').attr('tabindex','-1');
			$('#all-filter-conbox').find('[tabindex]').attr('tabindex','0');
			$('#all-filter-conbox').find('[tabindex]').eq(0).focus();
			
			conbox_contentswrap.addEventListener('keydown', function(e){
				var this_on_focus;

				var con_range = $('.all-filter-conbox, .conbox-contents-view').find('.filter-title-closebtn, .filter-conbox-contentswrap').find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button, button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]');
				var con_first = con_range.eq(0);
				var con_last = con_range.eq(con_range.length-1);
				
				var focus_content = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button, button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
				var conbox_content = conbox_contentswrap.querySelectorAll(focus_content);
				var first_content = conbox_contentswrap.querySelectorAll(focus_content)[0];
				var last_content = conbox_contentswrap.querySelectorAll(focus_content)[conbox_content.length-1];

				console.log('last_content = '+conbox_content.length);

				if (e.keyCode === 27){
					focus_still();
				}else{
					this_on_focus = document.activeElement;
					if ((e.keyCode===9 && !e.shiftKey)&&(this_on_focus==last_content)) {

						console.log('pop ride this_1');
						first_content.focus();
					}
					if((e.keyCode===9 && e.shiftKey)&&(this_on_focus==first_content)) {
						console.log('pop ride this_2');
						last_content.focus();
					}
				};
				e.preventDefault();
			});

			filter_conbox_contentswrap.addEventListener('keydown', function(e){
				var this_on_focus;

				var con_range = $('.all-filter-conbox, .conbox-contents-view').find('.filter-title-closebtn, .filter-conbox-contentswrap').find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button, button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]');
				var con_first = con_range.eq(0);
				var con_last = con_range.eq(con_range.length-1);
				
				var focus_content = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button, button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
				var conbox_content = filter_conbox_contentswrap.querySelectorAll(focus_content);
				var first_content = filter_conbox_contentswrap.querySelectorAll(focus_content)[0];
				var last_content = filter_conbox_contentswrap.querySelectorAll(focus_content)[conbox_content.length-1];

				console.log('last_content = '+conbox_content.length);

				if (e.keyCode === 27){
					focus_still();
				}else{
					this_on_focus = document.activeElement;
					if ((e.keyCode===9 && !e.shiftKey)&&(this_on_focus==last_content)) {

						console.log('pop ride this_1');
						first_content.focus();
					}
					if((e.keyCode===9 && e.shiftKey)&&(this_on_focus==first_content)) {
						console.log('pop ride this_2');
						last_content.focus();
					}
					if (e.keyCode===13){
						console.log('in a this ='+$(this).attr('class'));
						if($(this).attr('class')==('.filter-title-closebtn')){
							$('.filter-title-closebtn').click();
						}else{
							var link_a = $('.filter-conbox-contentswrap').children('.filter-conbox-contents').find('.contents-view-img').find('a').attr('href');
							console.log('link_a = '+link_a);
							window.open("about:blank").location.href = link_a;
						};
					}
				};
				e.preventDefault();
			});
		}
	};

	function landing_contents(){
		if(document.getElementById('click-all-filter-landing')){
			var filter_landing_contents = document.getElementById('click-all-filter-landing');
			console.log('landing focus on!');

			$('.body-section-content, header, footer').find('[tabindex]').attr('tabindex','-1');
			$('#click-all-filter-landing').find('[tabindex]').attr('tabindex','0');
			$('#click-all-filter-landing').find('[tabindex]').eq(0).focus();

			filter_landing_contents.addEventListener('keydown', function(e){
				var this_on_focus;
				var focus_content = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button, button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
				var conbox_content = filter_landing_contents.querySelectorAll(focus_content);
				var first_content = filter_landing_contents.querySelectorAll(focus_content)[0];
				var last_content = filter_landing_contents.querySelectorAll(focus_content)[conbox_content.length-1];
	
				console.log('last_content = '+conbox_content.length);
	
				this_on_focus = document.activeElement;
				if ((e.keyCode===9 && !e.shiftKey)&&(this_on_focus==last_content)) {
	
					console.log('pop ride this_1');
					first_content.focus();
				}
				if((e.keyCode===9 && e.shiftKey)&&(this_on_focus==first_content)) {
					console.log('pop ride this_2');
					last_content.focus();
				}
				e.preventDefault();
			});
		}
	};

	function focus_still(){ // 낮은 단계의 레이어 선택 요소에 포커스 유지
		$('#all-filter-conbox').find('[tabindex]').attr('tabindex','-1');
		$('.body-section-content, header, footer').find('[tabindex]').attr('tabindex','0');
		$('.filter-title-closebtn').click();
		console.log('$layer_sel = '+$layer_sel);
		$layer_sel.focus();
	};
	/*-----------------------------------------------------------------------------------------------------------------------*/
	/*------------------------popState 전체제어--------------------------*/
	var agent = navigator.userAgent.toLowerCase();
	function popstate_con(){
		$(window).on('popstate',function(event){
			$('.body-filter-preloader').show();
			if (location.href==portfolioindex_url+'/index.html')
			{
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				mainSommon();
			}else if(location.href==portfolioindex_url+'/sub/sub1.html'){
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
				$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li1').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'none'})
				$('#slide-wrap-i').css({'display':'block'})
				introSommon();
			}else if(location.href==portfolioindex_url+'/sub/sub2.html'){
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
				$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li2').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				webSommon();
			}else if(location.href==portfolioindex_url+'/sub/sub3.html'){
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
				$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li3').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				movieSommon();
			}else if(location.href==portfolioindex_url+'/sub/sub4.html'){
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
				$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li4').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				flashSommon();
			}else if(location.href==portfolioindex_url+'/sub/sub5.html'){
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
				$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li5').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				imageSommon();
			}
			title_changer();
			$('.body-filter-preloader').hide();
		})
	};
	if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
	{
		if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
		{
			popstate_con();
		}
	}else{
		popstate_con();
	}
	/*-------------------------------------------------------------------*/
	/*전체 마우스휠 이벤트 발생 시 스크롤 이동 속도 제어*/
	function wheel_con(event){ // 함수의 형태로 같이 실행 될 경우 사용.
		$('body, html').on('wheel mousewheel DOMMouseScroll', '.body-section-content', function(event){
			// event.preventDefault();
			var wheel_delay_time_1;
			var wheel_delay = 150;
			var wheel_range = 300;
			var wheel_speed = 150;

			// if(event.originalEvent.wheelDelta >= 0){	// 휠 업다운에 따라 음수와 양수 값을 내장 함수에서 직접 받아옴.		
				// if(!wheel_delay_time_1){
					// wheel_delay_time_1 = setTimeout(function(){
						// wheel_delay_time_1=null;
						// $('body, html').stop().animate({scrollTop: $(window).scrollTop()-wheel_range},wheel_speed, function(){
							// $('body, html').stop().animate({scrollTop: $(window).scrollTop()+wheel_range/2},wheel_speed/2)
						// });
						// console.log('+++ wheel_con() is plus = '+$(window).scrollTop());
					// },wheel_delay)
				// }			
			// }else{
				// if(!wheel_delay_time_1){
					// wheel_delay_time_1 = setTimeout(function(){
						// wheel_delay_time_1=null;
						// $('body, html').stop().animate({scrollTop: $(window).scrollTop()+wheel_range},wheel_speed, function(){
							// $('body, html').stop().animate({scrollTop: $(window).scrollTop()-wheel_range/4},wheel_speed/4)
						// });
						// console.log('--- wheel_con() is minus = '+$(window).scrollTop());
					// },wheel_delay)
				// }			
			// };		
			if(event.originalEvent.wheelDelta >= 0){	// 휠 업다운에 따라 음수와 양수 값을 내장 함수에서 직접 받아옴.		
				$('body, html').stop(false,true).animate({scrollTop: $(window).scrollTop()-wheel_range},wheel_speed);			
			}else{
				$('body, html').stop(false,true).animate({scrollTop: $(window).scrollTop()+wheel_range},wheel_speed);			
			};		
		});
	};
	$('body, html').on('wheel mousewheel DOMMouseScroll', '.body-section-content', function(event){
		// event.preventDefault();
		var wheel_delay_time_1;
		var wheel_delay = 150;
		var wheel_range = 100;
		var wheel_speed = 170;
		
		// if(event.originalEvent.wheelDelta >= 0){	// 휠 업다운에 따라 음수와 양수 값을 내장 함수에서 직접 받아옴.		
			// if(!wheel_delay_time_1){
				// wheel_delay_time_1 = setTimeout(function(){
					// wheel_delay_time_1=null;
					// $('body, html').stop().animate({scrollTop: $(window).scrollTop()-wheel_range},wheel_speed, function(){
						// $('body, html').stop().animate({scrollTop: $(window).scrollTop()+wheel_range/2},wheel_speed/2)
					// });
					// console.log('+++ wheel_con() is plus = '+$(window).scrollTop());
				// },wheel_delay)
			// }			
		// }else{
			// if(!wheel_delay_time_1){
				// wheel_delay_time_1 = setTimeout(function(){
					// wheel_delay_time_1=null;
					// $('body, html').stop().animate({scrollTop: $(window).scrollTop()+wheel_range},wheel_speed, function(){
						// $('body, html').stop().animate({scrollTop: $(window).scrollTop()-wheel_range/4},wheel_speed/4)
					// });
					// console.log('--- wheel_con() is minus = '+$(window).scrollTop());
				// },wheel_delay)
			// }			
		// };		
		if(event.originalEvent.wheelDelta >= 0){	// 휠 업다운에 따라 음수와 양수 값을 내장 함수에서 직접 받아옴.		
			$('body, html').stop(false,true).animate({scrollTop: $(window).scrollTop()-wheel_range},wheel_speed);			
		}else{
			$('body, html').stop(false,true).animate({scrollTop: $(window).scrollTop()+wheel_range},wheel_speed);			
		};
	});
	/*-------------------------------------------*/
	/*topmenu 및 top-btn scroll*/
	var scrollindex = $('.article-main-scrollall').each(Array).length;
	$(window).scroll(function(event){
		var scroll_delay_time_1;
		if(!scroll_delay_time_1){
			scroll_delay_time_1 = setTimeout(function(){
				scroll_delay_time_1=null;
				if ($('#article1-nav1-topmenu1').css('display')=='block')
				{
					$('.body-all-header').stop().animate({'height':'50px'},100)
					$('.article1-nav1-toplogo').stop().animate({'height':'0px'},100)
				}else{
					$('.body-all-header').stop().animate({'height':'100px'},100)
					$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
				}
				if ($(window).scrollTop()>0)
				{
					$('#section1-article1-nav1').css({'background':'rgba(0,0,0,0.5)'})
					$('.nav1-topmenu1-list a').css({'color':'#fff'})
					$('#phon-icon').css('background-position','-80px -40px')
		
					$('#section1-article1-nav1').mouseover(function(){
						$('#section1-article1-nav1').stop().css({'background':'#fff'})
						$('.nav1-topmenu1-list a').css({'color':'#333'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
						$('#phon-icon').css('background-position','-80px 0px')
		
					})
					$('#section1-article1-nav1').mouseleave(function(){
						$('#section1-article1-nav1').stop().css({'background':'rgba(0,0,0,0.5)'})
						$('.nav1-topmenu1-list a').css({'color':'#fff'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #fff')
						$('#phon-icon').css('background-position','-80px -40px')
		
					})
		
					/*
					if ($('#section1-article1-nav1').css('width')<'360px')
					{
						$('#section1-article1-nav1').css({'background':'rgba(0,0,0,0.5)'})
						$('.nav1-topmenu1-list a').css({'color':'#fff'})
						$('#phon-icon img').attr('src',portfolioindex_url+'/images/ｐ_icon-1.png')
						$('#menu-icon img').attr('src',portfolioindex_url+'/images/m_icon-1.png')
		
						$('#section1-article1-nav1').mouseover(function(){
							$('#section1-article1-nav1').stop().css({'background':'#fff'})
							$('.nav1-topmenu1-list a').css({'color':'#333'})
							$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
							$('#phon-icon img').attr('src',portfolioindex_url+'/images/ｐ_icon.png')
							$('#menu-icon img').attr('src',portfolioindex_url+'/images/m_icon.png')
						})
						$('#section1-article1-nav1').mouseleave(function(){
							$('#section1-article1-nav1').stop().css({'background':'rgba(0,0,0,0.5)'})
							$('.nav1-topmenu1-list a').css({'color':'#fff'})
							$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #fff')
							$('#phon-icon img').attr('src',portfolioindex_url+'/images/ｐ_icon-1.png')
							$('#menu-icon img').attr('src',portfolioindex_url+'/images/m_icon-1.png')
		
						})
		
					}else{
						$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
						$('.nav1-topmenu1-list a').css({'color':'#333'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
						$('.top-btn').css({'opacity':'0','z-index':'-1'})
						$('.index-btn-wrap').css({'z-index':'-2','opacity':'0','height':'0px'})
						$('#phon-icon img').attr('src',portfolioindex_url+'/images/ｐ_icon.png')
						$('#menu-icon img').attr('src',portfolioindex_url+'/images/m_icon.png')
		
						$('#section1-article1-nav1').mouseover(function(){
							$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
							$('.nav1-topmenu1-list a').css({'color':'#333'})
							$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
		
						})
						$('#section1-article1-nav1').mouseleave(function(){
							$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
							$('.nav1-topmenu1-list a').css({'color':'#333'})
							$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
		
						})
		
					}*/
					if ($('.top-btn').css('z-index')=='59')
					{
		
						if(($(window).height()+$(window).scrollTop()>=$('.body-section-content').height())||($('.nav1-side-menu').css('right')=='0px'))//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll 위치) -> top 기준이기 때문에 탑메뉴의 height가 늘어나면 연산을 다시해서 재실행 되는 문제가 있음.
						{
							$('.top-btn').stop().animate({'bottom':'90px'},200)
						}else{
							$('.top-btn').stop().animate({'bottom':'50px'},200)
						}
					}else{
						$('.top-btn').css({'opacity':'0.5','z-index':'59','cursor':'pointer'})
						if (($(window).height()+$(window).scrollTop()>=$('.body-section-content').height())||($('.nav1-side-menu').css('right')=='0px'))
						{
							$('.top-btn').stop().animate({'bottom':'90px'},200)
		
						}else{
							$('.top-btn').stop().animate({'bottom':'50px'},200)
						}
					}
					if ($('.index-btn-wrap').css('z-index')=='58'){
		
						if (($(window).height()+$(window).scrollTop()>=$('.body-section-content').height())||($('.nav1-side-menu').css('right')=='0px'))//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll 위치) -> top 기준이기 때문에 탑메뉴의 height가 늘어나면 연산을 다시해서 재실행 되는 문제가 있음.
						{
							$('.index-btn-wrap').stop().animate({'bottom':'144px'},150)
						}else{
							$('.index-btn-wrap').stop().animate({'bottom':'104px'},150)
						}
					}else{
						/*
						var bwheight = scrollindex*24;
						$('.index-btn-wrap').css({'z-index':'58','opacity':'0.5','height':bwheight+'px'})//.index-btn-wrap의 높이 자동계산.
						for (var scrmenu = 1 ; scrmenu<=scrollindex ; scrmenu++)
						{
							$('.index-btn-wrap').append('<a><div class="index-btn-all" id="index-btn-num'+scrmenu+'">'+scrmenu+'</div></a>')
						}
						*/
						$('.index-btn-wrap').css({'z-index':'58','opacity':'0.5'})
		
						if (($(window).height()+$(window).scrollTop()>=$('.body-section-content').height())||($('.nav1-side-menu').css('right')=='0px'))
						{
							$('.index-btn-wrap').stop().animate({'bottom':'144px'},150)
						}else{
							$('.index-btn-wrap').stop().animate({'bottom':'104px'},150)
						}
					}
		
					$('.top-btn').click(function(){
						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },400);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff','color':'#fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)
					})
					if ($(window).scrollTop()==0){
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)
					}
					if ($(window).scrollTop()>100)
					{
						$('#scrollall-back-acc1').stop().animate({'top':'170px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'220px'},100)
					}else{
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)
					}
		
				}else{
					$('#section1-article1-nav1').css({'background':'rgba(255,255,255,1)'})
					$('.nav1-topmenu1-list a').css({'color':'#333'})
					$('.top-btn').css({'opacity':'0','z-index':'-1','cursor':'initial'})
					$('.index-btn-wrap').css({'z-index':'-2','opacity':'0'})
					//$('.index-btn-all').remove('')
					$('#section1-article1-nav1').mouseover(function(){
						$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
						$('.nav1-topmenu1-list a').css({'color':'#333'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
					})
					$('#section1-article1-nav1').mouseleave(function(){
						$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
						$('.nav1-topmenu1-list a').css({'color':'#333'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
						$('#phon-icon').css('background-position','-80px 0px')
		
					})
					$('#phon-icon').css('background-position','-80px 0px')
				}
				var scpar
				if ((location.href==portfolioindex_url+'/index.html')||(location.href==portfolioindex_url+'/')||(location.href==portfolioindex_url+''))
				{
					scpar = 500;
				}else if (location.href==portfolioindex_url+'/sub/sub1.html')
				{
					scpar = 350;
				}else if (location.href==portfolioindex_url+'/sub/sub2.html')
				{
					scpar = 350;
				}else if (location.href==portfolioindex_url+'/sub/sub3.html')
				{
					scpar = 50;
				}else if (location.href==portfolioindex_url+'/sub/sub4.html')
				{
					scpar = 0;
				}else if (location.href==portfolioindex_url+'/sub/sub5.html')
				{
					scpar = 200;
				}
				// --스크롤 시 좌우에서 중앙으로 이동하며 컨탠츠가 보이게 함.--
				$('.article-main-scrollall').each(function(){
					var topminus3 = 70;
					if ($(window).scrollTop()>50)
					{
						$('.move-wrap1').addClass('on');
					}
					if ($(window).scrollTop()>=$(this).offset().top-topminus3)
					{
						var mw = $(this).data('index');
						$('.move-wrap'+mw).addClass('on');
						// console.log('<<< mw num = '+[mw]);
					}
				});
				// 구버전
				// var ml = $('.move-wrap').length;
				// var mw1 = $('.move-wrap1').height();
				// var mw2 = $('.move-wrap2').height();
				// var mw3 = $('.move-wrap3').height();
				// var mw4 = $('.move-wrap4').height();
		
				// if ($(window).scrollTop()>50)
				// {
					// $('.move-wrap1').animate({'opacity':'1'},400)
					// if ($(window).scrollTop()>mw1)
					// {
						// $('.move-wrap2').animate({'left':'0','opacity':'1'},400)
						// if ($(window).scrollTop()>mw1+mw2)
						// {
							// $('.move-wrap3').animate({'left':'0','opacity':'1'},400)
							// if ($(window).scrollTop()>mw1+mw2+mw3)
							// {
								// $('.move-wrap4').animate({'left':'0','opacity':'1'},400)
								// if ($(window).scrollTop()>mw1+mw2+mw3+mw4)
								// {
									// $('.move-wrap5').animate({'left':'0','opacity':'1'},400)
								// }
							// }
						// }
					// }
				// }
				// ----------------------------------------------------------
			},scroll_framespeed);
		};
	})

	$('.body-section-content').on('click','.index-btn-all',function(){
		var data_index_btn = $(this).data('btn');
		$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff','color':'#fff'})
		$(this).css({'background':'rgba(255,255,255,1)','border':'1px solid #000','color':'#000'})
		if ($('#article1-nav1-topmenu1').css('display')=='block')
		{
			var topminus = 50;
		}else{
			var topminus = 100;
		}
		if (this==document.getElementById('index-btn-num'+data_index_btn))
		{
			$('body, html').stop().animate({ scrollTop: $("#article-main-scroll"+data_index_btn).offset().top-topminus },300);
		}
	});
	/*-article-main-scrollall의 영역이 바뀜에 따라 index-btn-all의 색인표시-*/
	$(window).scroll(function(){
		var scroll_delay_time_2;
		if(!scroll_delay_time_2){
			scroll_delay_time_2 = setTimeout(function(){
				scroll_delay_time_2=null;
				$('.article-main-scrollall').each(function(){
					var topminus2 = 0;
					if ($('#article1-nav1-topmenu1').css('display')=='block')
					{
						var topminus2 = 55;
					}else{
						var topminus2 = 105;
					}
					if ($(window).scrollTop()>=$(this).offset().top-topminus2)
					{
						// var scm = $(this).attr('id').substring(19,20,21);
						var data_index_frame = $(this).data('index');
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff','color':'#fff'})
						$('#index-btn-num'+data_index_frame).css({'background':'rgba(255,255,255,1)','border':'1px solid #000','color':'#000'})
					}
				})
			},scroll_framespeed);
		};
	});
	/*----------------------------------------------------------------------*/

	/*기종체크 후 전화연결*/
	$('#phon-icon').click(function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='tel:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='tel:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})
	$('.footer-add-num').click(function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='sms:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='sms:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})
	/*------------------------------------------------------------*/
	/*컨탠츠썸네일 클릭시 동작 부분*/
	$('.body-section-content').on('keydown','.scrollall-con-box',function(event){
		event.preventDefault();
		if((event.keyCode||event.which)===9){
			$(this).next().focus();
		};
		if(event.shiftKey&&(event.keyCode||event.which)===9){
			$(this).prev().focus();
		};
	});
	$('.body-section-content').on('mouseover mouseleave click keydown fadeIn fadeOut','.con-box-imgborder, .con-box-caption, .scrollall-con-box',function(event){
		if (event.type=='mouseover')
		{
			if ($(this).is('.con-box-imgborder'))
			{
				if ($('.box-imgborder-filter').length==false)
				{
					$(this).append('<div class="box-imgborder-filter"></div><div class="box-imgborder-word">Click Here!</div>')
				}
			}
			$(this).children('.box-imgborder-filter').css({'opacity':'1'})
			$(this).children('.box-imgborder-filter').stop().animate({'margin-top':'0%'},90)
			$(this).children('.box-imgborder-word').css({'opacity':'1'})
			$(this).children('.box-imgborder-word').stop().animate({'top':'50%','margin-top':'-20px'},100)
		}else if (event.type=='mouseleave')
		{
			$(this).children('.box-imgborder-filter').stop().animate({'margin-top':'-57%'},90)
			$(this).children('.box-imgborder-filter').css({'opacity':'0'})
			$(this).children('.box-imgborder-word').stop().animate({'top':'0','margin-top':'110%'},100)
			$(this).children('.box-imgborder-word').css({'opacity':'0'})
			$('.box-imgborder-filter, .box-imgborder-word').remove()
		}else if ((event.type=='click')||((event.type=='keydown')&&((event.keyCode)||(event.which))===13))
		{
			console.log(this);
			$layer_sel = $(this);
			$body.css({'overflow-y':'hidden'});
			// body_tag.style.overflowY='hidden'; 위와 같은 내용.
			var datasum;
			$('.scrollall-con-box').attr({'tabindex':'-1'});
			if ((this==document.getElementById('con-box1-imgborder1'))||(this==document.getElementById('con-box1-caption1'))||(this==document.getElementById('scroll1-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder2'))||(this==document.getElementById('con-box1-caption2'))||(this==document.getElementById('scroll1-con-box2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder3'))||(this==document.getElementById('con-box1-caption3'))||(this==document.getElementById('scroll1-con-box3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder4'))||(this==document.getElementById('con-box1-caption4'))||(this==document.getElementById('scroll1-con-box4')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents4';
			}else if ((this==document.getElementById('con-box1-imgborder5'))||(this==document.getElementById('con-box1-caption5'))||(this==document.getElementById('scroll1-con-box5')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents5';
			}else if ((this==document.getElementById('con-box1-imgborder6'))||(this==document.getElementById('con-box1-caption6'))||(this==document.getElementById('scroll1-con-box6')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents6';
			}else if ((this==document.getElementById('con-box1-imgborder7'))||(this==document.getElementById('con-box1-caption7'))||(this==document.getElementById('scroll1-con-box7')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents7';
			}else if ((this==document.getElementById('con-box1-imgborder8'))||(this==document.getElementById('con-box1-caption8'))||(this==document.getElementById('scroll1-con-box8')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents8';
			}else if ((this==document.getElementById('con-box1-imgborder9'))||(this==document.getElementById('con-box1-caption9'))||(this==document.getElementById('scroll1-con-box9')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents9';
			}else if ((this==document.getElementById('con-box1-imgborder10'))||(this==document.getElementById('con-box1-caption10'))||(this==document.getElementById('scroll1-con-box10')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents10';
			}else if ((this==document.getElementById('con-box1-imgborder11'))||(this==document.getElementById('con-box1-caption11'))||(this==document.getElementById('scroll1-con-box11')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents11';
			}else if ((this==document.getElementById('con-box1-imgborder12'))||(this==document.getElementById('con-box1-caption12'))||(this==document.getElementById('scroll1-con-box12')))
			{
				datasum = portfolioindex_url+'/data/data-m.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder13'))||(this==document.getElementById('con-box1-caption13'))||(this==document.getElementById('scroll1-con-box13')))
			{
				datasum = portfolioindex_url+'/data/data-m.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder14'))||(this==document.getElementById('con-box1-caption14'))||(this==document.getElementById('scroll1-con-box14')))
			{
				datasum = portfolioindex_url+'/data/data-m.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder15'))||(this==document.getElementById('con-box1-caption15'))||(this==document.getElementById('scroll1-con-box15')))
			{
				datasum = portfolioindex_url+'/data/data-f.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder16'))||(this==document.getElementById('con-box1-caption16'))||(this==document.getElementById('scroll1-con-box16')))
			{
				datasum = portfolioindex_url+'/data/data-f.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder17'))||(this==document.getElementById('con-box1-caption17'))||(this==document.getElementById('scroll1-con-box17')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder18'))||(this==document.getElementById('con-box1-caption18'))||(this==document.getElementById('scroll1-con-box18')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder19'))||(this==document.getElementById('con-box1-caption19'))||(this==document.getElementById('scroll1-con-box19')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder20'))||(this==document.getElementById('con-box1-caption20'))||(this==document.getElementById('scroll1-con-box20')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents4';
			}else if ((this==document.getElementById('con-box1-imgborder21'))||(this==document.getElementById('con-box1-caption21'))||(this==document.getElementById('scroll1-con-box21')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents5';
			}

			else if ((this==document.getElementById('con-box2-imgborder1'))||(this==document.getElementById('con-box2-caption1'))||(this==document.getElementById('scroll2-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents12';
			}else if ((this==document.getElementById('con-box2-imgborder2'))||(this==document.getElementById('con-box2-caption2'))||(this==document.getElementById('scroll2-con-box2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents13';
			}else if ((this==document.getElementById('con-box2-imgborder3'))||(this==document.getElementById('con-box2-caption3'))||(this==document.getElementById('scroll2-con-box3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents14';
			}else if ((this==document.getElementById('con-box2-imgborder4'))||(this==document.getElementById('con-box2-caption4'))||(this==document.getElementById('scroll2-con-box4')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents15';
			}else if ((this==document.getElementById('con-box2-imgborder5'))||(this==document.getElementById('con-box2-caption5'))||(this==document.getElementById('scroll2-con-box5')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents16';
			}else if ((this==document.getElementById('con-box2-imgborder6'))||(this==document.getElementById('con-box2-caption6'))||(this==document.getElementById('scroll2-con-box6')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents17';
			}else if ((this==document.getElementById('con-box2-imgborder7'))||(this==document.getElementById('con-box2-caption7'))||(this==document.getElementById('scroll2-con-box7')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents18';
			}else if ((this==document.getElementById('con-box2-imgborder8'))||(this==document.getElementById('con-box2-caption8'))||(this==document.getElementById('scroll2-con-box8')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents19';
			}else if ((this==document.getElementById('con-box2-imgborder9'))||(this==document.getElementById('con-box2-caption9'))||(this==document.getElementById('scroll2-con-box9')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents6';
			}

			else if ((this==document.getElementById('con-box3-imgborder1'))||(this==document.getElementById('con-box3-caption1'))||(this==document.getElementById('scroll3-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents20';
			}else if ((this==document.getElementById('con-box3-imgborder2'))||(this==document.getElementById('con-box3-caption2'))||(this==document.getElementById('scroll3-con-box2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents21';
			}else if ((this==document.getElementById('con-box3-imgborder3'))||(this==document.getElementById('con-box3-caption3'))||(this==document.getElementById('scroll3-con-box3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents22';
			}else if ((this==document.getElementById('con-box3-imgborder4'))||(this==document.getElementById('con-box3-caption4'))||(this==document.getElementById('scroll3-con-box4')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents7';
			}else if ((this==document.getElementById('con-box3-imgborder5'))||(this==document.getElementById('con-box3-caption5'))||(this==document.getElementById('scroll3-con-box5')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents8';
			}else if ((this==document.getElementById('con-box4-imgborder1'))||(this==document.getElementById('con-box4-caption1'))||(this==document.getElementById('scroll4-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents23';
			}else if ((this==document.getElementById('con-box4-imgborder2'))||(this==document.getElementById('con-box4-caption2'))||(this==document.getElementById('scroll4-con-box2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents24';
			}else if ((this==document.getElementById('con-box5-imgborder1'))||(this==document.getElementById('con-box5-caption1'))||(this==document.getElementById('scroll5-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents25';
			}else if ((this==document.getElementById('con-box5-imgborder2'))||(this==document.getElementById('con-box5-caption2'))||(this==document.getElementById('scroll5-con-box2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents26';
			}else if ((this==document.getElementById('con-box5-imgborder3'))||(this==document.getElementById('con-box5-caption3'))||(this==document.getElementById('scroll5-con-box3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents27';
			}else if ((this==document.getElementById('con-box5-imgborder4'))||(this==document.getElementById('con-box5-caption4'))||(this==document.getElementById('scroll5-con-box4')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents28';
			}else if ((this==document.getElementById('con-box5-imgborder5'))||(this==document.getElementById('con-box5-caption5'))||(this==document.getElementById('scroll5-con-box5')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents29';
			}else if ((this==document.getElementById('con-box6-imgborder1'))||(this==document.getElementById('con-box6-caption1'))||(this==document.getElementById('scroll6-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents30';
			}else if ((this==document.getElementById('con-box6-imgborder2'))||(this==document.getElementById('con-box6-caption2'))||(this==document.getElementById('scroll6-con-box2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents31';
			}else if ((this==document.getElementById('con-box6-imgborder3'))||(this==document.getElementById('con-box6-caption3'))||(this==document.getElementById('scroll6-con-box3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents32';
			}else if ((this==document.getElementById('con-box7-imgborder1'))||(this==document.getElementById('con-box7-caption1'))||(this==document.getElementById('scroll7-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents33';
			}else if ((this==document.getElementById('con-box8-imgborder1'))||(this==document.getElementById('con-box8-caption1'))||(this==document.getElementById('scroll8-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents34';
			}else if ((this==document.getElementById('con-box9-imgborder1'))||(this==document.getElementById('con-box9-caption1'))||(this==document.getElementById('scroll9-con-box1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents35';
			}else if ((this==document.getElementById('con-box9-imgborder2'))||(this==document.getElementById('con-box9-caption2'))||(this==document.getElementById('scroll9-con-box2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents36';
			}else if ((this==document.getElementById('con-box9-imgborder3'))||(this==document.getElementById('con-box9-caption3'))||(this==document.getElementById('scroll9-con-box3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents37';
			}

			else{
				datasum = portfolioindex_url+'/data/data-m.html #filter-conbox-contents4';
			}

			$('#click-all-filter-index').html('<div class="filter-loader-loadingbox"><div class="loader-loadingbox-spin"><div class="loadingbox-spin-inaroundf"></div></div></div>')
			$('.click-all-filter').fadeIn('fast',function(){
				$('.click-all-filter').html('<div id="all-filter-conbox" class="all-filter-conbox"><button type="button" id="filter-title-closebtn" class="filter-title-closebtn" tabindex="0"><img src="'+portfolioindex_url+'/images/closebtn.png" alt="결과물 자세히보기 종료"></button><div id="filter-conbox-contentswrap" class="filter-conbox-contentswrap"></div></div>');
				$('.filter-conbox-contentswrap').load(datasum);
				conbox_contents();
			});
			return false;
		}
		return false;
	})
	$('.click-all-filter').on('mousedown mouseup click keydown fadeOut','.filter-title-closebtn',function(event){
		if (event.type=='mousedown')
		{
			$('.filter-title-closebtn').children('img').css({'width':'18px','height':'18px','left':'-9px','top':'-9px'});
		}
		if (event.type=='mouseup')
		{
			$('.filter-title-closebtn').children('img').css({'width':'20px','height':'20px','left':'-10px','top':'-10px'});
		}
		if ((event.type=='click')||((event.type=='keydown')&&((event.keyCode)||(event.which))===13))
		{
			$body.css({'overflow-y':''});
			$('#click-all-filter-index').html('');
			$('.click-all-filter').fadeOut('fast');
			$('#click-all-filter-index').html('<div class="filter-loader-loadingbox"><div class="loader-loadingbox-spin"><div class="loadingbox-spin-inaroundf"></div></div></div>');
			$('.scrollall-con-box').attr({'tabindex':'0'});
			$layer_sel.focus();
		}
		// else if ((event.type=='keydown')&&((event.keyCode||event.which)===9)||(event.shiftKey&&(event.keyCode||event.which)===9)){
		// 	$(this).siblings('.filter-conbox-contentswrap').find('a').focus();
		// }
	})
	// $('.all-filter-conbox').find('.filter-conbox-contentswrap').find('a').on('keydown',function(event){
	// 	// if ((event.type=='keydown')&&((event.keyCode||event.which)===9)||(event.shiftKey&&(event.keyCode||event.which)===9)){
	// 	// 	$(this).parents().parents().find('.filter-title-closebtn').focus();
	// 	// }
	// 	var this_a_leng = $('.filter-conbox-contentswrap').children('.filter-conbox-contents').find('.contents-view-img').find('a').length;
	// 	if ((event.type=='keydown')&&((event.keyCode)||(event.which))===13){
	// 		var link_a = $('.filter-conbox-contentswrap').children('.filter-conbox-contents').find('.contents-view-img').find('a').text();
	// 		console.log('link_a = '+link_a);
	// 		window.open("about:blank").location.href = link_a;
	// 	}
	// 	if(this_a_leng>1){
	// 		if ((event.type=='keydown')&&((event.keyCode||event.which)===9)||(event.shiftKey&&(event.keyCode||event.which)===9)){
	// 			$(this).sibbling('a').focus();
	// 			if($(this).eq(this_a_leng-1)){
	// 				$(this).parents().parents().find('.filter-title-closebtn').focus();
	// 			}
	// 		}
	// 	}
	// });
	$('#contents-button-inside').on('click keydown',function(event){
		if ((event.type=='click')||((event.type=='keydown')&&((event.keyCode)||(event.which))===13)){
			$('#click-all-filter-landing').css({'z-index':'-10','opacity':'0'})
			$('.move-wrap1').animate({'opacity':'1'},300)
			$('#click-all-filter-landing').find('[tabindex]').attr('tabindex','-1');
			$body.css({'overflow-y':''});
			$('.body-section-content, header, footer').find('[tabindex]').attr('tabindex','0');
			stop_clock();
		}
	});
	/*------------------------------------------------------------*/
	/*시계*/
	function clock(){
		setTimeout(function(){
			scounout = setInterval(function(){
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				var day = date.getDate();
				var day0;
				var hour = date.getHours();
				var hour0;
				var min = date.getMinutes();
				var min0;
				var second = date.getSeconds();
				var second0;
				var intTime=parseInt(hour,[10]);
				var yearcount = this.value;
				var yearcheck1 = year-yearcount;
				var apmt;

				if(month<10){
					month0='0'+month;
				}else{
					month0=month;
				};
				if(day<10){
					day0='0'+day;
				}else{
					day0=day;
				};
				if(hour>12){
					hour0=hour-12;
					apmt=' PM';
					if(hour0<10){
						hour0='0'+hour0;
					};
				}else{
					hour0=hour;
					apmt=' AM';
					if(hour0<10){
						hour0='0'+hour0;
					};
				};

				if(min<10){
					min0='0'+min;
				}else{
					min0=min;
				};

				if(second<10){
					second0='0'+second;
				}else{
					second0=second;
				};
				var today = year+' / '+month0+' / '+day0;
				var nowC=today+' -'+apmt+' '+hour0+' : '+min0+' : '+second0;
				$('.landing-contents-clock').html(nowC);
			},1000)
		}),999};
	clock();
	function stop_clock(){
		clearInterval(scounout);
	};
	/*----날씨 및 도시 표시----*/
	// navigator.geolocation.getCurrentPosition(function(pos) {
	// 	var latitude = pos.coords.latitude;
	// 	var longitude = pos.coords.longitude;
	// 	console.log("현재 위치는 : " + latitude + ", "+ longitude);
	// });
	var location_split;
    var location_lat;
    var location_lon;
	var ip = "";
	var hostname = "";
	var city = "";
	var region = "";
	var country = "";
	var loc = "";
	var org = "";

	$.getJSON("https://ipinfo.io", function(data) {
		ip = data.ip // 접속자 ip
		hostname = data.hostname // 접속자 hostname
		city = data.city // 접속자 도시
		region = data.region // 접속자 지역
		country = data.country // 접속자 국가
		loc = data.loc // 접속 위도, 경도
		org = data.org // ISP (인터넷 서비스 제공사업자)
		location_split = loc.split(',');
        location_lat = location_split[0];
		location_lon = location_split[1];
		
		var weather_key = 'f195f622a07f18107e2cac3417855541';
        var weather_api = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID='+weather_key;
        var weather_fet = fetch('https://api.openweathermap.org/data/2.5/weather?lat='+location_lat+'&lon='+location_lon+'&APPID='+weather_key+'&units=metric');
		
		function weather_json(){
			weather_fet.then(function(response){
				return response.json();
			}).then(function(json){
				var tempt = json.main.temp;
				var place = json.name;
				var weather_this = json.weather[0].main;
				if((location_lat!==''||location_lat!==null)&&(place!==''||place!==null)){
					$('.filter-landing-contents').append('<div class="cover-city"><span class="weather_place">'+place+'</span> : <span class="weather_tempt">'+tempt+'℃</span> / <span class="weather_now">'+weather_this+'</span></div>');
					if(document.querySelector('.weather_now')){
						weather_now = document.querySelector('.weather_now');
						wearther_out = weather_now.innerHTML;
						if((wearther_out=='Clear')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Clear();
						}else if((wearther_out=='Fine')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Fine();
						}else if((wearther_out=='Wind')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Wind();
						}else if((wearther_out=='Rain')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Rain();
						}else if((wearther_out=='Snow')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Snow();
						}else if((wearther_out=='Clouds')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Clouds();
						}else if((wearther_out=='Overcast')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Overcast();
						}else if((wearther_out=='Mist')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Mist();
						}else if((wearther_out=='Haze')&&((wearther_out!==null)||(wearther_out!==''))){
							weather_Haze();
						};
						console.log('weather is '+wearther_out+' now.');
					}
					
				};
		    });
		};
		weather_json();
	});
	/*--------------------*/
	/*-----------------------------------------------------------*/

	/*index mainslide 부분*/
	if($body.find('#slide-wrap'))
		{
		$('#slide-wrap').append('<div id="slide-container" class="slide-container"></div><ul id="indicator" class="indicator"></ul><div id="prev-btn" class="con-btn"></div><div id="next-btn" class="con-btn"></div>');
		var mswidth;
		var msheight;
		var wrapwidth;
		var dragindex;
		var class_slide;
		var sort_index;
		var app_sort;
		var slideNum=0;
		var jsonLocation = portfolioindex_url+'/data/slide_data.json';
		var sort_slide;
		$.getJSON(jsonLocation, function(data){
			$.each(data, function(I, item){
				slideNum++;
				$('.slide-container').append('<div class="slide" id="slide'+slideNum+'" data-index="'+slideNum+'"><img src='+item.img_url+' alt="'+item.alt_text+'" fetchpriority="high"></div>');
				$('.indicator').append('<li id="bulet'+slideNum+'" class="bulet" data-index="'+slideNum+'">●</li>');
				$('.bulet').css({'color':'#999'});
				$('#bulet1').css({'color':'#000'});
				mswidth = $('.slide').each(Array).length;/*슬라이드 전체 배열의 갯수만큼의 숫자를 추출*/
				for (var i=0;i<mswidth;i++)/*.slide의 배열이 늘어나면 알아서 아이디와 레프트값 연산 및 .indicator의 btn도 배열 갯수만큼 append*/
				{
					var t=i+1;
					sort_slide=i*100;
					$('#slide'+t).css({'left':sort_slide+'%'});
				};
			});
			//--이미지 로드와의 시간차로 height가 느리게 잡히는 것을 강제로 끌어내어 처음부터 height값 강제 적용.
			function lazy_0(){
				if($('#slide-wrap').height()==0||$('#slide-wrap').height()==null){
					$(document).ready(function(){
							msheight = $('.slide').children('img').height();
							$('#slide-wrap').css({'height':msheight});
						}
					);
				};
			};
			if($('#slide-wrap').height()==0||$('#slide-wrap').height()==null){
				setInterval(lazy_0,0);
			};
			//-----
			mswidth = $('.slide').each(Array).length;/*슬라이드 전체 배열의 갯수만큼의 숫자를 추출*/
			s_width = $('.slide').width();
			msheight = $('.slide img').height();
			var sort_all;
			var move;
			var autospeed = 3000;
			var barspeed = autospeed-200;
			var movespeed = 100;
			var boundspeed = 100;
			var framespeed = 1000/60;
			class_slide = document.getElementsByClassName('slide');
			sort_index = $('.slide, .bulet').data('index');
			app_sort = mswidth+1;

			$(window).resize(function(){
				var delay_time;
				if(!delay_time){
					delay_time = setTimeout(function() {
						delay_time=null;
						msheight = $('.slide img').height();
						var mswidth = $('.slide').each(Array).length;/*-슬라이드 전체 배열의 갯수만큼의 숫자를 추출-*/
						wrapwidth = mswidth*100;
						s_width = $('.slide').width();
						$('#slide-wrap').css({'height':msheight});
					},framespeed);
				}
			});

			//console.log(sort_index);
			page();
			controll();
			if(sort_index==1){
				$('#prev-btn').css({'z-index':'-1','opacity':'0'});
				$('#next-btn').css({'z-index':'4','opacity':'1'});
			}
			function nextBtn(){
				// console.log('app_sort = '+app_sort);
				if(sort_index<mswidth){
					sort_index++;
					move=(sort_index-1)*-100;
					$('.slide-container').stop().animate({'left':move+'%','transition-timing-function':'linear'},movespeed);
					$('.bulet').css({'color':'#999'});
					$('#bulet'+sort_index).css({'color':'#000'});
					if(sort_index==mswidth){
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'-1','opacity':'0'});
					}else if(sort_index==1){
						$('#prev-btn').css({'z-index':'-1','opacity':'0'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}else{
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}
				}else{
					sort_index=1;
					move=(sort_index-1)*-100;
					if(sort_index==mswidth){
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'-1','opacity':'0'});
					}else if(sort_index==1){
						$('#prev-btn').css({'z-index':'-1','opacity':'0'})
						$('#next-btn').css({'z-index':'4','opacity':'1'})
					}else{
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}
					$('.slide-container').stop().animate({'left':move+'%','transition-timing-function':'linear'},movespeed);
					$('.bulet').css({'color':'#999'});
					$('#bulet'+sort_index).css({'color':'#000'});
				}
				page();
				// inner_controll_s();
				//sort_all = parseInt($('.slide').data('index'));
			};

			function prevBtn(){
				if(sort_index>0&&move<0){
					// console.log('before = '+move+' / sort = '+sort_index);
					sort_index--;
					move=(sort_index-1)*-100;
					if(sort_index==mswidth){
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'-1','opacity':'0'});
					}else if(sort_index==1){
						$('#prev-btn').css({'z-index':'-1','opacity':'0'})
						$('#next-btn').css({'z-index':'4','opacity':'1'})
					}else{
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}
					$('.slide-container').stop().animate({'left':move+'%','transition-timing-function':'linear'},movespeed);
					$('.bulet').css({'color':'#999'});
					$('#bulet'+sort_index).css({'color':'#000'});
				}else{
					sort_index=mswidth;
					move=(sort_index-1)*-100;
					if(sort_index==mswidth){
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'-1','opacity':'0'});
					}else if(sort_index==1){
						$('#prev-btn').css({'z-index':'-1','opacity':'0'})
						$('#next-btn').css({'z-index':'4','opacity':'1'})
					}else{
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}
					$('.slide-container').stop().animate({'left':move+'%','transition-timing-function':'linear'},movespeed);
					$('.bulet').css({'color':'#999'});
					$('#bulet'+sort_index).css({'color':'#000'});
				}
				page();
				// inner_controll_s();
			};

			function stop_next(){
				clearTimeout(nextBtn);
			}
			function stop_prev(){
				clearTimeout(prevBtn);
			}

			$('#prev-btn').on('mouseover mouseout click',function(){
				// event.preventDefault();
				// event.stopPropagation();
				stop_s();
				stop_bar();
				if (event.type=='mouseover')
				{
					// event.preventDefault();
					// event.stopPropagation();
					stop_s();
					stop_bar();
					// inner_controll_p();
				}else if (event.type=='mouseout')
				{
					start_s();
					startbar();
					// inner_controll_s();
				}
				else if (event.type=='click')
				{
					// event.preventDefault();
					// event.stopPropagation();
					setTimeout(stop_bar,0);
					setTimeout(stop_s,0);
					setTimeout(stop_next,0);
					prevBtn();
					setTimeout(startbar,0);
					setTimeout(start_s,0);
				}
			});

			$('#next-btn').on('mouseover mouseout click',function(){
				// event.preventDefault();
				// event.stopPropagation();
				stop_s();
				stop_bar();
				if (event.type=='mouseover')
				{
					// event.preventDefault();
					// event.stopPropagation();
					stop_s();
					stop_bar();
					// inner_controll_p();
				}else if (event.type=='mouseout')
				{
					start_s();
					startbar();
					// inner_controll_s();
				}
				else if (event.type=='click')
				{
					// event.preventDefault();
					// event.stopPropagation();
					setTimeout(stop_bar,0);
					setTimeout(stop_s,0);
					setTimeout(stop_prev,0);
					nextBtn();
					setTimeout(startbar,0);
					setTimeout(start_s,0);
				}
			});

			$('.slide').on('touchstart touchmove touchend touchcancle mousedown mousemove mouseup click mouseover mouseleave',function(event){
				cal_width = s_width*0.3;
				cal_height = msheight*0.5;
				var dragmove;
				var slideNum;
				var updown;
				var tvalue;
				var yvalue;

				/*swipe 이벤트 시작*/
				if (event.type=='touchstart')
				{
					event.preventDefault();
					event.stopPropagation();
					tstart=event.originalEvent.touches[0].pageX;
					ystart=event.originalEvent.touches[0].pageY;
					// tstart=event.originalEvent.targetTouches[0].pageX;
					// ystart=event.originalEvent.targetTouches[0].pageY;
					stop_s();
					stop_bar();
				}
				else if (event.type=='touchmove'){
					event.preventDefault();
					event.stopPropagation();
					tmove=event.originalEvent.changedTouches[0].pageX;
					ymove=event.originalEvent.changedTouches[0].pageY;
					tvalue = tstart-tmove;
					yvalue = ystart-ymove;

					stop_s();
					stop_bar();

					slideNum =$('.slide').css('width').replace('px', '');
					mswidth = $('.slide').each(Array).length;
					sort_index = $(this).index();
					sort_floor=Math.floor(sort_index);
					app_left = (app_sort-1)*100;
					app_right = -100;
					move=(sort_index)*-100;
					drag_return=(sort_floor)*-100;
					dragmove = (tvalue/slideNum)*-100;
					updown=move+dragmove;
					if(yvalue>cal_height){
						$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
					}else if(yvalue<cal_height){
						if((yvalue*-1)>cal_height){
							$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
						}
					}
					$('.slide-container').css({'left':updown+'%'});
				}
				else if (event.type=='touchend')
				{
					event.preventDefault();
					event.stopPropagation();
					tmove=event.originalEvent.changedTouches[0].pageX;
					ymove=event.originalEvent.changedTouches[0].pageY;
					tvalue = tstart-tmove;
					yvalue = ystart-ymove;
					slideNum = $('.slide').css('width').replace('px', '');
					mswidth = $('.slide').each(Array).length;
					sort_index = $(this).index();
					sort_floor=Math.floor(sort_index);
					move=(sort_index)*-100;
					drag_return=(sort_floor)*-100;
					dragmove = (tvalue/slideNum)*-100;
					updown=move+dragmove;
					// console.log(tvalue-cal_width);
					mswidth = $('.slide').each(Array).length;
					stop_s();
					stop_bar();
					nextBtn();
					if (tvalue>cal_width){
						if(sort_index==mswidth){
							if(updown!==drag_return){
								$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
							}
						}else{
							// $('#next-btn').stop().click();
							nextBtn();
						}
					}else if(tvalue<-cal_width){
						if(sort_index==1){
							if(updown!==drag_return){
								$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
							}
						}else{
							stop_next();
							// $('#prev-btn').stop().click();
							prevBtn();
						}
					}
					else if(tvalue<cal_width&&tvalue>0){
						if(updown!==drag_return){
							// console.log('app_sort = '+app_sort);
							// console.log('dragmove = '+dragmove+' / move = '+move+' / drag_return'+drag_return);
							$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
						}
					}else if(tvalue>-cal_width&&tvalue<0){
						if(updown!==drag_return){
							$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
						}
					}else if(tvalue==0){
						if(yvalue==0){
							click_move();
						}else{
							if(yvalue>cal_height){
								$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
							}else if(yvalue<cal_height){
								if((yvalue*-1)>cal_height){
									$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
								}
							}
						}
					}
					start_s();
					startbar();
				}
				else if (event.type=='touchcancle')
				{
					event.preventDefault();
					event.stopPropagation();
					tmove=event.originalEvent.changedTouches[0].pageX;
					ymove=event.originalEvent.changedTouches[0].pageY;
					tvalue = tstart-tmove;
					yvalue = ystart-ymove;
					slideNum = $('.slide').css('width').replace('px', '');
					mswidth = $('.slide').each(Array).length;
					sort_index = $(this).index();
					sort_floor=Math.floor(sort_index);
					move=(sort_index)*-100;
					drag_return=(sort_floor)*-100;
					dragmove = (tvalue/slideNum)*-100;
					updown=move+dragmove;
					// console.log(tvalue-cal_width);
					mswidth = $('.slide').each(Array).length;
					stop_s();
					stop_bar();
					nextBtn();
					if (tvalue>cal_width){
						if(sort_index==mswidth){
							if(updown!==drag_return){
								$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
							}
						}else{
							// $('#next-btn').stop().click();
							nextBtn();
						}
					}else if(tvalue<-cal_width){
						if(sort_index==1){
							if(updown!==drag_return){
								$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
							}
						}else{
							stop_next();
							// $('#prev-btn').stop().click();
							prevBtn();
						}
					}
					else if(tvalue<cal_width&&tvalue>0){
						if(updown!==drag_return){
							// console.log('app_sort = '+app_sort);
							// console.log('dragmove = '+dragmove+' / move = '+move+' / drag_return'+drag_return);
							$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
						}
					}else if(tvalue>-cal_width&&tvalue<0){
						if(updown!==drag_return){
							$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
						}
					}else if(tvalue==0){
						if(yvalue==0){
							click_move();
						}else{
							if(yvalue>cal_height){
								$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
							}else if(yvalue<cal_height){
								if((yvalue*-1)>cal_height){
									$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
								}
							}
						}
					}
					start_s();
					startbar();
				}
				else if (event.type=='mouseover')
				{
					event.preventDefault();
					event.stopPropagation();
					stop_s();
					stop_bar();
					// inner_controll_p();
				}
				else if (event.type=='mouseleave')
				{
					start_s();
					startbar();
					// inner_controll_s();
				}
				else if(event.type=='click'){
					event.preventDefault();
					event.stopPropagation();
					setTimeout(stop_s,0);
					setTimeout(stop_bar,0);
					click_move();
					start_s();
					startbar();
				};
				return false;
			});

			$('.bulet').on('click mouseover mouseleave',function(){
				if (event.type=='click')
				{
					setTimeout(stop_bar,0);
					setTimeout(stop_s,0);
					sort_index = $(this).data('index');
						move=(sort_index-1)*-100;
						if(sort_index==mswidth){
							$('#prev-btn').css({'z-index':'4','opacity':'1'});
							$('#next-btn').css({'z-index':'-1','opacity':'0'});
						}else if(sort_index==1){
							$('#prev-btn').css({'z-index':'-1','opacity':'0'})
							$('#next-btn').css({'z-index':'4','opacity':'1'})
						}else{
							$('#prev-btn').css({'z-index':'4','opacity':'1'});
							$('#next-btn').css({'z-index':'4','opacity':'1'});
						}
						$('.bulet').css({'color':'#999'});
						$('#bulet'+sort_index).css({'color':'#000'});
						$('.slide-container').stop().animate({'left':move+'%'},movespeed);
						page();
						// inner_controll_s();
					setTimeout(startbar,0);
					setTimeout(start_s,0);
				}
				if (event.type=='mouseover')
				{
					stop_s();
					stop_bar();
					// inner_controll_p();
				}else if (event.type=='mouseleave')
				{
					start_s();
					startbar();
					// inner_controll_s();
				}
			});

			function lazy_0(){
				if($('#slide-wrap').height()==0){
					$(document).ready(function(){
							msheight = $('.slide').children('img').height();
							$('#slide-wrap').css({'height':msheight});
							// console.log(msheight+' --')
						}
					);
				};
			};
			function startbar(){
				setTimeout(lazy_0,0);
				if($('#slide-wrap').find('.controll').length<1){
					$('#slide-wrap').append('<span class="timebar" style="display:inline-block;position:absolute;top:0px;left:0px;width:0;height:100%;background:rgba(0,0,0,1);z-index:-1"></span>')
					$('.timebar').stop().animate({'width':'100%'},barspeed);
					bar_on = setInterval(function(){
							$('.timebar').remove();
							$('#slide-wrap').append('<span class="timebar" style="display:inline-block;position:absolute;top:0px;left:0px;width:0;height:100%;background:rgba(0,0,0,1);z-index:-1"></span>')
							$('.timebar').stop().animate({'width':'100%'},barspeed);
					},autospeed);
				}else{
					if($('.controll input[type=checkbox]').prop('checked')==false){
						$('#slide-wrap').append('<span class="timebar" style="display:inline-block;position:absolute;top:0px;left:0px;width:0;height:100%;background:rgba(0,0,0,1);z-index:-1"></span>')
						$('.timebar').stop().animate({'width':'100%'},barspeed);
						bar_on = setInterval(function(){
								$('.timebar').remove();
								$('#slide-wrap').append('<span class="timebar" style="display:inline-block;position:absolute;top:0px;left:0px;width:0;height:100%;background:rgba(0,0,0,1);z-index:-1"></span>')
								$('.timebar').stop().animate({'width':'100%'},barspeed);
						},autospeed);
					}
				}
			};
			function page(){
				if($('#slide-wrap').find('.pagecount').length<1){
					$('#slide-wrap').append('<div class="pagecount" style="position:absolute;top:0;right:0;width:60px;background:rgba(0,0,0,0.7);color:#fff;z-index:3;"><span style="display:block;width:100%;text-align:center;">'+sort_index+' / '+slideNum+'</span></div>')
				}
				else{
					$('.pagecount').children('span').text(sort_index+' / '+slideNum);
				}
			};
			function click_snd(){
				var clickSnd = new Audio();
				clickSnd.src = "media/t_btn_click.mp3";
				clickSnd.load();
				clickSnd.play();
			};
			function controll(){
				var controll_right;
				if($('#slide-wrap').find('.pagecount')){
					controll_right=60;
				}else{
					controll_right=0;
				}
				if($('#slide-wrap').find('.controll').length<1){
					$('#slide-wrap').append('<div class="controll" style="position:absolute;top:0;right:'+controll_right+'px;width:60px;background:rgba(0,0,0,0.7);color:#fff;z-index:4;">\
					<input type="checkbox" id="controll_btn" name="controll_btn"><label for="controll_btn"><span class="btn_word" style="display:block;width:100%;text-align:center;cursor:pointer;">Stop</span></label></div>')
				}
				$('.controll input[type=checkbox]').click(function(){
					if ($(this).prop('checked')==true)
					{
						$('.controll label').children('span').text('Play');
						stop_s();
						stop_bar();
					}else{
						$('.controll label').children('span').text('Stop');
						start_s();
						startbar();
					}
					click_snd();
				});
			};
			//-----------------현재 비 활성화 중으로 현재의 auto slide 상태를 바로 확인하고 싶을 때는 start_s()와 startbar()안의 if문을 일반 실행 형태로 바꾸고 inner_controll_s()/inner_controll_p() 활성화 할 것.
			function inner_controll_s(){
				$('.controll input[type=checkbox]').prop('checked',false);
				$('.controll label').children('span').text('Stop');
			};
			function inner_controll_p(){
				$('.controll input[type=checkbox]').prop('checked',true);
				$('.controll label').children('span').text('Play');
			};
			//----------------------------------------------------------------------------------------------
			function click_move(){
				var topminus = 0;
				if ($('#article1-nav1-topmenu1').css('display')=='block')
				{
					var topminus = 50;
				}else{
					var topminus = 100;
				}
				$('body, html').stop().animate({ scrollTop: $("#article-main-scroll"+sort_index).offset().top-topminus },300);
			};
			function start_s(){
				setTimeout(lazy_0,0);
				stop_next();
				if($('#slide-wrap').find('.controll').length<1){
					slide_on = setInterval(function(){
						nextBtn();
					},autospeed);
				}else{
					if($('.controll input[type=checkbox]').prop('checked')==false){
						slide_on = setInterval(function(){
							nextBtn();
						},autospeed);
					}
				}
			};
			start_s();
			startbar();
			function stop_s(){
				clearInterval(slide_on);
			};
			function stop_bar(){
				$('.timebar').remove();
				clearInterval(bar_on);
			};
		});
	};

	/*------------------------------------------------------------*/
//=============램덤 방울 particle============
	function bubble_background1(){
		var b_canbus=document.querySelector('.main-scrollall-backb');
		//setInterval(function(){/*처음에 딜레이를 주고 싶으면 이것도 활성화*/
		for (var i=1; i<5; ++i)
		{
			(function(i){
				setTimeout(function(){
					setInterval(function(){/*기본적인 딜레이 조절.처음 부부과 같이 활성화시 처음 시간+기본딜레이 시간 후에 시작 됨.*/
						var pb=Math.floor(Math.random()*60)+15;
						var bl=Math.floor(Math.random()*92)+4;
						var bt=Math.floor(Math.random()*5)+10;
						var hbt=bt/2;
						//var btm=hbt*200;
						var bubble='<span class="bubble" id="bubble'+i+'" style="width:'+pb+'px;height:'+pb+'px;left:'+bl+'%;border:2px solid rgba(0,0,0,0.15);animation:bubble-act '+hbt+'s linear infinite;"></span>';
						var bo=$('#bubble'+i);
						b_canbus.insertAdjacentHTML('beforeend',bubble);
						if (bo)
						{
							bo.remove(b_canbus.bo);
						};
					},2600);
				},i*300);
			})(i);
		}
		//},2600);
	};
	//===es6버전 original version=====================
	// function bubble_background2(){
	// 	const b_canbus=document.querySelector('.main-scrollall-backb');
	// 	const circleArray = [];
	// 	let loopCancel;
	// 	const canvas = document.createElement('canvas');
	// 	const context = canvas.getContext('2d');
	// 	b_canbus.appendChild(canvas);

	// 	function toRadian(d) {
	// 		return d * Math.PI / 180;
	// 	}

	// 	class Circle {
	// 		constructor(info) {
	// 			this.index = info.index;
	// 			this.x = info.x;
	// 			this.y = info.y;
	// 			this.speed = info.speed;
	// 			this.radius = info.radius;
	// 			this.startAngle = info.startAngle;
	// 			this.endAngle = info.endAngle;
	// 			this.clockwise = info.clockwise;
	// 			this.draw();
	// 		}

	// 		draw() {
	// 			context.beginPath();
	// 			context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
	// 			context.fillStyle = 'rgba(255, 255, 255, 0)';
	// 			context.fill();
	// 			context.strokeStyle = 'rgba(0, 0, 0, 0.15)';
	// 			context.lineWidth = '2';
	// 			context.stroke();
	// 			context.closePath();
	// 			context.fillStyle = '#fff';
	// 			//context.font = '30px bold sans-serif';
	// 			context.textAlign = "center";
	// 			//context.fillText(this.index, this.x, this.y+10);
	// 		}
	// 	}

	// 	function setLayout() {
	// 		canvas.width = window.innerWidth;
	// 		canvas.height = window.innerHeight;
	// 	}

	// 	function init() {
	// 		setLayout();
	// 		let x;
	// 		let y;
	// 		let speed;
	// 		let circle;

	// 		for (let i = 0; i < 5; i++) {
	// 			x = (Math.random() * window.innerWidth * 0.6)+(Math.random() * window.innerWidth * 0.4);
	// 			y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
	// 			//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.
	// 			speed = Math.random()*3 + 2;
	// 			circle = new Circle({
	// 				index: i,
	// 				x: x,
	// 				y: y,
	// 				speed: speed,
	// 				radius : Math.floor(Math.random()*30)+10,
	// 				startAngle : 360,
	// 				endAngle : 350,
	// 				clockwise : false
	// 			});
	// 			circleArray.push(circle);
	// 		}

	// 		render();
	// 	}


	// 	function render() {
	// 		context.clearRect(0, 0, canvas.width, canvas.height);
	// 		let circle;
	// 		for (let i = 0; i < circleArray.length; i++) {
	// 			circle = circleArray[i];
	// 			circle.y -= circle.speed;
	// 			if (circle.y < -circle.radius) {
	// 				circle.y = canvas.height;
	// 				circle.x = (Math.random() * window.innerWidth * 0.6)+(Math.random() * window.innerWidth * 0.4);
	// 				circle.radius = Math.floor(Math.random()*60)+15;
	// 			}
	// 			circle.draw();
	// 		}
	// 		loopCancel=requestAnimationFrame(render);
	// 	}
	// 	init();
	// 	window.addEventListener('resize', setLayout);
	// }
	//==========================================================================

	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function bubble_background2() {
		var b_canbus = document.querySelector('.main-scrollall-backb');
		var circleArray = [];
		var loopCancel;
		var canvas = document.createElement('canvas');
		b_canbus.appendChild(canvas);
		b_canbus.querySelector('canvas').classList.add('background_bubble');
		var background_bubble = document.querySelector('.background_bubble');
		var context = background_bubble.getContext('2d');

		function toRadian(d) {
			return d * Math.PI / 180;
		}

		var Circle =
		/*#__PURE__*/
		function () {
			function Circle(info) {
			_classCallCheck(this, Circle);

			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
			}

			_createClass(Circle, [{
			key: "draw",
			value: function draw() {
				context.beginPath();
				context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
				context.fillStyle = 'rgba(255, 255, 255, 0)';
				context.fill();
				context.strokeStyle = 'rgba(0, 0, 0, 0.15)';
				context.lineWidth = '2';
				context.stroke();
				context.closePath();
				context.fillStyle = '#fff';
				//context.font = '30px bold sans-serif';
				context.textAlign = "center";
				//context.fillText(this.index, this.x, this.y+10);
				}
			}]);

		return Circle;
	}();

		function setLayout() {
			background_bubble.width = window.innerWidth;
			background_bubble.height = window.innerHeight*1.2;
		}

		function init() {
			setLayout();
			var x;
			var y;
			var speed;
			var circle;

			for (var i = 0; i < 5; i++) {
			x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
			//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

			speed = Math.random() * 3 + 2;
			circle = new Circle({
				index: i,
				x: x,
				y: y,
				speed: speed,
				radius: Math.floor(Math.random() * 30) + 20,
				startAngle: 360,
				endAngle: 350,
				clockwise: false
			});
			circleArray.push(circle);
			}

			render();
		}

		function render() {
			context.clearRect(0, 0, background_bubble.width, background_bubble.height);
			var circle;

			for (var i = 0; i < circleArray.length; i++) {
			circle = circleArray[i];
			circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
			// circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

			// 움직임을 아래에서 위로 주고 싶을 때 사용.
			if (circle.y < -circle.radius) {
				circle.y = background_bubble.height;
				circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
				circle.radius = Math.floor(Math.random() * 30) + 20;
			}
			//  움직임을 위에서 아래로 주고 싶을 때 사용.
			// if (circle.y > background_bubble.height) {
			// 	circle.y = 0;
			// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			// 	circle.radius = Math.floor(Math.random() * 30) + 20;
			// }

			circle.draw();
			}

			loopCancel = requestAnimationFrame(render);
		}

		init();
		window.addEventListener('resize', setLayout);
	};
//==========================================================
//================particle weather==========================
function weather_Clear() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');	
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
		_classCallCheck(this, Circle);
		this.index = info.index;
		this.x = info.x;
		this.y = info.y;
		this.width = info.width;
        this.height = info.height;
		this.speed = info.speed;
		this.radius = info.radius;
		this.startAngle = info.startAngle;
		this.endAngle = info.endAngle;
		this.clockwise = info.clockwise;
		this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			var weather_img_src = portfolioindex_url+'/images/weather/weather_Clear.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y, this.width, this.height);
			}
		}]);

	return Circle;
}();
	var boxArray = []; // Box의 인스턴스들을 넣을 배열
	var phase; // 1: 기본상태 2: 패널 등장 3: 패널 보기
	function setLayout() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;
		var random_math;

		for (var i = 0; i < 8; i++) {
			x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
			//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

			random_math = Math.floor(Math.random() * 90) + 80;

			speed = Math.random() * 3 + 1;
			circle = new Circle({
				index: i,
				x: x,
				y: y,
				speed: speed,
				radius: Math.floor(Math.random() * 30) + 20,
				startAngle: 360,
				endAngle: 350,
				clockwise: false,
				width: random_math,
                height: random_math
			});
			circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
			circle = circleArray[i];
			circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
			// circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

			// 움직임을 아래에서 위로 주고 싶을 때 사용.
			if (circle.y < -circle.radius) {
				circle.y = canvas.height;
				circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
				circle.radius = Math.floor(Math.random() * 30) + 20;
			}
			//  움직임을 위에서 아래로 주고 싶을 때 사용.
			// if (circle.y > canvas.height) {
			// 	circle.y = 0;
			// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			// 	circle.radius = Math.floor(Math.random() * 30) + 20;
			// }

			circle.draw();
		}

		switch (phase) {
			case 1:
				weather_canvas.panelScale = 0.1;
				weather_canvas.selectedBox = null;

				for (let i = 0; i < boxArray.length; i++) {
					box = boxArray[i];
					// box.y = box.y - box.speed; //축약 전 모습.
					
					// box.y -= box.speed; //움직임을 아래에서 위로 주고 싶을 때 사용.
					box.y += box.speed; //움직임을 위에서 아래로 주고 싶을 때 사용.

					// origin 움직임을 아래에서 위로 주고 싶을 때 사용.
					// if (box.y < -box.height) {
					//     box.y = pan_box.height;
					// }

					// 움직임을 위에서 아래로 주고 싶을 때 사용.
					if (box.y > pan_box.height) {
						box.y = 0;
					}

				}
				
				break;
			case 2:
				panel.draw();
				// panelScale += 0.02;
				weather_canvas.panelScale = weather_canvas.panelScale + (1 - weather_canvas.panelScale)*0.05;
				weather_canvas.panelAngle = weather_canvas.panelScale * 720;

				if (weather_canvas.panelScale >= 0.999) {
					weather_canvas.panelScale = 1;
					phase = 3;
				}
				break;
			case 3:
				panel.draw();
				panel.displayContent();
				break;
		}

		loopCancel = requestAnimationFrame(render);
	}

	function boxClickHandler(e) {
		var box;
		for (var i = 0; i < circleArray.length; i++) {
			box = circleArray[i];
			if (
				e.layerX > box.x &&
				e.layerX < box.x + box.width &&
				e.layerY > box.y &&
				e.layerY < box.y + box.height
			) {
				weather_canvas.selectedBox = box;
			}
		}
	
		if (phase === 1 && weather_canvas.selectedBox) {
			phase = 2;
		} else if (phase === 3) {
			phase = 1;
		}
	};

	init();
	var contents_inside = document.getElementById('contents-button-inside');
	window.addEventListener('resize', setLayout);
	contents_inside.addEventListener('click', boxClickHandler);
};

function weather_Fine() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');	
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
			_classCallCheck(this, Circle);
			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.width = info.width;
			this.height = info.height;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			var weather_img_src = portfolioindex_url+'/images/weather/weather_Clear.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y, this.width, this.height);
			}
		}]);

	return Circle;
}();
	var boxArray = []; // Box의 인스턴스들을 넣을 배열
	var phase; // 1: 기본상태 2: 패널 등장 3: 패널 보기
	function setLayout() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;
		var random_math;

		for (var i = 0; i < 8; i++) {
			x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
			//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

			random_math = Math.floor(Math.random() * 90) + 80;

			speed = Math.random() * 3 + 1;
			circle = new Circle({
				index: i,
				x: x,
				y: y,
				speed: speed,
				radius: Math.floor(Math.random() * 30) + 20,
				startAngle: 360,
				endAngle: 350,
				clockwise: false,
				width: random_math,
                height: random_math
			});
			circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
			circle = circleArray[i];
			circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
			// circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

			// 움직임을 아래에서 위로 주고 싶을 때 사용.
			if (circle.y < -circle.radius) {
				circle.y = canvas.height;
				circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
				circle.radius = Math.floor(Math.random() * 30) + 20;
			}
			//  움직임을 위에서 아래로 주고 싶을 때 사용.
			// if (circle.y > canvas.height) {
			// 	circle.y = 0;
			// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			// 	circle.radius = Math.floor(Math.random() * 30) + 20;
			// }

			circle.draw();
		}

		switch (phase) {
			case 1:
				weather_canvas.panelScale = 0.1;
				weather_canvas.selectedBox = null;

				for (let i = 0; i < boxArray.length; i++) {
					box = boxArray[i];
					// box.y = box.y - box.speed; //축약 전 모습.
					
					// box.y -= box.speed; //움직임을 아래에서 위로 주고 싶을 때 사용.
					box.y += box.speed; //움직임을 위에서 아래로 주고 싶을 때 사용.

					// origin 움직임을 아래에서 위로 주고 싶을 때 사용.
					// if (box.y < -box.height) {
					//     box.y = pan_box.height;
					// }

					// 움직임을 위에서 아래로 주고 싶을 때 사용.
					if (box.y > pan_box.height) {
						box.y = 0;
					}

				}
				
				break;
			case 2:
				panel.draw();
				// panelScale += 0.02;
				weather_canvas.panelScale = weather_canvas.panelScale + (1 - weather_canvas.panelScale)*0.05;
				weather_canvas.panelAngle = weather_canvas.panelScale * 720;

				if (weather_canvas.panelScale >= 0.999) {
					weather_canvas.panelScale = 1;
					phase = 3;
				}
				break;
			case 3:
				panel.draw();
				panel.displayContent();
				break;
		}

		loopCancel = requestAnimationFrame(render);
	}

	function boxClickHandler(e) {
		var box;
		for (var i = 0; i < circleArray.length; i++) {
			box = circleArray[i];
			if (
				e.layerX > box.x &&
				e.layerX < box.x + box.width &&
				e.layerY > box.y &&
				e.layerY < box.y + box.height
			) {
				weather_canvas.selectedBox = box;
			}
		}
	
		if (phase === 1 && weather_canvas.selectedBox) {
			phase = 2;
		} else if (phase === 3) {
			phase = 1;
		}
	};

	init();
	var contents_inside = document.getElementById('contents-button-inside');
	window.addEventListener('resize', setLayout);
	contents_inside.addEventListener('click', boxClickHandler);
};

function weather_Wind() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
			_classCallCheck(this, Circle);
			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.width = info.width;
			this.height = info.height;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {

			var weather_img_src = portfolioindex_url+'/images/weather/weather_Clear.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y, this.width, this.height);
			}
		}]);

	return Circle;
}();
	var boxArray = []; // Box의 인스턴스들을 넣을 배열
	var phase; // 1: 기본상태 2: 패널 등장 3: 패널 보기
	function setLayout() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;

		for (var i = 0; i < 8; i++) {
			x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
			//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

			random_math = Math.floor(Math.random() * 90) + 80;

			speed = Math.random() * 3 + 1;
			circle = new Circle({
				index: i,
				x: x,
				y: y,
				speed: speed,
				radius: Math.floor(Math.random() * 30) + 20,
				startAngle: 360,
				endAngle: 350,
				clockwise: false,
				width: random_math,
                height: random_math
			});
			circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
			circle = circleArray[i];
			circle.x += circle.speed; // 움직임을 좌에서 우로 주고 싶을 때 사용.
			circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
			// circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

			// 움직임을 아래에서 위로 주고 싶을 때 사용.
			if (circle.y < -circle.radius) {
				circle.y = canvas.height;
				circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
				circle.radius = Math.floor(Math.random() * 30) + 20;
			}
			//  움직임을 위에서 아래로 주고 싶을 때 사용.
			// if (circle.y > canvas.height) {
			// 	circle.y = 0;
			// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			// 	circle.radius = Math.floor(Math.random() * 30) + 20;
			// }

			// if (circle.x > circle.radius) {
			// 	circle.y = canvas.height;
			// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			// 	circle.radius = Math.floor(Math.random() * 30) + 20;
			// }

			circle.draw();
		}

		switch (phase) {
			case 1:
				weather_canvas.panelScale = 0.1;
				weather_canvas.selectedBox = null;

				for (let i = 0; i < boxArray.length; i++) {
					box = boxArray[i];
					// box.y = box.y - box.speed; //축약 전 모습.
					
					// box.y -= box.speed; //움직임을 아래에서 위로 주고 싶을 때 사용.
					box.y += box.speed; //움직임을 위에서 아래로 주고 싶을 때 사용.

					// origin 움직임을 아래에서 위로 주고 싶을 때 사용.
					// if (box.y < -box.height) {
					//     box.y = pan_box.height;
					// }

					// 움직임을 위에서 아래로 주고 싶을 때 사용.
					if (box.y > pan_box.height) {
						box.y = 0;
					}

				}
				
				break;
			case 2:
				panel.draw();
				// panelScale += 0.02;
				weather_canvas.panelScale = weather_canvas.panelScale + (1 - weather_canvas.panelScale)*0.05;
				weather_canvas.panelAngle = weather_canvas.panelScale * 720;

				if (weather_canvas.panelScale >= 0.999) {
					weather_canvas.panelScale = 1;
					phase = 3;
				}
				break;
			case 3:
				panel.draw();
				panel.displayContent();
				break;
		}

		loopCancel = requestAnimationFrame(render);
	}

	function boxClickHandler(e) {
		var box;
		for (var i = 0; i < circleArray.length; i++) {
			box = circleArray[i];
			if (
				e.layerX > box.x &&
				e.layerX < box.x + box.width &&
				e.layerY > box.y &&
				e.layerY < box.y + box.height
			) {
				weather_canvas.selectedBox = box;
			}
		}
	
		if (phase === 1 && weather_canvas.selectedBox) {
			phase = 2;
		} else if (phase === 3) {
			phase = 1;
		}
	};

	init();
	var contents_inside = document.getElementById('contents-button-inside');
	window.addEventListener('resize', setLayout);
	contents_inside.addEventListener('click', boxClickHandler);
};

function weather_Rain() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');	
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
			_classCallCheck(this, Circle);
			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.width = info.width;
			this.height = info.height;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			var weather_img_src = portfolioindex_url+'/images/weather/weather_Rain.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y, this.width, this.height);
			}
		}]);

	return Circle;
}();

	function setLayout() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;
		var random_math;

		for (var i = 0; i < 56; i++) {
		x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
		y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
		//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

		speed = Math.random() * 3 + 40;
		random_math = Math.floor(Math.random() * 20) + 40;

		circle = new Circle({
			index: i,
			x: x,
			y: y,
			speed: speed,
			radius: Math.floor(Math.random() * 30) + 20,
			startAngle: 360,
			endAngle: 350,
			clockwise: false,
			width: random_math,
            height: random_math
		});
		circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
		circle = circleArray[i];
		// circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
		circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

		// 움직임을 아래에서 위로 주고 싶을 때 사용.
		// if (circle.y < -circle.radius) {
		// 	circle.y = canvas.height;
		// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
		// 	circle.radius = Math.floor(Math.random() * 30) + 20;
		// }
		//  움직임을 위에서 아래로 주고 싶을 때 사용.
		if (circle.y > canvas.height) {
			circle.y = 0;
			circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			circle.radius = Math.floor(Math.random() * 30) + 20;
		}

		circle.draw();
		}

		loopCancel = requestAnimationFrame(render);
	}

	init();
	window.addEventListener('resize', setLayout);
};

function weather_Snow() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');	
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
			_classCallCheck(this, Circle);
			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.width = info.width;
			this.height = info.height;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			var weather_img_src = portfolioindex_url+'/images/weather/weather_Snow.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y, this.width, this.height);
			}
		}]);

	return Circle;
}();

	function setLayout() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;
		var random_math;

		for (var i = 0; i < 56; i++) {
		x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
		y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
		//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

		speed = Math.random() * 3 + 7;
		random_math = Math.floor(Math.random() * 10) + 10;

		circle = new Circle({
			index: i,
			x: x,
			y: y,
			speed: speed,
			radius: Math.floor(Math.random() * 30) + 20,
			startAngle: 360,
			endAngle: 350,
			clockwise: false,
			width: random_math,
            height: random_math
		});
		circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
		circle = circleArray[i];
		// circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
		circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

		// 움직임을 아래에서 위로 주고 싶을 때 사용.
		// if (circle.y < -circle.radius) {
		// 	circle.y = canvas.height;
		// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
		// 	circle.radius = Math.floor(Math.random() * 30) + 20;
		// }
		//  움직임을 위에서 아래로 주고 싶을 때 사용.
		if (circle.y > canvas.height) {
			circle.y = 0;
			circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			circle.radius = Math.floor(Math.random() * 30) + 20;
		}

		circle.draw();
		}

		loopCancel = requestAnimationFrame(render);
	}

	init();
	window.addEventListener('resize', setLayout);
};

function weather_Clouds() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');	
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
			_classCallCheck(this, Circle);
			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.width = info.width;
			this.height = info.height;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			var weather_img_src = portfolioindex_url+'/images/weather/weather_Clouds.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y*0.5, this.width, this.height);
			}
		}]);

	return Circle;
}();

	function setLayout() {
		canvas.width = window.innerWidth*1.2;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;
		var random_math;

		for (var i = 0; i < 16; i++) {
		x = Math.random() * window.innerWidth * 1.2;
		y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
		//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

		speed = Math.random() * 0.8 + 1;
		random_math = Math.floor(Math.random() * 400) + 300;

		circle = new Circle({
			index: i,
			x: x,
			y: y,
			speed: speed,
			radius: Math.floor(Math.random() * 30) + 20,
			startAngle: 360,
			endAngle: 350,
			clockwise: false,
			width: random_math,
            height: random_math
		});
		circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
		circle = circleArray[i];
		circle.x += circle.speed; // 움직임을 좌에서 우로 주고 싶을 때 사용.
		// circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
		// circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

		// 움직임을 아래에서 위로 주고 싶을 때 사용.
		// if (circle.y < -circle.radius) {
		// 	circle.y = canvas.height;
		// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
		// 	circle.radius = Math.floor(Math.random() * 30) + 20;
		// }
		//  움직임을 위에서 아래로 주고 싶을 때 사용.
		if (circle.x > canvas.width) {
			circle.y = Math.random() * window.innerWidth * 0.3 + Math.random() * window.innerWidth * 0.2;
			circle.x = 0;
			circle.radius = Math.floor(Math.random() * 30) + 20;
		}

		circle.draw();
		}

		loopCancel = requestAnimationFrame(render);
	}

	init();
	window.addEventListener('resize', setLayout);
};

function weather_Overcast() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');	
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
			_classCallCheck(this, Circle);
			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.width = info.width;
			this.height = info.height;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			var weather_img_src = portfolioindex_url+'/images/weather/weather_Clouds.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y, this.width, this.height);
			}
		}]);

	return Circle;
}();

	function setLayout() {
		canvas.width = window.innerWidth*1.2;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;
		var random_math;

		for (var i = 0; i < 32; i++) {
		x = Math.random() * window.innerWidth * 1.2;
		y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
		//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

		speed = Math.random() * 0.8 + 1;
		random_math = Math.floor(Math.random() * 500) + 400;

		circle = new Circle({
			index: i,
			x: x,
			y: y,
			speed: speed,
			radius: Math.floor(Math.random() * 30) + 20,
			startAngle: 360,
			endAngle: 350,
			clockwise: false,
			width: random_math,
            height: random_math
		});
		circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
		circle = circleArray[i];
		circle.x += circle.speed; // 움직임을 좌에서 우로 주고 싶을 때 사용.
		// circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
		// circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

		// 움직임을 아래에서 위로 주고 싶을 때 사용.
		// if (circle.y < -circle.radius) {
		// 	circle.y = canvas.height;
		// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
		// 	circle.radius = Math.floor(Math.random() * 30) + 20;
		// }
		//  움직임을 위에서 아래로 주고 싶을 때 사용.
		if (circle.x > canvas.width) {
			circle.y = Math.random() * window.innerWidth;
			circle.x = 0;
			circle.radius = Math.floor(Math.random() * 30) + 20;
		}

		circle.draw();
		}

		loopCancel = requestAnimationFrame(render);
	}

	init();
	window.addEventListener('resize', setLayout);
};

function weather_Mist() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');	
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
			_classCallCheck(this, Circle);
			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.width = info.width;
			this.height = info.height;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			var weather_img_src = portfolioindex_url+'/images/weather/weather_Mist.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y, this.width, this.height);
			}
		}]);

	return Circle;
}();

	function setLayout() {
		canvas.width = window.innerWidth*1.2;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;
		var random_math;

		for (var i = 0; i < 2; i++) {
		x = 0;
		y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
		//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

		speed = Math.random() * 0.7 + 0.7;
		random_math = Math.floor(Math.random() * 1920) + 1920;

		circle = new Circle({
			index: i,
			x: x,
			y: y,
			speed: speed,
			radius: Math.floor(Math.random() * 30) + 20,
			startAngle: 360,
			endAngle: 350,
			clockwise: false,
			width: window.innerWidth*1.2,
            height: window.innerHeight*1.2
		});
		circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
		circle = circleArray[i];
		// circle.x += circle.speed; // 움직임을 좌에서 우로 주고 싶을 때 사용.
		circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
		// circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

		// 움직임을 아래에서 위로 주고 싶을 때 사용.
		// if (circle.y < -circle.radius) {
		// 	circle.y = canvas.height;
		// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
		// 	circle.radius = Math.floor(Math.random() * 30) + 20;
		// }
		//  움직임을 위에서 아래로 주고 싶을 때 사용.
		if (circle.y < -circle.radius) {
			circle.y = canvas.height*0.6;
			circle.x = 0;
			circle.radius = Math.floor(Math.random() * 30) + 20;
		}

		circle.draw();
		}

		loopCancel = requestAnimationFrame(render);
	}

	init();
	window.addEventListener('resize', setLayout);
};

function weather_Haze() {
	var b_canbus = document.querySelector('#click-all-filter-landing');
	var circleArray = [];
	var loopCancel;
	var canvas = document.createElement('canvas');	
	b_canbus.appendChild(canvas);
	b_canbus.querySelector('canvas').classList.add('weather_canvas');
	var weather_canvas = document.querySelector('.weather_canvas');
	var context = weather_canvas.getContext('2d');
	weather_canvas.style.zIndex = '-1';

	function toRadian(d) {
		return d * Math.PI / 180;
	}

	var Circle =
	/*#__PURE__*/
	function () {
		function Circle(info) {
			_classCallCheck(this, Circle);
			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.width = info.width;
			this.height = info.height;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
		}

		_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			var weather_img_src = portfolioindex_url+'/images/weather/weather_Hazy.png';
			var weather_img = new Image();
        	weather_img.src = weather_img_src;

			// context.beginPath();
			// context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
			// context.fillStyle = 'rgba(255, 255, 255, 0)';
			// context.fill();
			// context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
			// context.lineWidth = '2';
			// context.stroke();
			// context.closePath();
			// context.fillStyle = '#fff';
			// context.font = '30px bold sans-serif';
			// context.textAlign = "center";
			// context.fillText(this.index, this.x, this.y+10);

			context.drawImage(weather_img, this.x, this.y, this.width, this.height);
			}
		}]);

	return Circle;
}();

	function setLayout() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight*1.2;
	}

	function init() {
		setLayout();
		var x;
		var y;
		var speed;
		var circle;
		var random_math;

		for (var i = 0; i < 16; i++) {
		x = Math.random() * window.innerWidth * 1.2; //넓이 random생성.
		y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
		//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

		speed = Math.random() * 0.8 + 1;
		random_math = Math.floor(Math.random() * 800) + 700;

		circle = new Circle({
			index: i,
			x: x,
			y: y,
			speed: speed,
			radius: Math.floor(Math.random() * 30) + 20,
			startAngle: 360,
			endAngle: 350,
			clockwise: false,
			width: random_math,
            height: random_math
		});
		circleArray.push(circle);
		}

		render();
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		var circle;

		for (var i = 0; i < circleArray.length; i++) {
		circle = circleArray[i];
		// circle.x += circle.speed; // 움직임을 좌에서 우로 주고 싶을 때 사용.
		circle.y -= circle.speed; // 움직임을 아래에서 위로 주고 싶을 때 사용.
		// circle.y += circle.speed; // 움직임을 위에서 아래로 주고 싶을 때 사용.

		// 움직임을 아래에서 위로 주고 싶을 때 사용.
		// if (circle.y < -circle.radius) {
		// 	circle.y = canvas.height;
		// 	circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
		// 	circle.radius = Math.floor(Math.random() * 30) + 20;
		// }
		//  움직임을 위에서 아래로 주고 싶을 때 사용.
		if (circle.y < -circle.radius) {
			circle.y = canvas.height;
			circle.x = Math.random() * window.innerWidth*1.2;
			circle.radius = Math.floor(Math.random() * 30) + 20;
		}

		circle.draw();
		}

		loopCancel = requestAnimationFrame(render);
	}

	init();
	window.addEventListener('resize', setLayout);
};

//==========================================================

	/*------------------------formmail-----------------------------*/


	/*-------------------------------------------------------------*/
	return false;
});
