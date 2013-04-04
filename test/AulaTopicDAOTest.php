<?php
//require_once 'PHPUnit/Framework.php';

require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../lib/dao/AulaTopicDAO.class.php');
require_once('../lib/dao/entities/AulaTopicItem.class.php');
require_once(dirname(__FILE__) . '/TestHelper.class.php');

class AulaTopicDAOTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        $_SERVER = array();

        _load_course_dummy_post();
    }


	public function test_getTopicsFromCourseId_dummy_arrayOfTopics()
	{
        $sut=new AulaTopicDAO(new AulaTopicItem());
        $actual = $sut->getTopicsFromCourseId(1, true);
        $expected = TestHelper::getDummyTopicsArrayJson();
		$this->assertEquals($expected, $actual);
	}

    public function test_getTopicsFromCourseId_dummy_hasCorrespondentActivitiesJsonArray()
    {
        $this->sut=new AulaTopicDAO(new AulaTopicItem());
        $actual = $this->sut->getTopicsFromCourseId(1, true);
        $expected = TestHelper::getDummyTopicsArrayJson();
        $this->assertEquals($expected, $actual);
    }

    public function test_getItem_1111mocked_topicObject()
    {
        $actual = AulaTopicDAO::getItem(1111);
        $expected = 1111;
        $this->assertEquals($expected, $actual->getId());
        $this->assertEquals(new AulaTopicItem(), $actual->getObjectItem());
    }

    public function test_getItem_toJson_1111mocked_withChildsOption_validJson()
    {
        $topicItem = AulaTopicDAO::getItem(1111, true);
        $expected = TestHelper::getMockedAulaTopic();
        $actual = $topicItem->toJson();
        $this->assertEquals($expected->toJson(), $actual);
    }



    function providerJsonCourseTopics() {
        return array(
            array(3,'{"form":{"courseId":55,"topics":[{"id":1,"title":"topic 1","summary":"Put some text here...","activities":[]},{"id":2,"title":"topic 2","summary":"Put some text here...","activities":[]},{"id":3,"title":"topic 3","summary":"Put some text here...","activities":[]}]}}'),
            array(0,'{"form":{"courseId":55}}'),
            array(3,'{"form":{"courseId":55,"topics":[{"id":1,"title":"topic 1","summary":"Put some text here...","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"title":"Choice","pix":"choice.png","content":"The choice activity module enables a teacher to ask a single question and offer a selection of possible responses."},{"title":"Forum","pix":"forum.png","content":"The forum activity module enables participants to have asynchronous discussions i.e. discussions that take place over an extended period of time."},{"title":"Glossary","pix":"glossary.png","content":"The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information."},{"title":"Lesson","pix":"lesson.png","content":"The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely."},{"title":"Quiz","pix":"quiz.png","content":"The quiz activity enables a teacher to create quizzes comprising questions of various types, including multiple choice, matching, short-answer and numerical."},{"title":"Survey","pix":"survey.png","content":"The survey activity module provides a number of verified survey instruments that have been found useful in assessing and stimulating learning in online environments. A teacher can use these to gather data from their students that will help them learn about their class and reflect on their own teaching."},{"title":"Wiki","pix":"wiki.png","content":"The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit."}]},{"id":2,"title":"topic 2","summary":"Put some text here...","activities":[{"title":"Book","pix":"book.png","content":"The book module enables a teacher to create a multi-page resource in a book-like format, with chapters and subchapters. Books can contain media files as well as text and are useful for displaying lengthy passages of information which can be broken down into sections."},{"title":"Folder","pix":"folder.png","content":"The folder module enables a teacher to display a number of related files inside a single folder, reducing scrolling on the course page. A zipped folder may be uploaded and unzipped for display, or an empty folder created and files uploaded into it."},{"title":"URL","pix":"url.png","content":"The URL module enables a teacher to provide a web link as a course resource. Anything that is freely available online, such as documents or images, can be linked to; the URL doesn’t have to be the home page of a website. The URL of a particular web page may be copied and pasted or a teacher can use the file picker and choose a link from a repository such as Flickr, YouTube or Wikimedia (depending upon which repositories are enabled for the site)."},{"title":"Page","pix":"page.png","content":"The page module enables a teacher to create a web page resource using the text editor. A page can display text, images, sound, video, web links and embedded code, such as Google maps."},{"title":"Label","pix":"label.png","content":"The label module enables text and multimedia to be inserted into the course page in between links to other resources and activities. Labels are very versatile and can help to improve the appearance of a course if used thoughtfully."}]},{"id":3,"title":"topic 3","summary":"Put some text here...","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"title":"Lesson","pix":"lesson.png","content":"The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely."},{"title":"File","pix":"file.png","content":"The file module enables a teacher to provide a file as a course resource. Where possible, the file will be displayed within the course interface; otherwise students will be prompted to download it. The file may include supporting files, for example an HTML page may have embedded images or Flash objects."}]}]}}'),
            array(1,'{"form":{"courseId":55,"topics":[{"id":null,"title":"topic 1","summary":"Put some text here...","activities":[]}]}}'),
            array(1,'{"form":{"courseId":55,"topics":[{"id":null,"title":"topic 1","summary":"Put some text here...","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."}]}]}}'),
            array(1,'{"form":{"courseId":55,"topics":[{"id":null,"title":"topic 1","summary":"Put some text here...","activities":[{"id":null,"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."}]}]}}'),
            array(3,'{"form":{"topics":[{"id":256,"title":"sdfg","summary":"","activities":[]},{"id":257,"title":"444","summary":"","activities":[]},{"id":258,"title":"222","summary":"","activities":[]}],"courseId":"249"}}'),
            array(0,''),
        );
    }

    /**
     * @dataProvider providerJsonCourseTopics
     */
    public function test_getTopicItemsFromJson_jsonString_createOrCreateTopicsPosts($expected,$json)
    {
        $aulaTopicDAO = new AulaTopicDAO(new AulaTopicItem());
        $actual = $aulaTopicDAO->getTopicItemsFromJson($json);
        $this->assertEquals($expected, sizeof($actual));
    }

    public function test_createUpdateItemsFromAngularJson_jsonWithActivities_chargeActivitiesAsObjects()
    {
        $jsonWithActivities = '{"form":{"courseId":55,"topics":[{"id":1,"title":"topic 1","summary":"Put some text here...","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"title":"Choice","pix":"choice.png","content":"The choice activity module enables a teacher to ask a single question and offer a selection of possible responses."},{"title":"Forum","pix":"forum.png","content":"The forum activity module enables participants to have asynchronous discussions i.e. discussions that take place over an extended period of time."},{"title":"Glossary","pix":"glossary.png","content":"The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information."},{"title":"Lesson","pix":"lesson.png","content":"The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely."},{"title":"Quiz","pix":"quiz.png","content":"The quiz activity enables a teacher to create quizzes comprising questions of various types, including multiple choice, matching, short-answer and numerical."},{"title":"Survey","pix":"survey.png","content":"The survey activity module provides a number of verified survey instruments that have been found useful in assessing and stimulating learning in online environments. A teacher can use these to gather data from their students that will help them learn about their class and reflect on their own teaching."},{"title":"Wiki","pix":"wiki.png","content":"The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit."}]},{"id":2,"title":"topic 2","summary":"Put some text here...","activities":[{"title":"Book","pix":"book.png","content":"The book module enables a teacher to create a multi-page resource in a book-like format, with chapters and subchapters. Books can contain media files as well as text and are useful for displaying lengthy passages of information which can be broken down into sections."},{"title":"Folder","pix":"folder.png","content":"The folder module enables a teacher to display a number of related files inside a single folder, reducing scrolling on the course page. A zipped folder may be uploaded and unzipped for display, or an empty folder created and files uploaded into it."},{"title":"URL","pix":"url.png","content":"The URL module enables a teacher to provide a web link as a course resource. Anything that is freely available online, such as documents or images, can be linked to; the URL doesn’t have to be the home page of a website. The URL of a particular web page may be copied and pasted or a teacher can use the file picker and choose a link from a repository such as Flickr, YouTube or Wikimedia (depending upon which repositories are enabled for the site)."},{"title":"Page","pix":"page.png","content":"The page module enables a teacher to create a web page resource using the text editor. A page can display text, images, sound, video, web links and embedded code, such as Google maps."},{"title":"Label","pix":"label.png","content":"The label module enables text and multimedia to be inserted into the course page in between links to other resources and activities. Labels are very versatile and can help to improve the appearance of a course if used thoughtfully."}]},{"id":3,"title":"topic 3","summary":"Put some text here...","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"title":"Lesson","pix":"lesson.png","content":"The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely."},{"title":"File","pix":"file.png","content":"The file module enables a teacher to provide a file as a course resource. Where possible, the file will be displayed within the course interface; otherwise students will be prompted to download it. The file may include supporting files, for example an HTML page may have embedded images or Flash objects."}]}]}}';
        $aulaTopicDAO = new AulaTopicDAO(new AulaTopicItem());
        $actual = $aulaTopicDAO->getTopicItemsFromJson($jsonWithActivities);
        $this->assertEquals('Assignment', $actual[0]->activities[0]->getTitle());
        $this->assertEquals(8, sizeof($actual[0]->activities));
        $this->assertEquals(5, sizeof($actual[1]->activities));
        $this->assertEquals(3, sizeof($actual[2]->activities));
    }

    public function test_updateTopicsFromJson_jsonString_createOrCreateTopicsPosts()
    {
        $jsonWithActivities = '{"form":{"courseId":55,"topics":[{"id":1,"title":"topic 1","summary":"Put some text here...","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"title":"Choice","pix":"choice.png","content":"The choice activity module enables a teacher to ask a single question and offer a selection of possible responses."},{"title":"Forum","pix":"forum.png","content":"The forum activity module enables participants to have asynchronous discussions i.e. discussions that take place over an extended period of time."},{"title":"Glossary","pix":"glossary.png","content":"The glossary activity module enables participants to create and maintain a list of definitions, like a dictionary, or to collect and organise resources or information."},{"title":"Lesson","pix":"lesson.png","content":"The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely."},{"title":"Quiz","pix":"quiz.png","content":"The quiz activity enables a teacher to create quizzes comprising questions of various types, including multiple choice, matching, short-answer and numerical."},{"title":"Survey","pix":"survey.png","content":"The survey activity module provides a number of verified survey instruments that have been found useful in assessing and stimulating learning in online environments. A teacher can use these to gather data from their students that will help them learn about their class and reflect on their own teaching."},{"title":"Wiki","pix":"wiki.png","content":"The wiki activity module enables participants to add and edit a collection of web pages. A wiki can be collaborative, with everyone being able to edit it, or individual, where everyone has their own wiki which only they can edit."}]},{"id":2,"title":"topic 2","summary":"Put some text here...","activities":[{"title":"Book","pix":"book.png","content":"The book module enables a teacher to create a multi-page resource in a book-like format, with chapters and subchapters. Books can contain media files as well as text and are useful for displaying lengthy passages of information which can be broken down into sections."},{"title":"Folder","pix":"folder.png","content":"The folder module enables a teacher to display a number of related files inside a single folder, reducing scrolling on the course page. A zipped folder may be uploaded and unzipped for display, or an empty folder created and files uploaded into it."},{"title":"URL","pix":"url.png","content":"The URL module enables a teacher to provide a web link as a course resource. Anything that is freely available online, such as documents or images, can be linked to; the URL doesn’t have to be the home page of a website. The URL of a particular web page may be copied and pasted or a teacher can use the file picker and choose a link from a repository such as Flickr, YouTube or Wikimedia (depending upon which repositories are enabled for the site)."},{"title":"Page","pix":"page.png","content":"The page module enables a teacher to create a web page resource using the text editor. A page can display text, images, sound, video, web links and embedded code, such as Google maps."},{"title":"Label","pix":"label.png","content":"The label module enables text and multimedia to be inserted into the course page in between links to other resources and activities. Labels are very versatile and can help to improve the appearance of a course if used thoughtfully."}]},{"id":3,"title":"topic 3","summary":"Put some text here...","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"title":"Lesson","pix":"lesson.png","content":"The lesson activity module enables a teacher to deliver content and/or practice activities in interesting and flexible ways. A teacher can use the lesson to create a linear set of content pages or instructional activities that offer a variety of paths or options for the learner. In either case, teachers can choose to increase engagement and ensure understanding by including a variety of questions, such as multiple choice, matching and short answer. Depending on the student\'s choice of answer and how the teacher develops the lesson, students may progress to the next page, be taken back to a previous page or redirected down a different path entirely."},{"title":"File","pix":"file.png","content":"The file module enables a teacher to provide a file as a course resource. Where possible, the file will be displayed within the course interface; otherwise students will be prompted to download it. The file may include supporting files, for example an HTML page may have embedded images or Flash objects."}]}]}}';
        $aulaTopicDAO = new AulaTopicDAO(new AulaTopicItem());
        $actual = $aulaTopicDAO->updateTopicsFromJson($jsonWithActivities);

        $this->assertEquals(3, sizeof($actual));
    }

    public function test_updateActivitiesArrayById()
    {
        $aulaTopicDAO = new AulaTopicDAO(new AulaTopicItem());
        $activitiesIds = '[1,2,3]';
        $actual = $aulaTopicDAO->updateActivityArrayById(1111, $activitiesIds);
        $expected = 1111;
        $this->assertEquals($expected, $actual);
    }

}
?>