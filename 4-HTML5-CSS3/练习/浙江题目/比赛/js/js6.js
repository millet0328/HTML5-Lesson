function aa(m){
			var tu=document.getElementById('div3');
			if(m==1){
				tu.innerHTML=tu.innerHTML+"+";
			}else if(m==2){
				tu.innerHTML=tu.innerHTML;
			    div5.style.background='url(img/良背景.png)';
				if(tu.innerHTML>=300){
					div5.innerHTML='<img src="img/优.png"/>';
				}else if(tu.innerHTML>100&&tu.innerHTML<300){
					div5.innerHTML='<img src="img/良.png"/>';
				}else{
					div5.innerHTML='<img src="img/差.png"/>';
				}
			}else if(m==3){
				tu.innerHTML=0;
			}else{
				tu.innerHTML="";
				tu.innerHTML=tu.innerHTML+m;
			}
		}
		function hui(){
			setTimeout("window.location='li4.html'",100);
		}