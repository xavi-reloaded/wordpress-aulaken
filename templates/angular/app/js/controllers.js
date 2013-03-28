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

    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        },
        {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.panes = [
        { title:"Lessons Management", templateUrl:"partial1.html" },
        { title:"Lesson Activities", templateUrl:"Dynamic content 2" },
        { title:"Success Workflow", templateUrl:"Dynamic content 3" },
        { title:"Course Commerce", templateUrl:"Dynamic content 3" },

    ];

}

