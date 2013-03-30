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

    public $topics_on_course = array();


    public function save($params = array())
    {
        return parent::save($params);
    }

    public function getPostType()
    {
        return "aula-course";
    }

    public function getCommentStatus()
    {
        return "closed";
    }

    public function getObjectItem()
    {
        return new AulaCourseItem();
    }

    // here are the fields not in a post (we save them using meta data)
    public function getMetadataArray($meta = array())
    {
        $meta = array();

        $this->meta['format'] =$this->format;                    // course format (weekly, Learning Object, Lesson)
        $this->meta['start_date'] =$this->start_date;                // course start date
        $this->meta['new_items_to_show'] =$this->new_items_to_show;         // course new items to show
        $this->meta['show_gradebook_to_students'] =$this->show_gradebook_to_students;// course show gradebook to students
        $this->meta['show_activity_reports'] =$this->show_activity_reports;     // course show activity reports
        $this->meta['maximum_upload_size'] =$this->maximum_upload_size;       // course maximum size students can upload
        // FORMATTING OPTIONS
        $this->meta['number_of_sections'] =$this->number_of_sections;        // number of lessons that the course can have
        $this->meta['course_layout'] =$this->course_layout;             // show all sections in one page or go through lessons one by one
        // GUEST ACCESS
        $this->meta['guest_access_allow'] =$this->guest_access_allow;        // allow guests navigate the course
        $this->meta['guest_access_password'] =$this->guest_access_password;     // password to guess access;
        // GROUPS
        $this->meta['default_user_group'] =$this->default_user_group;        // special role for course
        // AVAILABILITY
        $this->meta['available_group'] =$this->available_group;           // the course is available for students or for enterprises
        $this->meta['force_language'] =$this->force_language;            // force system language
        // ROLE RENAMING
        $this->meta['word_for_manager'] =$this->word_for_manager;
        $this->meta['word_for_course_creator'] =$this->word_for_course_creator;
        $this->meta['word_for_teacher'] =$this->word_for_teacher;
        $this->meta['word_for_non_editing_teacher'] =$this->word_for_non_editing_teacher;
        $this->meta['word_for_student'] =$this->word_for_student;
        $this->meta['word_for_guess'] =$this->word_for_guess;
        $this->meta['word_for_authenticated_user'] =$this->word_for_authenticated_user;
        $this->meta['word_for_authenticated_user_on_frontpage'] =$this->word_for_authenticated_user_on_frontpage;

        $this->meta['topics_on_course'] = $this->topics_on_course;

        return $meta;
    }

    public function getAbout()
    {
        return "mierder for you";
    }
}
