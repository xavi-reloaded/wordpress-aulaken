<?php

require_once('../../../../wp-load.php');

header('Content-Type: text/html; charset=' . get_bloginfo('charset'));
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?> ng-app="app">

<head>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php echo get_option('blog_charset'); ?>" />
    <title><?php _e('Activities on Course'); ?></title>

    <script src="../js/angular/angular.js"></script>
    <link href="../css/bootstrap-combined.min.css" rel="stylesheet">

    <script src="../js/ui-bootstrap-tpls-0.2.0.js" type="text/javascript"></script>

    <script src="../js/ui-bootstrap-apium.js" type="text/javascript"></script>
    <link href="../css/bootstrap-apium.css" rel="stylesheet">

    <script src="../js/angular/angular-ui.min.js"></script>



</head>
<body class="windows wp-core-ui" ng-controller="lessonForm">

<form class="clear_float" method="post" name="myLessonForm">

    <tabs>
        <pane heading="<?php _e('Topic'); ?>">

            <div>
                <label for="topicname">Name</label>
                <input type="text" ng-model="form.name" id="topicname" required/>
            </div>
            <div>
                <label for="topicsummary">Summary</label>
                <textarea ng-model="form.summary" id="topicsummary" required></textarea>
            </div>


        </pane>

        <pane heading="<?php _e('Activities'); ?>">

            <table class="table">

                <tr ng-repeat="activity in form.activities" >
                    <td><img src="angular/app/img/l/{{activity.pix}}"></td>
                    <td>{{activity.title}}</td>
                    <td><button ng-click="removeActivity(activity)" class="btn btn-small btn-danger text-left">X</button>
                        <button popover-placement="bottom" popover="{{activity.content}}" class="btn btn-small btn-info text-right">?</button>
                    </td>
                </tr>

            </table>

        </pane>




        <pane heading="<?php _e('Success Workflow'); ?>">
            <ul ui-sortable ng-model="list">
                <li ng-repeat="item in list" class="item">{{item}}</li>
            </ul>
            <hr />
            <div ng-repeat="item in list">{{item}}</div>
        </pane>

        <pane heading="<?php _e('Settings'); ?>">

        </pane>
        <!--        <pane ng-repeat="pane in panes" heading="{{pane.title}}" active="pane.active">{{pane.templateUrl}}</pane>-->
    </tabs>


    <input type="hidden" id="referredby" name="referredby" value="<?php echo esc_url(stripslashes(wp_get_referer())); ?>" />
    <input type="hidden" id="parent_course" name="parent_course" value="<?php echo $parent_course; ?>" />

</form>



<div class="modal-footer">
<button class="btn btn-primary" ng-click="cancel()" ng-disabled="isCancelDisabled()">Cancel</button>
<button class="btn btn-primary" ng-click="save()" ng-disabled="isSaveDisabled()">Save</button>
<button class="btn btn-success" ng-click="openDialog()">Add Activity or Resource</button>
</div>

<script src="angular/app/js/app.js"></script>
<script src="angular/app/js/services.js"></script>
<script src="angular/app/js/controllers.js"></script>
<script src="angular/app/js/filters.js"></script>
<script src="angular/app/js/directives.js"></script>

</body>
</html>
