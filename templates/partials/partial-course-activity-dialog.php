<?php
/**
 * Created by JetBrains PhpStorm.
 * User: xavi
 * Date: 3/29/13
 * Time: 5:20 PM
 * To change this template use File | Settings | File Templates.
 */
?>
<div class="modal-header">
    <h3>Topic</h3>
</div>

{{form.activities}}


<tabs>
    <pane heading="<?php _e('Topic'); ?>">

        <div>
            <label for="topicname">Name</label>
            <input type="text" ng-model="form.name" id="topicname" required/>
        </div>
        <div>
            <label for="topicsummary">Summary</label>
            <textarea ng-model="form.summary" id="topicsummary" required></textarea>
        </div>


    </pane>

    <pane heading="<?php _e('Activities'); ?>">

        <table class="table">

            <tr ng-repeat="activity in form.activities" >
                <td><img src="angular/app/img/l/{{activity.pix}}"></td>
                <td>{{activity.title}}</td>
                <td><button ng-click="removeActivity(activity)" class="btn btn-small btn-danger text-left">X</button>
                    <button popover-placement="bottom" popover="{{activity.content}}" class="btn btn-small btn-info text-right">?</button>
                </td>
            </tr>

        </table>

    </pane>

    <pane heading="<?php _e('Success Workflow'); ?>">
        <ul ui-sortable ng-model="list">
            <li ng-repeat="item in list" class="item">{{item}}</li>
        </ul>
        <hr />
        <div ng-repeat="item in list">{{item}}</div>
    </pane>

    <pane heading="<?php _e('Settings'); ?>">

    </pane>
    <!--        <pane ng-repeat="pane in panes" heading="{{pane.title}}" active="pane.active">{{pane.templateUrl}}</pane>-->
</tabs>




<div class="modal-footer">
    <button class="btn btn-primary" ng-click="cancel()" ng-disabled="isCancelDisabled()">Cancel</button>
    <button class="btn btn-primary" ng-click="save()" ng-disabled="isSaveDisabled()">Save</button>
    <button class="btn btn-success" ng-click="openDialog()">Add Activity or Resource</button>
</div>