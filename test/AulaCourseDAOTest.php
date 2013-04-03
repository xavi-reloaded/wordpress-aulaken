<?php
//require_once 'PHPUnit/Framework.php';

require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../lib/dao/AulaCourseDAO.class.php');
require_once('TestHelper.class.php');

class AulaCourseDAOTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        _load_course_dummy_post();

        $_SERVER = array();
        $this->sut=new AulaCourseDAO(new AulaCourseItem());
    }


	public function test_getItem_1_courseObject()
	{
        $actual = AulaCourseDAO::getItem(1);
        $expected = 1;
        $this->assertEquals($expected, $actual->getId());
        $this->assertEquals(new AulaCourseItem(), $actual->getObjectItem());
	}

    public function test_getChildTopics_1_arrayWithTopics()
    {
        $courseItem = AulaCourseDAO::getItem(1);
        $actual = $courseItem->getChildTopics();

        $this->assertTrue(is_array($actual));

        $expected = array(1111,2222);
        $this->assertEquals($expected,$actual);

    }
}
?>