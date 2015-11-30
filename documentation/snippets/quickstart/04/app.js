angular.module('starter', ['wakanda'])
  .controller('TodoController', function($scope, $wakanda) {
    $wakanda.init().then(function(ds) {
      /* ... */

      $scope.deleteItem = function (item) {
        var index = $scope.tasks.indexOf(item);
        item.$remove().$promise.then(function () {
          $scope.tasks.splice(index, 1);
        });
      };
    });
  });
