<?php
require_once(dirname(__FILE__) . '/../helper/AulaHelper.class.php');
require_once(dirname(__FILE__) . '/entities/AulaActivityItem.class.php');
require_once(dirname(__FILE__) . '/AulaBaseDAO.class.php');
require_once(dirname(__FILE__) . '/AulaTopicDAO.class.php');

/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 2/06/12
 * Time: 12:54
 * To change this template use File | Settings | File Templates.
 */
class AulaActivityDAO extends AulaBaseDAO
{
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

        $item = new AulaActivityItem();

        $item->setId($post->ID);
        $item->setTitle($post->post_title);
        $item->setSummary( $post->post_content );
        $item->setDate($post->post_date);
        $item->setCategories($category_ids);
        $item->setOrder($post->menu_order);
        $item->_post_name   = $post->post_name;

        $meta = get_post_meta($post->ID);
        AulaHelper::processPostMeta($meta,$item);

        return $item;
    }

    public function getActivitiesFromTopicId($id, $topicsAsJson = false)
    {
        $activitiesFromTopics = array();
        $topic = AulaTopicDAO::getItem($id);
        if ($topic==null) return $activitiesFromTopics;
        $childActivities = $topic->getChildActivities();
        if ($childActivities==null) return $activitiesFromTopics;
        foreach (json_decode($childActivities) as $activityId )
        {
            $toJson = ($topicsAsJson) ? $this->getItem($activityId)->toJson() : $this->getItem($activityId);
            array_push($activitiesFromTopics, $toJson);
        }
        return $activitiesFromTopics;



    }

    public function updateActivitiesFromJson($json)
    {
        $activitiesId = array();
        $ActivityItems = $this->getActivityItemsFromJson($json);
        foreach ($ActivityItems as $ActivityItem) {
            $idSaved = $ActivityItem->save();
            array_push($activitiesId,$idSaved);
        }
        return $activitiesId;
    }

    public function getActivityItemsFromJson($json)
    {

        $activityItemList = array();
        $jsonDecode = json_decode($json);
        if (!isset($jsonDecode->form->topics))
        {
            return $activityItemList;
        }
        $topics = $jsonDecode->form->topics ;

        foreach ($topics as $topic)
        {
            if (isset($topic->activities))
            {
                foreach ($topic->activities as $activity) {
                    $aulaActivityItem = new AulaActivityItem($activity->title,'',$activity->content);
                    $aulaActivityItem->setPix($activity->pix);
                    $aulaActivityItem->setId($activity->id);
                    array_push($activityItemList,$aulaActivityItem);
                }
            }
        }
            return $activityItemList;
        }
    }