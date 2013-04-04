<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/4/13
 * Time: 9:43 AM
 * To change this template use File | Settings | File Templates.
 */

interface IAulaService {

    public function setAulaElement($presentationModelFromJson);
    public function getJsonAulaElement($id);
    public function throwError($errorCode, $message = "General Error Ocurred");

}