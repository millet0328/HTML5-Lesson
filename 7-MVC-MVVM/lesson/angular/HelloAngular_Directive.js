var app = angular.module("app", []);
app.controller("parentCtrl", function($scope) {
	$scope.params = "电饭锅";
})
app.directive("imgUpload", function() {
	return {
		restrict: "E",
		templateUrl: "view/page1.html",
		replace: true,
		transclude: true,
		//单向、双向
		scope: {
			ming: "@",
			amount: "="
		},
		controller: ["$scope", function($scope) {
			$scope.age = 20;
			$scope.city = "北京"
		}],
		compile: function(ele) {
			ele.append('<div style="width:100px;height:300px;background:red"></div>')
			return function(scope, ele, controller) {
				scope.city = "青岛";
				console.log(scope);
				console.log(ele);
				//生效轮播图
				ele.on("click", function() {
					alert("1")
				});
			}
		}
	}
});