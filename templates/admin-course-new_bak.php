<div class="wrap">

    <div id="icon-edit-comments" class="icon32"><br /></div><h2>Add New Course</h2>


    <?php $this->render_aula_admin_message() ?>

    <form id="aula-create" class="" method="post" action="admin.php?page=aula-save-course">

        <div id="post-body" class="metabox-holder columns-2">
            <div id="post-body-content">
                <div id="titlediv">

                    <div id="titlewrap">
                        <label for="aula-course-title">Enter title here</label>
                        <input type="text" name="title" id="aula-course-title" maxlength="200" value="" autocomplete="off"/>
                    </div>
                </div>

                <div class="inside">
                    <div id="edit-slug-box" class="hide-if-no-js">
                    </div>
                </div>

                <?php the_editor($content, 'content'); ?>

<!--                <table id="post-status-info" cellspacing="0"><tbody><tr>-->
<!--                        <td id="wp-word-count">Word count: <span class="word-count">0</span></td>-->
<!--                        <td class="autosave-info">-->
<!--                            <span class="autosave-message">&nbsp;</span>-->
<!--                        </td>-->
<!--                    </tr></tbody></table>-->

            </div>


        </div>


        <?php




//        add_meta_box( $id, $title, $callback, $post_type, $context,$priority, $callback_args );

        ?>



        <?php wp_nonce_field( 'aula-create-course', '_aula_create_course_nonce', false, true ) ?>

        <input type="submit" name="save" value="<?php _e("Create", "aula") ?>" class="button-primary" />


    </form>

</div>




