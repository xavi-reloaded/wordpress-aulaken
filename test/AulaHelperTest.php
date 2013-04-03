<?php
//require_once 'PHPUnit/Framework.php';

require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../lib/helper/AulaHelper.class.php');
require_once('../lib/dao/entities/AulaCourseItem.class.php');

class AulaHelperTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        $_SERVER = array();
        $this->sut=new AulaHelper();
    }


	public function test_construct_empty_wellFormed()
	{
        global $wp_test_expectations;
		$this->assertEquals(1, sizeof($this->sut));
	}

    public function test_getTermIdArrayFromCategory_realCase_mustReturnAnArrayOfValuesWithout0()
    {
        $category = array("aula-taxonomy" => array(0=>0,1=>8,2=>9));
        $actual = AulaHelper::getTermIdArrayFromCategory($category);
        $this->assertEquals(array(8,9),$actual );
    }

    public function test_processPostMeta_easyEntryWithPairsKeyValue()
    {
        $obj = new AulaCourseItem();
        $meta = array("format" => "string", "child_topics" => "[yeja]");
        AulaHelper::processPostMeta($meta, $obj);
        $this->assertEquals('[yeja]',$obj->getChildTopics() );

        $meta = array("format" => array("string"), "child_topics" => array("[yeja]"));
        AulaHelper::processPostMeta($meta, $obj);
        $this->assertEquals('[yeja]',$obj->getChildTopics() );


    }


}
?>