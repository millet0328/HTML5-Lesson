// 计算器
// new jsq($("form"),"count");
//
function jsq(parent, name) {
    $(".jsq_sbt").live("click", sbtclick);
    $(".jsq_txt").live("click", txtclick);
    var inp = $(" <input name='" + name + "' type='text'  readonly='readonly' />");
    parent.append(inp);
    var bt = $("<div></div>").css({
        width: "20px",
        height: "20px",
        background: "#090",
        position: "absolute",
        left: (inp.get(0).offsetLeft + inp.get(0).offsetWidth) + "px",
        top: inp.get(0).offsetTop + "px"
    });
    parent.append(bt);
    bt.click(btclick);
    inp.dblclick(inpclick);
    var btx = bt.get(0).offsetLeft;
    var bty = bt.get(0).offsetTop;
    var mainpanel = $("<div id='mm'></div>")
        .css({
            width: "80px",
            height: "100px",
            background: "#999",
            position: "absolute",
            left: btx + "px",
            top: bty + "px"
        });
    var txt = $("<div class='jsq_txt'>0</div>")
        .css({
            width: "80px",
            height: "20px",
            background: "#e8e",
            position: "absolute",
            left: "0px",
            top: "0px"
        });
    (function() {

        mainpanel.append(txt);
        var ts = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", ".", "0", "=", "/"];
        for (var i = 0; i < ts.length; i++) {
            var row = Math.floor(i / 4);
            var col = i % 4;
            var sbt = $("<div class='jsq_sbt'>" + ts[i] + "</div>").css({
                width: "20px",
                height: "20px",
                background: "#990",
                color: "#f00",
                position: "absolute",
                left: (col * 20) + "px",
                top: (row * 20 + 20) + "px"
            });
            mainpanel.append(sbt);
        }
    })();


    var mark = 0;
    var val = 0;

    function js(currmark, currval) {
        if (currval == 0) {
            mark = currmark;
            return;
        }
        if (mark > 0 || currmark == 0) {
            switch (mark) {
                case 1:
                    val += currval;
                    break;
                case 2:
                    val -= currval;
                    break;
                case 3:
                    val *= currval;
                    break;
                case 4:
                    val /= currval;
                    break;
            }
            mark = currmark;
        } else {
            val = currval;
            mark = currmark;
        }
        if (currmark == 0) {
            if (("" + val).length > 10) {
                txt.text(("" + val).substr(0, 10));
            } else {
                txt.text(val);
            }
        } else {
            txt.text("0");
        }
    }

    function sbtclick(ev) {
        var t = ev.currentTarget.innerHTML;
        if (t == "+") {
            js(1, parseFloat(txt.text()));
        } else if (t == "-") {
            js(2, parseFloat(txt.text()));
        } else if (t == "*") {
            js(3, parseFloat(txt.text()));
        } else if (t == "/") {
            js(4, parseFloat(txt.text()));
        } else if (t == "=") {
            js(0, parseFloat(txt.text()));
        } else {
            if (t == "." && txt.text().indexOf(".") >= 0) return;
            if (txt.text().length < 10) {
                if (txt.text() == "0") txt.text("");
                txt.text(txt.text() + t);
            }
        }

    }

    function btclick() {
        parent.append(mainpanel);
    }

    function txtclick() {
        txt.text("0");
    }

    function inpclick() {
        inp.val(txt.text());
        txt.text("0");
        mainpanel.remove();
    }
}