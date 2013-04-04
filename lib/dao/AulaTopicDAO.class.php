<?php
require_once(dirname(__FILE__) . '/../helper/AulaHelper.class.php');
require_once(dirname(__FILE__) . '/entities/AulaTopicItem.class.php');
require_once(dirname(__FILE__) . '/entities/AulaActivityItem.class.php');
require_once(dirname(__FILE__) . '/AulaBaseDAO.class.php');
require_once(dirname(__FILE__) . '/AulaCourseDAO.class.php');
require_once(dirname(__FILE__) . '/AulaActivityDAO.class.php');


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
        if ($course==null) return $topicsFromCourse;
        $childTopics = $course->getChildTopics();
        if ($childTopics==null) return $topicsFromCourse;
        foreach (json_decode($childTopics) as $topicId ) {
            $aulaTopicItem = $this->getItem($topicId);
            $childActivities = $aulaTopicItem->getChildActivities();
            $aulaActivityItemArray = array();
            if ($childActivities!=null) {
                foreach (json_decode($childActivities) as $activityId ) {
                    $aulaActivityDAO = new aulaActivityDAO(new AulaActivityItem());
                    $aulaActivityItem = $aulaActivityDAO->getItem($activityId);
                    array_push($aulaActivityItemArray,$aulaActivityItem);
                }
            }
            $aulaTopicItem->setAulaActivityItemArray($aulaActivityItemArray);
            $toJson = ($topicsAsJson) ? $aulaTopicItem->toJson() : $this->getItem($topicId);
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
            $aulaTopicItem->setChildActivities($activityItemList);
            array_push($topicItemList, $aulaTopicItem);
        }


        return $topicItemList;
    }


    public static function getItem($id, $withChilds = false)
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
        $item->setSummary( $post->post_content );
        $item->setDate($post->post_date);
        $item->setCategories($category_ids);
        $item->setOrder($post->menu_order);
        $item->_post_name   = $post->post_name;

        $meta = get_post_meta($post->ID);
        AulaHelper::processPostMeta($meta,$item);

        if ( $withChilds ) {
            $activitiesArray = $item->getChildActivities();
            if ($activitiesArray==null) return $item;
            $activityObjectArray = array();
            foreach (json_decode($activitiesArray) as $activityId) {
                array_push($activityObjectArray,AulaActivityDAO::getItem($activityId));
            }
            $item->setAulaActivityItemArray($activityObjectArray);
        }

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

    public function updateActivityArrayById($topicId, $activitiesIds = array())
    {
        $item = $this->getItem($topicId);
        if ($item==null) return $item;
        $item->setChildActivities(json_encode($activitiesIds));
        return $item->save();
    }


}