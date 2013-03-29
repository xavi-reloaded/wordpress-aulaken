<?php




/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 2/06/12
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */



class AulaAngularBootstrap {

    public static function loadScripts() {
        $jsPath=plugins_url().'/wordpress-aulaken/js';
        wp_enqueue_script( "a", $jsPath.'/angular/angular.js',false);
        wp_enqueue_script( "b", $jsPath.'/ui-bootstrap-tpls-0.2.0.js',false);
        wp_enqueue_script( "c", $jsPath.'/ui-bootstrap-apium',false);
    }

    public static function loadCSS() {
        $cssPath=plugins_url().'/wordpress-aulaken/css';
        wp_enqueue_style("d", $cssPath.'/bootstrap-combined.min.css');
        wp_enqueue_style("f", $cssPath.'/bootstrap-apium.css');

    }

}