import angular from 'angular';
import appName from '../../app';
import template from './navbar.html';

const name = 'navbar';

function controller() {

}

angular
    .module(appName)
    .component(name, {
        template
    })

export default name;