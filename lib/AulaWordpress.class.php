<?php

require_once(dirname(__FILE__) . '/IAulaWordpress.class.php');
require_once(dirname(__FILE__) . '/dao/AulaCourseDAO.class.php');
require_once(dirname(__FILE__) . '/helper/AulaMetaboxHelper.class.php');
require_once(dirname(__FILE__) . '/AulaAngularBootstrap.class.php');
/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/25/13
 * Time: 12:24 AM
 * To change this template use File | Settings | File Templates.
 */

class AulaWordpress implements IAulaWordpress {

    public $metaBoxHelper;
    private $custom_tax_name          = "aula-taxonomy";
    private $custom_user_meta_name    = "aula_screen_settings";

    private $custom_post_course_name  = "aula-course";
    private $custom_post_topic_name   = "aula-topic";

    private $user_level = 'edit_pages';

    public $directories   = array();
    public $urls          = array();

    public $debug=true;
    public $version="0.0.1";

    private $wp_messages        = array();
    private $wp_error_messages  = array();

    function __construct($directories, $urls)
    {
        $this->directories = $directories;
        $this->urls = $urls;
        $this->metaBoxHelper = new AulaMetaboxHelper();
    }


    public function initialize_plugin()
    {
        // load in i18n file
        load_plugin_textdomain('aula', false, '/aula/localization');
        $this->default_term_name = __("Courses", "aula");


        // attempt to load public settings, default to private if options not available
        $public_posts_enabled = (isset($this->options['public_posts']))?     $this->options['public_posts'] : true;
        $public_posts_slug    = (isset($this->options['public_post_slug']))? array('slug'=>$this->options['public_post_slug']) : true;
        $public_tax_slug      = (isset($this->options['public_tax_slug']))?  array('slug'=>$this->options['public_tax_slug']) : true;


        // if saving options and public option enabled use post values instead of saved option values
        $aula_options_page = strpos($_SERVER['QUERY_STRING'], 'page=aula-options') !== false;
        if ($aula_options_page && isset($_POST['public_posts'])) {
            $post_vars = array_map('stripslashes_deep', $_POST);
            $post_vars = array_map('trim', $post_vars);
            $public_posts_slug = array('slug'=>$post_vars['public_post_slug']);
            $public_tax_slug   = array('slug'=>$post_vars['public_tax_slug']);
        }

        // create the course categories custom taxonomy
        $params = array();
        $params['label']                = __("Aula Category", 'aula');
        $params['public']                = $public_posts_enabled;
        $params['show_ui']               = true;
        $params['show_tagcloud']         = true;
        $params['hierarchical']          = true;
        $params['rewrite']               = $public_tax_slug;
        register_taxonomy($this->custom_tax_name, $this->custom_post_name, $params);


        // create the course custom post type
        $params = array();
        $params['label']               = __("Aula Course", 'aula');
        $params['public']              = $public_posts_enabled;
        $params['show_ui']             = false;
        $params['show_in_nav_menus']   = false;
        $params['supports']            = array('title', 'editor','excerpt','trackbacks','custom-fields','comments','revisions','thumbnail','author','page-attributes');
        $params['description']         = __("An Aula Course, generated by Aula.", 'aula');
        $params['hierarchical']        = true;
        $params['taxonomies']          = array($this->custom_tax_name,'category', 'post_tag');
        $params['menu_position']       = 45;
        $params['menu_icon']           = $this->urls['plugin']."/images/aula-icon-16.png";
        $params['rewrite']             = $public_posts_slug;
        register_post_type($this->custom_post_course_name, $params);


        // create the lessons custom post type
        $params = array();
        $params['label']               = __("Aula Topic", 'aula');
        $params['public']              = $public_posts_enabled;
        $params['show_ui']             = true;
        $params['show_in_nav_menus']   = true;
        $params['supports']            = array('title', 'editor','excerpt','trackbacks','custom-fields','comments','revisions','thumbnail','author','page-attributes');
        $params['description']         = __("An Aula Course Topic, generated by Aula.", 'aula');
        $params['hierarchical']        = false;
        $params['taxonomies']          = array($this->custom_tax_name,'category', 'post_tag');
        $params['menu_position']       = 46;
        $params['menu_icon']           = $this->urls['plugin']."/images/aula-icon-16.png";
        $params['rewrite']             = $public_posts_slug;
        register_post_type($this->custom_post_topic_name, $params);


        register_taxonomy_for_object_type('category', $this->custom_post_course_name);
        register_taxonomy_for_object_type('post_tag', $this->custom_post_course_name);

        register_taxonomy_for_object_type('category', $this->custom_post_topic_name);
        register_taxonomy_for_object_type('post_tag', $this->custom_post_topic_name);
    }

