import angular from 'angular';
import appName from '../../app';
import template from './app.template.html';
// const template = '';
import './app.css';
// const template = require('html-loader!./app.template.html');


const name = 'app';

function controller() {
    let self = this;

    
}



angular
    .module(appName)
    .component(name, {
        bindings: {},
        template,
        controller,
        controllerAs: 'self'
    })

export default name;