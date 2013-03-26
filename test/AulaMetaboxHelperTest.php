<?php
//require_once 'PHPUnit/Framework.php';

require_once(dirname(__FILE__) . '/mockpress/mockpress.php');
require_once('../lib/AulaMetaboxHelper.class.php');

class AulaMetaboxHelperTest extends PHPUnit_Framework_TestCase
{
    public $sut;

    function setUp() {
        _reset_wp();
        $_SERVER = array();
        $this->sut=new AulaMetaboxHelper();
    }


	public function test_construct_empty_wellFormed()
	{
        global $wp_test_expectations;
		$this->assertEquals(1, sizeof($this->sut));
	}

    public function test_render_meta_box_content_withValues_wellFormed()
    {
        $this->assertEquals(null, $this->sut->render_meta_box_content());
    }

}
?>