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


}
?>