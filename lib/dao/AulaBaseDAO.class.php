<?php
/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/30/13
 * Time: 9:37 AM
 * To change this template use File | Settings | File Templates.
 */
require_once(dirname(__FILE__) . '/IAulaBaseDAO.class.php');

abstract class AulaBaseDAO implements IAulaBaseDAO {

    private $aulaItem;

    function __construct(IAulaBaseItem $iAulaBaseItem)
    {
        $this->aulaItem=$iAulaBaseItem;
    }

    public function getItems($customPostName, $custom_tax_name, $post_meta_name, $categories=false, $operator='IN', $sort='menu_order', $order='asc', $offset=0, $limit=-1, $load_categories=true)
    {
        $items = array();


        $params = array(
            'post_type'=> $this->aulaItem->getPostType(),
            'orderby'=> $sort,
            'order'=>$order,
            'offset'=>$offset,
            'numberposts' => $limit,
        );

        if (!empty($categories)) {

            $tax_query_array = array(
                array(
                    'taxonomy' => $this->aulaItem->getPostType(),
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

            $item->setId($post->ID);
            $item->setTitle($post->post_title);
            $item->setSummary($post->post_content);
            $item->setDate($post->post_date);
            $item->setCategories(array());
            $item->setOrder($post->menu_order);
            $item->setPostName($post->post_name); // TODO: check if its used

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

}


?>
