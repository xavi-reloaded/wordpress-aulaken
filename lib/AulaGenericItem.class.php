<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 2/06/12
 * Time: 13:02
 * To change this template use File | Settings | File Templates.
 */
class AulaGenericItem
{
    public $id;
    public $title;
    public $description;
    public $date;
    public $categories;
    public $order;
    public $post_name;
    public $image;

    public function setPostName($post_name)
    {
        $this->post_name = $post_name;
    }

    public function getPostName()
    {
        return $this->post_name;
    }

    public function setCategories($categories)
    {
        $this->categories = $categories;
    }

    public function getCategories()
    {
        return $this->categories;
    }

    public function setDate($date)
    {
        $this->date = $date;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setOrder($order)
    {
        $this->order = $order;
    }

    public function getOrder()
    {
        return $this->order;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function getDescriptionSummary() {
        $no_line_breaks       = str_replace(array("\r", "\n", "\r\n"), ' ', ($this->getDescription()));
        $description_summary  = substr($no_line_breaks, 0, 120);
        $description_summary .= (AulaHelper::string_length($no_line_breaks) > 120)? '...' : '';
        return $description_summary;
    }


    public function save() {

        $params = array();
        $params['post_title']   = $this->title;
        $params['post_name']    = sanitize_title($this->title);
        $params['post_content'] = $this->description;
        $params['menu_order']   = $this->order;
        $params['post_date']    = $this->date;
        $params['post_status']  = 'publish';

        if ($this->id > 0) {
            $params['ID'] = $this->id;
            $update = wp_update_post($params);
            if ($update == 0) {
                return false;
            }
        }
        else {
            $params['post_status']    = 'publish';
            $params['comment_status'] = 'closed';
            $params['post_type']      = 'aula-course';
            $this->id = wp_insert_post($params);
            if ($this->id === false) {
                return false;
            }
        }

        // update post meta
        //$this->updatePostMeta();

        // update post terms
        // NOTE: this is the one instance where $this->categories should be an array on term ids, otherwise
        //       it is an array of term names keyed by term id.
        $terms_set = wp_set_object_terms($this->id, $this->categories, $this->_custom_tax_name);
        if ($terms_set instanceof WP_Error) {
            return __("Could not set categories, please try again.", 'aula');
        }

        return true;
    }


    public function delete($remove_images=true) {
        if ($this->id > 0) {
            // $this->deletePostMeta();
            wp_delete_post($this->id, true);
        }

    }
}
