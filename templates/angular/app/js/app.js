'use strict';


// Declare app level module which depends on filters, and services
angular.module('app', ['app.filters', 'app.services', 'app.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/questions', {templateUrl: 'partials/questions.html', controller: questionsCitizenCtrl});
    $routeProvider.when('/registration', {templateUrl: 'partials/registration.html', controller: UserForm});
    $routeProvider.otherwise({redirectTo: '/registration'});
  }]);
