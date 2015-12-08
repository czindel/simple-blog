(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name simpleBlogApp.controller:BlogPostDetailCtrl
     * @description
     * # BlogPostDetailCtrl
     * Controller of the simpleBlogApp
     */
    angular.module('simpleBlogApp')
        .controller('BlogPostDetailCtrl', ['$scope', '$routeParams', 'BlogPost', function ($scope, $routeParams, BlogPost) {

            var post = BlogPost.get({id: $routeParams.blogPostId}, function () {
                $scope.postDetails = post;
            });
        }]);
}());