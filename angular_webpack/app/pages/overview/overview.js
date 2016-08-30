import angular                  from 'angular';
import overviewComponent        from './overview.component';
import OverviewMsgComponent     from '../overview-msg/overview-msg';
import TodoService              from '../../services/todo.service';

let overviewModule = angular.module('overview', [OverviewMsgComponent.name])
    .component('overview', overviewComponent)
    .factory('TodoService', TodoService);

export default overviewModule;
