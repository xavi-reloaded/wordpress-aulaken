'use strict';

/* Controllers */

function lessonForm($scope,$dialog) {
    var master = {
        name: 'Put the lesson name here',
        summary: 'family name 1',

        activities:[
            {title:'Assignment',pix:'nothing.png',content:'This is the content for assignement'},
            {title:'Lesson',pix:'nothing.png',content:'This is the content for lesson'}
        ],
        resources:[
        ]
    };


    $scope.oneAtATime = true;


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

    var t = '<div class="modal-header" ng-controller="lessonForm">'+
        '<h1>This is the title</h1>'+
        '</div>'+
        '<div class="modal-body">'+
        '<p>Enter a value to pass to <code>close</code> as the result: <input ng-model="result" /></p>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button ng-click="close(result)" class="btn btn-primary" >Close</button>'+
        '</div>';

    var tt= '<div class="modal-header" ng-controller="lessonForm">'+
        '<h1>Add an Activity or Resource</h1>'+
        '</div>'+
        '<tabs>'+
        '<pane heading="Activities"> '+
        '<apiumac close-others="oneAtATime">' +
        '    <apiumac-group ng-repeat="activity in activities">'+
        '        <apiumac-heading><img src="{{activity.l}}">{{activity.title}}</apiumac-heading>'+
        '                    {{activity.content}}'+
        '        </apiumac-group>'+
        '    </apiumac>'+
        '</pane>'+
        '<pane heading="Resources"> '+
        '<apiumac close-others="oneAtATime">' +
        '    <apiumac-group ng-repeat="resource in resources">'+
        '        <apiumac-heading><img src="{{resource.l}}">{{resource.title}}</apiumac-heading>'+
        '                    {{resource.content}}'+
        '        </apiumac-group>'+
        '    </apiumac>'+
        '</pane>'+
        '</tabs>'+
        '<div class="modal-footer">'+
        '<button ng-click="close(result)" class="btn btn-primary" >Close</button>'+
        '</div>';

    $scope.opts = {
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: 'angular/app/partials/partial-resource-dialog.html',
        controller: 'TestDialogController'
    };

    $scope.openDialog = function(){
        var d = $dialog.dialog($scope.opts);
        d.open().then(function(result){
            if(result)
            {
                alert('dialog closed with result: ' + result);
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





}

// the dialog is injected in the specified controller
function TestDialogController($scope, dialog){
    $scope.close = function(result){
        dialog.close(result);
    };

    $scope.oneAtATime = true;

    $scope.activities = [
        {title:'Assignment',pix:'assignment.png',content:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'},
//        {title:'Chat',l:'nothing.png',content:'The chat activity module enables participants to have text-based, real-time synchronous discussions.'},
        {title:'Choice',pix:'choice.png',content:'The choice activity module enables a teacher to ask a single question and offer a selection of possible responses.'},
//        {title:'Database',l:'nothing.png',content:'The database activity module enables participants to create, maintain and search a collection of entries (i.e. records). The structure of the entries is defined by the teacher as a number of fields. Field types include checkbox, radio buttons, dropdown menu, text area, URL, picture and uploaded file.'},
//        {title:'External Tool',l:'nothing.png',content:'The external tool activity module enables students to interact with learning resources and activities on other web sites. For example, an external tool could provide access to a new activity type or learning materials from a publisher.'},
        {title:'Forum',pix:'nothing.png',content:'The forum activity module enables participants to have asynchronous discussions i.e. discussions that take place over an extended period of time.'},
        {title:'Glossary',pix:'nothing.png',content:'The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information.'},
        {title:'Lesson',pix:'nothing.png',content:'The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely.'},
        {title:'Quiz',pix:'nothing.png',content:'The quiz activity enables a teacher to create quizzes comprising questions of various types, including multiple choice, matching, short-answer and numerical.'},
//        {title:'SCORM package',l:'nothing.png',content:'A SCORM package is a collection of files which are packaged according to an agreed standard for learning objects. The SCORM activity module enables SCORM or AICC packages to be uploaded as a zip file and added to a course.'},
        {title:'Survey',pix:'nothing.png',content:'The survey activity module provides a number of verified survey instruments that have been found useful in assessing and stimulating learning in online environments. A teacher can use these to gather data from their students that will help them learn about their class and reflect on their own teaching.'},
        {title:'Wiki',pix:'nothing.png',content:'The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit.'},
//        {title:'Workshop',l:'nothing.png',content:'The workshop activity module enables the collection, review and peer assessment of students work.'}
    ];
    $scope.resources = [
        {title:'Book',pix:'nothing.png',content:'The book module enables a teacher to create a multi-page resource in a book-like format, with chapters and subchapters. Books can contain media files as well as text and are useful for displaying lengthy passages of information which can be broken down into sections.'},
        {title:'File',pix:'nothing.png',content:'The file module enables a teacher to provide a file as a course resource. Where possible, the file will be displayed within the course interface; otherwise students will be prompted to download it. The file may include supporting files, for example an HTML page may have embedded images or Flash objects.'},
        {title:'Folder',pix:'nothing.png',content:'The folder module enables a teacher to display a number of related files inside a single folder, reducing scrolling on the course page. A zipped folder may be uploaded and unzipped for display, or an empty folder created and files uploaded into it.'},
//        {title:'IMS content package',l:'nothing.png',content:'An IMS content package is a collection of files which are packaged according to an agreed standard so they can be reused in different systems. The IMS content package module enables such content packages to be uploaded as a zip file and added to a course as a resource.'},
        {title:'Label',pix:'nothing.png',content:'The label module enables text and multimedia to be inserted into the course page in between links to other resources and activities. Labels are very versatile and can help to improve the appearance of a course if used thoughtfully.'},
        {title:'Page',pix:'nothing.png',content:'The page module enables a teacher to create a web page resource using the text editor. A page can display text, images, sound, video, web links and embedded code, such as Google maps.'},
        {title:'URL',pix:'nothing.png',content:'The URL module enables a teacher to provide a web link as a course resource. Anything that is freely available online, such as documents or images, can be linked to; the URL doesn’t have to be the home page of a website. The URL of a particular web page may be copied and pasted or a teacher can use the file picker and choose a link from a repository such as Flickr, YouTube or Wikimedia (depending upon which repositories are enabled for the site).'}
    ];
}

