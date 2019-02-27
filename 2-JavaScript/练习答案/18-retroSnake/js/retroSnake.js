window.onload = function () {
    var oStart = document.getElementById("start");
    var oStop = document.getElementById("stop");
    var oRestart = document.getElementById("restart");
    var oScore = document.getElementById("score");
    var oSetZoneSize = document.querySelector(".setZoneSize");
    var oGameZone = document.querySelector(".game-zone");
    var oXLength = document.getElementById("xLength");
    var oYLength = document.getElementById("yLength");
    var oSpeed = document.getElementById("speed");
    //给初始的行，列赋值
    oXLength.value = 20;
    var xLeng=oXLength.value;
    oYLength.value = 25;
    var yLeng=oYLength.value;
    oSpeed.value = 300;
    //生成地图
    //用二维数组存储game-zone的每个div
    var DivPsition = [];
    //创建一条蛇
    var snake = [];
    function createMap() {
        var zoneWidth = oXLength.value * 20;
        var zoneHeight = oYLength.value * 20;
        oGameZone.style.width = zoneWidth + "px";
        oGameZone.style.height = zoneHeight + "px";
        //生成y
        for (var i = 0; i < oYLength.value; i++) {
            //创建行div
            var YDiv = document.createElement("div");
            YDiv.className = "row clearfix";
            oGameZone.appendChild(YDiv);
            //创建一个数组用来存放每一行的列
            var YArr = [];
            for (var j = 0; j < oXLength.value; j++) {
                var XDiv = document.createElement("div");
                //每一列上的小div
                XDiv.className = "col";
                YDiv.appendChild(XDiv);
                YArr.push(XDiv);
            }
            //把YArr存入二维数组
            DivPsition.push(YArr);
        }
        console.log(DivPsition);

        // 改变div颜色来生蛇
        for (var i = 0; i < 3; i++) {
            //改变蛇身元素的颜色，添加入蛇数组
            DivPsition[0][i].className = "col activeSnake";
            snake.push(DivPsition[0][i]);
        }
        // console.log(DivPsition[4][5]);
    }
    createMap();


    //控制蛇的变量
    var x = 2;
    var y = 0;
    //默认向右
    var direction = "right";
    var flag = true;
    //蛋的位置
    var eggX;
    var eggY;
    //分数
    var count = 0;
    //设置初始速度
    var speed = oSpeed.value;
    var timeOut = null;
    //键盘监听
    document.onkeydown = function (e) {
        if (!flag) {
            return;
        }
        //运动方向与键入方向相反时，return
        if (direction == "right" && e.keyCode == 37) {
            return;
        }
        if (direction == "left" && e.keyCode == 39) {
            return;
        }
        if (direction == "up" && e.keyCode == 40) {
            return;
        }
        if (direction == "down" && e.keyCode == 38) {
            return;
        }

        switch (e.keyCode) {
            case 37:
                direction = "left";
                break;
            case 38:
                direction = "up";
                break;
            case 39:
                direction = "right";
                break;
            case 40:
                direction = "down";
                break;
            default:
                break;
        }
        flag = false;
        //设置一个延时，防止bug
        timeOut = setTimeout(function () {
            flag = true;
        }, speed)
    }

    //蛇移动的函数
    function snakeMove() {
        if (direction == "left") {
            x--;
        }
        if (direction == "right") {
            x++;
        }
        if (direction == "up") {
            y--;
        }
        if (direction == "down") {
            y++;
        }
        //触碰边界游戏结束
        if (x < 0 || y < 0 || x >= oXLength.value || y >= oYLength.value) {
            alert("game over");
            //停止计时器
            clearInterval(moveFunction);
            return;
        }
        //碰到自身，游戏结束
        //遍历snake，如下一个块与snake中的元素相同，即为相撞
        //或者比较div的类名也可以
        for (var i = 0; i < snake.length; i++) {
            if (snake[i] == DivPsition[y][x]) {
                alert("game over");
                //停止计时器
                clearInterval(moveFunction);
                return;
            }
        }
        //判断下一个div是否为蛋
        if (eggX == x && eggY == y) {
            //是蛋就把他加入到
            DivPsition[eggY][eggX].className = "col activeSnake";
            snake.push(DivPsition[eggY][eggX]);
            count++;
            oScore.innerText = count;
            //随机产生一个新蛋
            createNewEgg();
            return count;
        } else {
            snake[0].className = "col";
            snake.shift();
            DivPsition[y][x].className = "col activeSnake";
            snake.push(DivPsition[y][x]);
        }

    }


    //创建蛋的函数
    function createNewEgg() {
        eggX = Math.floor(Math.random() * oXLength.value);
        eggY = Math.floor(Math.random() * oYLength.value);
        //判断生成的蛋是否和蛇重合
        if (DivPsition[eggY][eggX].className == "col activeSnake") {
            createNewEgg();
            return;
        } else {
            DivPsition[eggY][eggX].className = "col egg";
        }
    }

    createNewEgg();

//移动计时器
    var moveFunction = setInterval(function () {
        snakeMove()
    }, speed);
//开局先暂停
    clearInterval(moveFunction);
    //修改速度
    oSpeed.onchange=function(){
        speed=oSpeed.value;
    };

    //开始
    oStart.onclick = function () {
        clearInterval(moveFunction);
        moveFunction = setInterval(function () {
            snakeMove()
        }, speed);
    }
    //暂停
    oStop.onclick = function () {
        clearInterval(moveFunction);
    }
    //重新开始
    oRestart.onclick = function () {
        window.location.reload();
    }
    //改变地图尺寸
    oSetZoneSize.onclick=function () {
        var xLeng=oXLength.value;
        var yLeng=oYLength.value;
        DivPsition=[];
        snake = [];
        oGameZone.innerHTML="";
        createMap();
        createNewEgg();
    };
}