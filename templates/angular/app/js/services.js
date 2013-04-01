'use strict';

/* Services */

angular.module('app.services', ['ngResource']).

    // Teach the injector how to build a 'greeter'
    // Notice that greeter itself is dependent on '$window'
    factory('greeter', function($window) {
        // This is a factory function, and is responsible for
        // creating the 'greet' service.
        console.log('into greeter service');
        return {
            greet: function() {
                $window.alert('into greeter service');
            }
        };
    }).

    factory('phone', function($resource){
        console.log('into phone service');
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }).

    factory('notify', ['$window', function(win) {
        console.log('into notify service');
        var msgs = [];
        return function(msg) {
            msgs.push(msg);
            if (msgs.length == 3) {
                win.alert(msgs.join("\n"));
                msgs = [];
            }
        };
    }]);
//    value('version', '0.1').
//    value('author','Xavi Hidalgo');
;

//angular.module('app', [], function($provide) {
//    $provide.factory('notify', ['$window', function(win) {
//        var msgs = [];
//        return function(msg) {
//            msgs.push(msg);
//            if (msgs.length == 3) {
//                win.alert(msgs.join("\n"));
//                msgs = [];
//            }
//        };
//    }]);
//});

//angular.module('app.services', []).
//    value('version', '0.1').
//    value('author','Xavi Hidalgo');
//
//angular.module('app.services', [], function($provide) {
//    $provide.factory('notify', function() {
//        var shinyNewServiceInstance;
//        //factory function body that constructs shinyNewServiceInstance
//        return shinyNewServiceInstance;
//    });
//});

//angular.module('app.services', ['ngResource']).
//    factory('Phone', function($resource){
//        console.log('into phone');
//        return $resource('phones/:phoneId.json', {}, {
//            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
//        });
//    });
//
//angular.module('app.services', []).
//    factory('notify', ['$window', function(win) {
//        console.log('into notify');
//        var msgs = [];
//        return function(msg) {
//            msgs.push(msg);
//            if (msgs.length == 3) {
//                win.alert(msgs.join("\n"));
//                msgs = [];
//            }
//        };
//    }]);







//


//


//
//angular.service('myService', function() {
//
//    // service is just a constructor function
//    // that will be called with 'new'
//
//    this.sayHello = function(name) {
//        return "Hi " + name + "!";
//    };
//});



