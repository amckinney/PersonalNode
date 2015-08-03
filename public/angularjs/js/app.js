(function () {
    'use strict';

    /* App Module */

    var mainApp = angular.module('mainApp', [
      'ngRoute',
      'homeControllers'
   ]);

    mainApp.config(['$routeProvider',
      function($routeProvider) {
         $routeProvider.
          when('/', {
            templateUrl: '/views/pages/home.ejs',
            controller: 'HomeCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);

    var pollsApp = angular.module('pollsApp', [
      'ngRoute',
      'homeControllers',
      'pollsControllers'
    ]);

    pollsApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: '/views/pages/home.ejs',
            controller: 'HomeCtrl'
          }).
          when('/polls', {
            templateUrl: '/views/pages/polls/poll-list.ejs',
            controller: 'PollListCtrl'
          }).
          when('/polls/create', {
            templateUrl: '/views/pages/polls/poll-create.ejs',
            controller: 'PollCreateCtrl'
          }).
          when('/polls/:pollId', {
            templateUrl: '/views/pages/polls/poll-detail.ejs',
            controller: 'PollDetailCtrl'
          }).
          when('/polls/votes/:pollId', {
            templateUrl: '/views/pages/polls/vote-detail.ejs',
            controller: 'VoteDetailCtrl'
          }).
          when('/polls/about', {
            templateUrl: '/views/pages/polls/about.ejs',
            controller: 'AboutCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);
}())