    public function admin_bar_edit_button()
    {
        // TODO: Implement admin_bar_edit_button() method.
    }

    public function admin_bar_menu()
    {
        // if user can't use delibera do not register the admin bar items
        if (!current_user_can($this->user_level)) {
//            return false;
        }

        global $wp_admin_bar;

        // add a Delibera menu to the Admin Menu Bar
        $wp_admin_bar->add_menu( array( 'id' => 'aula-menu', 'title' => __( 'Aula' ), 'href' => get_admin_url(null, 'admin.php?page=aula'), ) );
//        $wp_admin_bar->add_menu( array( 'parent' => 'aula-menu', 'id' => 'aula-library', 'title' => __( 'Aula', 'aula' ), 'href' => get_admin_url(null, 'admin.php?page=aula-course'), ) );
        $wp_admin_bar->add_menu( array( 'parent' => 'aula-menu', 'id' => 'aula-new-course', 'title' => __( 'Add New Course', 'aula' ), 'href' => get_admin_url(null, 'admin.php?page=aula-new-course'), ) );
        $wp_admin_bar->add_menu( array( 'parent' => 'aula-menu', 'id' => 'aula-about', 'title' => __( 'About', 'aula' ), 'href' => get_admin_url(null, 'admin.php?page=aula-about'), ) );

        // add a Delibera Entry sub menu item to the Admin Menu Bar Add New menu
        $wp_admin_bar->add_menu( array( 'parent' => 'new-content', 'id' => 'new-aula-entry', 'title' => __( 'Aula Entry', 'aula' ), 'href' => get_admin_url(null, 'admin.php?page=aula-upload'), ) );

    }

    public function admin_menu()
    {
        add_menu_page("Aula Control Panel", "aula", $this->user_level, 'aula', array(&$this, 'admin_aula_course'), $this->urls['plugin']."/images/aula-icon-16.png");

        add_submenu_page('aula', __("Aula Course", 'aula'), __('Course', 'aula'), $this->user_level, 'aula-course', array(&$this, 'admin_aula_course'));
        add_submenu_page('aula', __("Add New Course entry", 'aula'), __('Add New Course', 'aula'), $this->user_level, 'aula-new-course', array(&$this, 'admin_course_new'));
        add_submenu_page('aula', __("Aula Lessons", 'aula'), __('Lessons', 'aula'), $this->user_level, 'aula-lesson', array(&$this, 'admin_lesson'));
        add_submenu_page('aula', __("Add New Lesson", 'aula'), __('Add New Lesson', 'aula'), $this->user_level, 'aula-new-lesson', array(&$this, 'admin_lesson_new'));

        // register create/edit/delete course item actions
        add_submenu_page('delibera-hidden', "Save Aula Course", "Save", $this->user_level, 'aula-save-course', array(&$this, 'aula_save_course'));
        add_submenu_page('delibera-hidden', "Delete Aula Course", "Save", $this->user_level, 'aula-delete-course', array(&$this, 'aula_delete_course'));
    }

    public function admin_print_styles()
    {
        $aula_page = strpos($_SERVER['QUERY_STRING'], 'page=aula') !== false;

        if ($aula_page) {
            wp_enqueue_style('farbtastic');
            wp_enqueue_style('aula-admin-css', $this->urls['css'] . '/aula-admin.css', false, $this->version);
            wp_admin_css();
        }
    }

