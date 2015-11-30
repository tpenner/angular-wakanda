angular.module('starter', ['wakanda'])
  .controller('TodoController', function($scope, $wakanda) {
    $wakanda.init().then(function(ds) {
      /* ... */

      $scope.checkItem = function (item) {
        item.done = !item.done;
        item.$save();
      };
    });
  });
