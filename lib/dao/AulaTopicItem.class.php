<?php
/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/30/13
 * Time: 9:35 AM
 * To change this template use File | Settings | File Templates.
 */


require_once(dirname(__FILE__) . '/AulaBaseItem.class.php');

class AulaTopicItem extends AulaBaseItem
{

    public function getPostType()
    {
        return "aula-topic";
    }

    public function getCommentStatus()
    {
        return "closed";
    }
}