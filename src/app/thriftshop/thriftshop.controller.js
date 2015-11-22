'use strict';

angular.module('church')
  .controller('ThriftshopCtrl', function ($scope, $location, $anchorScroll, $http) {
		  var self = this;
		  $scope.scrollTo = function(id) {
		      $location.hash(id);
		      console.log($location.hash());
		      $anchorScroll();
		    };
		$http.jsonp("http://api.tumblr.com/v2/blog/cbccthriftshop.tumblr.com/posts?api_key=d5KloYBDzmBUj8Ce3iqJnbYoi4eJo0racGDqgF2mEgZGIgroam&filter=text&limit=3&callback=JSON_CALLBACK")
			.success(function(data) {
				self.posts = data.response.posts; 
		});
  });
