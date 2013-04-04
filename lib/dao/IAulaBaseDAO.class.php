<?php
/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/30/13
 * Time: 9:49 AM
 * To change this template use File | Settings | File Templates.
 */

interface IAulaBaseDAO {

    public function getItems($customPostName, $custom_tax_name, $post_meta_name, $categories=false, $operator='IN', $sort='menu_order', $order='asc', $offset=0, $limit=-1, $load_categories=true);
    public static function getItem($id);

    public function saveItem();
    public function deleteItem($id);

}