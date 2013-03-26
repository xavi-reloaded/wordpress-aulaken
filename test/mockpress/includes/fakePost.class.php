<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 29/03/12
 * Time: 16:37
 * To change this template use File | Settings | File Templates.
 */
class FakePost
{
    public $ID;
    public $post_name;
    public $post_title;
    public $post_content;
    public $post_date;
    public $category_ids;
    public $menu_order;
    public $post_type;
    public $date;

    public function __construct($ID=1,$post_type="post",$post_title="post_title",$post_name="post_name",$post_content="post_content",$post_date="",$category_ids="category_ids",$menu_order=1)
    {
        $date=date('Y-m-d H:i:s', time());

        $this->ID=$ID;
        $this->post_title=$post_title;
        $this->post_content=$post_content;
        $this->post_date=$date;
        $this->category_ids=$category_ids;
        $this->menu_order=$menu_order;
        $this->post_name=$post_name;
        $this->post_type=$post_type;
        $this->date=$date;
    }



}

?>