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
    public static function getItem($id, $customPostName=null,$post_meta_name=null);
    public static function saveCourseItem($title, $new_item_order,$id="",$summary="",$tax_input=null,$shortname="");
    public static function getItemById($id);

}