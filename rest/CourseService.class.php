<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/4/13
 * Time: 9:53 AM
 * To change this template use File | Settings | File Templates.
 */
require_once('BaseAulaService.class.php');

class CourseService extends BaseAulaService {


    public function setAulaElement($presentationModelFromJson)
    {
        $topicIdsSaved = $this->aulaTopicDAO->updateTopicsFromJson($presentationModelFromJson);
        $courseId = $this->aulaCourseDAO->getCourseIdFromJson($presentationModelFromJson);
        if ($courseId==-1) $this->throwError(101);
        $savedId = $this->aulaCourseDAO->updateTopicArrayById($courseId,$topicIdsSaved);
        if ($savedId==null) $this->throwError(101);
        return $savedId;
    }

    public function getJsonAulaElement($id)
    {
        $topicsAsJson = true;
        $topicsFromCourseJson = $this->aulaTopicDAO->getTopicsFromCourseId($id, $topicsAsJson);
        $topicsJsonVar = array("topics" => $topicsFromCourseJson, "courseId" => $id);
        return json_encode($topicsJsonVar);
    }
}