import angular from 'angular';
import {VIEWS} from '../../../constant';
import appName from '../../../module';
import template from './group.html';

const name = VIEWS.group;

function controller(){

}

angular
    .module(appName)
    .component(name, {
        template,
        controller,
        controllerAs: 'self'
    })


export default name;