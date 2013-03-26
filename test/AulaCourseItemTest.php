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

    public function test_setCategories_withValues_saveCategories()
    {
        $this->sut=new AulaCourseItem("course name","course short name");
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
        $this->sut=new AulaCourseItem("course name","course short name",$summary);
        $this->assertEquals($expected_value, $this->sut->getDescriptionSummary());
    }


}
?>