function aa(m) {
	var tu = document.getElementById('div3');
	var div5 = document.getElementById('div5');
	if (m == 2) {
		div5.style.display = "block";
		div5.style.background = 'url(img/良背景.png)';
		if (tu.innerHTML >= 300) {
			div5.innerHTML = '<img src="img/优.png"/>';
		} else if (tu.innerHTML > 100 && tu.innerHTML < 300) {
			div5.innerHTML = '<img src="img/良.png"/>';
		} else {
			div5.innerHTML = '<img src="img/差.png"/>';
		}
	}
	if (m == 3) {
		tu.innerHTML = 0;
	}
	if (m == 1) {
		tu.innerHTML = tu.innerHTML + "+";
	}
	if (m > 10) {
		// 判断一下有没有+号，有累加，没有清空
		var flag = tu.innerHTML.indexOf('+');
		if (flag == -1) {
			tu.innerHTML = m;
		} else {
			tu.innerHTML = tu.innerHTML + m;
		}
	}

}

function hui() {
	setTimeout("window.location='li4.html'", 100);
}
