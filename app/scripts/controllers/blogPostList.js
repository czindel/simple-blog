(function () { 'use strict';

    /**
     * @ngdoc function
     * @name simpleBlogApp.controller:BlogPostListCtrl
     * @description
     * # BlogPostListCtrl
     * Controller of the simpleBlogApp
     */
    angular.module('simpleBlogApp')
        .controller('BlogPostListCtrl', ['$scope', 'BlogPost', function ($scope, BlogPost) {

            $scope.showAll = function () {

                $scope.filterAuthor = null;
                $scope.filterCategory = null;

                var blogPosts = BlogPost.query(function () {

                    $scope.blogPosts = blogPosts;

                    $scope.categories = _.chain(blogPosts)
                        .map(function (item) {
                            return parseCategories(item.categories);
                        })
                        .flatten()
                        .uniq()
                        .value();

                    $scope.authors = _.chain(blogPosts)
                        .pluck('creator')
                        .uniq()
                        .value();
                });
            };

            function parseCategories(categoryString){
                return _.invoke(categoryString.split(','), 'trim');
            }

            $scope.showAll();

        }]);
}());
