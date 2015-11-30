var app = angular.module('myApp', [
  'wakanda'
]);

app.controller('MyController', function($scope, $wakanda) {
  $scope.initStatus = 'in progress...';

  $wakanda.init()
    .then(function(ds) {
      $scope.initStatus = 'done!';
    })
    .catch(function() {
      $scope.initStatus = 'failed';
    });
});
