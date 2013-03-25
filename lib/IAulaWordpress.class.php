<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 29/05/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
interface IAulaWordpress
{
    public function initialize_plugin();

    public function admin_bar_edit_button();
    public function admin_bar_menu();
    public function admin_menu();
    public function admin_print_styles();
    public function admin_enqueue_scripts();
    public function screen_settings($current, $screen);
    public function contextual_help($contextual_help, $screen);
    public function admin_init();
    public function setup();
    public function upgrade();

    public function frontend_init();
    public function frontend_header();
    public function frontend_footer();

    public function frontend_single_filter_content();

    public function frontend_shortcode_aula();
    public function frontend_shortcode_aula_gallery();
    public function frontend_shortcode_aula_categories();



}
