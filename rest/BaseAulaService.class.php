<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/4/13
 * Time: 9:49 AM
 * To change this template use File | Settings | File Templates.
 */


require_once("../lib/dao/AulaTopicDAO.class.php");
require_once("../lib/dao/AulaCourseDAO.class.php");
require_once("../lib/dao/AulaActivityDAO.class.php");
require_once("IAulaService.php");

abstract class BaseAulaService implements IAulaService {

    protected $aulaTopicDAO;
    protected $aulaCourseDAO;
    private $isTest;

    function __construct($isTest = false)
    {
        $this->isTest = $isTest;
        if (!$this->isTest) require_once("../../../../wp-load.php");
        $this->aulaTopicDAO  = new AulaTopicDAO(new AulaTopicItem());
        $this->aulaCourseDAO = new AulaCourseDAO(new AulaCourseItem());
    }

    public function throwError($errorCode, $message = "General Error Ocurred")
    {
        $error = array( "error" => $errorCode,
                        "detail" => array (
                                "messageError" => $message,
                                "detailedMessage" => "El condesador de Fluzo se ha jodido irremediablemente y vamos a morir")
        );
        echo json_encode($error);
        if (!$this->isTest) die();
        return json_encode($error);
    }
}