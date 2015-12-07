
angular.module('simpleBlogApp').factory('BlogPost', ['$resource', function($resource) {
    return $resource('/rest_api/blogposts/:id');
}]);