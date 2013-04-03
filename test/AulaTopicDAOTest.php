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
        $this->sut=new AulaTopicDAO(new AulaTopicItem());
        _load_course_dummy_post();
    }


	public function test_getTopicsFromCourseId_dummy_arrayOfTopics()
	{
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

    public function test_getItem_1_topicObject()
    {
        $actual = AulaTopicDAO::getItem(1111);
        $expected = TestHelper::getMockedAulaTopic();
        $this->assertEquals($expected->toJson(), $actual->toJson());
    }





}
?>