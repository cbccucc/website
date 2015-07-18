'use strict';

angular.module('church')
  .controller('MainCtrl', function ($scope) {
    $scope.myInterval = 2000;
    $scope.slides = [
      {
        image: 'assets/images/churchfront.jpg'
      },
      {
        image: 'assets/images/churchBack.jpg'
      },
      {
        image: 'assets/images/frontofchurch.jpg'
      },
      {
        image: 'assets/images/alterglass.jpg'
      }
    ];
  });
