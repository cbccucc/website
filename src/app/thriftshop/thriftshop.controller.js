'use strict';

angular.module('church')
  .controller('ThriftshopCtrl', function ($scope, $location, $anchorScroll) {
		  $scope.scrollTo = function(id) {
		      $location.hash(id);
		      console.log($location.hash());
		      $anchorScroll();
		    };
  });
