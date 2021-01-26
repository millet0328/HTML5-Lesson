//1.开始游戏
function chess1() {
	document.getElementById("chess").src = "img/black.png"
	chessColour = "white";
}

function chess2() {
	document.getElementById("chess").src = "img/white.png"
	chessColour = "black";
}
var chessColour = null;
/* 控件事件 */
function oClose() {
	if(confirm("是否退出游戏？")) {
		window.close();
	} else {
		history.back();
	}
}

//生成棋盘
var oWrap = document.getElementById("wrap");

function product() {
	for(var i = 0; i < 15; i++) {
		var oTr = document.createElement("tr");
		for(var j = 0; j < 15; j++) {
			var oTd = document.createElement("td");
			oTd.id = i + "&" + j;
			oTr.appendChild(oTd);
		}
		oWrap.appendChild(oTr);
	}
}
product();

//生成后获取棋盘
var oTr = document.querySelectorAll("tr");
var arr = [];
for(var i = 0; i < oTr.length; i++) {
	arr.push(oTr[i]);
}

var win = false;

//下棋
oWrap.onclick = function(event) {
	if(win) {
		var oDiv = document.createElement("div");
		var oRulr = document.createElement("div");
		oDiv.className = "win";
		oRulr.className = "rule";
		var oSpan = document.createElement("span");
		oSpan.innerText = "胜负已分！";
		var oBody = document.querySelector("body");
		oDiv.appendChild(oSpan);
		oDiv.appendChild(oRulr);
		oBody.appendChild(oDiv);
		return;
	}
	if(!chessColour) {
		alert("请选择一个颜色先手~！");
		return;
	}

	if(event.target.tagName == "TD") {
		var td = event.target;
		var tbSub = td.id;
		var yesNo = td.style.backgroundImage.indexOf(chessColour);
		if(yesNo > -1) {
			console.log("已经有棋子啦！海燕~");
			return;
		}
		if(chessColour == "black") {
			chessColour = "white";
			td.style.background = "url(img/" + chessColour + ".png) no-repeat";
		} else {
			chessColour = "black";
			td.style.background = "url(img/" + chessColour + ".png) no-repeat";
		}
		//在这调用一个函数，函数传参（坐标，颜色）
		oRegular(tbSub, chessColour);
	}
}
//判断输赢
//1.写一个数组，获取当前棋子坐标和颜色，向四个方向上下循环，分别由三种状态，黑白无，只有与本身亚瑟相同才可以继续向下找，其他两种情况都会中止循环

function oRegular(sub, color) {
	var oId = sub.split("&");
	//当前棋子的坐标
	var x = parseInt(oId[0]);
	var y = parseInt(oId[1]);
	//找出当前棋子的颜色
	var iscolor = arr[x].cells[y].style.backgroundImage.indexOf(color);
	//把判断好的颜色显示为人能看懂的。
	if(iscolor == -1) {
		iscolor = "transparent";
	} else {
		iscolor = color;
	}
	//利用id取各条线来判断对错
	var oDate = new Array;
	//横线
	var level = [];
	for(var m = 0; m < arr.length; m++) {
		level.push(arr[x].cells[m]);
	}
	oDate.push(level);
	//竖线
	var vertical = [];
	for(var i = 0; i < arr.length; i++) {
		vertical.push(arr[i].cells[y]);
	}
	oDate.push(vertical);
	//左斜
	var Lskew = [];
	for(var j = 0; j < arr.length; j++) {
		if(x - j >= 0 && y - j >= 0) {
			Lskew.unshift(arr[x - j].cells[y - j]);
		}
		if(x + (j + 1) <= 14 && y + (j + 1) <= 14) {
			Lskew.push(arr[x + j + 1].cells[y + j + 1]);
		}
	}
	oDate.push(Lskew);
	//右斜
	var Rskew = [];
	for(var k = 0; k < arr.length; k++) {
		if(x + k <= 14 && y - k >= 0) {
			Rskew.unshift(arr[x + k].cells[y - k]);
		}
		if(x - (k + 1) >= 0 && y + (k + 1) <= 14) {
			Rskew.push(arr[x - k - 1].cells[y + k + 1]);
		}
	}
	oDate.push(Rskew); //已经全部push进去
	//现在所有的条件都已经准备好
	//1.当前坐标的所有方向已经存进数组oDate
	//2.判断条件之一的颜色种类和有无
	//>>>>>>现在需要利用这些条件来判断result
	result(oDate, iscolor, color);
}
//2.结果
function result(odate, iscolor, color) {
	for(var i = 0; i < odate.length; i++) {
		var sum = 0;
		for(var j = 0; j < odate[i].length; j++) {
			var newcolor = odate[i][j].style.backgroundImage.slice(9, 14);
			var a = odate[i][j].style.backgroundImage.indexOf(newcolor);
			if(a == -1) {
				a = "transparent";
			} else {
				a = newcolor;
			}
			console.log(a);
			if(iscolor == a) {
				if(sum >= 4) {
					win = true;
					alert(iscolor + "赢了！");
				}
				sum++;
			}
			if(a != iscolor) {
				sum = 0;
			}
		}
		console.log(sum);
	}
}