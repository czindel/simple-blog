'use strict';

describe('Controller: BlogpostdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('simpleBlogApp'));

  var BlogpostdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogpostdetailCtrl = $controller('BlogpostdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogpostdetailCtrl.awesomeThings.length).toBe(3);
  });
});
