import angular                  from 'angular';
import overviewMsgComponent     from './overview-msg.component';


let overviewMsgModule = angular.module('overview-msg', [])
    .component('overviewMsg', overviewMsgComponent);

export default overviewMsgModule;
