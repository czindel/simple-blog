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

            $scope.filterByCategory = function (event, category) {

                event.preventDefault();

                $scope.filterAuthor = null;
                $scope.filterCategory = category;

                var postsByCategory = BlogPost.query({category: category}, function () {
                    $scope.blogPosts = postsByCategory;
                });
//                $scope.blogPosts = _.filter(blogPosts, function (item) {
//                    return _.contains(parseCategories(item.categories), category);
//                });
            };

            $scope.filterByAuthor = function (event, author) {

                event.preventDefault();

                $scope.filterAuthor = author;
                $scope.filterCategory = null;

                var postsByAuthor = BlogPost.query({author: author}, function () {
                    $scope.blogPosts = postsByAuthor;
                });
//                $scope.blogPosts = _.filter(blogPosts, function (item) {
//                    return item.creator === author;
//                });
            };

            function parseCategories(categoryString){
                return _.invoke(categoryString.split(','), 'trim');
            }

            $scope.showAll();

        }]);
}());
