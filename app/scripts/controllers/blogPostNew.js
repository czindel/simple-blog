(function () { 'use strict';

    /**
     * @ngdoc function
     * @name simpleBlogApp.controller:BlogPostNewCtrl
     * @description
     * # BlogPostNewCtrl
     * Controller of the simpleBlogApp
     */
    angular.module('simpleBlogApp')
      .controller('BlogPostNewCtrl', ['$scope', 'BlogPost', '$location', function ($scope, BlogPost, $location) {

          $scope.newPost = new BlogPost();

          $scope.create = function () {
                  $scope.newPost.$save();
                  $location.path('/');
          };
      }]);
}());