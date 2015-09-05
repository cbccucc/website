'use strict';

angular.module('church')
  .controller('SpiritualCtrl', function ($scope, $location, $anchorScroll) {
		  $scope.scrollTo = function(id) {
		      $location.hash(id);
		      console.log($location.hash());
		      $anchorScroll();
		    };
  });
