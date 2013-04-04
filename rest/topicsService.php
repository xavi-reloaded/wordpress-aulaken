<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/2/13
 * Time: 1:15 PM
 * To change this template use File | Settings | File Templates.
 */
require_once("CourseService.class.php");


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$courseService = new CourseService();

if ($_SERVER['REQUEST_METHOD']=="POST") {
    $json = file_get_contents("php://input");
    $savedId = $courseService->setAulaElement($json);
}

if ($_SERVER['REQUEST_METHOD']=="DELETE") {
    $json = file_get_contents("php://input");
    $courseService->deleteAulaItemById($_GET['c']);
}
if ($_SERVER['REQUEST_METHOD']=="GET") {
    $savedId = $_GET['c'];
}
if (isset($savedId)) {
    $response = $courseService->getJsonAulaElement($savedId);
    echo $response;
}





