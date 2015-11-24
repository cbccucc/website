'use strict';

angular.module('church')
  .controller('MinistriesCtrl', function ($scope, $location, $anchorScroll, $http) {
		  var self = this;
		  $scope.scrollTo = function(id) {
		      $location.hash(id);
		      console.log($location.hash());
		      $anchorScroll();
		    };
		$http.jsonp("http://api.tumblr.com/v2/blog/cbccedu.tumblr.com/posts?api_key=bTmxqiasFNakoJXkxZg6zBHj8V4YL3Hflkfai4gqg5S0gu2rwe&filter=text&limit=3&callback=JSON_CALLBACK")
			.success(function(data) {
				self.posts = data.response.posts; 
		});
		$http.jsonp("http://api.tumblr.com/v2/blog/cbcccole.tumblr.com/posts?api_key=bTmxqiasFNakoJXkxZg6zBHj8V4YL3Hflkfai4gqg5S0gu2rwe&filter=text&limit=3&callback=JSON_CALLBACK")
			.success(function(data) {
				self.CSEs = data.response.posts; 
		});
  });
