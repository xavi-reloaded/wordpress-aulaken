/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 1/24/13
 * Time: 3:40 PM
 * To change this template use File | Settings | File Templates.
 */

var AulaUtils = (function () {
    function AulaUtils(urlParam) {
        this.url = urlParam;
    }
    AulaUtils.prototype.nextSectionOnTimeline = function(topStyle){

        var number = this.getIntegerFromTopString(topStyle);
        var topNewValue = 'top: -'+(number + 100) +'%;';
        return topNewValue;

    };

    AulaUtils.prototype.getIntegerFromTopString = function(topStyle){
        var number = topStyle.match(/\d+/);
        number = parseInt(number);
        return number;
    };

    return AulaUtils;
})();

module.exports = AulaUtils;

//AulaUtils = require('../js/app/AulaUtils');
