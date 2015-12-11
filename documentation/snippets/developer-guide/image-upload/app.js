$scope.employee = ds.Person.$find(8);

$scope.uploadFile = function () {
  var file = document.getElementById('fileInput').files[0];

  $scope.employee.photo.$upload(file).$promise.then(function (e) {
    //Photo is uploaded and accessible on the entity
    var photoUri = $scope.employee.photo.uri;

    $scope.employee.$save().$promise.then(function () {
      //Now employee is saved with its brand new photo
    });
  });
};
