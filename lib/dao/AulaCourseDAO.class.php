<?php

require_once(dirname(__FILE__) . '/AulaCourseItem.class.php');
require_once(dirname(__FILE__) . '/../helper/AulaHelper.class.php');
require_once(dirname(__FILE__) . '/AulaBaseDAO.class.php');

/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 2/06/12
 * Time: 12:54
 * To change this template use File | Settings | File Templates.
 */
class AulaCourseDAO extends AulaBaseDAO
{


    public static function getItem($id, $customPostName=null,$post_meta_name=null)
    {
        $post = get_post($id);
        if ($post == false) {
            return null;
        }

        $category_ids = array();
        if ($customPostName != null) {
            if ($post->post_type!=$customPostName) {
                return null;
            }
            $terms = get_the_terms($post->ID, $customPostName);
            if (is_array($terms)) {
                foreach ($terms as $term) {
                    $category_ids[$term->term_id] = $term->name;
                }
            }
        }

        $item = new AulaCourseItem();
        
        $item->setId($post->ID);
        $item->setTitle($post->post_title);
        $item->description  = $post->post_content;
        $item->setDate($post->post_date);
        $item->setCategories($category_ids);
        $item->setOrder($post->menu_order);
        $item->_post_name   = $post->post_name;
        $meta = get_post_meta($post->ID, $post_meta_name, true);
        AulaHelper::processPostMeta($meta,$item);

        return $item;
    }
    public static function getItemById($id)
    {
    }


}
