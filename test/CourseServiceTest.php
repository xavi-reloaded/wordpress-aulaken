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

    public function test_setAulaElement_realJsonWithActivities_activitiesAreSaved()
    {
        $presentationModelFromJson = '{"form":{"courseId":"40","topics":[{"id":104,"title":"This is a new Topic","summary":"Put some text here...","activities":[{"id":null,"title":"Glossary","pix":"glossary.png","content":"The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information."},{"id":null,"title":"Wiki","pix":"wiki.png","content":"The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit."},{"id":null,"title":"File","pix":"file.png","content":"The file module enables a teacher to provide a file as a course resource. Where possible, the file will be displayed within the course interface; otherwise students will be prompted to download it. The file may include supporting files, for example an HTML page may have embedded images or Flash objects."}]},{"id":null,"title":"another","summary":"Put some text here...","activities":[{"id":null,"title":"Glossary","pix":"glossary.png","content":"The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information."},{"id":null,"title":"Lesson","pix":"lesson.png","content":"The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely."},{"id":null,"title":"Book","pix":"book.png","content":"The book module enables a teacher to create a multi-page resource in a book-like format, with chapters and subchapters. Books can contain media files as well as text and are useful for displaying lengthy passages of information which can be broken down into sections."},{"id":null,"title":"Wiki","pix":"wiki.png","content":"The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit."}]}]}}';
        $sut = new CourseService(isTest);
        $actual = $sut->setAulaElement($presentationModelFromJson);
        $expected = null;
        $this->assertNotNull($actual);
    }


    public function test_getJsonAulaElement_mock1_validJson()
    {
        $actual = $this->sut->getJsonAulaElement(1);
        $expected = '{"topics":[{"id":1111,"title":"Sample Json Response","summary":"A nice content for the item","activities":[{"id":5555,"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"id":6666,"title":"Assignment","pix":"assignment.png","content":"An other fliping content for you"}]},{"id":2222,"title":"Sample Json Response 2","summary":"A nice content for the item","activities":[{"id":5555,"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"id":6666,"title":"Assignment","pix":"assignment.png","content":"An other fliping content for you"}]}],"courseId":1}';
        $this->assertEquals($expected,$actual);
    }

    public function test_getJsonAulaElement_mock2NoActivities_validJson()
    {
        $actual = $this->sut->getJsonAulaElement(2);
        $expected = '{"topics":[{"id":3333,"title":"Sample Json Response 2","summary":"yeja !","activities":[]}],"courseId":2}';
        $this->assertEquals($expected,$actual);
    }

    public function test_getJsonAulaElement_nonExistingId_validJsonWithEmptyTopics()
    {
        $actual = $this->sut->getJsonAulaElement(11111111111);
        $expected = '{"topics":[],"courseId":11111111111}';
        $this->assertEquals($expected,$actual);
    }

    public function test_deleteAulaItemById()
    {
        $sut = new CourseService(isTest);
        $actual = $sut->deleteAulaItemById(1111);
        $this->assertEquals(true,$actual);
    }


}