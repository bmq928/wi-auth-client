import angular from 'angular';
import appName from '../../module';
import template from './app.html';
import { VIEWS } from '../../constant'
import './app.css';

import '../sidebar/sidebar';


const name = 'app';

function controller() {
    let self = this;
    self.$onInit = function(){
        console.log('int')
        preProcess();
        init();
    }

    self.changeView = function (){
        console.log('nah');
    }


    function preProcess() {
        self.curView = VIEWS.user;
    }

    function init() {
        self.curView = decideView() || self.curView;
        console.log(self);
    }

}


function decideView() {
    let hash = location.hash;

    return hash.substring(hash.indexOf('/') + 1);
}



angular
    .module(appName)
    .component(name, {
        // bindings: {},
        template,
        controller,
        controllerAs: 'self'
    })

export default name;