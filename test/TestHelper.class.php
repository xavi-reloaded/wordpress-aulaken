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
        $aulaTopicItem = new AulaTopicItem($title,"","A nice content for the item");
        $aulaTopicItem->setId($id);

        $actitivyItem1 = new AulaActivityItem('Assignment','','The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.');
        $actitivyItem1->setPix('assignment.png');
        $actitivyItem1->setId(5555);
        $actitivyItem2 = new AulaActivityItem('Assignment','','An other fliping content for you');
        $actitivyItem2->setPix('assignment.png');
        $actitivyItem2->setId(6666);
        $aulaTopicItem->setChildActivities('[1111,2222]');
        $aulaTopicItem->setAulaActivityItemArray(array($actitivyItem1,$actitivyItem2));


        return $aulaTopicItem;
    }

}