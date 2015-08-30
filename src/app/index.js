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
        controller: "FacilitiesCtrl"
      })
      .state("give", {
        url: "/give",
        templateUrl: "app/give/give.html",
        controller: "GiveCtrl"
      })
      .state("learn", {
        url: "/learn",
        templateUrl: "app/learn/learn.html",
        controller: "LearnCtrl"
      })
      .state("ministries", {
        url: "/ministries",
        templateUrl: "app/ministries/ministries.html",
        controller: "MinistriesCtrl"
      })
      .state("events", {
        url: "/events",
        templateUrl: "app/events/events.html",
        controller: "EventsCtrl"
      })
      .state("plan", {
        url: "/plan",
        templateUrl: "app/plan/plan.html",
        controller: "PlanCtrl"
      })
      .state("spiritual", {
        url: "/spiritual",
        templateUrl: "app/spiritual/spiritual.html",
        controller: "SpiritualCtrl"
      })
      .state("thriftshop", {
        url: "/thriftshop",
        templateUrl: "app/thriftshop/thriftshop.html",
        controller: "ThriftshopCtrl"
      })
      .state("wfellowship", {
        url: "/womensfellowship",
        templateUrl: "app/womensfellowship/womensfellowship.html",
        controller: "WomensfellowshipCtrl"
      })
      .state("photos", {
        url: "/photogallery",
        templateUrl: "app/photos/photos.html",
        controller: "PhotosCtrl"
      })
	  ;//end of routes
    $urlRouterProvider.otherwise("/");
  })
;
