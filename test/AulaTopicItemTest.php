<?php
//require_once 'PHPUnit/Framework.php';

require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../lib/dao/AulaTopicItem.class.php');

class AulaTopicItemTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        $_SERVER = array();
    }

    public function test_toJson_empty_emptyButValidJson()
    {
        $this->sut=new AulaTopicItem();
        $actual = $this->sut->toJson();
        $expected = '{"id":null,"title":"","summary":"","activities":[]}';
        $this->assertEquals($actual,$expected);
    }

    public function test_toJson_withActivities_json()
    {
        $this->sut=new AulaTopicItem();
        $activities = array (
            array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'),
            array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'An other fliping content for you')
        );
        $this->sut->setActivities($activities);
        $actual = $this->sut->toJson();
        $expected = '{"id":null,"title":"","summary":"","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"title":"Assignment","pix":"assignment.png","content":"An other fliping content for you"}]}';
        $this->assertEquals($actual,$expected);
    }

    public function test_toJsonForTest_withActivities_json()
    {
        $this->sut=new AulaTopicItem("Sample Json Response");
        $this->sut->setId(1);
        $activities = array (
            array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'),
            array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'An other fliping content for you')
        );
        $this->sut->setActivities($activities);

        $topicsJson=array();
        array_push($topicsJson,$this->sut->toJson());

        $expected = '{"topics" : [{"id":1,"title":"Sample Json Response","summary":"","activities":[{"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},{"title":"Assignment","pix":"assignment.png","content":"An other fliping content for you"}]}]}';;

        $actual=array("topics" => $topicsJson);
        $actual = json_encode($actual);
        $this->assertEquals($actual,$expected);
    }




	public function test_construct_empty_wellFormed()
	{
        $this->sut=new AulaTopicItem();
		$this->assertEquals(1, sizeof($this->sut));
	}

    public function test_construct_withValues_wellFormed()
    {
        $this->sut=new AulaTopicItem("course name","course short name");
        $this->assertEquals("course name", $this->sut->getTitle());
        $this->assertEquals("course short name", $this->sut->getShortName());
    }

    public function test_setCategories_withValues_saveCategories()
    {
        $this->sut=new AulaTopicItem("course name","course short name");
        $dummy=array("aula-taxonomy" => array(0,8));
        $this->sut->setCategories($dummy);

        $this->assertEquals($dummy, $this->sut->getCategories());
    }


    function providerSummaries() {
        return array(
            array("this is a sample of the summary", "this is a sample of the summary"),
            array("this is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdfthis is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf asdf",
                "this is a sample of the summary asdfsad asdfsadf asdf asdf asdf sdadf asdf asdf asdf sadfs a dfasdf sadfasd asdf asdf as..."),
            array("", "")
        );
    }

    /**
     * @dataProvider providerSummaries
     */
    public function test_getDescriptionSummary_standart_string($summary, $expected_value)
    {
        $this->sut=new AulaTopicItem("course name","course short name",$summary);
        $this->assertEquals($expected_value, $this->sut->getDescriptionSummary());
    }


}
?>