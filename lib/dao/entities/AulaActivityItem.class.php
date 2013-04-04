<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/2/13
 * Time: 2:23 PM
 * To change this template use File | Settings | File Templates.
 */

require_once(dirname(__FILE__) . '/AulaBaseItem.class.php');

class AulaActivityItem extends AulaBaseItem
{
    public $pix;

    public function getPostType()
    {
        return "aula-activity";
    }

    public function getCommentStatus()
    {
        // TODO: Implement getCommentStatus() method.
    }

    public function getObjectItem()
    {
        return new AulaActivityItem();
    }

    public function getMetadataArray($meta = array())
    {
        $this->meta = $meta;
        $this->meta['pix'] = $this->pix;
        return $this->meta;
    }

    public function getAbout()
    {
        return "";
    }

    public function toJson()
    {
        $json = array(
            'id' => $this->getId(),
            'title' => $this->getTitle(),
            'pix' => $this->getPix(),
            'content' => $this->getSummary()
        );
        return $json;
    }

    public function setPix($pix)
    {
        $this->pix = $pix;
    }

    public function getPix()
    {
        return $this->pix;
    }
}