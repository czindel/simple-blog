(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name simpleBlogApp.directive:postDetails
     * @description
     * # postDetails
     */
    angular.module('simpleBlogApp')
        .directive('postDetails', function () {
            return {
                templateUrl: 'views/directives/postDetails.html',
                restrict: 'E',
                scope: {
                    post: '=post'
                }
            };
        });
}());
