<?php
/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/30/13
 * Time: 9:37 AM
 * To change this template use File | Settings | File Templates.
 */

require_once(dirname(__FILE__) . '/IAulaBaseItem.class.php');
require_once(dirname(__FILE__) . '/../helper/AulaHelper.class.php');

abstract class AulaBaseItem implements IAulaBaseItem {

    private $id_number;                  // course id number
    private $title;                      // course full name
    private $shortname;                  // course short name
    private $summary;                    // course summary
    private $categories;                 // course categories

    private $id;
    private $date;
    private $order;
    private $post_name;
    private $image;

    function __construct($title="",$shortname="",$summary="")
    {
        $this->title = $title;
        $this->shortname = $shortname;
        $this->summary = $summary;
        $this->categories = array();
    }
    abstract protected function getPostType();
    abstract protected function getCommentStatus();

    public function save() {

        $params = array();
        $params['post_title']   = $this->getTitle();
        $params['post_name']    = sanitize_title($this->getTitle());
        $params['post_content'] = $this->getSummary();
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
            $params['comment_status'] = $this->getCommentStatus();
            $params['post_type']      = $this->getPostType();
            $this->id = wp_insert_post($params);
            if ($this->id === false) {
                return false;
            }
        }

        // update post meta
        //$this->updatePostMeta();

        // update post terms
        // NOTE: $this->categories must be an array on term ids, otherwise it is an array of term names keyed by term id.

        $termIdArray = AulaHelper::getTermIdArrayFromCategory($this->getCategories());
        $terms_set = wp_set_object_terms($this->id, $termIdArray, "aula-taxonomy");

//        wp_set_post_categories( $this->id, $this->categories );
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

    public function getDescriptionSummary() {
        $no_line_breaks       = str_replace(array("\r", "\n", "\r\n"), ' ', ($this->getSummary()));
        $description_summary  = substr($no_line_breaks, 0, 120);
        $description_summary .= (AulaHelper::string_length($no_line_breaks) > 120)? '...' : '';
        return $description_summary;
    }



    //////////////////////////////////////////////
    //////////   GETTERS AND SETTERS   ///////////
    //////////////////////////////////////////////

    public function setPostName($post_name){$this->post_name = $post_name;}

    public function getPostName(){return $this->post_name;}

    public function setDate($date){$this->date = $date;}

    public function getDate(){return $this->date;}

    public function setId($id){$this->id = $id;}

    public function getId(){return $this->id;}

    public function setOrder($order){$this->order = $order;}

    public function getOrder(){return $this->order;}

    public function setImage($image){$this->image = $image;}

    public function getImage(){return $this->image;}

    public function setCategories($categories) { $this->categories = $categories; }

    public function getCategories() { return $this->categories; }

    public function setSummary($description) { $this->summary = $description; }

    public function getSummary() { return $this->summary; }

    public function setTitle($title){$this->title = $title;}

    public function getTitle(){return $this->title;}

    public function getShortName(){return $this->shortname;}

    public function setShortname($shortname){$this->shortname=$shortname;}





}