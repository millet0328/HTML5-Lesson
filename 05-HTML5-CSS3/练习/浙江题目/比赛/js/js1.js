var alltime = 0; //
var timer1;
var all2 = 0;
window.onload = function bb() {
	var mr;
	var time = document.getElementById('p1');
	var time1 = document.getElementById('p2');
	alltime=alltime+4;
	all2++;
	m = alltime;
	if(all2 == 1) {
		time1.innerHTML = 'loading.';
	} else if(all2 == 2) {
		time1.innerHTML = 'loading..';
	} else {
		time1.innerHTML = 'loading...';
		all2 = 0;
	}
	time.innerHTML = m + '%';
	if(alltime >= 100) {
		setTimeout("window.location='li2.html'",100);
	}
	timer1 = window.setTimeout(bb, 500);
}