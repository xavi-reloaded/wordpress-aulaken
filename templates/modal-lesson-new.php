<?php

require_once('../../../../wp-load.php');

header('Content-Type: text/html; charset=' . get_bloginfo('charset'));
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?> ng-app="app">

<head>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php echo get_option('blog_charset'); ?>" />
    <title><?php _e('Activities on Course'); ?></title>

    <script src="angular/app/lib/angular/angular.js"></script>
    <link href="../css/bootstrap-combined.min.css" rel="stylesheet">

    <script src="../js/ui-bootstrap-tpls-0.2.0.js" type="text/javascript"></script>

    <script src="../js/ui-bootstrap-apium.js" type="text/javascript"></script>
    <link href="../css/bootstrap-apium.css" rel="stylesheet">

    <script src="angular/app/lib/angular/angular-ui.min.js"></script>



</head>
<body class="windows wp-core-ui" ng-controller="lessonForm">

<form class="clear_float" method="post" name="myLessonForm">

    <tabs>
        <pane heading="<?php _e('Lesson'); ?>">

            <div>
                    <label class="screen-reader-text" id="title-prompt-text" for="lesson_title">Lesson Name</label>
                    <input type="text" ng-model="form.name" required/>
            </div>
                <input type="text"  ng-model="form.summary" required/>
        </pane>

        <pane heading="<?php _e('Lesson Activities'); ?>">

            [ <a href="" ng-click="addActivity()">add</a> ]
            <div ng-repeat="activity in form.activities">
                <input type="text" ng-model="activity.value" required/>
                [ <a href="" ng-click="removeActivity(activity)">X</a> ]
            </div>

        </pane>


        <pane heading="<?php _e('Success Workflow'); ?>">

            <apiumac close-others="oneAtATime">
                <apiumac-group heading="Static Header">
                    This content is straight in the template.
                </apiumac-group>
                <apiumac-group heading="{{group.title}}" ng-repeat="group in groups">
                    {{group.content}}
                </apiumac-group>
                <apiumac-group heading="Dynamic Body Content">
                    <p>The body of the accordion group grows to fit the contents</p>
                    <button class="btn btn-small" ng-click="addItem()">Add Item</button>
                    <div ng-repeat="item in items">{{item}}</div>
                </apiumac-group>
            </apiumac>

        </pane>

        <pane heading="<?php _e('Success Workflow'); ?>">
            <ul ui-sortable ng-model="list">
            <li ng-repeat="item in list" class="item">{{item}}</li>
        </ul>
            <hr />
            <div ng-repeat="item in list">{{item}}</div>
        </pane>


<!--        <pane ng-repeat="pane in panes" heading="{{pane.title}}" active="pane.active">{{pane.templateUrl}}</pane>-->
    </tabs>


    <input type="hidden" id="referredby" name="referredby" value="<?php echo esc_url(stripslashes(wp_get_referer())); ?>" />
    <input type="hidden" id="parent_course" name="parent_course" value="<?php echo $parent_course; ?>" />

</form>



<div class=""row-fluid"">
<button ng-click="cancel()" ng-disabled="isCancelDisabled()">Cancel</button>
<button ng-click="save()" ng-disabled="isSaveDisabled()">set my profile</button>

</div>

<script src="angular/app/js/app.js"></script>
<script src="angular/app/js/services.js"></script>
<script src="angular/app/js/controllers.js"></script>
<script src="angular/app/js/filters.js"></script>
<script src="angular/app/js/directives.js"></script>

</body>
</html>
