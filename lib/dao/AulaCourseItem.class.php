<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 2/06/12
 * Time: 13:02
 * To change this template use File | Settings | File Templates.
 */

require_once(dirname(__FILE__) . '/AulaBaseItem.class.php');

class AulaCourseItem extends AulaBaseItem
{
    public $id;
    public $date;
    public $order;
    public $post_name;
    public $image;


    public $format;                     // course format (weekly, Learning Object, Lesson)
    public $start_date;                 // course start date
    public $new_items_to_show;          // course new items to show
    public $show_gradebook_to_students; // course show gradebook to students
    public $show_activity_reports;      // course show activity reports
    public $maximum_upload_size;        // course maximum size students can upload
    // FORMATTING OPTIONS
    public $number_of_sections;         // number of lessons that the course can have
    public $course_layout;              // show all sections in one page or go through lessons one by one
    // GUEST ACCESS
    public $guest_access_allow;         // allow guests navigate the course
    public $guest_access_password;      // password to guess access;
    // GROUPS
    public $default_user_group;         // special role for course
    // AVAILABILITY
    public $available_group;            // the course is available for students or for enterprises
    public $force_language;             // force system language
    // ROLE RENAMING
    public $word_for_manager;
    public $word_for_course_creator;
    public $word_for_teacher;
    public $word_for_non_editing_teacher;
    public $word_for_student;
    public $word_for_guess;
    public $word_for_authenticated_user;
    public $word_for_authenticated_user_on_frontpage;


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


    //////////////////////////////////////////////
    //////////   GETTERS AND SETTERS   ///////////
    //////////////////////////////////////////////

    public function setPostName($post_name)
    {
        $this->post_name = $post_name;
    }

    public function getPostName()
    {
        return $this->post_name;
    }



    public function setDate($date)
    {
        $this->date = $date;
    }

    public function getDate()
    {
        return $this->date;
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



    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getImage()
    {
        return $this->image;
    }




}
