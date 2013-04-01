/**
 * Created with JetBrains PhpStorm.
 * User: xavi
 * Date: 4/1/13
 * Time: 9:45 AM
 * To change this template use File | Settings | File Templates.
 */
function AdminCourseNew(scope, greeterService, phoneService, notifyService){

    var master = {
        topics : []
    };

    scope.form = angular.copy(master);

    scope.callGreeter = function() {
        console.log('greeter yeah !');
        greeterService();
    };

    scope.callPhone = function() {
        console.log('phone yeah !');
        phoneService();
    };

    scope.callNotify = function(msg) {
        console.log('notify yeah !');
        notifyService(msg);
    };

}

AdminCourseNew.$inject = ['$scope','greeter','phone','notify'];

