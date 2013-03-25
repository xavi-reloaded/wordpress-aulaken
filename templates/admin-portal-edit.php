<div class="wrap">
	
	<div id="icon-delibera" class="icon32"><br /></div>
	<h2><?php _e("Edit Delibera Portal", 'delibera'); ?></h2>
	
	<?php $this->render_delibera_admin_message() ?>
	
	<form id="delibera-edit" class="delibera-form clear_float" method="post" action="admin.php?page=delibera-save" enctype="multipart/form-data">
		
        <p><?php echo $result->getTitle(); ?></p>

        <?php var_dump($result); ?>

		
		
	</form>
	
</div><!-- END #wrap -->

