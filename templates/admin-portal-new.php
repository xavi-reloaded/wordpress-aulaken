<div class="wrap">

    <div id="icon-edit-comments" class="icon32"><br /></div><h2>Comments</h2>


    <ul class='subsubsub'>
        <li class='all'><a href='edit-comments.php?comment_status=all'>All</a> |</li>
        <li class='moderated'><a href='edit-comments.php?comment_status=moderated' class="current">Pending <span class="count">(<span class="pending-count">0</span>)</span></a> |</li>
        <li class='approved'><a href='edit-comments.php?comment_status=approved'>Approved</a> |</li>
        <li class='spam'><a href='edit-comments.php?comment_status=spam'>Spam <span class="count">(<span class="spam-count">0</span>)</span></a> |</li>
        <li class='trash'><a href='edit-comments.php?comment_status=trash'>Trash <span class="count">(<span class="trash-count">0</span>)</span></a></li>
    </ul>
    <form id="comments-form" action="" method="get">

    <?php $this->render_delibera_admin_message() ?>

    <form id="delibera-create" class="delibera-form clear_float" method="post" action="admin.php?page=delibera-create-portal">


        <div id="delibera-edit-main-text">
            <label for="delibera-portal-title"><?php _e("Title", 'delibera'); ?></label>
            <input type="text" name="title" id="delibera-portal-title" maxlength="200" value="" />
        </div>

<!--        important for security nonce-->
        <?php wp_nonce_field( 'delibera-create-portal', '_delibera_create_portal_nonce', false, true ) ?>
        <input type="submit" name="save" value="<?php _e("Create", "delibera") ?>" class="button-primary" />


    </form>

</div>
