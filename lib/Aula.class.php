<?php

require_once(dirname(__FILE__) . '/IAulaWordpress.class.php');

/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/25/13
 * Time: 12:05 AM
 * To change this template use File | Settings | File Templates.
 */

class Aula implements IAulaWordpress {

    private $aulaWordpress;
    private $options;
    private $options_name = 'aula-options';

    public $directories   = array();
    public $urls          = array();



    function __construct($aulaWordpress = null)
    {
        $this->options = $this->get_options();

        $wp_upload_dir = wp_upload_dir();
        $upload_directory = $wp_upload_dir['baseurl'];
        if (is_ssl()) {
            $upload_directory = str_replace('http://', 'https://', $wp_upload_dir['baseurl']);
        }
        $this->init($wp_upload_dir, $upload_directory);

        if ($aulaWordpress==null)
        {
            $this->aulaWordpress = new AulaWordpress($this->directories,$this->urls);
        }
        else
        {
            $this->aulaWordpress = $aulaWordpress;
        }
    }

    private function init($wp_upload_dir, $upload_directory)
    {
        $this->plugin_file = WP_CONTENT_DIR . "/plugins/aula/aula.php";
        $this->directories['plugin'] = WP_CONTENT_DIR . "/plugins/aula";
        $this->directories['css'] = WP_CONTENT_DIR . "/plugins/aula/css";
        $this->directories['template'] = WP_CONTENT_DIR . "/plugins/aula/templates";
        $this->directories['views'] = WP_CONTENT_DIR . "/plugins/aula/templates/views";
        $this->directories['buttons'] = WP_CONTENT_DIR . "/plugins/aula/templates/buttons";
        $this->directories['languages'] = WP_CONTENT_DIR . "/plugins/localization";

        $this->directories['wp_uploads'] = $wp_upload_dir['basedir'];
        $this->directories['uploads'] = $wp_upload_dir['basedir'] . "/aula";

        $this->directories['originals'] = $wp_upload_dir['basedir'] . "/aula/originals";
        $this->directories['thumbnails'] = $wp_upload_dir['basedir'] . "/aula/thumbnails";
        $this->directories['fullsize'] = $wp_upload_dir['basedir'] . "/aula/fullsize";
        $this->directories['user_views'] = $wp_upload_dir['basedir'] . "/aula/templates";

        // define commen urls for the plugin
        $this->urls['plugin'] = content_url() . "/plugins/aula";
        $this->urls['css'] = content_url() . "/plugins/aula/css";
        $this->urls['javascript'] = content_url() . "/plugins/aula/js";
        $this->urls['images'] = content_url() . "/plugins/aula/images";
        $this->urls['template'] = content_url() . "/plugins/aula/templates";
        $this->urls['views'] = content_url() . "/plugins/aula/templates/views";
        $this->urls['buttons'] = content_url() . "/plugins/aula/templates/buttons";

        $this->urls['originals'] = $upload_directory . "/aula/originals";
        $this->urls['thumbnails'] = $upload_directory . "/aula/thumbnails";
        $this->urls['fullsize'] = $upload_directory . "/aula/fullsize";
        $this->urls['user_views'] = $upload_directory . "/aula/templates";
    }