    public function admin_enqueue_scripts()
    {
        AulaAngularBootstrap::loadScripts($this->urls['javascript']);
        AulaAngularBootstrap::loadCSS($this->urls['css']);

        AulaAngularBootstrap::loadApp($this->urls['angular-app']);

        wp_enqueue_script( 'common' );
        wp_enqueue_script('utils');

        if (function_exists('wp_tiny_mce')) wp_tiny_mce();
        if (function_exists('add_thickbox')) add_thickbox();

        wp_enqueue_script('jquery-ui-widget');
        wp_enqueue_script('jquery-ui-tabs');
        wp_enqueue_script('jquery-color');

        wp_enqueue_script('jquery');
        wp_enqueue_script('thickbox',null,array('jquery'));
        wp_enqueue_style( 'thickbox');

        wp_print_scripts('editor');
        wp_enqueue_script('word-count');
        wp_print_scripts('media-upload');


//        wp_enqueue_script($this, plugins_url().'/wordpress-aulaken/lib/thkBox/tinymce/editor_plugin.js',array(),false,true);

    }




    public function screen_settings($current, $screen)
    {
        if (!isset($screen->id)) {
            return false;
        }

        switch($screen->id) {
            case 'toplevel_page_aula':
                ob_start();
                include_once($this->directories['template'] . '/admin-screen-options-library.php');
                return ob_get_clean();
                break;
            case 'aula_page_aula-upload':
                ob_start();
                include_once($this->directories['template'] . '/admin-screen-options-add-new.php');
                return ob_get_clean();
                break;
            case 'aula_page_aula-gallery':
                ob_start();
                include_once($this->directories['template'] . '/admin-screen-options-galleries.php');
                return ob_get_clean();
                break;

        }
    }

    public function contextual_help($contextual_help, $screen)
    {
        if (!isset($screen)) {
            return false;
        }

        if (strpos($screen, 'aula') !== false) {
            ob_start();
            include_once($this->directories['template'] . '/admin-contextual-help.php');
            return ob_get_clean();
        }

        return $contextual_help;
    }

    public function admin_init()
    {

        if(strpos($_SERVER['QUERY_STRING'], 'aula-save-course') !== false) {
            $this->aula_save_course(true);
        }

        if(strpos($_SERVER['QUERY_STRING'], 'aula-save-course') !== false) {
            $this->aula_save_course(true);
        }

        if(strpos($_SERVER['QUERY_STRING'], 'aula-delete-course') !== false) {
            $this->aula_delete_course(true);
        }
//        // go straigt to create new item action, no interface
//        if(strpos($_SERVER['QUERY_STRING'], 'aula-new-course') !== false) {
//            $this->admin_new_aula_course();
//        }

        if(isset($_GET['page']) && $_GET['page'] == 'aula') {
            $options = array('sort', 'order', 'view');
            foreach ($options as $option) {
                if(isset($_GET[$option])) {
                    setCookie("aula-view-cookie[$option]", $_REQUEST[$option], (time()+36000000));
                }

            }
            setCookie("aula-view-cookie", false, (time() - 36000));
        }
    }

    public function setup()
    {
        // TODO: Implement setup() method.
    }

    public function upgrade()
    {
        // TODO: Implement upgrade() method.
    }

    public function frontend_init()
    {
        // TODO: Implement frontend_init() method.
    }

    public function frontend_header()
    {
        // TODO: Implement frontend_header() method.
    }

    public function frontend_footer()
    {
        // TODO: Implement frontend_footer() method.
    }

    public function frontend_single_filter_content()
    {
        // TODO: Implement frontend_single_filter_content() method.
    }

    public function frontend_shortcode_aula()
    {
        // TODO: Implement frontend_shortcode_aula() method.
    }

    public function frontend_shortcode_aula_gallery()
    {
        // TODO: Implement frontend_shortcode_aula_gallery() method.
    }

    public function frontend_shortcode_aula_categories()
    {
        // TODO: Implement frontend_shortcode_aula_categories() method.
    }


    /*****************************************************
     **       - ADMIN ACTIONS
     *****************************************************/
    public function aula_save_course($init_run=false) {


        $error = false;
        if ($this->debug) {
            echo "_aula_create_course_nonce".$_REQUEST['_aula_create_course_nonce']."<br/>";
        }

        $nonce_verified = wp_verify_nonce( $_REQUEST['_aula_create_course_nonce'], 'aula-create-course' );

        if ($nonce_verified) {
            $aulaCourseItem = new AulaCourseItem();
            $aulaCourseItem->setTitle($_REQUEST['post_title']);
            $aulaCourseItem->setSummary($_REQUEST['post_summary']);
            $aulaCourseItem->setShortname($_REQUEST['post_shortname']);
            $aulaCourseItem->setCategories($_REQUEST['tax_input']);
            $aulaCourseItem->setOrder(wp_count_posts($this->custom_post_course_name)->publish + 1);



            $weke =  $_GET['tEsc'];

            if (isset($_REQUEST['save'])){
                $aulaCourseItem->setId($_REQUEST['save_id']);
            } else {
                $aulaCourseItem->setId(null);
            }

            $dao = new AulaCourseDAO($aulaCourseItem);
            $new_item = $dao->saveItem();

            header('Location: admin.php?page=aula&id=' . $new_item->getId()); die;
        }
        else {
            $error = __("WordPress Nonce Error, please reload the form and try again.", 'aula');
        }
        if (!$init_run && $error !== false) {
            $this->wp_error($error);
            include_once($this->directories['template'] . '/admin-aula.php');
        }

    }

