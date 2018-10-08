	var oMore = document.getElementById("hide");
			console.log(oMore)
			var oList = document.getElementById("list");
			console.log(oList);
			oMore.onmouseover = function() {
				oList.style.display = "block";
			};
			oList.onmouseover = function() {
				oList.style.display = "block";
			};
			oMore.onmouseout = function() {
				oList.style.display = "none";
			};
			oList.onmouseout = function() {
				oList.style.display = "none";
			};
			var aLink = document.querySelectorAll("#list a")
			console.log(aLink)
			for(var i = 0; i < aLink.length; i++) {
				aLink[i].onmouseover=function(){
					this.style.textDecoration="underline";
				}
				aLink[i].onmouseout=function(){
					this.style.textDecoration="none";
				}
			}