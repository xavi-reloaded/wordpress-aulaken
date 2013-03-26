<?php
//require_once 'PHPUnit/Framework.php';


require_once('../includes/fakePost.class.php');

class FakePostTest extends PHPUnit_Framework_TestCase
{

	public function test_construct_empty_wellFormed()
	{
        $fixture=new FakePost();

		$this->assertEquals(1, sizeof($fixture));
		$this->assertEquals(1, sizeof($fixture->date));
		$this->assertEquals("post", $fixture->post_type);
	}

    public function test_construct_withValues_wellFormed()
    {
        $fixture=new FakePost(22,"potrenger","titulainen");

        $this->assertEquals(1, sizeof($fixture));
        $this->assertEquals("potrenger", $fixture->post_type);
        $this->assertEquals("titulainen", $fixture->post_title);
    }
}
?>