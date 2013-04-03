<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/2/13
 * Time: 1:15 PM
 * To change this template use File | Settings | File Templates.
 */
//header('Cache-Control: no-cache, must-revalidate');
//header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/x-www-form-urlencoded');

require_once("../lib/dao/AulaTopicDAO.class.php");


$method = $_SERVER['REQUEST_METHOD'];

if ($method=="POST") {
//    $data = json_decode(file_get_contents("php://input"));
    $data_no_decode = file_get_contents("php://input");
    echo $data->name;
}

    $aulaTopicDAO = new AulaTopicDAO(new AulaTopicItem());
    $topicsAsJson = true;
    $topicsFromCourseJson = $aulaTopicDAO->getTopicsFromCourseId($_GET['c'], $topicsAsJson);
    $topicsJsonVar=array( "topics" => $topicsFromCourseJson, "courseId" => $_GET['c']);
    echo json_encode($topicsJsonVar);


