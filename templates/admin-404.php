<div class="wrap">
	
	<div id="icon-aula" class="icon32"><br /></div>
	<h2><?php _e('Course Item Not Found', 'aula'); ?></h2>
	
	<?php $this->render_aula_admin_message() ?>
	
	<p><?php _e("You attempted to edit an item that doesn't exist. Perhaps it was deleted?", 'aula'); ?></p>
	<ul>
		<li><strong><?php _e("Go To:", 'aula'); ?></strong></li>
		<li><a href="admin.php?page=aula"><?php _e("Aula Course", 'aula'); ?></a></li>
		<li><a href="index.php"><?php _e("Dashboard", 'aula'); ?></a></li>
	</ul>
</div>