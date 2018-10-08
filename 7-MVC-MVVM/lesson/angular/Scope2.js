var myModule = angular.module("HelloAngular", []);

function EventController($scope) {
	$scope.count = 0;
	$scope.$on('MyEvent', function() {
		$scope.count++;
	});
}
myModule.controller("EventController1", ['$scope', "$location",
	function($scope, $location) {
		$scope.test1 = "111"
	}
]);
myModule.controller("EventController2", ['$scope', "$location",
	function($scope, $location) {
		$scope.test2 = "scope2"
	}
]);
myModule.directive('myHello', function() {
	return {
		restrict: 'EAM',
		scope: {
			myCount: '@'
		},
		template: '<a href="http://www.baidu.com">{{test2}}</a>' +
			'<div>{{test1}}</div>' +
			'<div>{{myCount}}</div>',
		link: function(scope, element, attrs, controller) {
			
		}
	}
});