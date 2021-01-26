$(document).ready(function() {
	//设置时间
	function getTime() {
		var timer = new Date();
		var h = timer.getHours();
		var m = timer.getMinutes();
		var s = timer.getSeconds();
		m = add(m);
		s = add(s);
		var html = h + ":" + m + ":" + s;
		document.getElementById('time').innerHTML = html

		return html;
	};

	function getDate() {
		var timer = new Date();
		var html = '';
		var years = timer.getFullYear();
		var months = timer.getMonth();
		var days = add(timer.getDate());
		html = years + '年' + months + 1 + '月' + days + '日';
		document.getElementById('date').innerHTML = html;
		document.getElementsByClassName('days')[0].getElementsByTagName('b')[0].innerHTML = days;
		return html;
	};

	function getWeek() {
		var timer = new Date();
		var week = C(timer.getDay());
		var html = '星期' + week;
		document.getElementById('week').innerHTML = html;

		return html;
	};

	function C(week) {
		if(week == 0) {
			week = '日';
		} else if(week == 1) {
			week = '一';
		} else if(week == 2) {
			week = '二';
		} else if(week == 3) {
			week = '三';
		} else if(week == 4) {
			week = '四';
		} else if(week == 5) {
			week = '五';
		} else if(week == 6) {
			week = '六';
		}
		return week;
	};

	function add(time) {
		if(time < 10) {
			time = '0' + time;
		}
		return time;
	};
	setInterval(getTime, 1000);
	setInterval(getDate, 1000);
	setInterval(getWeek, 1000);

	function getTime1() {
		document.getElementById('time1').innerHTML = getTime();
	};

	function getDate1() {
		document.getElementById('date1').innerHTML = getDate() + '，' + getWeek();
	};
	setInterval(getTime1, 1000);
	setInterval(getDate1, 1000);

	function xx() {
		var $dLi = $('.desktop .file');
		$dLi.hover(function() {
			$(this).css({
				'background-color': 'gray',
				'border': '1px solid #fff',
				'border-radius': '5px'
			});
		}, function() {
			$(this).css({
				'background-color': '',
				'border': '',
				'border-radius': ''
			});
		});
	}
	xx();
	//日历按钮
	$('#calendar').dblclick(function() {
		$('.canlinder1').animate({
			bottom: 0
		}, 500);
	});
	$('.xx').click(function() {
		$(this).parent('.canlinder1').animate({
			bottom: '-450px'
		}, 500);
	}).hover(function() {
		$(this).css({
			'background-color': '#fd9187',
			'border-radius': '5px'
		});
	}, function() {
		$(this).css({
			'background-color': '',
			'border-radius': ''
		});
	});
	//本地存储
	function getClassName() { //获取当前页面的element
		var arr1 = [];
		$('div').each(function(i) {
			if($(this).hasClass('file')) {
				arr1.push('<div class="' + $(this).attr('class') + '" id="' + $(this).attr('id') + '" style="left:' + $(this).css('left') + ';top:' + $(this).css('top') + ';">' + $(this).html() + '</div>');
			}
		})
		//		console.log(arr1);
		return arr1;
	}

	function lol() { //
		var str = JSON.stringify(getClassName());
		//		console.log(str);
		//		str=JSON.parse(str);
		//		console.log(str);
		localStorage.person = str;
		//		console.log(localStorage.person);
		//				console.log(localStorage.person);
	}
	//			lol();
	llll = 1;
	//清除缓存
	$('.rightlist .bottom li').eq(3).click(function() {
		localStorage.clear();
		llll = 2;
		console.log(localStorage);
	});
	//刷新按钮
	$('.rightlist .top li').eq(2).click(function() {
		//		window.location.href = 'index.html';
		if(llll == 2) {
			localStorage.clear();
			window.location.reload(true);
			llll=1;
		}else{
			window.location.reload(true);
		}
		//				uu();
		//		nnn();
	});

	function nnn() {
		var ii = '<div class="file garbage" id="garbage" style="left:10px;top:10px;"><div class="icon bin"></div><p class="fileName">回收站</p></div>,<div class="file music" id="music" style="left:10px;top:110px;"><div class="icon music"></div><p class="fileName">音乐</p></div>,<div class="file picture" id="picture" style="left:10px;top:210px;"><div class="picture"><img src="img/xin.jpg" width="62px" height="62px"></div><p class="fileName">照片墙</p></div>,<div class="file calendarA" id="calendar" style="left:10px;top:310px;"><div class="calendara"><img src="img/calendar.png" width="60px" height="62px"></div><p class="fileName">日历</p></div>';
		var ia = ii.split(',');

		console.log(localStorage);
		if(localStorage.person != null || localStorage.length != 0) {
			//			uu();
			var person = JSON.parse(localStorage.person);
			//			console.log(person);
			for(var i = 0; i < person.length; i++) {
				$('.desktop').append(person[i]);
			}
			mouse('.file', true);
			xx();
		} else {
			//			console.log(ia);
			for(var i = 0; i < ia.length; i++) {
				$('.desktop').append(ia[i]);
			}
			mouse('.file', true);
			xx();
		}
	}
	nnn(); //!!!!!!!!!!开关
	//		function uu() {
	//			$('div').each(function() {
	//				if($(this).hasClass('file')) {
	//					$(this).remove();
	//				}
	//			});
	//			var person = JSON.parse(localStorage.person);
	//			for(var i = 0; i < person.length; i++) {
	//				$('.desktop').append(person[i]);
	//			}
	//			mouse('.file', true);
	//			xx();
	//		}
	//		uu();
	//设置拖动
	var gLeft = parseInt($('#garbage').css('left'));
	var gTop = parseInt($('#garbage').css('top'));
	var gWidth = $('#garbage').width();
	var gHeight = $('#garbage').height();

	function mouse(which, x) {
		var mousex = 0,
			mousey = 0;
		var divLeft, divTop;
		$(which).click(function() {}).mousedown(function(e) {
			divLeft = parseInt($(this).offset().left, 10);
			divTop = parseInt($(this).offset().top, 10);
			mousey = e.pageY;
			mousex = e.pageX;
			var width = $(window).width();
			var height = $(window).height();
			var tWidth = $(this).outerWidth(true);
			var tHeight = $(this).outerHeight(true);
			var a = width - tWidth;
			var b = height - tHeight;
			if(x) {
				$(this).bind('mousemove', function(event) {
					var left = divLeft + (event.pageX - mousex);
					var top = divTop + (event.pageY - mousey);
					left = Math.min(a, Math.max(0, left));
					top = Math.min(b, Math.max(0, top));
					$(this).css({
						'top': top + 'px',
						'left': left + 'px',
						'position': 'absolute'
					});
					if((top > gTop && left > gLeft) && (top < (gTop + gHeight - 5) && left < (gLeft + gWidth - 5))) {
						$(this).remove();
						getList();
					};
					return false;
				});
			} else {
				$(this).bind('mousemove', function(event) {
					var left = divLeft + (event.pageX - mousex);
					var top = divTop + (event.pageY - mousey);
					left = Math.min(a, Math.max(0, left));
					top = Math.min(b, Math.max(0, top));
					$(this).css({
						'top': top + 'px',
						'left': left + 'px',
						'position': 'absolute'
					});
					return false;
				});
			}
		});
		$(document).mouseup(function() {
			$(which).unbind('mousemove');
			lol();
		});
	};
	mouse('.time');
	mouse('.file', true);
	//日历
	$('#ca').calendar({
		width: 320,
		height: 320,
		data: [{
			date: '2015/12/24',
			value: 'Christmas Eve'
		}, {
			date: '2015/12/25',
			value: 'Merry Christmas'
		}, {
			date: '2016/01/01',
			value: 'Happy New Year'
		}],
		//		onSelected: function(view, date, data) {
		//			console.log('view:' + view)
		//			alert('date:' + date)
		//			console.log('data:' + (data || 'None'));
		//		}
	});
	document.oncontextmenu = function() {
		return false;
	};

	//设置右键菜单
	var wLeft = $(window).width();
	var cWidth = $('.rightlist').width();
	var cHeight = $('.rightlist').height();
	var wTop = $(window).height();
	$('.desktop').mousedown(function(e) {
		if(e.which == 3) {
			e.preventDefault();
			var left = e.pageX;
			var top = e.pageY;
			$('.rightlist').css({
				'top': top + 'px',
				'left': left + 'px'
			}).show();
		}
		$(document).click(function() {
			$('.rightlist').css('display', 'none');
		});

	});
	//设置查看hover
	function hover(which, n, subwhich) {
		$(which).eq(n).hover(function() {
			$(subwhich).css({
				display: 'block'
			});
			$(subwhich).hover(function() {
				$(this).css('display', 'block');
			}, function() {
				$(this).css('display', 'none');
			})
		}, function() {
			$(subwhich).css({
				display: 'none'
			});
		});
	};
	hover(".rightlist .top li", 0, '.icon1');
	hover(".rightlist .top li", 1, '.date');
	//设置图标大小
	$('.icon1 span').eq(0).click(function(e) {
		var height = $('.file').css('height');
		$('.file p').css('display', 'none');
		$('.file').css('height', '80px');
		$('.file').each(function(i) {
			if(i >= 1 && i != 5 && i != 10 && i != 15 && i != 20) {
				var top = parseInt($(this).css('top'));
				if(height == '120px') {
					$(this).animate({
						'top': (top - i * 40) + 'px'
					}, 500);
				} else if(height == '100px') {
					$(this).animate({
						'top': (top - i * 20) + 'px'
					}, 500);
				}
			}
		});
	});
	$('.icon1 span').eq(2).click(function(e) {
		var height = $('.file').css('height');
		$('.file p').css('display', 'block');
		$('.file').css('height', '100px');
		$('.file').each(function(i) {
			if(i >= 1 && i != 5 && i != 10 && i != 15 && i != 20) {
				var top = parseInt($(this).css('top'));
				if(height == '80px') {
					$(this).animate({
						'top': (top + i * 20) + 'px'
					}, 500);
				} else if(height == '100px') {
					$(this).animate({
						'top': top + 'px'
					}, 500);
				} else if(height == '120px') {
					$(this).animate({
						'top': (top - i * 20) + 'px'
					}, 500);
				}
			};
		});
	});
	$('.icon1 span').eq(1).click(function(e) {
		var height = $('.file').css('height');
		$('.file p').css('display', 'block');
		$('.file').css('height', '120px');
		$('.file').each(function(i) {
			if(i >= 1 && i != 5 && i != 10 && i != 15 && i != 20) {
				var top = parseInt($(this).css('top'));
				if(height == '80px') {
					$(this).animate({
						'top': (top + i * 40) + 'px'
					}, 500);
				} else if(height == '100px') {
					$(this).animate({
						'top': (top + i * 20) + 'px'
					}, 500);
				}
			}
		});
	});
	//给右键列表下三设置样式
	$('.rightlist .bottom li').each(function(i) {
		if(i < $('.rightlist .bottom li').length - 1) {
			$(this).css({
				'color': '#999999',
				'cursor': 'not-allowed'
			})
		}
	});
	//li设置hover

	function getList() {
		var l = $('.file'); //取得当前列表
		var arrTop = [10, 110, 210, 310, 410];
		var arrLeft = [10, 120, 220, 320, 420, 520];
		l.each(function(i) {
			if(i <= 4) {
				$(this).animate({
					'left': arrLeft[0] + 'px',
					'top': arrTop[i] + 'px'
				}, 500);
			} else if(i >= 5 && i <= 9) {
				$(this).animate({
					'left': arrLeft[1] + 'px',
					'top': arrTop[i - 5] + 'px'
				}, 500);
			} else if(i > 9 && i <= 14) {
				$(this).animate({
					'left': arrLeft[2] + 'px',
					'top': arrTop[i - 10] + 'px'
				}, 500);
			} else if(i > 14 && i <= 19) {
				$(this).animate({
					'left': arrLeft[3] + 'px',
					'top': arrTop[i - 16] + 'px'
				}, 500);
			} else if(i > 19 && i <= 24) {
				$(this).animate({
					'left': arrLeft[4] + 'px',
					'top': arrTop[i - 20] + 'px'
				}, 500);
			} else if(i > 24 && i <= 29) {
				$(this).animate({
					'left': arrLeft[5] + 'px',
					'top': arrTop[i - 25] + 'px'
				}, 500);
			}
		});
		mouse(l, true);
		var h = parseInt(l.eq(l.length - 1).css('top'));
		return h;
	}

	//新建文件夹按钮
	var obj = {};
	var y = 1;
	$('.rightlist .top li').eq(3).click(function() {
		var n = parseInt($('.file').eq($('.file').length - 1).css('top'));
		var n = getList();
		obj[n] = y++;
		$('.desktop').append('<div class="file aaddfile' + (y - 1) + '" id="addfile" style="left: 10px;"><div class="icon addfile"></div><p class="fileName">新建文件夹' + obj[n] + '</p></div>');
		getList();
		lol();
		var $dLi = $('.desktop .file');
		$dLi.hover(function() {
			$(this).css({
				'background-color': 'gray',
				'border': '1px solid #fff',
				'border-radius': '5px'
			});
		}, function() {
			$(this).css({
				'background-color': '',
				'border': '',
				'border-radius': ''
			});
		});
	});
});