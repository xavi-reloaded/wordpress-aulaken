'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.


angular.module('app.services', ['ngResource']).

    factory('Phone', function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }).

    factory('notify', ['$window', function(win) {
        var msgs = [];
        return function(msg) {
            msgs.push(msg);
            if (msgs.length == 3) {
                win.alert(msgs.join("\n"));
                msgs = [];
            }
        };
    }]).
    value('version', '0.1').
    value('author', 'Xavi');
