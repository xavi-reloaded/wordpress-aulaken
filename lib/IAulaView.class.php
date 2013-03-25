<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 29/05/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
interface IAulaView
{
    public function saveCourse($title);

    public function get_default_term();

}
