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
    public $activities = array();


    public function setActivities($activities)
    {
        $this->activities = $activities;
    }

    public function getActivities()
    {
        return $this->activities;
    }



    public function getPostType()
    {
        return "aula-topic";
    }

    public function getCommentStatus()
    {
        return "closed";
    }

    public function getObjectItem()
    {
        return new AulaTopicItem();
    }

    public function getMetadataArray($meta = array())
    {
        // TODO: Implement getMetadataArray() method.
    }

    public function getAbout()
    {
        // TODO: Implement getAbout() method.
    }

    public function toJson()
    {
        $json = array(
            'id' => $this->getId(),
            'title' => $this->getTitle(),
            'summary' => $this->getSummary(),
            'activities' => $this->getActivities()
        );

        return $json;
    }
}