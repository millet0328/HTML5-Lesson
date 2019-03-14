window.onload = function() {
	// 获取元素
	var oColumn = document.querySelectorAll(".column span");
	var oBtn = document.querySelectorAll(".key button");
	var oMusic = document.querySelectorAll(".key audio");
	var oAutoPlay = document.getElementById("autoPlay");
	var oEmpty = document.getElementById("empty");
	var oImport = document.getElementById("import");
	var oTxt = document.querySelector(".tune textarea");
	var oContent = document.querySelector(".content")
	var oList = document.querySelectorAll(".content div")

	// 自动播放
	oAutoPlay.onclick = function() {
		var arr = oTxt.value.split("");
		var num = -1;

		var timer;
		clearInterval(timer);
		timer = setInterval(function() {
			++num;
			if (arr[num] == 1) {
				key(0);
			}
			if (arr[num] == 2) {
				key(1);
			}
			if (arr[num] == 3) {
				key(2);
			}
			if (arr[num] == 4) {
				key(3);
			}
			if (arr[num] == 5) {
				key(4);
			}
			if (arr[num] == 6) {
				key(5);
			}
			if (arr[num] == 7) {
				key(6);
			}
			if (arr[num] == 8) {
				key(7);
			}
			if (arr[num] == 9) {
				key(8);
			}
			if (arr[num] == '＋') {
				key(9);
			}
			if (arr[num] == '-') {
				key(10);
			}
			if (arr[num] == '×') {
				key(11);
			}
			if (arr[num] == '÷') {
				key(12);
			}
			if (arr[num] == '=') {
				key(13);
			}
			if (num === arr.length) {
				clearInterval(timer);
			}
		}, 400)

	}

	// 清空按钮
	oEmpty.onclick = function() {
		oTxt.value = "";
	}

	// 导入按钮
	oImport.onclick = function() {
		oContent.style.display = "block";
	}

	for (var i = 0; i < oList.length; i++) {
		oList[i].onclick = function() {
			oContent.style.display = "none";
			oTxt.value = "688868996544566 688689996541564 12445586 68989856 454542565 5555698";
		}
	}

	// 键盘点击
	document.onkeypress = function(e) {
		switch (e.keyCode) {
			case 49:
				// 1键
				key(0);
				break;
			case 50:
				// 2键
				key(1);
				break;
			case 51:
				// 3键
				key(2);
				break;
			case 52:
				// 4键
				key(3);
				break;
			case 53:
				// 5键
				key(4);
				break;
			case 54:
				// 6键
				key(5);
				break;
			case 55:
				// 7键
				key(6);
				break;
			case 56:
				// 8键
				key(7);
				break;
			case 57:
				// 9键
				key(8);
				break;
			case 61:
				// ＋键
				key(9);
				break;
			case 45:
				// -键
				key(10);
				break;
			case 91:
				// ×键
				key(11);
				break;
			case 93:
				// ÷键
				key(12);
				break;
			case 92:
				// =键
				key(13);
				break;
		}
	}

	function key(i) {
		oMusic[i].src = "";
		oMusic[i].src = "music/" + i + ".MP3"
		oMusic[i].play();
		var num = 40;
		var timerUp;
		clearInterval(timerUp);
		timerUp = setInterval(function() {
			num += 5;
			oColumn[i].style.top = "-" + num + "px";
			oColumn[i].style.height = num + "px";
			if (num === 240) {
				clearInterval(timerUp);
				var timerDown;
				clearInterval(timerDown);
				timerDown = setInterval(function() {
					num -= 5;
					oColumn[i].style.top = "-" + num + "px";
					oColumn[i].style.height = num + "px";
					if (num === 0) {
						clearInterval(timerDown);
					}
				}, 10)
			}
		}, 10)
	}

	// 鼠标点击发声+色块高度变化
	for (var i = 0; i < oBtn.length; i++) {
		oBtn[i].setAttribute("id", i);
		oBtn[i].onclick = function() {
			// 点击发声
			var index = this.getAttribute("id");
			oMusic[index].play();
			// 点击色块高度变化
			// 色块向上
			var num = 40;
			var timerUp = setInterval(function() {
				num += 5;
				oColumn[index].style.top = "-" + num + "px";
				oColumn[index].style.height = num + "px";
				// 色块向下
				if (num === 240) {
					clearInterval(timerUp);
					var timerDown = setInterval(function() {
						num -= 5;
						oColumn[index].style.top = "-" + num + "px";
						oColumn[index].style.height = num + "px";
						if (num === 0) {
							clearInterval(timerDown);
						}
					}, 10)
				}
			}, 10)
		}
	}
}
