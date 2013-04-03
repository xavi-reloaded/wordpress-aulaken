<script type='text/javascript' src='<?=$this->urls['angular-app'];?>/temp-topic-presentation-model.js'></script>


<div class="wrap" ng-controller="AdminCourseNew">
    <div id="icon-edit-comments" class="icon32"><br /></div><h2><?= ( isset($post->ID)  ) ? _("Edit Course") : _("Add New Course"); ?> </h2>
    <h2><?php
        echo esc_html( $title );
        if ( isset( $post_new_file ) && current_user_can( $post_type_object->cap->create_posts ) )
            echo ' <a href="' . esc_url( $post_new_file ) . '" class="add-new-h2">' . esc_html( $post_type_object->labels->add_new ) . '</a>';
        ?>
    </h2>
    <?php if ( $notice ) : ?> <div id="notice" class="error"><p><?php echo $notice ?></p></div> <?php endif; ?>
    <?php if ( $message ) : ?> <div id="message" class="updated"><p><?php echo $message; ?></p></div> <?php endif; ?>


    <form id="aula-create" class="" method="post" action="admin.php?page=aula-save-course" >

        <?php wp_nonce_field($nonce_action); ?>
        <input type="hidden" id="user-id" name="user_ID" value="<?php echo (int) $user_ID ?>" />
        <input type="hidden" id="hiddenaction" name="action" value="<?php echo esc_attr( $form_action ) ?>" />
        <input type="hidden" id="originalaction" name="originalaction" value="<?php echo esc_attr( $form_action ) ?>" />
        <input type="hidden" id="post_author" name="post_author" value="<?php echo esc_attr( $post->post_author ); ?>" />
        <input type="hidden" id="post_type" name="post_type" value="<?php echo esc_attr( $post_type ) ?>" />
        <input type="hidden" id="original_post_status" name="original_post_status" value="<?php echo esc_attr( $post->post_status) ?>" />
        <input type="hidden" id="referredby" name="referredby" value="<?php echo esc_url(stripslashes(wp_get_referer())); ?>" />
        <input type="hidden" id="save_id" name="save_id" value="<?php echo $post->ID; ?>" />
        <?php if ( ! empty( $active_post_lock ) ) { ?>
            <input type="hidden" id="active_post_lock" value="<?php echo esc_attr( implode( ':', $active_post_lock ) ); ?>" />
        <?php
        }
        if ( 'draft' != get_post_status( $post ) )
            wp_original_referer_field(true, 'previous');

        echo $form_extra;

        wp_nonce_field( 'autosave', 'autosavenonce', false );
        wp_nonce_field( 'meta-box-order', 'meta-box-order-nonce', false );
        wp_nonce_field( 'closedpostboxes', 'closedpostboxesnonce', false );
        ?>

        <div id="poststuff">

            <div id="post-body" class="metabox-holder columns-<?php echo 1 == get_current_screen()->get_columns() ? '1' : '2'; ?>">
                <div id="post-body-content">

                        <div>
                            <label class="screen-reader-text" for="title">asd</label>
                            <input type="text" class="input-block-level" name="post_title" value="<?php echo esc_attr( htmlspecialchars( $post->post_title ) ); ?>" id="title"/>
                        </div>
                        <div>
                            <input type="text" name="post_shortname" value="<?=$post->post_shortcode?>" id="shortname"/>
                            <p class="btn btn-danger btn-small" ng-click="notify(form)" >Help</p>
                        </div>
                        <?php
                        wp_nonce_field( 'samplepermalink', 'samplepermalinknonce', false );
                        ?>
                    <?php


                    do_action( 'edit_form_after_title' );

                    if ( post_type_supports($post_type, 'editor') ) {
                        ?>
                        <div id="postdivrich" class="postarea">

                            <?php wp_editor($post->post_content, 'post_summary', array('dfw' => true, 'tabfocus_elements' => 'sample-permalink,post-preview', 'editor_height' => 280) ); ?>

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
                                </tr></tbody></table>

                        </div>
                    <?php } ?>

                    <?php do_action( 'edit_form_after_editor' ); ?>
                </div><!-- /post-body-content -->

                <div id="postbox-container-1" class="postbox-container">
                    <?php

                    do_action('submitpost_box');
                    // IMPORTANT METABOX 1
                    do_meta_boxes(null, 'side', $post);

                    ?>
                </div>
                <div id="postbox-container-2" class="postbox-container">
                    <?php
                    //                    do_meta_boxes(null, 'normal', $post);
                    //                    do_action('edit_form_advanced');
                    //                    do_meta_boxes(null, 'advanced', $post);
                    ?>
                    <!--//////////////////////////////////////////////////////////////////////-->
                    <h2>Topics on the course
                        <a class="btn btn-success btn-small" ng-click="openTopicDialog()" title="test2">Add new Topic</a>
                    </h2>

                    <apiumac close-others="oneAtATime">
                        <apiumac-group ng-repeat="topic in form.topics">
                            <apiumac-heading>
                                <span>{{topic.title}}</span>
                            </apiumac-heading>
                            {{topic.summary}}
                            <tabs>
                                <pane heading="<?php _e('Topic'); ?>">
                                    <div>
                                        <label for="topicname">Name</label>
                                        <input type="text" ng-model="topic.title" id="topicname" required/>
                                    </div>
                                    <div>
                                        <label for="topicsummary">Summary</label>
                                        <textarea ng-model="topic.summary" id="topicsummary" required></textarea>
                                    </div>
                                </pane>

                                <pane heading="<?php _e('Activities'); ?>">
                                    <table class="table">
                                        <tr ng-repeat="activity in topic.activities" >
                                            <td><img src="<?=plugins_url()?>/wordpress-aulaken/templates/angular/app/img/l/{{activity.pix}}"></td>
                                            <td>{{activity.title}}</td>
                                            <td>
                                                <p ng-click="removeActivity(topic,activity)" class="btn btn-small btn-danger text-left">X</p>
                                                <p popover-placement="bottom" popover="{{activity.content}}" class="btn btn-small btn-info text-right">?</p>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="modal-header">
                                        <span class="btn btn-success" ng-click="openDialog(topic.id)">Add Activity or Resource</span>
                                    </div>
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
                            </tabs>

                        </apiumac-group>
                    </apiumac>


                </div>
                <?php

                do_action('dbx_post_sidebar');

                ?>
            </div><!-- /post-body -->
            <br class="clear" />
        </div><!-- /poststuff -->

        <?php wp_nonce_field( 'aula-create-course', '_aula_create_course_nonce', false, true ) ?>
    </form>
</div>

<?php
if ( post_type_supports( $post_type, 'comments' ) )
    wp_comment_reply();
?>

<?php if ( (isset($post->post_title) && '' == $post->post_title) || (isset($_GET['message']) && 2 > $_GET['message']) ) : ?>
    <script type="text/javascript">
        try{document.post.title.focus();}catch(e){}
    </script>
<?php endif; ?>