/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/2/13
 * Time: 10:46 AM
 * To change this template use File | Settings | File Templates.
 */
function AdminCourseNew($scope, $dialog, topicsService){

    $scope.opts = {
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: '../wp-content/plugins/wordpress-aulaken/templates/partials/partial-resource-dialog.php',
        controller: 'ActivityResourceDialogController'
    };

    $scope.form = { topics : [] };



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




    $scope.courseId = 55;
// display list with topics
    $scope.getTopicsListFromCourse = function() {
        topicsService.query(
            {courseId: $scope.courseId }, //params
            function (data) { //success
                console.log(data);
//                $scope.form =angular.toJson(data.toString());
//                for(var i = 0; i < data.length; i++){
//                    $scope.form.topics.push(data.topics[i]);
//                }
                $scope.form = data;

            },
            function (data) { //failure
                console.log("Error occurred while getting list of topics");
            });
    }
    $scope.getTopicsListFromCourse();

}


AdminCourseNew.$inject = ['$scope', '$dialog','topicsService'];


function TopicDialogController($scope, dialog){
    $scope.close = function(name,summary){
        dialog.close(name,summary);
    };
}


// the dialog is injected in the specified controller

//// show edit screen if edit button is clicked
//    $scope.showEditScreen = function(id) {
//        $scope.user = User.get({topicsId: id});
//        $scope.updateUserDetailsButtonIsVisible = true;
//        $scope.userModScreenIsVisible = true;
//    }
//
//// hide edit screen if close button is clicked
//    $scope.hideEditScreen = function() {
//        $scope.updateUserDetailsButtonIsVisible = false;
//        $scope.saveUserDetailsButtonIsVisible = false;
//        $scope.userModScreenIsVisible = false;
//    }
//
//// update a user
//    $scope.updateUserDetails = function() {
//        $scope.user.$update();
//        for(var i=0;i<$scope.users.length;i++) {
//            if($scope.users[i].id == $scope.user.id) {
//                angular.extend($scope.users[i], $scope.user);
//                break;
//            }
//        }
//        console.log($scope.user);
//        //$scope.user = User.get({userId: $scope.user.id});
//        $scope.updateUserDetailsButtonIsVisible = false;
//        $scope.userModScreenIsVisible = false;
//    }
//
//// show a new user screen
//    $scope.showNewScreen = function() {
//        $scope.user = new User();
//        $scope.saveUserDetailsButtonIsVisible = true;
//        $scope.userModScreenIsVisible = true;
//    }
//
//// save a new user
//    $scope.saveUserDetails = function() {
//        $scope.user.$create();
//        $scope.users.push($scope.user);
//        $scope.saveUserDetailsButtonIsVisible = false;
//        $scope.userModScreenIsVisible = false;
//    }
//
//// delete a user
//    $scope.deleteUser = function(id) {
//        $scope.user = topicsService.get({userId: id});
//        $scope.user.$delete();
//    }
