		var b;
		var i = 0;	
		window.onload = function aa() {
			var yin=document.getElementById('yin');
			var a = document.getElementById('div4');
			var d=document.getElementById('div5');
			i++;
			if(i == 1) {
				a.innerHTML = '随着农业技术的发展<br />';
			} else if(i == 2) {
				a.innerHTML = a.innerHTML + '本应成为主食的五谷杂粮<br />';
			} else if(i == 3) {
				a.innerHTML = a.innerHTML + '却渐渐被快餐零食所代替<br />';
			} else if(i == 4) {
				a.innerHTML = a.innerHTML + '人们的健康水平<br />';
			} else if(i == 5) {
				a.innerHTML = a.innerHTML + '也在餐饮条件的变化下<br />';
			} else if(i == 6) {
				a.innerHTML = a.innerHTML + '变得参差不齐';
			}
			if(i == 6) {   
				var c=document.getElementById('div5');
                c.innerHTML='<img src="img/p2.png" />';
			}
			b = window.setTimeout(aa, 1000);
		}
		function bb(){
		  setTimeout("window.location='li3.html'",100);
		}
