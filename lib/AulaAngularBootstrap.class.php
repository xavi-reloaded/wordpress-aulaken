<?php




/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 2/06/12
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */



class AulaAngularBootstrap {

    public static function loadScripts($jsPath = "") {
        wp_enqueue_script( "angular", $jsPath.'/angular/angular.js',false);
        wp_enqueue_script( "angular-resource", $jsPath.'/angular/angular-resource.js',false);
        wp_enqueue_script( "angular-ui", $jsPath.'/angular/angular-ui.min.js',false);
        wp_enqueue_script( "bootstrap", $jsPath.'/ui-bootstrap-tpls-0.2.0.js',false);
        wp_enqueue_script( "bootstrap-apium", $jsPath.'/ui-bootstrap-apium.js',false);
//        wp_enqueue_script( "bootstrap-ui", $jsPath.'/ui-bootstrap-0.2.0.js',false);
    }

    public static function loadCSS($cssPath = "") {
        wp_enqueue_style("bootstrap_combined", $cssPath.'/bootstrap-combined.min.css');
        wp_enqueue_style("bootstrap_apium", $cssPath.'/bootstrap-apium.css');
    }

    public static function loadApp($appPath = "") {
        wp_enqueue_script("angular_services", $appPath.'/services.js',array(),false,true);
        wp_enqueue_script("angular_controllers", $appPath.'/controllers.js',array(),false,true);
        wp_enqueue_script("angular_filters", $appPath.'/filters.js',array(),false,true);
        wp_enqueue_script("angular_directives", $appPath.'/directives.js',array(),false,true);
        wp_enqueue_script("angular_app", $appPath.'/app.js',array(),false,true);
    }


}