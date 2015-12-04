app.controller('TodoController', function($scope, WakandaManager) {
  WakandaManager.ready().then(function() {
    /* ... */

    $scope.deleteItem = function(item) {
      var index = $scope.tasks.indexOf(item);
      item.$remove().$promise.then(function() {
        $scope.tasks.splice(index, 1);
      });
    };
  });
});
