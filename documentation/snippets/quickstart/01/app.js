angular.module('starter', [ 'wakanda' ])
    .controller('TodoController', function ($scope, $wakanda ) {
      $wakanda.init().then(function (ds) {
        	ds.Item.$all().$promise.then(function (event) {
        		$scope.tasks = event.result;
        	});
        });
    }
);
