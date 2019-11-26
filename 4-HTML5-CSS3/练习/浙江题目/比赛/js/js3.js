		var i = 50;
		var b;
		var j=-50;
		window.onload = function move() {
			i = i - 10;
			var div2 = document.getElementById('div2');
			div2.style.marginLeft=i+'rem';
			if(i<=31){
				div2.style.opacity=1;
			}
			if(i <= 0) {
				setTimeout(bb(), 400);
				setTimeout(cc(),450);
			}
			if(i>0){
				b = window.setTimeout(move, 400);
			}
		}
		function bb() {
			var ca = document.getElementById('ca');
			ca.style.opacity = 1;
		}
		function cc(){
			j=j+10;
			var div3=document.getElementById('div3');
			div3.style.marginLeft=j+'rem';
			if(j>=-31){
				div3.style.opacity=1;
			}
			if(j>=0){
				setTimeout(dd(),500);
			}
			if(j<0){
				b=window.setTimeout(cc,400);
			}
		}
		function dd(){
			var caz=document.getElementById('caz');
			caz.style.opacity=1;
			var c=document.getElementById('div5');
               c.innerHTML='<img src="img/p2.png" />';
		}
		function ee(){
		  setTimeout("window.location='li4.html'",100);
		}