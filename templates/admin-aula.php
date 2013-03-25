<div class="wrap">

    <div id="icon-delibera" class="icon32"><br /></div>
    <h2><?php _e("Add New Portal", "aula") ?></h2>

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
