<?php
//require_once 'PHPUnit/Framework.php';

require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../lib/dao/AulaActivityDAO.class.php');
require_once('TestHelper.class.php');

class AulaActivityDAOTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        _load_course_dummy_post();

        $_SERVER = array();

    }


	public function test_getItem_1_courseObject()
	{
        $actual = AulaActivityDAO::getItem(5555);
        $expected = 5555;
        $this->assertEquals($expected, $actual->getId());
        $this->assertEquals(new AulaActivityItem(), $actual->getObjectItem());
	}

    public function test_getActivitiesFromTopicId_dummy_arrayOfTopics()
    {
        $sut=new AulaActivityDAO(new AulaActivityItem());
        $actual = $sut->getActivitiesFromTopicId(2222, true);
        $expected = TestHelper::getDummyActivitiesArrayJson();
        $this->assertEquals($expected, $actual);
    }

    public function test_updateActivitiesFromJson_realJsonWithActivities()
    {
        $presentationModelFromJson = '{"form":{"courseId":"40","topics":[{"id":104,"title":"This is a new Topic","summary":"Put some text here...","activities":[{"id":null,"title":"Glossary","pix":"glossary.png","content":"The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information."},{"id":null,"title":"Wiki","pix":"wiki.png","content":"The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit."},{"id":null,"title":"File","pix":"file.png","content":"The file module enables a teacher to provide a file as a course resource. Where possible, the file will be displayed within the course interface; otherwise students will be prompted to download it. The file may include supporting files, for example an HTML page may have embedded images or Flash objects."}]},{"id":null,"title":"another","summary":"Put some text here...","activities":[{"id":null,"title":"Glossary","pix":"glossary.png","content":"The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information."},{"id":null,"title":"Lesson","pix":"lesson.png","content":"The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely."},{"id":null,"title":"Book","pix":"book.png","content":"The book module enables a teacher to create a multi-page resource in a book-like format, with chapters and subchapters. Books can contain media files as well as text and are useful for displaying lengthy passages of information which can be broken down into sections."},{"id":null,"title":"Wiki","pix":"wiki.png","content":"The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit."}]}]}}';
        $sut=new AulaActivityDAO(new AulaActivityItem());
        $actual = $sut->updateActivitiesFromJson($presentationModelFromJson);
        $expectedTopicsSize = 2;
        $this->assertEquals($expectedTopicsSize, sizeof($actual));
        $expectedActivitiesSize = 7;
        $this->assertEquals($expectedActivitiesSize, sizeof($actual[0][1])+sizeof($actual[1][1]));
    }


    public function test_getActivityItemsFromJson()
    {
        $presentationModelFromJson = '{"form":{"courseId":"40","topics":[{"id":104,"title":"This is a new Topic","summary":"Put some text here...","activities":[{"id":null,"title":"Glossary","pix":"glossary.png","content":"The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information."},{"id":null,"title":"Wiki","pix":"wiki.png","content":"The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit."},{"id":null,"title":"File","pix":"file.png","content":"The file module enables a teacher to provide a file as a course resource. Where possible, the file will be displayed within the course interface; otherwise students will be prompted to download it. The file may include supporting files, for example an HTML page may have embedded images or Flash objects."}]}]}}';
        $aulaActivityDAO = new AulaActivityDAO(new AulaActivityItem());
        $activityItemListWithTopics = $aulaActivityDAO->getActivityItemsFromJson($presentationModelFromJson);

        $actual = $activityItemListWithTopics[0][1];
        $this->assertEquals(3, sizeof($actual));
        $this->assertEquals('Glossary', $actual[0]->getTitle());
        $this->assertEquals('file.png', $actual[2]->getPix());
    }


}
?>