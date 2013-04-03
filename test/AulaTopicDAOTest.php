<?php
//require_once 'PHPUnit/Framework.php';

require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../lib/dao/AulaTopicDAO.class.php');
require_once('../lib/dao/entities/AulaTopicItem.class.php');

class AulaTopicDAOTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        $_SERVER = array();
        $this->sut=new AulaTopicDAO(new AulaTopicItem());
    }


	public function test_getTopicsFromCourseId_dummy_arrayOfTopics()
	{
        global $wp_test_expectations;
        $actual = $this->sut->getTopicsFromCourseId(1);
        $expected = $this->getDummyTopicsArray();



		$this->assertEquals($expected, $actual);
	}

    private function getDummyTopicsArray()
    {
        $topicsJson=array();
        $activities = array (
            array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'),
            array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'An other fliping content for you')
        );
        $aulaTopicItem=new AulaTopicItem("Sample Json Response");
        $aulaTopicItem->setId(1);
        $aulaTopicItem->setActivities($activities);

        $aulaTopicItem2=new AulaTopicItem("Sample Json Response 2");
        $aulaTopicItem2->setId(2222);
        $aulaTopicItem2->setActivities($activities);

        array_push($topicsJson,$aulaTopicItem->toJson());
        array_push($topicsJson,$aulaTopicItem2->toJson());

        return $topicsJson;
    }



}
?>