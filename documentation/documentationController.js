'use strict';

angular.module('angular-wakanda-website')
  .controller('documentationController', function ($scope, $stateParams) {
    $scope.currentPage = $stateParams.page;
    $scope.currentSubPage = $stateParams.subpage;
  });
