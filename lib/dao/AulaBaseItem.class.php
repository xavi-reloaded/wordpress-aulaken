<?php
/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/30/13
 * Time: 9:37 AM
 * To change this template use File | Settings | File Templates.
 */

require_once(dirname(__FILE__) . '/IAulaBaseItem.class.php');
require_once(dirname(__FILE__) . '/../helper/AulaHelper.class.php');

abstract class AulaBaseItem implements IAulaBaseItem {

    private $id_number;                  // course id number
    private $title;                      // course full name
    private $shortname;                  // course short name
    private $summary;                    // course summary
    private $categories;                 // course categories

    function __construct($title="",$shortname="",$summary="")
    {
        $this->title = $title;
        $this->shortname = $shortname;
        $this->summary = $summary;
        $this->categories = array();
    }

    public function getDescriptionSummary() {
        $no_line_breaks       = str_replace(array("\r", "\n", "\r\n"), ' ', ($this->getSummary()));
        $description_summary  = substr($no_line_breaks, 0, 120);
        $description_summary .= (AulaHelper::string_length($no_line_breaks) > 120)? '...' : '';
        return $description_summary;
    }



    public function setCategories($categories) { $this->categories = $categories; }

    public function getCategories() { return $this->categories; }

    public function setSummary($description) { $this->summary = $description; }

    public function getSummary() { return $this->summary; }

    public function setTitle($title){$this->title = $title;}

    public function getTitle(){return $this->title;}

    public function getShortName(){return $this->shortname;}

    public function setShortname($shortname){$this->shortname=$shortname;}





}