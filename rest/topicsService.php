<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/2/13
 * Time: 1:15 PM
 * To change this template use File | Settings | File Templates.
 */
require_once("../lib/dao/AulaTopicItem.class.php");

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$topicsJson=array();

$activities = array (
    array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'),
    array('title' => 'Assignment', 'pix'=>'assignment.png', 'content'=>'An other fliping content for you')
);

$aulaTopicItem=new AulaTopicItem("Sample Json Response");
$aulaTopicItem->setId(1);
$aulaTopicItem->setActivities($activities);

$aulaTopicItem2=new AulaTopicItem("Sample Json Response 2");
$aulaTopicItem2->setId(2222);
$aulaTopicItem2->setActivities($activities);


array_push($topicsJson,$aulaTopicItem->toJson());
array_push($topicsJson,$aulaTopicItem2->toJson());

$topicsJsonVar=array( "topics" => $topicsJson);

echo json_encode($topicsJsonVar);


//// the good one below here !
//echo '
//{
//    "topics":[{
//                "id":1,
//                "title":"Sample Json Response",
//                "summary":"",
//                "activities":[
//                    {"title":"Assignment","pix":"assignment.png","content":"The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback."},
//                    {"title":"Assignment","pix":"assignment.png","content":"An other fliping content for you"}]
//            }]
//}';
