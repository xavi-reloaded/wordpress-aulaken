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
        wp_enqueue_script( "angular", $jsPath.'/angular/angular.js',false);
        wp_enqueue_script( "angular-ui", $jsPath.'/angular/angular-ui.min.js',false);
        wp_enqueue_script( "bootstrap", $jsPath.'/ui-bootstrap-tpls-0.2.0.js',false);
        wp_enqueue_script( "bootstrap-apium", $jsPath.'/ui-bootstrap-apium.js',false);
//        wp_enqueue_script( "bootstrap-ui", $jsPath.'/ui-bootstrap-0.2.0.js',false);
    }

    public static function loadCSS() {
        $cssPath=plugins_url().'/wordpress-aulaken/css';
        wp_enqueue_style("bcombined", $cssPath.'/bootstrap-combined.min.css');
        wp_enqueue_style("bapium", $cssPath.'/bootstrap-apium.css');
    }

    public static function loadApp() {
        $appPath=plugins_url().'/wordpress-aulaken/templates/angular/app/js';
        wp_enqueue_script("g", $appPath.'/app.js',array(),false,true);
        wp_enqueue_script("h", $appPath.'/services.js',array(),false,true);
        wp_enqueue_script("i", $appPath.'/controllers.js',array(),false,true);
        wp_enqueue_script("j", $appPath.'/filters.js',array(),false,true);
        wp_enqueue_script("k", $appPath.'/directives.js',array(),false,true);
    }


}