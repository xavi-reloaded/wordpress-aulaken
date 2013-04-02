<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/2/13
 * Time: 2:23 PM
 * To change this template use File | Settings | File Templates.
 */

require_once(dirname(__FILE__) . '/AulaBaseItem.class.php');

class AulaActivityItem extends AulaBaseItem
{

    public function getPostType()
    {
        return "aula-activity";
    }

    public function getCommentStatus()
    {
        // TODO: Implement getCommentStatus() method.
    }

    public function getObjectItem()
    {
        return new AulaActivityItem();
    }

    public function getMetadataArray($meta = array())
    {
        // TODO: Implement getMetadataArray() method.
    }

    public function getAbout()
    {
        return "";
    }

    public function toJson()
    {
        // TODO: Implement toJson() method.
    }
}