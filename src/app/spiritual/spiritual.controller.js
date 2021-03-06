'use strict';

angular.module('church')
  .controller('SpiritualCtrl', function ($scope, $location, $anchorScroll, $http) {
		var self = this;
		$scope.scrollTo = function(id) {
		      $location.hash(id);
		      console.log($location.hash());
		      $anchorScroll();
		};
		$http.jsonp("http://api.tumblr.com/v2/blog/cbccslt.tumblr.com/posts?api_key=bTmxqiasFNakoJXkxZg6zBHj8V4YL3Hflkfai4gqg5S0gu2rwe&filter=text&limit=3&callback=JSON_CALLBACK")
			.success(function(data) {
				self.posts = data.response.posts; 
		});
  });
