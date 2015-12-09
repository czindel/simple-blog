(function () { 'use strict';

    /**
     * @ngdoc function
     * @name simpleBlogApp.controller:BlogPostDetailCtrl
     * @description
     * # BlogPostDetailCtrl
     * Controller of the simpleBlogApp
     */
    angular.module('simpleBlogApp')
        .controller('BlogPostByCategoryCtrl', ['$scope', '$routeParams', 'BlogPost', function ($scope, $routeParams, BlogPost) {

            $scope.category = $routeParams.category;

            var blogPosts = BlogPost.query({category: $routeParams.category}, function () {
                $scope.blogPosts = blogPosts;
            });
        }]);
}());