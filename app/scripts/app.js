(function () { 'use strict';

    /**
     * @ngdoc overview
     * @name simpleBlogApp
     * @description
     * # simpleBlogApp
     *
     * Main module of the application.
     */
    angular
      .module('simpleBlogApp', [
        'ngResource',
        'ngRoute'
      ])
      .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
          })
          .when('/new', {
            templateUrl: 'views/new.html',
            controller: 'BlogPostNewCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      });

}());
