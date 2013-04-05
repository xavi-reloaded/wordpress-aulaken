


if(typeof mocha === 'undefined'){
    assert = require("assert");
    AulaUtils = require('../js/app/AulaUtils');

} else {
    mocha.setup('bdd');
    define(['require', 'assert'], function (require) {
        assert = require('assert');
    });
    define(['require', 'chai'], function (require) {
        var chai = require('chai');
        expect = chai.expect;
    });

    define(['require', '../js/app/AulaUtils'], function (require) {
        AulaUtils = require('../js/app/AulaUtils');
    });

}

//mocha.setup('bdd');
//expect = chai.expect;

describe('AulaUtils Test', function(){

    beforeEach(function () {
        this.sut=new AulaUtils('');
    });


    describe('getIntegerFromTopString', function(){

        it('initial value for top (-0%)', function(){
            var actual = this.sut.getIntegerFromTopString("top: -0%;");
            var expected = 0;
            assert.equal(expected, actual );
        });

        it('initial value for top (-100%)', function(){
            var actual = this.sut.getIntegerFromTopString("top: -100%;");
            var expected = 100;
            assert.equal(expected, actual );
        });

    });

    describe('test #nextSectionOnTimeline', function(){

        it('nextSectionOnTimeline', function(){
            var actual = this.sut.nextSectionOnTimeline("top: -0px;");
            var expected = 'top: -100%;'
             assert.equal(expected, actual );
//            expect(actual).to.equal(expected);
        });

        it('getIntegerFromTopString get the integer from the top string', function(){
            var actual = this.sut.nextSectionOnTimeline("top: -0px;");
            var expected = 'top: -100%;';
            assert.equal(expected, actual );
//            expect(actual).to.equal(expected);
        });

    });




})


