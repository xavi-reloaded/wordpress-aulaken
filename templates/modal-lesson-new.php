<?php

require_once('../../../../wp-load.php');

header('Content-Type: text/html; charset=' . get_bloginfo('charset'));
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?> ng-app="wijmo">
<head>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php echo get_option('blog_charset'); ?>" />
    <title><?php _e('Lesson'); ?></title>
    <script type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/tiny_mce_popup.js?ver=358-20121205"></script>

    <style type="text/css">
        body {
            min-width: 0;
        }
        #wphead {
            font-size: 80%;
            border-top: 0;
            color: #555;
            background-color: #f1f1f1;
        }
        #wphead h1 {
            font-size: 24px;
            color: #555;
            margin: 0;
            padding: 10px;
        }
        #tabs {
            padding: 15px 15px 3px;
            background-color: #f1f1f1;
            border-bottom: 1px solid #dfdfdf;
            margin: 0;
        }
        #tabs li {
            display: inline;
        }
        #tabs a.current {
            background-color: #fff;
            border-color: #dfdfdf;
            border-bottom-color: #fff;
            color: #d54e21;
        }
        #tabs a {
            color: #2583AD;
            padding: 6px;
            border-width: 1px 1px 0;
            border-style: solid solid none;
            border-color: #f1f1f1;
            text-decoration: none;
        }
        #tabs a:hover {
            color: #d54e21;
        }
        .wrap h2 {
            border-bottom-color: #dfdfdf;
            color: #555;
            margin: 5px 0;
            padding: 0;
            font-size: 18px;
        }
        #user_info {
            right: 5%;
            top: 5px;
        }
        h3 {
            font-size: 1.1em;
            margin-top: 10px;
            margin-bottom: 0px;
        }
        #flipper {
            margin: 0;
            padding: 5px 20px 10px;
            background-color: #fff;
            border-left: 1px solid #dfdfdf;
            border-bottom: 1px solid #dfdfdf;
        }
        * html {
            overflow-x: hidden;
            overflow-y: scroll;
        }
        #flipper div p {
            margin-top: 0.4em;
            margin-bottom: 0.8em;
            text-align: justify;
        }
        th {
            text-align: center;
        }
        .top th {
            text-decoration: underline;
        }
        .top .key {
            text-align: center;
            width: 5em;
        }
        .top .action {
            text-align: left;
        }
        .align {
            border-left: 3px double #333;
            border-right: 3px double #333;
        }
        .keys {
            margin-bottom: 15px;
            width: 100%;
            border: 0 none;
        }
        .keys p {
            display: inline-block;
            margin: 0px;
            padding: 0px;
        }
        .keys .left { text-align: left; }
        .keys .center { text-align: center; }
        .keys .right { text-align: right; }
        td b {
            font-family: "Times New Roman" Times serif;
        }
        #buttoncontainer {
            text-align: center;
            margin-bottom: 20px;
        }
        #buttoncontainer a, #buttoncontainer a:hover {
            border-bottom: 0px;
        }
        .macos .win,
        .windows .mac {
            display: none;
        }
    </style>
    <?php if ( is_rtl() ) : ?>
        <style type="text/css">
            #wphead, #tabs {
                padding-left: auto;
                padding-right: 15px;
            }
            #flipper {
                margin: 5px 0 3px 10px;
            }
            .keys .left, .top, .action { text-align: right; }
            .keys .right { text-align: left; }
            td b { font-family: Tahoma, "Times New Roman", Times, serif }
        </style>
    <?php endif; ?>

    <script src="angular/app/lib/angular/angular.js"></script>
    <link rel="stylesheet" href="angular/app/css/bootstrap.css"/>
    <link rel="stylesheet" href="angular/app/css/app.css"/>
    <?php wp_admin_css( 'wp-admin', true ); ?>

    <!-- jQuery --> <!-- comes with wp! -->
    <script src="angular/app/lib/jquery/jquery.min.js" type="text/javascript"></script>
    <script src="angular/app/lib/jquery/jquery-ui.min.js" type="text/javascript"></script>
    <!-- Wijmo CSS and script -->
    <link href="angular/app/lib/wijmo/themes/cobalt/jquery-wijmo.css" rel="stylesheet" title="metro-jqueryui" type="text/css" />
    <link href="angular/app/lib/wijmo/jquery.wijmo-complete.all.2.3.2.min.css" rel="stylesheet" type="text/css" />

    <script src="angular/app/lib/wijmo/jquery.wijmo-open.all.2.3.2.min.js" type="text/javascript"></script>
    <script src="angular/app/lib/wijmo/jquery.wijmo-complete.all.2.3.2.min.js" type="text/javascript"></script>

    <script src="angular/app/lib/wijmo/angular.wijmo.js" type="text/javascript"></script>

