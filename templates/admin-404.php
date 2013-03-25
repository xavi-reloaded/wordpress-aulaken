<div class="wrap">
	
	<div id="icon-catablog" class="icon32"><br /></div>
	<h2><?php _e('Delibera Item Not Found', 'aula'); ?></h2>
	
	<?php $this->render_catablog_admin_message() ?>
	
	<p><?php _e("You attempted to edit an item that doesn't exist. Perhaps it was deleted?", 'aula'); ?></p>
	<ul>
		<li><strong><?php _e("Go To:", 'delibera'); ?></strong></li>
		<li><a href="admin.php?page=delibera"><?php _e("CataBlog Library", 'aula'); ?></a></li>
		<li><a href="index.php"><?php _e("Dashboard", 'aula'); ?></a></li>
	</ul>
</div>