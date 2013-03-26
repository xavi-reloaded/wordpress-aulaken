<?php
//require_once 'PHPUnit/Framework.php';

require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../lib/AulaCourseItem.class.php');

class AulaCourseItemTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        $_SERVER = array();

    }


	public function test_construct_empty_wellFormed()
	{
        global $wp_test_expectations;
        $this->sut=new AulaCourseItem();
		$this->assertEquals(1, sizeof($this->sut));
	}

    public function test_construct_withValues_wellFormed()
    {
        $this->sut=new AulaCourseItem("course name","course short name");
        $this->assertEquals("course name", $this->sut->getTitle());
        $this->assertEquals("course short name", $this->sut->getShortName());
    }
}
?>