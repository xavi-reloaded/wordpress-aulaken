<?php
/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 4/2/13
 * Time: 1:15 PM
 * To change this template use File | Settings | File Templates.
 */

$this->sut=new AulaTopicItem();
$json = $this->sut->toJson();
echo json_encode($json);

//echo "[
//    {id:1,title:'A topic to learn wraks',summary:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.',
//        activities:[ {title:'Assignment',pix:'assignment.png',content:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'}]
//    },
//    {id:2,title:'A topic to learn wraks',summary:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.',
//        activities:[ {title:'Assignment',pix:'assignment.png',content:'The assignment activity module enables a teacher to communicate tasks, collect work and provide grades and feedback.'}]
//    } ]
//    ";