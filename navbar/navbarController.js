angular.module('angular-wakanda-website')
  .controller('navbarController', function($scope, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function () {
      $scope.searchString = '';
    });
  });
