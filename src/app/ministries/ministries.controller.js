'use strict';

angular.module('church')
  .controller('MinistriesCtrl', function ($scope, $location, $anchorScroll) {
		  console.log('ministries');
		  $scope.scrollTo = function(id) {
		      $location.hash(id);
		      console.log($location.hash());
		      $anchorScroll();
		    };
  });
