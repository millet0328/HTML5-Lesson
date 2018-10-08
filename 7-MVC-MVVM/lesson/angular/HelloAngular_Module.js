var myModule = angular.module("HelloAngular", []);

myModule.controller("helloAngular", ['$scope', '$http', function($scope, $http) {
	$scope.firstName = "Hello";
}]);