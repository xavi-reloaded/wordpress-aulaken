/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/5/13
 * Time: 1:57 PM
 * To change this template use File | Settings | File Templates.
 */

var assert = require('assert');


//define(['require', 'assert'], function (require) {
//    var assert = require('assert');
//});


describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});