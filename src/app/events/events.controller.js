'use strict';

angular.module('church')
  .controller('EventsCtrl', function ($scope, $http) {
		  var self = this;
		$http.jsonp("http://api.tumblr.com/v2/blog/cbccvents.tumblr.com/posts?api_key=bTmxqiasFNakoJXkxZg6zBHj8V4YL3Hflkfai4gqg5S0gu2rwe&filter=text&limit=3&callback=JSON_CALLBACK")
			.success(function(data) {
				self.posts = data.response.posts; 
				console.log(self.posts);
		});
  });
