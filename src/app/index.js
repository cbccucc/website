"use strict";

angular.module("church", ["ngAnimate", "ngSanitize", "ngResource", "ui.router","ui.bootstrap"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "app/main/main.html",
        controller: "MainCtrl"
      })
      .state("facilities", {
        url: "/facilities",
        templateUrl: "app/facilities/facilities.html",
        controller: "FacilitiesCtrl",
		controllerAs: "facilities"
      })
      .state("give", {
        url: "/give",
        templateUrl: "app/give/give.html",
        controller: "GiveCtrl",
		controllerAs: "give"
      })
      .state("learn", {
        url: "/learn",
        templateUrl: "app/learn/learn.html",
        controller: "LearnCtrl",
		controllerAs: 'learn'
      })
      .state("ministries", {
        url: "/ministries",
        templateUrl: "app/ministries/ministries.html",
        controller: "MinistriesCtrl",
		controllerAs: 'ministries'
      })
      .state("events", {
        url: "/events",
        templateUrl: "app/events/events.html",
        controller: "EventsCtrl",
		controllerAs: 'events'
      })
      .state("plan", {
        url: "/plan",
        templateUrl: "app/plan/plan.html",
        controller: "PlanCtrl",
		controllerAs: 'plan'
      })
      .state("spiritual", {
        url: "/spiritual",
        templateUrl: "app/spiritual/spiritual.html",
        controller: "SpiritualCtrl",
		controllerAs: 'spiritual'
      })
      .state("thriftshop", {
        url: "/thriftshop",
        templateUrl: "app/thriftshop/thriftshop.html",
        controller: "ThriftshopCtrl",
		controllerAs: 'thriftshop'
      })
      .state("wfellowship", {
        url: "/womensfellowship",
        templateUrl: "app/womensfellowship/womensfellowship.html",
        controller: "WomensfellowshipCtrl",
		controllerAs: 'womensfellowship'
      })
      .state("photos", {
        url: "/photogallery",
        templateUrl: "app/photos/photos.html",
        controller: "PhotosCtrl",
		controllerAs: 'photos'
      })
	  ;//end of routes
    $urlRouterProvider.otherwise("/");
  })
;
