/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 1/24/13
 * Time: 3:40 PM
 * To change this template use File | Settings | File Templates.
 */

var SampleClass = (function () {
    function SampleClass(urlParam) {
        this.url = urlParam;
    }
    SampleClass.prototype.someFunction = function(stringParam){
        return "I want to return " + stringParam;
    };
    SampleClass.prototype.getUrl = function(){
        return this.url;
    };

    return SampleClass;
})();

module.exports = SampleClass;
