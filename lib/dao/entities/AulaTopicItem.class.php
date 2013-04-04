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
    public $child_activities;
    public $aulaActivityItemArray = array();


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
        $this->meta = $meta;
        $this->meta['child_activities'] = $this->child_activities;
        return $this->meta;
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
            'activities' => $this->getAulaActivityItemArray()
        );
        return $json;
    }

    public function getAulaActivityItemArray()
    {
        if ($this->getChildActivities()==null) return array();
        $resultJsonArray = array();
        foreach ($this->aulaActivityItemArray as $itemActivity) {
            array_push($resultJsonArray, $itemActivity->toJson());
        }
        return $resultJsonArray;
    }

    public function setAulaActivityItemArray($aulaActivityItemArray)
    {
        $this->aulaActivityItemArray = $aulaActivityItemArray;
    }

    public function getChildActivities()
    {
        return $this->child_activities;
    }

    public function setChildActivities($child_activities)
    {
        $this->child_activities = $child_activities;
    }
}