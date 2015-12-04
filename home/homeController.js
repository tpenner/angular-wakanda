'use strict';

angular.module('angular-wakanda-website')
  .controller('homeController', function($scope) {

    var features = [{
      name: 'Powerful relational data model',
      description: 'Wakanda has an efficient relational data model, that allows you to work seamlessly with a large amount of relational data.',
      imageUrl: './images/datamodel.png'
    }, {
      name: 'Easy to manage data collection',
      description: 'Working with collection has never been so simple. Automatic paging, infinite scroll and caching in just few methods.',
      imageUrl: './images/datacollection.png'
    }, {
      name: 'Image upload in a line of code',
      description: 'Image upload so simple it hurts. File input, single method call, and it\'s done.',
      imageUrl: './images/image-upload.png'
    }, {
      name: 'Server-side method call made easy',
      description: 'Call your server-side methods as it were part of your Angular code. Return entities, collection or whatever suits your needs.',
      imageUrl: './images/method-call.png'
    }, {
      name: 'Coherent API with promise',
      description: 'Every method that made asynchronous work exposes a promise object, so that you keep perfect control of User Interface.',
      imageUrl: './images/api.png'
    }];

    $scope.features = features;
  });
