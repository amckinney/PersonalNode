(function () {
    'use strict';

   /* Controllers */

   // Global "database"

   var homeControllers = angular.module('homeControllers', []);

   homeControllers.controller('HomeCtrl', ['$scope', '$http',
      function($scope, $http) {
         $scope.author = 'Alex McKinney';
         $scope.email  = 'amckinney@berkeley.edu';

         $scope.murakamiTexts = [
            'What I Talk About When I Talk About Running',
            'Hard Boiled Wonderland and the End of the World',
            'Norwegian Wood',
            'After Dark'
         ];

         $scope.dystopianNovels = [
            '1984 by George Orwell',
            'A Clockwork Orange by Anthony Burgess'
         ];

   }]);

}());
