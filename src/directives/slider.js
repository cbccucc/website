'use strict';
(function(angular, $){
	angular.module('church', [])
		//In a run function, make sure your library is available, if not throw error
		.run(function(){
			if(!$ || !$.fn || !$.fn.slick){
				throw new Error('jQuery and slick are needed to use the slider module');
			}
		})
		.directive('slider', [function(){
			return {
				restrict: 'E',
				scope: {
					slickOptions: '=',
					slidesToShow: '=',
					speed: '=',
					afterChange: '&'	
				},
				controller: function(){
				
				},
				link: function(scope, element, attr, sliderCtrl){
					var slickOptions = angular.extend({}, scope.slickOptions);

					var watchOptions = ['slidesToShow', 'speed'];
					watchOptions.forEach(function(opt){
						if(opt in scope){
							//warn when your attribute will overwrite the passed in slick options
							if(opt in slickOptions){
								console.warn('[slider] The ' + opt + ' attribute setting will overwrite passed values through directive options');	
							}
						slickOptions[opt] = scope[opt];		
						}	
					});
				// Initialize our slickObj
				sliderCtrl.slickObj = $(element).slick(slickOptions);
				//Now, what if those watcher values change
				watchOptions.forEach(function(opt){
					scope.$watch(opt, function(v){
						if(v !== undefined){
								//update
							sliderCtrl.slickObj.slick('slickSetOption', opt, v, true);
						}
					});
				});
				//listen for events
				if(('afterChange' in scope) && scope.afterChange){
					sliderCtrl.slickObj.on('afterChange', function(event, slick, currentSlide){
						scope.$evalAsync(function(){
							scope.afterChange({
								$event: event,
								$currentSlide: currentSlide		
							});	
						});	
					});	
				}	
				scope.$on('$destroy', function(){
					sliderCtrl.slickObj.slick('unslick');	
				});
			}	
		};	
	}])
	.directive('sliderItem', function(){
		return {
			require: '^slider',
			restrict: 'EA',
			scope:{
					
			},
			link: function(scope, element, attr, sliderCtrl){
				sliderCtrl.slickObj.slick('slickAdd', element);
				scope.$on('destroy', function(){
					sliderCtrl.slickObj.slick('slickremove', element);	
				});	
			}	
		};	
	});	

}(this.angular, this.jQuery));