    public function registerWordPressHooks()
    {

        // register custom post type and taxonomy
        add_action('init', array(&$this, 'initialize_plugin'), 0);

        // register custom menus in the Admin Menu Bar
        add_action('wp_before_admin_bar_render', array(&$this, 'admin_bar_edit_button'), 99);
        add_action('wp_before_admin_bar_render', array(&$this, 'admin_bar_menu'), 100);

        // register custom sidebar widgets
        //add_action( 'widgets_init', create_function('', 'return register_widget("aulaWidget");') );
        //add_action( 'widgets_init', create_function('', 'return register_widget("aulaCategoryWidget");') );


        // register admin hooks
        if (is_admin()) {
            // register admin menus, stylesheets and javascript libraries
            add_action('admin_menu', array(&$this, 'admin_menu'));
//            add_action('admin_print_styles', array(&$this, 'admin_print_styles'));
            add_action('admin_enqueue_scripts', array(&$this, 'admin_enqueue_scripts'));

            // register help and screen settings panel
            add_filter('screen_settings', array(&$this, 'screen_settings'), 10, 2);
            add_filter('contextual_help', array(&$this, 'contextual_help'), 10, 2);

            $aula_page       = strpos($_SERVER['QUERY_STRING'], 'page=aula') !== false;
            $aula_remove_page = strpos($_SERVER['QUERY_STRING'], 'page=aula-remove') !== false;

            if ($aula_page) {
                add_action('admin_init', array(&$this, 'admin_init'));
            }

            if ($aula_page && !$aula_remove_page) {
                add_action('init', array(&$this, 'setup'), 1);
            }

            if (!$aula_remove_page) {
                add_action('init', array(&$this, 'upgrade'), 2);
            }

            /*
			// register admin ajax actions
			// add_action('wp_ajax_aula_reorder', array($this, 'ajax_reorder_items'));
			add_action('wp_ajax_aula_micro_save', array($this, 'ajax_micro_save'));
			add_action('wp_ajax_aula_update_screen_settings', array($this, 'ajax_update_screen_settings'));

			add_action('wp_ajax_aula_new_category', array($this, 'ajax_new_category'));
			add_action('wp_ajax_aula_delete_category', array($this, 'ajax_delete_category'));

			add_action('wp_ajax_aula_flush_fullsize', array($this, 'ajax_flush_fullsize'));
			add_action('wp_ajax_aula_render_images', array(&$this, 'ajax_render_images'));

			add_action('wp_ajax_aula_delete_subimage', array(&$this, 'ajax_delete_subimage'));
			add_action('wp_ajax_aula_delete_library', array(&$this, 'ajax_delete_library'));
			add_action('wp_ajax_aula_delete_system', array(&$this, 'ajax_delete_system'));
            */
        }

        // register frontend hooks
        else {
            add_action('wp_enqueue_scripts', array(&$this, 'frontend_init'));
            add_action('wp_head', array(&$this, 'frontend_header'));
            add_action('wp_footer', array(&$this, 'frontend_footer'));

            // add content and excerpt filters if the public feature is enabled
            $public_posts_enabled = (isset($this->options['public_posts']))? $this->options['public_posts'] : false;
            if ($public_posts_enabled) {
                add_filter('the_content', array(&$this, 'frontend_single_filter_content'), 12);
                add_filter('the_excerpt', array(&$this, 'frontend_single_filter_content'), 12);
            }
        }

        // register shortcodes
        add_shortcode('aula', array(&$this, 'frontend_shortcode_aula'));
        add_shortcode('aula_gallery', array(&$this, 'frontend_shortcode_aula_gallery'));
        add_shortcode('aula_categories', array(&$this, 'frontend_shortcode_aula_categories'));

    }

    public function initialize_plugin()
    {
        $this->aulaWordpress->initialize_plugin();
    }

    public function admin_bar_edit_button()
    {
        $this->aulaWordpress->admin_bar_edit_button();
    }

    public function admin_bar_menu()
    {
        $this->aulaWordpress->admin_bar_menu();
    }

    public function admin_menu()
    {
        $this->aulaWordpress->admin_menu();
    }

    public function admin_print_styles()
    {
        $this->aulaWordpress->admin_print_styles();
    }

    public function admin_enqueue_scripts()
    {
        $this->aulaWordpress->admin_enqueue_scripts();
    }

    public function screen_settings($current, $screen)
    {
        $this->aulaWordpress->screen_settings($current, $screen);
    }

    public function contextual_help($contextual_help, $screen)
    {
        $this->aulaWordpress->contextual_help($contextual_help, $screen);
    }

    public function admin_init()
    {
        $this->aulaWordpress->admin_init();
    }

    public function setup()
    {
        $this->aulaWordpress->setup();
    }

    public function upgrade()
    {
        $this->aulaWordpress->upgrade();
    }

    public function frontend_init()
    {
        $this->aulaWordpress->frontend_init();
    }

    public function frontend_header()
    {
        $this->aulaWordpress->frontend_header();
    }

    public function frontend_footer()
    {
        $this->aulaWordpress->frontend_footer();
    }

    public function frontend_single_filter_content()
    {
        $this->aulaWordpress->frontend_single_filter_content();
    }

    public function frontend_shortcode_aula()
    {
        $this->aulaWordpress->frontend_shortcode_aula();
    }

    public function frontend_shortcode_aula_gallery()
    {
        $this->aulaWordpress->frontend_shortcode_aula_gallery();
    }

    public function frontend_shortcode_aula_categories()
    {
        $this->aulaWordpress->frontend_shortcode_aula_categories();
    }

    private function get_options()
    {
        return get_option($this->options_name);
    }




}