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
            templateUrl: 'views/list.html',
            controller: 'BlogPostListCtrl'
          })
          .when('/new', {
            templateUrl: 'views/new.html',
            controller: 'BlogPostNewCtrl'
          })
          .when('/detail/:blogPostId', {
            templateUrl: 'views/detail.html',
            controller: 'BlogPostDetailCtrl'
          })
          .when('/by-category/:category', {
            templateUrl: 'views/by-category.html',
            controller: 'BlogPostByCategoryCtrl'
          })
          .when('/by-author/:author', {
            templateUrl: 'views/by-author.html',
            controller: 'BlogPostByAuthorCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      });

}());
