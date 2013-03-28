<div class="wrap">
    <div id="icon-edit-comments" class="icon32"><br /></div><h2>Add New Course</h2>
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
                    <?php if ( post_type_supports($post_type, 'title') ) { ?>
                        <div id="titlediv">
                            <div id="titlewrap">
                                <label class="screen-reader-text" id="title-prompt-text" for="title"><?php echo apply_filters( 'enter_name_course_here', __( 'Enter name or the course here' ), $post ); ?></label>
                                <input type="text" name="post_title" size="30" value="<?php echo esc_attr( htmlspecialchars( $post->post_title ) ); ?>" id="title" autocomplete="off" />
                            </div>
                            <div id="titlewrap">
                                <label class="screen-reader-text" id="shortname-prompt-text" for="shortname"><?php echo apply_filters( 'enter_name_course_here', __( 'Enter a shortname, maybe an intelligent codify description ?' ), $post ); ?></label>
                                <input type="text" name="post_shortname" size="30" value="<?php echo esc_attr( htmlspecialchars( $post->post_title ) ); ?>" id="shortname" autocomplete="off" />
                                <a class="add-new-h2" onclick="tb_show('Lessons','<?=plugins_url()?>/wordpress-aulaken/templates/modal-lesson-new.php?KeepThis=trueTB_iframe=true&height=500&width=800')" href="#" title="test2">Add new Lesson</a>
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
                        </div><!-- /titlediv -->
                    <?php
                    }

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

                    do_meta_boxes(null, 'normal', $post);

                    do_action('edit_form_advanced');

                    // IMPORTANT METABOX 2
                    do_meta_boxes(null, 'advanced', $post);

                    ?>
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