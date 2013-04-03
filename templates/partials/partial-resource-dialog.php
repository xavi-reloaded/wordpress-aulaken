<?php
require_once('../../../../../wp-load.php');
require_once('../../lib/Aula.class.php');
$aula=new Aula();
?>

<div class="modal-header">
    <h2>Add an Activity or Resource</h2>
</div>


<tabs>
    <pane heading="Activities">
        <apiumac close-others="oneAtATime">
            <apiumac-group ng-repeat="activity in activities">
                <apiumac-heading>
                    <img src="<?=$aula->urls['img-activities']?>/{{activity.pix}}">
                    <span>{{activity.title}}</span>
                    <button ng-click="close(activity)" class="btn btn-small" >Add</button>
                </apiumac-heading>
                {{activity.content}}
            </apiumac-group>
        </apiumac>
    </pane>

    <pane heading="Resources">
        <apiumac close-others="oneAtATime">
            <apiumac-group ng-repeat="resource in resources">
                <apiumac-heading>
                    <img src="<?=$aula->urls['img-activities']?>/{{resource.pix}}">
                    {{resource.title}}
                    <button ng-click="close(resource)" class="btn btn-small left" >Add</button>
                </apiumac-heading>
                {{resource.content}}
            </apiumac-group>
        </apiumac>
    </pane>
</tabs>

<div class="modal-footer">
    <button ng-click="close()" class="btn btn-primary" >Close</button>
</div>