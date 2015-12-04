app.controller('TodoController', function($scope, WakandaManager) {
  WakandaManager.ready().then(function () {
    var ds = WakandaManager.$wakanda.$ds;

    ds.Item.$all().$promise.then(function(event) {
      $scope.tasks = event.result;
    });

    $scope.newItem = '';

    $scope.addItem = function() {
      if ($scope.newItem.length > 0) {
        var entity = ds.Item.$create();
        entity.label = $scope.newItem;
        entity.done = false;

        entity.$save().$promise.then(function() {
          $scope.tasks.push(entity);
          $scope.newItem = '';
        })
      }
    };
  });
});
