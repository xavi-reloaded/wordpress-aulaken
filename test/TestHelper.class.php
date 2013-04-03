<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/3/13
 * Time: 11:44 AM
 * To change this template use File | Settings | File Templates.
 */

require_once('../lib/dao/entities/AulaTopicItem.class.php');

class TestHelper {

    public static function getDummyTopicsArrayJson()
    {
        $topicsJson=array();

        $aulaTopicItem = self::getMockedAulaTopic(1111,"Sample Json Response");
        $aulaTopicItem2 = self::getMockedAulaTopic(2222,"Sample Json Response 2");

        array_push($topicsJson,$aulaTopicItem->toJson());
        array_push($topicsJson,$aulaTopicItem2->toJson());

        return $topicsJson;
    }

    /**
     * @param $activities
     * @return AulaTopicItem
     */
    public static function getMockedAulaTopic($id = 1111,$title="Sample Json Response")
    {
        $activities = array (
            array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'),
            array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'An other fliping content for you')
        );
        $aulaTopicItem = new AulaTopicItem($title);
        $aulaTopicItem->setId($id);
        $aulaTopicItem->setActivities($activities);
        return $aulaTopicItem;
    }

}