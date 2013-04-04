<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/3/13
 * Time: 11:44 AM
 * To change this template use File | Settings | File Templates.
 */


require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../rest/CourseService.class.php');
define("isTest",true);

class CourseServiceTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        $_SERVER = array();
        _load_course_dummy_post();
        $this->sut = new CourseService(isTest);
    }

    public function test_initConstructor()
    {
        $this->assertNotNull($this->sut);
    }

    public function test_setAulaElement_json_courseIdAsItsSaved()
    {
        $presentationModelFromJson = '{"topics":[{"id":82,"title":"New Topic","summary":"Put some text here...\nAhora mola mucho m\u00e1s","activities":[]}],"courseId":"1"}';
        $actual = $this->sut->setAulaElement($presentationModelFromJson);
        $expected = 1;
        $this->assertEquals($expected,$actual);
    }

    public function test_setAulaElement_nonExistingId_errorJsonPrintedOnSTDOUT()
    {
        $presentationModelFromJson = '{"topics":[{"id":82,"title":"New Topic","summary":"Put some text here...\nAhora mola mucho m\u00e1s","activities":[]}],"courseId":"111111"}';
        $actual = $this->sut->setAulaElement($presentationModelFromJson);
        $expected = null;
        $this->assertEquals($expected,$actual);
    }
    public function test_getJsonAulaElement_mock1_validJson()
    {
        $actual = $this->sut->getJsonAulaElement(1);
        $expected = '{"topics":[{"id":1111,"title":"Sample Json Response","summary":"post_content","activities":{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."}},{"id":2222,"title":"Sample Json Response 2","summary":"post_content","activities":{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."}}],"courseId":1}';
        $this->assertEquals($expected,$actual);
    }

    public function test_getJsonAulaElement_nonExistingId_validJsonWithEmptyTopics()
    {
        $actual = $this->sut->getJsonAulaElement(11111111111);
        $expected = '{"topics":[],"courseId":11111111111}';
        $this->assertEquals($expected,$actual);
    }


}