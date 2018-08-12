//地图控制部分;
$(function(){
//oFirstIndex表示控制栏第一部分的span索引;
var oFirstIndex = -1;
//oSecondIndex表示控制栏第二部分的span索引;
var oSecondIndex = -1;
//	oIndex控制控制栏效果;
var oIndex = 1;

//从后台取数据，生成各省的弹窗，此时为初始化状态;
	//var resumeUrl = '/zh/tyzg/data/tszt.json';
	var resumeUrl = '/sitefiles/gjly_zh/xml/tszty/tourthemetravel/tszt.json';
	$.getJSON(resumeUrl,function(message){
//		第一个循环,生成右侧控制栏部分下的按钮;
		for(var i=0; i<message.length; i++){
			$('<span id="'+message[i].id+'">'+message[i].bt+'</span>').appendTo('.control_button .subject .content').end().attr('data-href',message[i].pageurl);
		}
//	右侧控制栏按钮点击后变色;
		$('.control_button .content span').on('click',function(){
			$('.control_button .content span').removeClass('active');
			$(this).addClass('active');
		});							
//		索引为奇数的按钮取消右边边框;
		$('.control_button .subject .content span:odd').addClass('odd');	
//		按钮的点击事件;		
		$('.control_button .subject .content span').on('click',function(){
			var id = $(this).attr('id');			
//			防止连续点击同一个按钮不断的刷新;
			if(oFirstIndex == $(this).index()){return;}
			oFirstIndex = $(this).index();				
//			所有的省全部消失,各省的弹窗移除，防止加入过的的弹窗;
			$('ul.map a.main_message').remove();
			$('ul.map li').removeClass('on').stop().fadeOut(0);
			var arr = [];
			//var tsUrl = '/zh/tyzg/data/tsztyjdgl.json';
			var tsUrl = '/sitefiles/gjly_zh/xml/objtotheme/tsztyjdgl.json';
			$.getJSON(tsUrl,function(data){
				var datanum = data.length;
				for(var i=0; i<datanum; i++){
					if(data[i].themeid==id){
						arr.push(data[i]);
						var oA = '';
						oA +='<a href="'+$('.control_button .subject .content span').eq(oFirstIndex).attr('data-href')+'.shtml?name='+data[i].provinceid+'" class="main_message clearfix" target="_blank" onclick="addtszty('+data[i].themeid+')">';
						oA +=   '<div class="imgbox fl">'
		                oA +=		'<img src="/zh/public/images/index/loding.png" data-src="'+data[i].pic+'" title="'+data[i].topic+'" alt="'+data[i].topic+'" />';
		                oA +=	'</div>'
		                oA +=   '<div class="fl resume_text">'
		                oA +=        '<h3 class="resume_title">'+data[i].topic+'</h3>';
		                oA +=        '<p>'+data[i].jj+'</p>';
		                oA +=        '<span class="main_message_submit block">查看更多</span>';
		                oA +=    '</div>';
		                oA +=    '<i class="arr"></i>';
		                oA +='</a>';
						$('.p'+data[i].provinceid+' div.province').append(oA);
					}
				}
				var arrn = arr.length; 
				for(var j = 0; j<arrn; j++){
					$('.p'+arr[j].provinceid).addClass('on').stop().fadeIn(200*j);
				}
				arr =[];
			});
		});
	});		

	//	加载生成所有的景点弹窗;
	//var url = '/zh/tyzg/data/meijing.json';
	var url ='/sitefiles/gjly_zh/xml/meijing/meijing.json';
	$.get(url,function(data){
		$('div.provinces ul li span, div.provinces ul li i').hide();
		var datan = data.length;
		for(var i=0; i<datan; i++){
			$('.b'+data[i].number+' span').show();
			$('.b'+data[i].number+' i').show();
			$('	<a href="'+data[i].pageurl+'.shtml" class="main_message clearfix" target="_blank" onclick="addmeijing('+data[i].id+')">'+
					'<div class="imgbox fl">'+
                    	'<img src="/zh/public/images/index/loding.png" data-src="'+data[i].pic+'" title="'+data[i].bt+'" alt="'+data[i].bt+'" />'+
                    '</div>'+
                    '<div class="fl resume_text">'+
                        '<h3 class="resume_title">'+data[i].bt+'</h3>'+
                        '<p>'+data[i].summary.substring(0,40)+'……</p> '+
                        '<span class="main_message_submit block">查看详情</span>'+
                    '</div>'+
                    '<i></i>'+
                '</a>').appendTo('.b'+data[i].number);				
		}
	});
// 	行政区划点击事件;
	$('.control_button .area .content span').on('click',function(){	
//		防止多次点击同一个按钮;
		var oInd = $(this).index();
		if(oInd == oSecondIndex){
			return;
		}
		oSecondIndex = $(this).index();			
	//	右侧控制栏按钮点击后变色;
		$('.control_button .content span').on('click',function(){
			$('.control_button .content span').removeClass('active');
			$(this).addClass('active');			
		});		

		$('ul.map a.main_message').remove();	//所有的弹窗移除;
		$('ul.map li').removeClass('p'+$(this).attr('id')+'_active actived on');
		$('ul.map li div.province').hide();		//所有的文字和小图标消失;
		$('div.provinces ul').hide();		
		$('div.provinces').hide();
		$('ul.map, .nanhai').show();		
		function fadeIn(areaArr){
			for(var i=0; i<areaArr.length; i++){
				$('.'+areaArr[i]).addClass('on').children('div.province').stop().fadeIn(400*i);
			}
		}
		switch (oInd){
			case 0:
			$('ul.map').css('backgroundImage','url(/zh/public/images/map/huadong.png)');
			var areaArr = ['p5','p6','p11','p8','p19','p14','p26'];
			fadeIn(areaArr);
			break;
			case 1:
			$('ul.map').css('backgroundImage','url(/zh/public/images/map/huabei2.png)');
			var areaArr = ['p25','p2','p24','p3','p28'];
			fadeIn(areaArr);		
			break;
			case 2:
			$('ul.map').css('backgroundImage','url(/zh/public/images/map/huanan.png)');
			var areaArr = ['p13','p12','p31'];
			fadeIn(areaArr);
			break;
			case 3:
			$('ul.map').css('backgroundImage','url(/zh/public/images/map/huazhong.png)');
			var areaArr = ['p30','p23','p29'];
			fadeIn(areaArr);
			break;
			case 4:
			$('ul.map').css('backgroundImage','url(/zh/public/images/map/dongbei2.png)');
			var areaArr = ['p1','p10','p27'];
			fadeIn(areaArr);
			break;
			case 5:
			$('ul.map').css('backgroundImage','url(/zh/public/images/map/xinan.png)');
			var areaArr = ['p4','p9','p16','p17','p18'];
			fadeIn(areaArr);
			break;
			case 6:
			$('ul.map').css('backgroundImage','url(/zh/public/images/map/xibei.png)');
			var areaArr = ['p15','p21','p22','p7','p20'];
			fadeIn(areaArr);
			break;
		}
//点击文字和小图标后切换到相应省的地图	;	
		$('div.province').on('click',function(){
			if(oSecondIndex != -1){
//				台湾无弹窗,如点击则不动作;
				if($(this).parent().attr('id') == '33'){
					return;
				}
				$('ul.map, .nanhai').hide();	//中国地图和南海地图消失;
				$('.p'+$(this).parent().attr('id')+'_city').show();		//各省地图显示;
				$('div.provinces').show();
				oSecondIndex = -1;
			}
		});
		$('div.provinces ul li').hover(function(){
		var src = $(this).find('img').attr('src');
		var dataSrc = $(this).find('img').attr('data-src');
		if(src == '/zh/public/images/index/loding.png'){
			$(this).find('img').attr('src',dataSrc).css({'width':'100%'});;
		}			
			$(this).css('zIndex','1000');
			$(this).children('a.main_message').stop().fadeIn(200);
		},function(){
			$(this).css('zIndex','0');
			$(this).children('a.main_message').stop().fadeOut(200);
		});
	});	
	//当各个省的详细景点图出现时,点击关闭按钮退回上一个页面;
	$('div.provinces a.close').on('click',function(){
		$('div.provinces ul').hide();		
		$('div.provinces').hide();
		$('ul.map,.nanhai').show();
		oSecondIndex = 100;
	});				
//	生成弹窗(页面加载完成，以及重置后的弹窗);
	var dataUrl = '/sitefiles/gjly_zh/xml/tourprovince/province.json';
	//var dataUrl = '/zh/tyzg/data/province.json';
	function createA (){
		$.getJSON(dataUrl,function(data){
			var datan = data.length; 
			for(var i = 0; i<datan; i++){
				var oA = '';
					oA +='<a href="'+data[i].pageurl+'.shtml" class="main_message clearfix" target="_blank">';
					oA +=   '<div class="imgbox fl">';
	                oA +=		'<img src="/zh/public/images/index/loding.png" data-src="'+data[i].img+'" title="'+data[i].name+'" alt="'+data[i].name+'" />';
	                oA +=	'</div>'
	                oA +=   '<div class="fl resume_text">'
	                oA +=        '<h3 class="resume_title">'+data[i].name+'</h3>';
	                oA +=        '<p>'+data[i].gk.substring(0,40)+'……</p>';
	                oA +=        '<span class="main_message_submit block">查看更多</span>';
	                oA +=    '</div>';
	                oA +=    '<i class="arr"></i>';
	                oA +='</a>';
				$('.p'+data[i].id+' div.province').append(oA);
			}
		});			
	}
//鼠标移入移出事件;
	var id = '';
	$('div.province').hover(function() {
		id=$(this).parent().attr('id');
		var src = $(this).find('img').attr('src');
		var dataSrc = $(this).find('img').attr('data-src');
		if(src == '/zh/public/images/index/loding.png'){
			$(this).find('img').attr('src',dataSrc).css({'width':'100%'});
		}
		$(this).parent().addClass('p'+id+'_active actived').css('zIndex',100);
		$(this).find('.main_message').stop().fadeIn(300);
		if(id=='13' || id =='34' || id =='33' || id == '28' || id == '26'){
			$(this).parent().removeClass('actived').addClass('specialy')
		}
	}, function() {
		$(this).parent().removeClass('p'+id+'_active actived').css('zIndex',0);			
		$(this).find('.main_message').stop().fadeOut(300);
		if(id=='13' || id =='34' || id =='33' || id == '28' || id == '26'){
			$(this).parent().removeClass('specialy');
		}							
	});							
//重置;
	function reset(){
		$('div.provinces ul').hide();	//同上;		
		$('div.provinces').hide();	//各省级行政区划部分隐藏;		
		$('ul.map,.nanhai').show();
		$('ul.map').css('backgroundImage','url(/zh/public/images/map/2.png)');
		$('ul.map li div.province').stop().fadeIn(0);	//小图标和文字显示;
		$('ul.map li').removeClass('p'+$(this).attr('id')+'_active actived on').stop().fadeIn(0);
		$('div.control_button span').removeClass('active'); //控制栏按钮样式复原;
		oSecondIndex = -1;
		oFirstIndex = -1;
		$('ul.map a.main_message').remove();	//各省弹窗移除;
		createA();	//生成初始化的弹窗;		
	}
	reset();	
//右侧控制栏;
	//	初始化状态;
	$('.control_button .content:eq(0)').stop().slideDown();
	$('.control_button .content:eq(1)').stop().slideUp();
	//右侧控制栏各部分头部点击事件，重置，并切换各部分状态;
	$('.control_button h3').on('click',function(){
		reset();
		if($(this).parent().index()!=oIndex){
			$('.control_button .content').slideUp();
			$(this).next().slideDown();
		}else{
			return
		}
		oIndex = $(this).parent().index();
	});
	//点击右侧控制栏的头部,重置，并恢复控制栏显示样式;
	$('div.control_button div.title').on('click',function(){
		reset();
		$('.control_button .content:eq(0)').stop().slideDown();
		$('.control_button .content:eq(1)').stop().slideUp();
		oIndex = 1;
	});	
});	