</head>
<body class="windows wp-core-ui" ng-controller="lessonForm">
<script type="text/javascript">
    if ( tinymce.isMac )
        document.body.className = document.body.className.replace(/windows/, 'macos');

</script>

<ul id="tabs">
    <li><a id="tab1" href="javascript:flipTab(1)" title="<?php esc_attr_e('Lessons Management'); ?>" accesskey="1" class="current"><?php _e('Lesson'); ?></a></li>
    <li><a id="tab2" href="javascript:flipTab(2)" title="<?php esc_attr_e('Lesson Activities'); ?>" accesskey="2"><?php _e('Activities'); ?></a></li>
    <li><a id="tab3" href="javascript:flipTab(3)" title="<?php esc_attr_e('Success Workflow'); ?>" accesskey="3"><?php _e('Grades'); ?></a></li>
    <li><a id="tab4" href="javascript:flipTab(4)" title="<?php esc_attr_e('Business Model'); ?>" accesskey="4"><?php _e('eCommerce'); ?></a></li>
</ul>



<div id="flipper" class="wrap"  >

    <form class="clear_float" method="post" name="myLessonForm">

        <input type="hidden" id="referredby" name="referredby" value="<?php echo esc_url(stripslashes(wp_get_referer())); ?>" />
        <input type="hidden" id="parent_course" name="parent_course" value="<?php echo $parent_course; ?>" />

        <div id="content1">
            <h2><?php _e('Lessons Management'); ?></h2>

            <div id="titlediv">
                <div id="titlewrap">
                    <label class="screen-reader-text" id="title-prompt-text" for="lesson_title">Lesson Name</label>
                    <input type="text" ng-model="form.name" required/>
                </div>
            </div>
            <div id="lessondivrich" class="postarea">
                <input type="text"  ng-model="form.summary" required/>
            </div>


        </div>

        <div id="content2" class="hidden">
            <h2><?php _e('Lesson Activities'); ?></h2>
            [ <a href="" ng-click="addActivity()">add</a> ]
            <div ng-repeat="activity in form.activities">
                <input type="text" ng-model="activity.value" required/>
                [ <a href="" ng-click="removeActivity(activity)">X</a> ]
            </div>

        </div>

        <div id="content3" class="hidden">
            <h2><?php _e('Success Workflow'); ?></h2>

        </div>

        <div id="content4" class="hidden">
            <h2><?php _e('Business Model'); ?></h2>

        </div>

    </form>

</div>



<div class="navbar-fixed-bottom">
    <hr/>
    <button ng-click="cancel()" ng-disabled="isCancelDisabled()">Cancel</button>
    <button ng-click="save()" ng-disabled="isSaveDisabled()">set my profile</button>

</div>




<script type="text/javascript">
    function d(id) { return document.getElementById(id); }

    function flipTab(n) {
        var i, c, t;

        for ( i = 1; i <= 4; i++ ) {
            c = d('content'+i.toString());
            t = d('tab'+i.toString());
            if ( n == i ) {
                c.className = '';
                t.className = 'current';
            } else {
                c.className = 'hidden';
                t.className = '';
            }
        }
    }
</script>
<script src="angular/app/js/app.js"></script>
<script src="angular/app/js/services.js"></script>
<script src="angular/app/js/controllers.js"></script>
<script src="angular/app/js/filters.js"></script>
<script src="angular/app/js/directives.js"></script>
</body>
</html>
