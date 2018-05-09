import angular from 'angular';
import appName from '../../module';
import template from './sidebar.html';
import {APP_TITLE} from '../../constant';


const name = 'sidebar';

function controller() {

    let self = this;

    self.call = function(){console.log(self.curView)}

    self.$onInit = function(){
        preProcess();
        init();

        console.log(self.curView);
        console.log(self.changeView);
        console.log(self);
    }

    function preProcess() {
        self.title = APP_TITLE;

    }

    function init() {
    }   

    
}

angular
    .module(appName)
    .component(name, {
        template,    
        bindings: {
            curView: '<',
            changeView: '<'
        }, 
        controller,
        controllerAs: 'self',
        
    })


export default name;