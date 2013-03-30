<?php $css_sort = ($sort=='menu_order')? "sorted" : "sortable" ?>
<?php $sort_url = ($order=='asc')? "&amp;order=desc" : "&amp;order=asc" ?>
<?php $cat_url  = (isset($_GET['category']))? "&amp;category=".$_GET['category'] : "" ?>

<table class="widefat" cellspacing="0">
    <thead>
    <tr>
        <th class="check-column"><input type="checkbox" /></th>
        <th ><?php _e("Image", "aula"); ?></th>
        <?php $css_sort = ($sort=='title')? "sorted" : "sortable" ?>
        <?php $sort_url = ($order=='asc')? "&amp;order=desc" : "&amp;order=asc" ?>
        <?php $cat_url  = (isset($_GET['category']))? "&amp;category=".$_GET['category'] : "" ?>
        <th class="<?php echo "$css_sort $order" ?>" style="width:120px;">
            <a href="admin.php?page=aula&amp;sort=title<?php echo $sort_url . $cat_url ?>">
                <span><?php _e("Title", "aula"); ?></span>
                <span class="sorting-indicator">&nbsp;</span>
            </a>
        </th>


        <th><?php _e("Summary", "aula"); ?></th>
        <th><?php _e("Categories", "aula"); ?></th>

        <th style="width:80px;">
            <a href="admin.php?page=aula&amp;sort=menu_order<?php echo $sort_url . $cat_url ?>">
                <span><?php _e("Order", "aula"); ?></span>
                <span class="sorting-indicator">&nbsp;</span>
            </a>
        </th>

        <th style="width:100px;">
            <a href="admin.php?page=aula&amp;sort=date<?php echo $sort_url . $cat_url ?>">
                <span><?php _e("Date", "aula"); ?></span>
                <span class="sorting-indicator">&nbsp;</span>
            </a>
        </th>
    </tr>
    </thead>
    <tfoot>
    <tr>
        <th class="check-column"><input type="checkbox" /></th>
        <th><?php _e("Image", "aula"); ?></th>
        <th><?php _e("Title", "aula"); ?></th>

        <th><?php _e("Summary", "aula"); ?></th>


        <th><?php _e("Categories", "aula"); ?></th>
        <th><?php _e("Order", "aula"); ?></th>
        <th><?php _e("Date", "aula"); ?></th>
    </tr>
    </tfoot>

    <tbody id="aula_items">

    <?php if (count($results) < 1): ?>
        <tr>
            <td colspan='9'><p>
                <p><?php _e("No course items found", 'aula'); ?></p>

                <?php if ($selected_term !== false): ?>
                    <p><?php _e("Use the category drop down above to switch category views.", 'aula'); ?></p>
                <?php endif ?>
            </td>
        </tr>
    <?php endif ?>

    <?php foreach ($results as $result): ?>
        <?php $edit   = 'admin.php?page=aula&amp;id='.$result->getId() ?>
        <?php $remove = wp_nonce_url(('admin.php?page=aula-delete-course&amp;id='.$result->getId()), "aula-delete") ?>

        <tr>
            <th class="check-column">
                <input type="checkbox" class="bulk_selection" name="bulk_action_id" value="<?php echo $result->getId() ?>" />
            </th>
            <td class="cb_icon_column">
                <a href="<?php echo $edit ?>"><img src="<?php echo $this->urls['thumbnails'] . "/" . $result->getImage() ?>" alt="" /></a>
            </td>
            <td>
                <strong><a href="<?php echo $edit ?>" title="Edit Aula Item"><?php echo ($result->getTitle()) ?></a></strong>
                <div class="row-actions">
                    <span><a href="<?php echo $edit ?>"><?php _e("Edit", "aula"); ?></a></span>
                    <span> | </span>
                    <span class="trash"><a href="<?php echo $remove ?>" class="remove_link"><?php _e("Delete", "aula"); ?></a></span>
                    <span> | </span>
                    <span Popover-animation="true"  popover-placement="top" popover="<? echo $result->getAbout();?>">Info</span>
                </div>
            </td>


            <td><?php echo $result->getDescriptionSummary() ?></td>

            <td><?php echo implode(', ', $result->getCategories())?></td>

            <td>&nbsp;&nbsp;<?php echo htmlspecialchars($result->getOrder(), ENT_QUOTES, 'UTF-8') ?></td>

            <td>
                <span><?php echo str_replace('-', '/', substr($result->getDate(), 0, 10)) ?></span>
                <br />
                <span><?php echo substr($result->getDate(), 11) ?></span>
            </td>
        </tr>
    <?php endforeach; ?>

    </tbody>
</table>