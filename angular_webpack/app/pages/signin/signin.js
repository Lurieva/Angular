import angular                  from 'angular';
import signinComponent          from './signin.component';


let signinModule = angular.module('signin', [])

    .component('signin', signinComponent)

export default signinModule;
