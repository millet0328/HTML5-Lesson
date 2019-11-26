var i = -15;
var j = 20;
var z = -5;
var b;
var o = 0;
window.onload = function aa() {
	i = i + 5;
	var div3 = document.getElementById('div3');
	div3.style.opacity = 1;
	div3.style.marginLeft = i + 'rem';
	if(i >= 0) {
		setInterval(bb(), 400);
	}
	if(i < 0) {
		b = window.setTimeout(aa, 500);
	}
}

function bb() {
	j = j - 5;
	var div5 = document.getElementById('div5');
	div5.style.opacity = 1;
	div5.style.marginLeft = j + 'rem';
	if(j <= 0) {
		setInterval(cc(), 500);
	}
	if(j > 0) {
		b = window.setTimeout(bb, 500);
	}
}

function cc() {
	z = z + 4;
	var div4 = document.getElementById('div4');
	div4.style.opacity = 1;
	div4.style.marginTop = z + 'rem';
	if(j >= 0) {
		setInterval(dd(), 2000);
	}
	if(j < 0) {
		b = window.setTimeout(cc, 1000);
	}
}

function dd() {
	o = o + 0.4;
	var div6 = document.getElementById('div6');
	div6.style.opacity = o;
	if(o >= 1) {
		setInterval(ee(), 3000);
	} else {
		b = window.setTimeout(dd, 500);
	}
}

function ee() {
	var form1 = document.getElementById('form1');
	var div7 = document.getElementById('div7');
	form1.style.opacity = 1;
	div7.style.opacity = 1;
}

function im() {
	alert("ddd");
	var form3 = document.getElementById('in1').value;
	alert(form3);
	var form2 = document.getElementById('in2');
	var val=form2.options[form2.selectedIndex].value;
	var bla = document.getElementById('bla');
	if(from3.toString('输入姓名')) {
		bla.style.backgroundImage = 'url(img/底黑.png)';
		bla.innerHTML = '<img src="../img/弹窗名.png" />';
	} else {
		if(val.value==1) {
			bla.style.backgroundImage = 'url(img/底黑.png)';
			bla.innerHTML = '<img src="../img/弹窗职.png" />';
		} else if(form3.length < 2 || form3.length > 4) {
			bla.style.backgroundImage = 'url(img/底黑.png)';
			bla.innerHTML = '<img src="../img/弹窗长.png" />';
		}
	}
	if(val.value == 2) {
		setTimeout("window.location='li5.html'", 100);
	}else if(val.value==3){
		setTimeout("window.location='li6.html'", 100);
	}
}