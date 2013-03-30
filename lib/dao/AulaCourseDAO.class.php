<?php

require_once(dirname(__FILE__) . '/AulaCourseItem.class.php');
require_once(dirname(__FILE__) . '/../helper/AulaHelper.class.php');

/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 2/06/12
 * Time: 12:54
 * To change this template use File | Settings | File Templates.
 */
class AulaCourseDAO
{
    /**
     * Get a collection of catalog items from the database. May
     * possibly return an empty array.
     *
     * @param array $categories The array of category slugs to filter with. Will be ignored if false.
     * @param string $operator  Operator used to test the categories filter. Possible values are 'IN', 'NOT IN' or 'AND'.
     * @param string $sort The database field used to sort the collection. Possible values are 'title', 'order', 'date' or 'random'.
     * @param string $order The order the collection should be returned in. Possible values are 'asc' or 'desc'.
     * @param integer $offset The start ordinal of the collection, or number of catalog items to skip over.
     * @param integer $limit The maximum amount of catalog items allowed in the collection.
     * @param boolean $load_categories Wether to load the category ids for each item of the collection. Possible large database hit.
     * @return array An array of DeliberaForum objects
     */

    public static function getItems($customPostName, $custom_tax_name, $post_meta_name, $categories=false, $operator='IN', $sort='menu_order', $order='asc', $offset=0, $limit=-1, $load_categories=true)
    {
        $items = array();


        $params = array(
            'post_type'=> $customPostName,
            'orderby'=> $sort,
            'order'=>$order,
            'offset'=>$offset,
            'numberposts' => $limit,
        );

        if (!empty($categories)) {

            $tax_query_array = array(
                array(
                    'taxonomy' => $customPostName,
                    'field'    => 'id',
                    'terms'    => $categories,
                    'operator' => $operator  // 'LIKE', 'NOT LIKE', 'IN', 'NOT IN', 'BETWEEN', 'NOT BETWEEN'
                )
            );
            $params['tax_query'] = $tax_query_array;
        }

        $posts = get_posts($params);

        foreach ($posts as $post) {

            $item = new AulaCourseItem();

            $item->id           = $post->ID;
            $item->setTitle($post->post_title);
            $item->setSummary($post->post_content);
            $item->date         = $post->post_date;
            $item->setCategories(array());
            $item->order        = $post->menu_order;
            $item->post_name    = $post->post_name;

            $item_cats = array();
            if ($load_categories) {
                $category_ids = array();
                $terms = get_the_terms($post->ID, $custom_tax_name);
                if (is_array($terms)) {
                    foreach ($terms as $term) {
                        $category_ids[$term->term_id] = $term->name;
                    }
                }
                $item->setCategories($category_ids);
            }

            $meta = get_post_meta($post->ID, $post_meta_name, true);
            AulaHelper::processPostMeta($meta,$item);

            $items[] = $item;
        }

        return $items;
    }

    /**
     * Get a single catalog item by database id
     *
     * @param integer $id The id of the catalog item you wish to get.
     * @return null|AunaCourse
     */

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
        
        $item->id           = $post->ID;
        $item->setTitle($post->post_title);
        $item->description  = $post->post_content;
        $item->date         = $post->post_date;
        $item->setCategories($category_ids);
        $item->order        = $post->menu_order;
        $item->_post_name   = $post->post_name;
        $meta = get_post_meta($post->ID, $post_meta_name, true);
        AulaHelper::processPostMeta($meta,$item);

        return $item;
    }

    public static function saveCourseItem($title, $new_item_order,$id="",$summary="",$tax_input=null,$shortname="")
    {
        $new_item = new AulaCourseItem();
        if (isset($id)) $new_item->setId($id);
        $new_item->setTitle($title);
        $new_item->setOrder($new_item_order);
        $new_item->setSummary($summary);
        $new_item->setCategories($tax_input);
        $new_item->setShortname($shortname);
        $new_item->save();
        return $new_item;
    }

    public static function getItemById($id)
    {
    }


}
