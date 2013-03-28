'use strict';


// Declare app level module which depends on filters, and services
angular.module('app', ['app.filters', 'app.services', 'app.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/registration', {templateUrl: 'partials/partial1.html', controller: lessonForm});
    $routeProvider.otherwise({redirectTo: '/partial1'});
  }]);

angular.module('app', ['ui','ui.bootstrap']);

