<?php
/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/30/13
 * Time: 9:49 AM
 * To change this template use File | Settings | File Templates.
 */

interface IAulaBaseItem {

    public function getDescriptionSummary();
    public function save();
    public function delete();

}