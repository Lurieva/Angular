angular.module('app', ['ngMessages'])
    .controller('FormController', function ($scope) {

      $scope.master = {};

      $scope.save = function(user) {
        console.log(user)
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.submitForm = function(isValid) {
        if (isValid) {
          console.log('our form is validated success');
        }
      };

      $scope.reset();
    });
