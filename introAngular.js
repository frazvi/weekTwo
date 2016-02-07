angular.module ("myApp", []);

angular
	.module("myApp")
	.controller ("myController", ['$scope', function($scope) {
		$scope.printSomething = function () {
		console.log("I am now a funner, more loving button!")
		$scope.h1 = true
		}

		$scope.printList = function () {
			$scope.list = true
		}
		$scope.h1 = false
	
		$scope.excited = function (string) {
			string.charAt[string.length-1] + '!'
		}
	}])
