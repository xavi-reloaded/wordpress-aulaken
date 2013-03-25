<?php $current_cat = (isset($_GET['category']))? '&amp;category='.$_GET['category'] : '' ?>
<?php $current_page = (isset($_GET['paged']))? '&amp;paged='.$_GET['paged'] : ''?>


<div class="wrap">

    <?php $this->render_aula_admin_message() ?>

    <div id="icon-edit-comments" class="icon32"><br /></div><h2>Courses <a href="admin.php?page=aula-new-course" class="add-new-h2">Add New</a></h2>


    <ul class='subsubsub'>
        <li class='all'><a href='edit-comments.php?comment_status=all'>All</a> |</li>
        <li class='moderated'><a href='edit-comments.php?comment_status=moderated' class="current">Pending <span class="count">(<span class="pending-count">0</span>)</span></a> |</li>
        <li class='approved'><a href='edit-comments.php?comment_status=approved'>Working</a> |</li>
        <li class='trash'><a href='edit-comments.php?comment_status=trash'>Trash <span class="count">(<span class="trash-count">0</span>)</span></a></li>
    </ul>

    <form id="comments-form" action="" method="get">



    <?php

    if ($view == 'grid') {
        include_once($this->directories['template'] . '/admin-grid.php');
    }
    else {
        include_once($this->directories['template'] . '/admin-list.php');
    }

    ?>

</div>
