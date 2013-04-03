<?php
require_once(dirname(__FILE__) . '/../helper/AulaHelper.class.php');
require_once(dirname(__FILE__) . '/entities/AulaTopicItem.class.php');
require_once(dirname(__FILE__) . '/AulaBaseDAO.class.php');

/**
* Created by JetBrains PhpStorm.
* User: fjhidalgo
* Date: 2/06/12
* Time: 12:54
* To change this template use File | Settings | File Templates.
*/
class AulaTopicDAO extends AulaBaseDAO
{

    public function getTopicsFromCourseId($id)
    {
        return "mierder";

    }

    public static function getItem($id, $customPostName = null, $post_meta_name = null)
    {
        // TODO: Implement getItem() method.
    }

    public static function getItemById($id)
    {
        // TODO: Implement getItemById() method.
    }
}