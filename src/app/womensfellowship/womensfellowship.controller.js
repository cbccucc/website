'use strict';

angular.module('church')
  .controller('WomensfellowshipCtrl', function ($scope, $location, $anchorScroll, $http) {
		  var self = this;
		  $scope.scrollTo = function(id) {
		      $location.hash(id);
		      console.log($location.hash());
		      $anchorScroll();
		    };
		$http.jsonp("http://api.tumblr.com/v2/blog/cbccwomensfellowship.tumblr.com/posts?api_key=8NhRV4q4H6o9tFGsfWzKcav7d0xIqWfxbGIxof1QPpcrfS60wL&filter=text&limit=3&callback=JSON_CALLBACK")
			.success(function(data) {
				self.posts = data.response.posts; 
		});
  });
