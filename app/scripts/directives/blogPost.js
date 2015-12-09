(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name simpleBlogApp.directive:postDetails
     * @description
     * # postDetails
     */
    angular.module('simpleBlogApp')
        .directive('blogPost', function () {
            return {
                templateUrl: 'views/directives/blogPost.html',
                restrict: 'E',
                scope:{
                    post: '=post'
                }
            };
        });
}());
