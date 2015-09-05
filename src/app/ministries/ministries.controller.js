'use strict';

angular.module('church')
  .controller('MinistriesCtrl', function ($scope, $location, $anchorScroll) {
		  $scope.scrollTo = function(id) {
		      $location.hash(id);
		      console.log($location.hash());
		      $anchorScroll();
		    };
  });