    public function admin_aula()
    {
        if (function_exists('is_upload_space_available') && is_upload_space_available() == false) {
            include_once($this->directories['template'] . '/admin-discfull.php');
        }
        else {
                include_once($this->directories['template'] . '/admin-course-new.php');
        }
    }

    public function admin_aula_course()
    {

        // if id is set show edit form
        if (isset($_GET['id'])) {
            $this->admin_edit();
            return;
        }

        $user = wp_get_current_user();
        $user_settings = get_user_meta($user->ID, $this->custom_user_meta_name, true);

        $sort   = 'date';
        $order  = 'desc';
        $paged  = 1;
        $offset = 0;
        $limit  = 20;
        $category_filter = false;

        $dao = new AulaCourseDAO(new AulaCourseItem());
        $results = $dao->getItems($this->custom_post_course_name, $this->custom_tax_name, $this->custom_user_meta_name,$category_filter, 'IN', $sort, $order, $offset, $limit);

        include_once($this->directories['template'] . '/admin-aula.php');
    }

    public function admin_course_new()
    {
        $this->addMetaBoxForNewForm();

        $post_new_file=true;
        $post_type=$this->custom_post_course_name;
        $form_action="editpost";

//        do_action('add_meta_boxes', '', $post);
//        add_meta_box( 'submitdiv', __( 'Publish' ), 'post_submit_meta_box', null, 'side', 'core' );

        if (function_exists('is_upload_space_available') && is_upload_space_available() == false) {
            include_once($this->directories['template'] . '/admin-discfull.php');
        }
        else {
            include_once($this->directories['template'] . '/admin-course-new.php');
        }
    }

    public function addMetaBoxForNewForm()
    {
        wp_enqueue_script('post');
        if ( wp_is_mobile() )
            wp_enqueue_script( 'jquery-touch-punch' );

        add_meta_box('submitdiv', __('Publish Course'), array(&$this->metaBoxHelper, 'post_submit_meta_box'), null, 'side', 'core');
        add_meta_box('categoriesdiv', __('Course Categories'), array(&$this->metaBoxHelper, 'post_categories_meta_box'), null, 'side', 'core');
        add_meta_box('lessonslistdiv', __('Topics'), array(&$this->metaBoxHelper, 'post_lessons_meta_box'), null, 'side', 'core');

    }

    //TODO: put bootstrap message here
    public function render_aula_admin_message() {
        foreach ($this->wp_messages as $message) {
            echo "<div id='message' class='updated'><p>";
            echo "	<strong>$message</strong>";
            echo "</p></div>";
        }

        foreach ($this->wp_error_messages as $message) {
            echo "<div id='message' class='error'><p>";
            echo "	<strong>$message</strong>";
            echo "</p></div>";
        }
    }

    private function aula_delete_course($true)
    {
        $error = false;

        if (isset($_REQUEST['id'])) {
//            check_admin_referer('aula-delete-course');
            $item = AulaCourseDAO::getItem($_REQUEST['id']);
            if ($item) {
                $item->delete();
                header('Location: admin.php?page=aula&message=2'); die;
            }
            else {
                header('Location: admin.php?page=aula&message=3'); die;
            }
        }
    }

    private function admin_edit()
    {
        $post = get_post($_REQUEST['id']);
        $course = AulaCourseDAO::getItem($_REQUEST['id']);

        $this->addMetaBoxForNewForm();


        $post_new_file=false;
        $post_type=$this->custom_post_course_name;
        $form_action="editpost";

        include_once($this->directories['template'] . '/admin-course-new.php');
    }


}