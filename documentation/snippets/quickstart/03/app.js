app.controller('TodoController', function($scope, WakandaManager) {
  WakandaManager.ready().then(function() {
    /* ... */

    $scope.checkItem = function(item) {
      item.done = !item.done;
      item.$save();
    };
  });
});
