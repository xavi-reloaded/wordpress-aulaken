'use strict';

/* Controllers */

function lessonForm($scope) {
    var master = {
        name: 'Put the lesson name here',
        summary: 'family name 1',

        activities:[
            {value:'Assignement',val:50,min:0,max:100}
        ]
    };


    $scope.cancel = function() {
        $scope.form = angular.copy(master);
    };

    $scope.save = function() {
        master = $scope.form;
        $scope.form = angular.copy(master);

    };

    $scope.addActivity = function() {
        $scope.form.activities.push({value:''});
    };

    $scope.removeActivity  = function(activity) {
        var activities = $scope.form.activities;
        for (var i = 0, ii = activities.length; i < ii; i++) {
            if (activity === activities[i]) {
                activities.splice(i, 1);
            }
        }
    };


    $scope.isCancelDisabled = function() {
        return angular.equals(master, $scope.form);
    };

    $scope.isSaveDisabled = function() {
//        return $scope.myForm.$invalid || angular.equals(master, $scope.form);
        return false;
    };

    $scope.cancel();

    $scope.list = ["one", "two", "three", "four", "five", "six"];

}

