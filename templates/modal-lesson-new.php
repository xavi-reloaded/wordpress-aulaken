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
    <?php
    wp_admin_css( 'wp-admin', true );
    ?>
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

    <!-- jQuery --> <!-- comes with wp! -->
    <!-- Wijmo CSS and script -->
    <link href="angular/app/lib/wijmo/themes/cobalt/jquery-wijmo.css" rel="stylesheet" title="metro-jqueryui" type="text/css" />
    <link href="angular/app/lib/wijmo/jquery.wijmo-complete.all.2.3.2.min.css" rel="stylesheet" type="text/css" />

    <script src="angular/app/lib/wijmo/jquery.wijmo-open.all.2.3.2.min.js" type="text/javascript"></script>
    <script src="angular/app/lib/wijmo/jquery.wijmo-complete.all.2.3.2.min.js" type="text/javascript"></script>

    <script src="angular/app/lib/wijmo/angular.wijmo.js" type="text/javascript"></script>

</head>
<body class="windows wp-core-ui">
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

<form id="lesson-modal" class="clear_float" method="post" >
    <input type="hidden" id="referredby" name="referredby" value="<?php echo esc_url(stripslashes(wp_get_referer())); ?>" />
    <input type="hidden" id="parent_course" name="parent_course" value="<?php echo $parent_course; ?>" />

    <div id="flipper" class="wrap">

        <div id="content1">
            <h2><?php _e('Lessons Management'); ?></h2>

            <div id="titlediv">
                <div id="titlewrap">
                    <label class="screen-reader-text" id="title-prompt-text" for="title"><?php echo apply_filters( 'enter_name_course_here', __( 'Enter name or the course here' ), $post ); ?></label>
                    <input type="text" name="post_title" size="30" value="<?php echo esc_attr( htmlspecialchars( $post->post_title ) ); ?>" id="title" autocomplete="off" />
                </div>
                <div id="titlewrap">
                    <label class="screen-reader-text" id="shortname-prompt-text" for="shortname"><?php echo apply_filters( 'enter_name_course_here', __( 'Enter a shortname, maybe an intelligent codify description ?' ), $post ); ?></label>
                    <input type="text" name="post_shortname" size="30" value="<?php echo esc_attr( htmlspecialchars( $post->post_title ) ); ?>" id="shortname" autocomplete="off" />
                </div>
                <div class="inside">
                    <?php
                    $sample_permalink_html = $post_type_object->public ? get_sample_permalink_html($post->ID) : '';
                    $shortlink = wp_get_shortlink($post->ID, 'post');
                    if ( !empty($shortlink) )
                        $sample_permalink_html .= '<input id="shortlink" type="hidden" value="' . esc_attr($shortlink) . '" /><a href="#" class="button button-small" onclick="prompt(&#39;URL:&#39;, jQuery(\'#shortlink\').val()); return false;">' . __('Get Shortlink') . '</a>';

                    if ( $post_type_object->public && ! ( 'pending' == get_post_status( $post ) && !current_user_can( $post_type_object->cap->publish_posts ) ) ) { ?>
                        <div id="edit-slug-box" class="hide-if-no-js">
                            <?php
                            if ( $sample_permalink_html && 'auto-draft' != $post->post_status )
                                echo $sample_permalink_html;
                            ?>
                        </div>
                    <?php
                    }
                    ?>
                </div>
                <?php
                wp_nonce_field( 'samplepermalink', 'samplepermalinknonce', false );
                ?>
            </div>
            <?if ( post_type_supports($post_type, 'editor') || true) {
                ?>
                <div id="lessondivrich" class="postarea">

                    <?php wp_editor($post->post_content, 'lesson_summary', array('dfw' => true, 'tabfocus_elements' => 'sample-permalink,post-preview', 'editor_height' => 100) ); ?>

                    <table id="post-status-info" cellspacing="0"><tbody><tr>
                            <td id="wp-word-count"><?php printf( __( 'Word count: %s' ), '<span class="word-count">0</span>' ); ?></td>
                            <td class="autosave-info">
                                <span class="autosave-message">&nbsp;</span>
                                <?php
                                if ( 'auto-draft' != $post->post_status ) {
                                    echo '<span id="last-edit">';
                                    if ( $last_id = get_post_meta($post_ID, '_edit_last', true) ) {
                                        $last_user = get_userdata($last_id);
                                        printf(__('Last edited by %1$s on %2$s at %3$s'), esc_html( $last_user->display_name ), mysql2date(get_option('date_format'), $post->post_modified), mysql2date(get_option('time_format'), $post->post_modified));
                                    } else {
                                        printf(__('Last edited on %1$s at %2$s'), mysql2date(get_option('date_format'), $post->post_modified), mysql2date(get_option('time_format'), $post->post_modified));
                                    }
                                    echo '</span>';
                                } ?>
                            </td>
                        </tr></tbody>
                    </table>

                </div>
            <?php } ?>


        </div>

        <div id="content2" class="hidden">
            <h2><?php _e('Lesson Activities'); ?></h2>

        </div>

        <div id="content3" class="hidden">
            <h2><?php _e('Success Workflow'); ?></h2>

        </div>

        <div id="content4" class="hidden">
            <h2><?php _e('Business Model'); ?></h2>

        </div>
    </div>



    <div class="mceActionPanel">
        <div style="margin: 8px auto; text-align: center;padding-bottom: 10px;">
            <input type="submit"/>
        </div>
    </div>

</form>


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

    tinyMCEPopup.onInit.add(function() {
        var win = tinyMCEPopup.getWin();

        d('version').innerHTML = tinymce.majorVersion + "." + tinymce.minorVersion;
        d('date').innerHTML = tinymce.releaseDate;

        if ( win.fullscreen && win.fullscreen.settings.visible ) {
            d('content1').className = 'hidden';
            d('tabs').className = 'hidden';
            d('content3').className = 'dfw';
        }
    });
</script>
</body>
</html>
