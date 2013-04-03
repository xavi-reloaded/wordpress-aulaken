<?php
require_once(dirname(__FILE__) . '/../helper/AulaHelper.class.php');
require_once(dirname(__FILE__) . '/entities/AulaTopicItem.class.php');
require_once(dirname(__FILE__) . '/entities/AulaActivityItem.class.php');
require_once(dirname(__FILE__) . '/AulaBaseDAO.class.php');
require_once(dirname(__FILE__) . '/AulaCourseDAO.class.php');


/**
* Created by JetBrains PhpStorm.
* User: fjhidalgo
* Date: 2/06/12
* Time: 12:54
* To change this template use File | Settings | File Templates.
*/
class AulaTopicDAO extends AulaBaseDAO
{

    public function getTopicsFromCourseId($id, $topicsAsJson = false)
    {
        $topicsFromCourse = array();
        $course = AulaCourseDAO::getItem($id);
        $childTopics = $course->getChildTopics();
        foreach (json_decode($childTopics) as $topicId ) {
            $toJson = ($topicsAsJson) ? $this->getItem($topicId)->toJson() : $this->getItem($topicId);
            array_push($topicsFromCourse, $toJson);
        }
        return $topicsFromCourse;

    }

    public function getTopicItemsFromJson($json)
    {
        $topicItemList = array();


        $jsonDecode = json_decode($json);

        if (!isset($jsonDecode->form->topics))
        {
            return $topicItemList;
        }

        $topics = $jsonDecode->form->topics ;

        foreach ($topics as $topic)
        {
            $aulaTopicItem = new AulaTopicItem($topic->title, '', $topic->summary);
            $aulaTopicItem->setId($topic->id);
            $activityItemList = array();
            foreach ($topic->activities as $activity) {
                $aulaActivityItem = new AulaActivityItem($activity->title,'',$activity->content);
                $aulaActivityItem->setPix($activity->pix);
                array_push($activityItemList,$aulaActivityItem);
            }
            $aulaTopicItem->setActivities($activityItemList);
            array_push($topicItemList, $aulaTopicItem);
        }


        return $topicItemList;
    }



    public static function getItem($id)
    {
        $post = get_post($id);
        if ($post == false) {
            return null;
        }

        $category_ids = array();
        $aulaTaxonomy = "aula-taxonomy";

        $terms = get_the_terms($post->ID, $aulaTaxonomy);
        if (is_array($terms)) {
            foreach ($terms as $term) {
                $category_ids[$term->term_id] = $term->name;
            }
        }

        $item = new AulaTopicItem();

        $item->setId($post->ID);
        $item->setTitle($post->post_title);
        $item->getSummary( $post->post_content );
        $item->setDate($post->post_date);
        $item->setCategories($category_ids);
        $item->setOrder($post->menu_order);
        $item->_post_name   = $post->post_name;

        $meta = get_post_meta($post->ID);
        AulaHelper::processPostMeta($meta,$item);

        return $item;
    }

    public function updateTopicsFromJson($json)
    {
        $topicsId = array();
        $topicItems = $this->getTopicItemsFromJson($json);
        foreach ($topicItems as $topicItem) {
            $idSaved = $topicItem->save();
            array_push($topicsId,$idSaved);
        }
        return $topicsId;
    }




}