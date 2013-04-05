/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/5/13
 * Time: 3:46 PM
 * To change this template use File | Settings | File Templates.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery.min'],
    function   ($) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
    });

