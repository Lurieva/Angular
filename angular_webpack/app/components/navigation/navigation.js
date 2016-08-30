import angular              from 'angular';
import NavigationComponent  from './navigation.component';

let navigationModule = angular.module('navigation', [])

    .component('navigation', NavigationComponent);

export default navigationModule;