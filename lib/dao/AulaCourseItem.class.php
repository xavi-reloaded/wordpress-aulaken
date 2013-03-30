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



    public function getPostType()
    {
        return "aula-course";
    }

    public function getCommentStatus()
    {
        return "closed";
    }
}
