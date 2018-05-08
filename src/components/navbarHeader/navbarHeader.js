import angular from 'angular';
import appName from '../../app';
import template from './navbarHeader.html';

const name = 'navbarHeader';

angular
    .module(appName)
    .component(name, {
        template
    });

export default name;