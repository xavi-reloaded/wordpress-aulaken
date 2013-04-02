/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/2/13
 * Time: 10:46 AM
 * To change this template use File | Settings | File Templates.
 */
function AdminCourseNew($scope, $dialog, notify){

    $scope.opts = {
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: '../wp-content/plugins/wordpress-aulaken/templates/partials/partial-resource-dialog.html',
        controller: 'ActivityResourceDialogController'
    };



    $scope.openDialog = function(topicId){
        var d = $dialog.dialog($scope.opts);
        var id=topicId;

        d.open().then(function(result){
            if(result)
            {
                var topics = $scope.form.topics;
                for (var i = 0, ii = topics.length; i < ii; i++) {
                    if (id === topics[i].id) {

                        topics[i].activities.push(result)
                    }
                }

            }
        });
    };

    $scope.openMessageBox = function(){
        var title = 'This is a message box';
        var msg = 'This is the content of the message box';
        var btns = [{result:'cancel', label: 'Cancel'}, {result:'ok', label: 'OK', cssClass: 'btn-primary'}];

        $dialog.messageBox(title, msg, btns)
            .open()
            .then(function(result){
                alert('dialog closed with result: ' + result);
            });
    };

    var master = {
        name: '',
        summary: '',

        topics : [ ]
    };

//    {id:1,title:'A topic to learn wraks',summary:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.',
//        activities:[ {title:'Assignment',pix:'assignment.png',content:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'}]
//    },
//    {id:2,title:'A topic to learn wraks',summary:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.',
//        activities:[ {title:'Assignment',pix:'assignment.png',content:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'}]
//    }

    $scope.cancel = function() {
        $scope.form = angular.copy(master);
    };

    $scope.save = function() {
        master = $scope.form;
        $scope.form = angular.copy(master);

    };

    $scope.cancel();

    $scope.removeActivity  = function(topic, activity) {
        var topics = $scope.form.topics;
        for (var i = 0, ii = topics.length; i < ii; i++) {
            if (topic === topics[i]) {
                var activities = topic.activities;
                for (var i = 0, ii = activities.length; i < ii; i++) {
                    if (activity === activities[i]) {
                        activities.splice(i, 1);
                    }
                }
            }
        }
    };

    $scope.addTopic = function() {
        $scope.form.topics.push({value:''});
    };

    var t = '<div class="modal-header">'+
        '<h1>Create New Topic</h1>'+
        '</div>'+
        '<div class="modal-body">'+
        '<table class="table">'+
        '<tr><td>Name:</td><td><input ng-model="name" /></td></tr>'+
        '</table>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button ng-click="close()" class="btn btn-primary" >Cancel</button>'+
        '<button ng-click="close(name,summary)" class="btn btn-primary" >Create Topic</button>'+
        '</div>';

//            '<tr><td>Summary:</td><td><input ng-model="summary" /></td></tr>'+

    $scope.opts2 = {
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        template:  t, // OR: templateUrl: 'path/to/view.html',
        controller: 'TopicDialogController'
    };

    $scope.openTopicDialog = function(){
        var d = $dialog.dialog($scope.opts2);

        d.open().then(function(name,summary){
            if(name)
            {
                var topics = $scope.form.topics;
                topics.push({id:topics.length+1,title:name,activities:[]});
            }
        });
    };

    $scope.notify = function(msg){
        notify(msg);
    }
}
// the dialog is injected in the specified controller
function TopicDialogController($scope, dialog){
    $scope.close = function(name,summary){
        dialog.close(name,summary);
    };
}

AdminCourseNew.$inject = ['$scope', '$dialog','notify'];

