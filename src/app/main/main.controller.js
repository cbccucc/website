'use strict';

angular.module('church')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
    $scope.myInterval = 3500;
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
	$scope.scrollTo = function(id) {
		setTimeout(function(){
		window.scrollTo(0, 500);
		}, 250)
	};
  });
