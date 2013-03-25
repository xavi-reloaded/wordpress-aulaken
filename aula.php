<?php
/**
 * @package Aula
 * @version 0.0.1
 */
/*
Plugin Name: Aula on-line Learning
Plugin URI: http://www.apiumtech/plugins/
Description: Course Managing System
Author: Xavi Hidalgo
Version: 0.0.1
Author URI: http://www.apiumtech.com
*/

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
    echo "Hi there!  I'm just a plugin, not much I can do when called directly.";
    //exit;
}

// Global Aula Singleton
global $wp_plugin_aula_class;

// Load the Delibera WordPress plugin if PHP is version 5.0 or above
function aula_load_plugin() {

    // load necessary libraries
    require(dirname(__FILE__) . '/lib/Aula.class.php');
    require(dirname(__FILE__) . '/lib/AulaWordpress.class.php');

    // create Delibera class and hook into WordPress
    global $wp_plugin_aula_class;
    $wp_plugin_aula_class = new Aula(null);
    $wp_plugin_aula_class->registerWordPressHooks();

}


if (version_compare(phpversion(), '5.0.0', '>=')) {
//    aula_load_plugin();
}

aula_load_plugin();


?>