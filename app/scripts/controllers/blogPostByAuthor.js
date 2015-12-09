(function () { 'use strict';

    /**
     * @ngdoc function
     * @name simpleBlogApp.controller:BlogPostDetailCtrl
     * @description
     * # BlogPostDetailCtrl
     * Controller of the simpleBlogApp
     */
    angular.module('simpleBlogApp')
        .controller('BlogPostByAuthorCtrl', ['$scope', '$routeParams', 'BlogPost', function ($scope, $routeParams, BlogPost) {

            $scope.author = $routeParams.author;

            var blogPosts = BlogPost.query({author: $routeParams.author}, function () {
                $scope.blogPosts = blogPosts;
            });
        }]);
}());